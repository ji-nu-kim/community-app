import { CloseOutlined } from '@ant-design/icons';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { ModalContainer, ModalExternal } from './styles';

interface NotificationModalProps {
  setNotificationModal: Dispatch<SetStateAction<boolean>>;
}

function NotificationModal({ setNotificationModal }: NotificationModalProps) {
  const [showNotificationBody, setShowNotificationBody] = useState(false);

  const ShowNotificationBodyTrigger = useCallback(() => {
    setShowNotificationBody(prev => !prev);
  }, []);

  const notificationModalTrigger = useCallback(() => {
    setNotificationModal(false);
  }, [setNotificationModal]);

  // 가입신청하면 가입됐다는 알림 구현하기
  const text =
    '커뮤니티스타님께서 커뮤니티 가입신청을 하셨습니다. 가입을 승인하시려면 확인을 거절하시려면 취소를 눌러주세요';

  return (
    <ModalExternal onClick={notificationModalTrigger}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <div className="modal-body">
          <ul>
            <li key="one">
              <div className="notification-title">
                <div
                  className="title-text"
                  onClick={ShowNotificationBodyTrigger}
                >
                  {text.length > 20 ? `${text.slice(0, 20)}...` : text}
                </div>
                <div className="delete-button">
                  <CloseOutlined />
                </div>
              </div>
              {showNotificationBody && (
                <div className="notification-body">{text}</div>
              )}
            </li>
          </ul>
        </div>
      </ModalContainer>
    </ModalExternal>
  );
}

export default NotificationModal;
