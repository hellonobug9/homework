import React from 'react';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import './Message.scss';

const Message = ({ isMyMessage, message }) => {
  const messageClass = classNames('message-row', {
    'you-message': isMyMessage,
    'other-message': !isMyMessage
  });

  const { imageUrl, messageText, createdAt, imageAlt } = message;

  const imageThumbnail = isMyMessage ? null : (
    <img src={imageUrl} alt={imageAlt} />
  );

  return (
    <div className={messageClass}>
      <div className="message-content">
        {imageThumbnail}
        <Typography
          className="message-text"
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {messageText}
        </Typography>
        {/* <div className="message-text">{messageText}</div> */}
        <Typography
          className="message-time"
          color="textSecondary"
          display="inline"
          variant="body2"
        >
          {createdAt}
        </Typography>
        {/* <div className="message-time">{message.createdAt}</div> */}
      </div>
    </div>
  );
};

export default Message;
