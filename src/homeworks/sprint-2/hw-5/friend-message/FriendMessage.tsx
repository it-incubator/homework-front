import React from 'react'
import s from './FriendMessage.module.css'

// создать тип вместо any и отобразить приходящие данные
export const FriendMessage = (props: any) => {
  return (
    <div id={'hw5-friend-message-' + props.message.id} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img
          alt="avatar"
          id={'hw5-friend-avatar-' + props.message.id}
          // создаёт студент
        />
        <div className={s.friendText}>
          <div id={'hw5-friend-name-' + props.message.id} className={s.friendName}>
            {/*создаёт студент*/}
          </div>
          <pre id={'hw5-friend-text-' + props.message.id} className={s.friendMessageText}>
            {/*создаёт студент*/}
          </pre>
        </div>
      </div>
      <div id={'hw5-friend-time-' + props.message.id} className={s.friendTime}>
        {/*создаёт студент*/}
      </div>
    </div>
  )
}
