import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './article-section.module.scss';
import { Heading, Paragraph } from 'components';

const cn = classNames.bind(styles);

export default function ArticleSection({ article }) {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  const word = <span style={{ color: '#d87d4a' }}>{` ${article.headingWord} `}</span>;
  const headingEnd = article.heading.split(' ');
  const headingStart = headingEnd.splice(0, headingEnd.indexOf(article.headingWord)).join(' ');
  headingEnd.splice(0, 1).join(' ');

  return (
    <div className={cn('container')}>
      <div className={cn('container__left')}>
        <Heading tag='h2' theme='black'>
          {headingStart}
          {word}
          {headingEnd}
        </Heading>
        <Paragraph theme='gray'>{article.text}</Paragraph>
      </div>
      <div className={cn('container__right')}>
        <img
          src={
            (isMobile && article.photoMobile) ||
            (!isTablet && !isMobile && article.photo) ||
            (isTablet && article.photoTablet)
          }
          alt={article.header}
        />
      </div>
    </div>
  );
}

ArticleSection.propTypes = {
  article: PropTypes.object,
};
