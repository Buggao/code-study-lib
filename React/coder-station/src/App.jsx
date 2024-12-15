import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import PageFooter from '@/components/page-footer';
import NavHeader from '@/components/nav-header';
import './App.css'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Header >
        <NavHeader />
      </Header>
      <Content className="min-h-96" >
        <Outlet />
      </Content>
      <Footer style={{textAlign: "center"}}>
        <PageFooter />
      </Footer>
    </Layout>
  )
}

export default App
