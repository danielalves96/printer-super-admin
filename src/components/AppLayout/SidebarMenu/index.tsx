import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { cloneElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { getMenuData } from './items';

export type MenuItem = Required<MenuProps>['items'][number];
export type SidebarMenuProps = {
  collapseState: boolean;
};

function createMenuItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}

const SidebarMenu: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();
  const menuData = getMenuData(t);

  const menuItems: MenuItem[] = menuData.map(({ label, key, icon }: any) => {
    const clonedIcon = cloneElement(icon);

    return createMenuItem(label, key, clonedIcon);
  });

  const onSelectItem = ({ key }: any) => {
    navigate(`/${key}`);
  };

  return (
    <Menu
      className={`mt-4 font-semibold`}
      theme="dark"
      defaultSelectedKeys={[`${location.pathname.substring(1)}`]}
      selectedKeys={[`${location.pathname.substring(1)}`]}
      items={menuItems}
      onSelect={onSelectItem}
    />
  );
};

export default SidebarMenu;
