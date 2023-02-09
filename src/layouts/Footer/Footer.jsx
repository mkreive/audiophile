import classNames from 'classnames/bind';
import styles from './footer.module';

const cn = classNames.bind(styles);

export default function Footer() {
  return <footer className={cn('container')}></footer>;
}
