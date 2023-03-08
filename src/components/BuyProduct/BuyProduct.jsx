import classNames from 'classnames/bind';
import styles from './buy-product.module.scss';
import PropTypes from 'prop-types';
import { Heading, Paragraph, ButtonGroup } from 'components';

const cn = classNames.bind(styles);

export default function BuyProduct({ data, onClick }) {
  let price = `$ ${data.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

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
      <Paragraph theme='black--bold'>{price}</Paragraph>
      <ButtonGroup onClick={onClick} />
    </div>
  );
}

BuyProduct.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};
