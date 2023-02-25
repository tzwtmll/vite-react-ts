import { DatePicker } from 'antd'
import React from 'react'
const { RangePicker } = DatePicker
function Home() {
  return (
    <div>
      <RangePicker />
    </div>
  )
}
export default Home
Home.route = {
  path: '/list/home',
  label: '主页',
  parentkey: '/list'
}
