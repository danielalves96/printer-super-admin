import { Navigate, Route, Routes } from 'react-router-dom';

import Actions from '@/pages/Actions';
import Apps from '@/pages/Apps';
import Contracts from '@/pages/Contracts';
import Modules from '@/pages/Modules';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/inicio" />} />
      <Route path="*" element={<Navigate replace to="/inicio" />} />
      <Route path="/inicio" element={<Contracts />} />
      <Route path="/aplicativos" element={<Apps />} />
      <Route path="/modulos" element={<Modules />} />
      <Route path="/acoes" element={<Actions />} />
    </Routes>
  );
};
