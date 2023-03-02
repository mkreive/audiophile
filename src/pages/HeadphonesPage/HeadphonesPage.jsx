import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './headphones-page.module.scss';
import pageData from './pageData.json';
import { Banner, Menu, ArticleSection } from 'components';
import { MainLayout } from 'layouts';

const cn = classNames.bind(styles);

export default function HeadphonesPage() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>{`Audiophile - ${pageData.pageTitle}`}</title>
      </Helmet>
      <Banner title={pageData.pageTitle} />
      <MainLayout>
        <Menu />
        <ArticleSection article={pageData.article} />
      </MainLayout>
    </div>
  );
}
