type UserListProps = {
  users: any // 📝 add typing
  filterLosAngelesUsers: any // 📝 add typing
}

export const UserList = (props: UserListProps) => {
  return (
    <div id={'hw02-users'}>
      <button
        id={'hw02-filter-button'}
        // 📝 add onClick
      >
        Show me only users from Los Angeles 🌴
      </button>

      <ul>{/* 📝 отрендери список пользователей. В этот раз используй компонент UserItem */}</ul>
    </div>
  )
}
