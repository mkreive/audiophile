import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './product-page.module.scss';
import pageData from './pageData.json';
import { ArticleSection, Button, Menu } from 'components';
import { MainLayout } from 'layouts';

const cn = classNames.bind(styles);

export default function ProductPage() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>{`Audiophile - ${pageData.pageTitle}`}</title>
      </Helmet>
      <MainLayout>
        <Link to='/' className={cn('link')}>
          <Button theme='back'>Go back</Button>
        </Link>
        <Menu />
        <ArticleSection article={pageData.article} />
      </MainLayout>
    </div>
  );
}
