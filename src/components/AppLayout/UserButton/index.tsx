import { Avatar } from 'antd';
import { DiApple } from 'react-icons/di';

const UserButton: React.FC = () => {
  return (
    <div className="flex gap-3 p-2 rounded-md cursor-pointer text-black">
      <div className="flex items-center">
        <Avatar
          className={`bg-ascent flex items-center justify-center `}
          icon={<DiApple size={18} color={'#ffffff'} />}
        />
      </div>
      <div className="items-center hidden lg:flex">
        <div className="flex flex-col justify-center gap-0.5">
          <span className={`font-semibold `}>Daniel Luiz Alves</span>
          <span className={`text-xs `}>Desenvolvimento</span>
        </div>
      </div>
    </div>
  );
};

export default UserButton;
