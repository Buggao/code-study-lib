import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import PageFooter from '@/components/page-footer';
import NavHeader from '@/components/nav-header';
import './App.css'

import { RouterProvider } from 'react-router-dom'

import router from './router.jsx'

function App() {
  return (
    <Layout>
      <Header >
        <NavHeader />
      </Header>
      <Content >
        <RouterProvider router={router} />
      </Content>
      <Footer>
        <PageFooter />
      </Footer>
    </Layout>
  )
}

export default App
