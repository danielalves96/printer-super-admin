import { Button, Layout } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';

import UserButton from '../UserButton';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header
      data-testid="header"
      className={`flex items-center justify-between lg:justify-end px-6 leading-none bg-white`}
    >
      <div className="block lg:hidden">
        <Button
          className="flex items-center justify-center "
          type="primary"
          icon={<AiOutlineMenu color={'#FFFFFF'} size={20} />}
        />
      </div>
      <div className="flex ">
        <UserButton />
      </div>
    </Header>
  );
};

export default AppHeader;
