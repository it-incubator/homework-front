type UserListProps = {
  // 📝 допишите типизацию
}

// 📝 удалите any
export const UserList = (props: any) => {
  return (
    <div id={'hw01-users'}>
      <ul>
        {props.users.map((user: any) => (
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{/* 📝 user name */}</strong> (Age: {/* 📝 user age */})<strong> Address:</strong>
            {/* 📝 street */}, {/* 📝 city */}
          </li>
        ))}
      </ul>
    </div>
  )
}
