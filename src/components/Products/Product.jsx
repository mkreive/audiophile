import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './products.module.scss';
import { Button, Heading, Paragraph } from 'components';

const cn = classNames.bind(styles);

export default function Product({ data, index }) {
  const order = index % 2;
  const url = data.name.replaceAll(' ', '-').toLowerCase();

  return (
    <div className={cn('wrapper')}>
      <div className={cn('image')} style={{ order }}>
        <img src={data.imageProduct} alt={data.name} />
      </div>
      <div className={cn('text')}>
        {data.new && (
          <Heading tag='p' theme='orange'>
            New product
          </Heading>
        )}
        <Heading tag='h3' theme='black'>
          {data.name}
        </Heading>
        <Paragraph theme='black'>{data.about}</Paragraph>
        <Link to={url} className={cn('link')}>
          <Button theme='orange'>See product</Button>
        </Link>
      </div>
    </div>
  );
}

Product.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
