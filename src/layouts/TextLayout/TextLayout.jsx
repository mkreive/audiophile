import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './text-layout.module.scss';
import PropTypes from 'prop-types';
import { Heading, Paragraph, Button, ButtonGroup } from 'components';

const cn = classNames.bind(styles);

export default function TextLayout({ data, option, onClick }) {
  const url = data.name.replaceAll(' ', '-').toLowerCase();
  let price = `$ ${(+data.price).toLocaleString('en-US', { maximumFractionDigits: 3 })}`;

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

      {option === 'buy' && <Paragraph theme='black--bold'>{price}</Paragraph>}

      {option === 'see' && (
        <Link to={`/products/${url}`} className={cn('link')}>
          <Button theme='orange'>See product</Button>
        </Link>
      )}

      {option === 'buy' && <ButtonGroup onClick={onClick} />}
    </div>
  );
}

TextLayout.propTypes = {
  data: PropTypes.object,
  option: PropTypes.string,
  onClick: PropTypes.func,
};
