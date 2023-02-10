import classNames from 'classnames/bind';
import styles from './hero.module.scss';

const cn = classNames.bind(styles);

export default function Hero() {
  return (
    <div className={cn('container')}>
      <div className={cn('content')}>
        <article className={cn('article')}>
          <h2>New product</h2>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <button>See Product</button>
        </article>
        <div className={cn('cover')}></div>
      </div>
    </div>
  );
}
