import classNames from 'classnames/bind';
import styles from './article.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Article({ article }) {
  return <div className={cn('container')}></div>;
}

Article.propTypes = {
  article: PropTypes.object,
};
