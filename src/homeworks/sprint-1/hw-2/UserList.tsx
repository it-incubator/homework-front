type UserListProps = {
  users: any // 📝 добавьте типизацию
  filterLosAngelesUsers: any // 📝 добавьте типизацию
}

export const UserList = (props: UserListProps) => {
  return (
    <div id={'hw02-users'}>
      <button
        id={'hw02-filter-button'}
        // 📝 onClick
      >
        Show me only users from Los Angeles 🌴
      </button>

      <ul>{/* 📝 отрендерите список пользователей. В этот раз используйте компонент UserItem */}</ul>
    </div>
  )
}
