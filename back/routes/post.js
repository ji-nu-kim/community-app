const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Post, User, Image, Comment, Report } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads폴더를 생성합니다');
  fs.mkdirSync('uploads');
}

const upload = multer({
  // 저장위치(현재: 서버 hdd, 미래: 인터넷 스토리지 서비스)
  storage: multer.diskStorage({
    // 저장될 폴더
    destination(req, file, done) {
      done(null, 'uploads');
    },
    // 저장될 파일명
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

// 프론트 input name="image"에서 올린 사진들이 upload.array('image')로 전달됨
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => {
  res.json(req.files.map(v => v.filename));
});

// 게시글 신고
router.post('/report', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.body.postId },
    });
    if (!post) {
      return res.status(404).send('게시글을 찾을 수 없습니다');
    }
    const report = await Report.create({
      reason: req.body.reason,
      reporter: req.body.reporter,
      reportedPerson: req.body.reportedPerson,
    });
    await report.addPosts(req.body.postId);
    return res.status(200).send('게시글 신고가 완료되었습니다');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 게시글 생성
router.post('/:communityId', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
      CommunityId: req.params.communityId,
    });

    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        // Promise.all로 비동기 요청을 한 번에 처리
        const images = await Promise.all(
          req.body.image.map(img => Image.create({ src: img }))
        );
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      attributes: ['id', 'content', 'createdAt', 'updatedAt'],
      include: [
        { model: Image },
        { model: User, attributes: ['id', 'nickname', 'profilePhoto'] },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname', 'profilePhoto'],
            },
          ],
        },
      ],
    });
    return res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 게시글 삭제
router.delete(
  '/community/:communityId/post/:postId',
  isLoggedIn,
  async (req, res, next) => {
    try {
      const post = await Post.findOne({
        where: { id: req.params.postId, CommunityId: req.params.communityId },
        include: { model: Comment },
      });
      if (!post) {
        return res.status(404).send('게시글이 존재하지 않습니다');
      }

      const commentIds = await post.Comments.map(comment => [comment.id, comment.UserId]);

      await Promise.all([
        commentIds.map(commentId =>
          Comment.destroy({
            where: {
              id: commentId[0],
              UserId: commentId[1],
            },
          })
        ),
        Post.destroy({
          where: {
            id: post.id,
            UserId: req.user.id,
            CommunityId: req.params.communityId,
          },
        }),
      ]);

      return res.status(200).json({ postId: parseInt(req.params.postId, 10) });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

// 게시글 수정
router.patch(
  '/community/:communityId/post/:postId',
  isLoggedIn,
  async (req, res, next) => {
    try {
      await Post.update(
        {
          content: req.body.content,
        },
        {
          where: {
            id: req.params.postId,
            UserId: req.user.id,
            CommunityId: req.params.communityId,
          },
        }
      );
      res.status(200).json({
        postId: parseInt(req.params.postId, 10),
        content: req.body.content,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

// 댓글 신고
router.post('/comment/report', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.body.postId },
    });
    if (!post) {
      return res.status(404).send('게시글을 찾을 수 없습니다');
    }
    const comment = await Comment.findOne({
      where: { id: req.body.commentId },
    });
    if (!comment) {
      return res.status(404).send('댓글을 찾을 수 없습니다');
    }
    const report = await Report.create({
      reason: req.body.reason,
      reporter: req.body.reporter,
      reportedPerson: req.body.reportedPerson,
    });
    await report.addComments(req.body.commentId);
    return res.status(200).send('게시글 신고가 완료되었습니다');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 댓글 생성
router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId, 10) },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다');
    }
    const comment = await Comment.create({
      content: req.body.comment,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      attributes: ['id', 'content', 'PostId'],
      include: [
        {
          model: User,
          attributes: ['id', 'nickname', 'profilePhoto'],
        },
      ],
    });
    return res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 댓글 수정
router.patch('/:postId/comment/:commentId', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId, 10) },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다');
    }
    await Comment.update(
      {
        content: req.body.content,
      },
      {
        where: {
          id: req.params.commentId,
          UserId: req.user.id,
          PostId: req.params.postId,
        },
      }
    );
    res.status(200).json({
      commentId: parseInt(req.params.commentId, 10),
      postId: parseInt(req.params.postId, 10),
      content: req.body.content,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 댓글 삭제
router.delete('/:postId/comment/:commentId', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId, 10) },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다');
    }
    await Comment.destroy({
      where: {
        id: parseInt(req.params.commentId, 10),
        UserId: req.user.id,
        PostId: parseInt(req.params.postId, 10),
      },
    });
    return res.status(200).json({
      postId: parseInt(req.params.postId, 10),
      commentId: parseInt(req.params.commentId, 10),
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
