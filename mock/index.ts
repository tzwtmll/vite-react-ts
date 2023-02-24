import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/mock/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: '0',
        data: [1, 2, 3, 4],
        msg: '请求成功'
      }
    }
  },
  {
    url: '/mock/post',
    method: 'post',
    timeout: 100,
    response: ({ body }) => {
      let { id } = body
      return {
        code: 0,
        data: id
      }
    }
  }
] as MockMethod[]
