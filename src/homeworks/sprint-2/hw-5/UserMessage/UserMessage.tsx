import s from './UserMessage.module.css'

// 📝 создать правильный тип вместо any
export type UserMessageProps = any

// 📝 отобразить приходящие данные
export const UserMessage = (props: UserMessageProps) => {
  return (
    <div id={'hw5-message-' + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          width="200"
          id={'hw5-avatar-' + props.message.id}
          src={props.message.user.avatar}
          alt={props.message.user.name}
        />
        <div className={s.text}>
          <div id={'hw5-name-' + props.message.id} className={s.name}>
            {/* 📝 имя пользователя */}
          </div>
          <pre id={'hw5-text-' + props.message.id} className={s.messageText}>
            {/* 📝 текст сообщения */}
          </pre>
        </div>
      </div>
      <div id={'hw5-time-' + props.message.id} className={s.time}>
        {/* 📝 время */}
      </div>
    </div>
  )
}
