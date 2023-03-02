import classNames from 'classnames/bind';
import styles from './banner.module.scss';
import PropTypes from 'prop-types';
import { Heading } from 'components';

const cn = classNames.bind(styles);

export default function Banner({ title }) {
  return (
    <div className={cn('container')}>
      <Heading tag='h1' theme='white'>
        {title}
      </Heading>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
};
