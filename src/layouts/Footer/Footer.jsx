import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './footer.module.scss';

const cn = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cn('container')}>
      <header className={cn('header')}>
        <div className={cn('logo')}>audiophile</div>
        <nav className={cn('navigation')}>
          <Link>Home</Link>
          <Link>Headphones</Link>
          <Link>Speakers</Link>
          <Link>Earphones</Link>
        </nav>
      </header>
      <div className={cn('about')}>
        <section>
          <p className={cn('text')}>
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <p className={cn('text')}>Copyright 2023. All Rights Reserved</p>
        </section>
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
      </div>
    </footer>
  );
}
