import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './text-layout.module.scss';
import PropTypes from 'prop-types';
import { Heading, Paragraph, Button } from 'components';

const cn = classNames.bind(styles);

export default function TextLayout({ data, option }) {
  const url = data.name.replaceAll(' ', '-').toLowerCase();

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
      {option === 'buy' && <div>{data.price}</div>}

      {option === 'see' && (
        <Link to={`/products/${url}`} className={cn('link')}>
          <Button theme='orange'>See product</Button>
        </Link>
      )}

      {option === 'buy' && (
        <div className={cn('btns-group')}>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <Button theme='orange'>Add to cart</Button>
        </div>
      )}
    </div>
  );
}

TextLayout.propTypes = {
  data: PropTypes.object,
  option: PropTypes.string,
};
