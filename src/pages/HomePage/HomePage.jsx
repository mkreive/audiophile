import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './home-page.module.scss';
import pageData from './pageData.json';
import { ArticleSection, Hero, Menu } from 'components';
import { MainLayout } from 'layouts';
import { ProductHighlights } from 'features';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>Audiophile - Home</title>
      </Helmet>
      <Hero />
      <MainLayout>
        <Menu />
        <ProductHighlights productsData={pageData.productHighlights} />
        <ArticleSection article={pageData.article} />
      </MainLayout>
    </div>
  );
}
