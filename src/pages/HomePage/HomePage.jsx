import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './home-page.module.scss';
import { Hero, Menu } from 'components';
import { MainLayout, CardWrapper } from 'layouts';

const cn = classNames.bind(styles);

export default function HomePage() {
  const handleProductClick = function (e) {
    console.log(e.target);
  };

  return (
    <div className={cn('container')}>
      <Helmet>
        <title>Audiophile - Home</title>
      </Helmet>
      <Hero />
      <MainLayout>
        <Menu />
        <CardWrapper onClick={handleProductClick} theme='rectangular'></CardWrapper>
      </MainLayout>
    </div>
  );
}
