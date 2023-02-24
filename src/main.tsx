import { ConfigProvider, theme } from 'antd'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from '@/store'

import App from './App'
const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'rgb(1, 245, 172)'
          }
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
)
