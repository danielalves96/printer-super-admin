import {
  ClusterOutlined,
  ContainerOutlined,
  IssuesCloseOutlined,
  ProjectOutlined,
} from '@ant-design/icons';

import { MenuItemType } from './types';

export const getMenuData = (t: (key: string) => string): MenuItemType[] => [
  {
    label: 'Contratos',
    key: 'inicio',
    icon: <ContainerOutlined />,
    path: '/inicio',
  },
  {
    label: 'Aplicativos',
    key: 'aplicativos',
    icon: <ProjectOutlined />,
    path: '/aplicativos',
  },
  {
    label: 'Módulos',
    key: 'modulos',
    icon: <ClusterOutlined />,
    path: '/modulos',
  },
  {
    label: 'Ações',
    key: 'acoes',
    icon: <IssuesCloseOutlined />,
    path: '/acoes',
  },
];
