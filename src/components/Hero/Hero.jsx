import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './hero.module.scss';
import { Heading, Paragraph, Button } from 'components';

const cn = classNames.bind(styles);

export default function Hero() {
  return (
    <div className={cn('container')}>
      <div className={cn('content')}>
        <article className={cn('article')}>
          <Heading tag='p' theme='gray'>
            New product
          </Heading>
          <Heading tag='h1' theme='white'>
            XX99 Mark II HeadphoneS
          </Heading>
          <Paragraph theme='white'>
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </Paragraph>
          <Link to='/product/*' className={cn('link')}>
            <Button theme='orange'>See product</Button>
          </Link>
        </article>
      </div>
    </div>
  );
}
