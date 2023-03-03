import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './speakers-page.module.scss';
import pageData from './pageData.json';
import { Banner, Menu, ArticleSection, Products } from 'components';
import { MainLayout } from 'layouts';

const cn = classNames.bind(styles);

export default function SpeakersPage() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>{`Audiophile - ${pageData.pageTitle}`}</title>
      </Helmet>
      <Banner title={pageData.pageTitle} />
      <MainLayout>
        <Products data={pageData.products} />
        <Menu />
        <ArticleSection article={pageData.article} />
      </MainLayout>
    </div>
  );
}
