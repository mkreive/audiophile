import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './see-product.module.scss';
import PropTypes from 'prop-types';
import { Heading, Paragraph, Button } from 'components';

const cn = classNames.bind(styles);

export default function SeeProduct({ data }) {
  return (
    <div className={cn('container')}>
      {data.new && (
        <Heading tag='p' theme='orange'>
          New product
        </Heading>
      )}
      <Heading tag='h3' theme='black'>
        {data.name}
      </Heading>
      <Paragraph theme='black'>{data.about}</Paragraph>
      <Link to={`${data.id}`} className={cn('link')}>
        <Button theme='orange'>See product</Button>
      </Link>
    </div>
  );
}

SeeProduct.propTypes = {
  data: PropTypes.object,
};
