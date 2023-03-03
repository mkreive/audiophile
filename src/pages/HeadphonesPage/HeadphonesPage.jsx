import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './headphones-page.module.scss';
import pageData from './pageData.json';
import { MainLayout } from 'layouts';
import { Banner, Menu, ArticleSection, Product } from 'components';

const cn = classNames.bind(styles);

export default function HeadphonesPage() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>{`Audiophile - ${pageData.pageTitle}`}</title>
      </Helmet>
      <Banner title={pageData.pageTitle} />
      <MainLayout>
        {pageData.products.map((product) => (
          <Product data={product} order='1' key={product.id} />
        ))}
        <Menu />
        <ArticleSection article={pageData.article} />
      </MainLayout>
    </div>
  );
}
