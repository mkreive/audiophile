import classNames from 'classnames/bind';
import { Heading, Button } from 'components';
import { Link } from 'react-router-dom';
import styles from './notfound-page.module.scss';

const cn = classNames.bind(styles);

export default function NotFoundPage() {
  return (
    <div className={cn('container')}>
      <div title='404' className={cn('number')}>
        404
      </div>
      <Heading tag='h3' theme='black'>
        Page not found
      </Heading>
      <Link to='/home'>
        <Button theme='white'>Home</Button>
      </Link>
    </div>
  );
}
