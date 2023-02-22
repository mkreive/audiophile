import classNames from 'classnames/bind';
import styles from './hero.module.scss';
import { Heading, Paragraph, Button } from 'components';

const cn = classNames.bind(styles);

export default function Hero() {
  const handleBtnClick = function (e) {
    console.log(e.target);
  };

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
          <Button onClick={handleBtnClick} theme='orange'>
            See Product
          </Button>
        </article>
      </div>
    </div>
  );
}
