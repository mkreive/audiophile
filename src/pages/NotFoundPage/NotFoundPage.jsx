import classNames from 'classnames/bind';
import styles from './notfound-page.module.scss';

const cn = classNames.bind(styles);

export default function NotFoundPage() {
  return <div className={cn('container')}></div>;
}
