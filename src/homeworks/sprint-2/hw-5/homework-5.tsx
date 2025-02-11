import MessageSender from './message-sender/MessageSender'
import { FriendMessage } from './friend-message/FriendMessage'
import avatar from './avatar.png'
import { UserMessage } from './user-message/UserMessage.tsx'

/*
 * 1 - описать тип Message
 * 2 - описать тип MessageProps в файле UserMessage.tsx
 * 3 - в файле UserMessage.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном (не проверяется тестами)
 * */

// нужно создать правильный тип вместо any
export type Message = any

// структуру объекта не менять
export const MESSAGE_0: Message = {
  id: 0,
  user: {
    avatar: avatar, // можно менять
    name: 'John Morris', // можно менять
  },
  message: {
    text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
    time: '22:00', // можно менять
  },
}
export const FRIEND_MESSAGE_0: Message = {
  id: 100,
  user: {
    avatar: avatar, // можно менять
    name: 'Friend Name', // можно менять
  },
  message: {
    text: 'зеркальное сообщение для тренировки css', // можно менять
    time: '22:00', // можно менять
  },
}

export const Homework5 = () => {
  return (
    <section id={'hw5'}>
      <h3>Homework 5</h3>
      <div>
        {/*проверка отображения (не менять)*/}
        <div>
          <UserMessage message={MESSAGE_0} />
          <FriendMessage message={FRIEND_MESSAGE_0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={UserMessage} />
      </div>
    </section>
  )
}
