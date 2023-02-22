import classNames from 'classnames/bind';
import styles from './hero.module.scss';
import { Heading, Paragraph } from 'components';

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
          <Paragraph type='white'>
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </Paragraph>
          <button>See Product</button>
        </article>
        <div className={cn('cover')}></div>
      </div>
    </div>
  );
}
