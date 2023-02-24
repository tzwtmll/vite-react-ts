import { Layout } from 'antd'

import Router from '@/router'

import Header from '../header'
import Menu from '../sideMenu'
const { Footer, Content } = Layout
function TwoColumn() {
  return (
    <div>
      <Layout className="my-layout-body">
        <Header />
        <Layout>
          <Menu />
          <Layout className="layout-content-wrap">
            <Content>
              <Router />
            </Content>
          </Layout>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  )
}

export default TwoColumn
