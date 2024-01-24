import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import { BrowserRouter } from 'react-router-dom';

import { Router } from '@/routes/router';

import AppLayout from './components/Layout';
import { SidebarProvider } from './contexts/SidebarContext';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={ptBR}>
      <BrowserRouter>
        <SidebarProvider>
          <AppLayout>
            <Router />
          </AppLayout>
        </SidebarProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
