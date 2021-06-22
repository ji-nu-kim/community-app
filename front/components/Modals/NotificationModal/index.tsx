import { INotice } from 'interfaces/db';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { ModalContainer, ModalExternal } from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { removeNotificationRequestAction } from 'actions/actionUser';

interface NotificationModalProps {
  setNotificationModal: Dispatch<SetStateAction<boolean>>;
  notices: INotice[] | undefined;
}

function NotificationModal({ setNotificationModal, notices }: NotificationModalProps) {
  const dispatch = useDispatch();
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const onMouseEnterListElem = useCallback(() => {
    setShowDeleteButton(true);
  }, []);

  const onMouseLeaveListElem = useCallback(() => {
    setShowDeleteButton(false);
  }, []);

  const onClickDelete = useCallback(
    (notificationId: number) => () => {
      return dispatch(removeNotificationRequestAction({ notificationId }));
    },
    []
  );

  const notificationModalTrigger = useCallback(() => {
    setNotificationModal(false);
  }, [setNotificationModal]);

  return (
    <ModalExternal onClick={notificationModalTrigger}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <div className="modal-body">
          <ul>
            {notices &&
              notices.length > 0 &&
              notices.map(notice => (
                <li
                  key={notice.id}
                  onMouseEnter={onMouseEnterListElem}
                  onMouseLeave={onMouseLeaveListElem}
                >
                  {notice.title} {moment(notice.createdAt).locale('ko').format('LLL')}
                  {showDeleteButton && (
                    <button className="delete-button" onClick={onClickDelete(notice.id)}>
                      삭제
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </ModalContainer>
    </ModalExternal>
  );
}

export default NotificationModal;
