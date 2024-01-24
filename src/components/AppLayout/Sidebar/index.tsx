import { Layout } from 'antd';

import logoCollapsed from '@/assets/png/sidebarCollapsedLogo.png';
import logo from '@/assets/png/sidebarLogo.png';
import SidebarMenu from '@/components/AppLayout/SidebarMenu';
import { useSidebarContext } from '@/contexts/SidebarContext';

import { SidebarLogoProps } from './types';

const { Sider } = Layout;

const renderLogo = ({ collapsed }: SidebarLogoProps) => (
  <img
    src={collapsed ? logoCollapsed : logo}
    alt="logo"
    width={collapsed ? 32 : 160}
  />
);

const Sidebar: React.FC = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <div className="hidden lg:flex">
      <Sider
        collapsible
        data-testid="sidebar"
        collapsed={collapsed}
        theme="dark"
        width={215}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className={`mb-4 flex justify-center flex-col items-center ${
            collapsed ? 'mt-5 px-2' : 'mt-5 mb-1'
          }`}
        >
          {renderLogo({ collapsed })}
        </div>

        <SidebarMenu />
      </Sider>
    </div>
  );
};

export default Sidebar;
