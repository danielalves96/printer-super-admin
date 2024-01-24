import { Layout } from 'antd';

import AppFooter from '@/components/AppLayout/Footer';
import AppHeader from '@/components/AppLayout/Header';
import Sidebar from '@/components/AppLayout/Sidebar';

import { AppLayoutProps } from './types';

const { Content } = Layout;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Layout className="h-screen">
      <Layout>
        <Sidebar />
        <Layout>
          <AppHeader />
          <Content className={`p-5 bg-base_two_light overflow-auto`}>
            <>{children}</>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
