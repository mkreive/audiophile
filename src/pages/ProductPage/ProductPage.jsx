import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './product-page.module.scss';
import pageData from './pageData.json';
import { ArticleSection, Button, Menu, Product, Features, Gallery } from 'components';
import ProductLayout from 'layouts/ProductLayout/ProductLayout';

const cn = classNames.bind(styles);

export default function ProductPage() {
  const handleBtnClick = function (e) {
    console.log(e.target);
  };
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>{`Audiophile - ${pageData.pageTitle}`}</title>
      </Helmet>
      <Link to='/' className={cn('link')}>
        <Button theme='back'>Go back</Button>
      </Link>
      <ProductLayout>
        <Product data={pageData.products[1]} option='buy' onClick={handleBtnClick} />
        <Features data={pageData.products[1]} />
        <Gallery data={pageData.products[1].imageGallery} />
        <Menu />
        <ArticleSection article={pageData.article} />
      </ProductLayout>
    </div>
  );
}
