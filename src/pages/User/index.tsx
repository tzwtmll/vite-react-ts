import React from 'react'

function User() {
  return <div>User</div>
}

export default User
User.route = {
  path: '/details/user',
  label: '用户',
  parentkey: '/details'
}
