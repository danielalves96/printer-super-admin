import { Layout, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Footer } = Layout;

const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <Footer
      data-testid="footer"
      className={`text-center h-14 p-0 py-5 flex items-center justify-center`}
    >
      <Typography.Text className="leading-none">
        {t('components.footer.ENTERPRISE_NAME')}
        {new Date().getFullYear()}
      </Typography.Text>
    </Footer>
  );
};

export default AppFooter;
