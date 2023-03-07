import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './list.module.scss';

const cn = classNames.bind(styles);

export default function List({ data }) {
  return (
    <ul className={cn('container')}>
      {data.map((listItem, i) => (
        <li key={i} className={cn('list-item')}>
          <span className={cn('list-item__count')}>{`${listItem.count}x`}</span>
          <span className={cn('list-item__name')}>{listItem.name}</span>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.array,
};
