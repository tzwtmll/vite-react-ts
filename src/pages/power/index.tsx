import { Button } from 'antd'
import React from 'react'
function Power() {
  return (
    <div>
      <Button>点击</Button>
    </div>
  )
}

export default Power
Power.route = {
  path: '/details/power',
  label: '权限控制',
  parentkey: '/details'
}
