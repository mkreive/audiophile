import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './headphones-page.module.scss';
import pageData from './pageData.json';
import { MainLayout } from 'layouts';
import { Banner, Menu, ArticleSection, ProductsSection } from 'components';

const cn = classNames.bind(styles);

export default function HeadphonesPage() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>{`Audiophile - ${pageData.pageTitle}`}</title>
      </Helmet>
      <Banner title={pageData.pageTitle} />

      <MainLayout>
        <ProductsSection data={pageData.products} />
        <Menu />
        <ArticleSection article={pageData.article} />
      </MainLayout>
    </div>
  );
}
