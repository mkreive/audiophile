import classNames from 'classnames/bind';
import styles from './article-section.module.scss';
import PropTypes from 'prop-types';
import { Heading, Paragraph } from 'components';

const cn = classNames.bind(styles);

export default function ArticleSection({ article }) {
  return (
    <div className={cn('container')}>
      <div className={cn('container__left')}>
        <Heading tag='h2' theme='black'>
          {article.heading}
        </Heading>
        <Paragraph theme='gray'>{article.text}</Paragraph>
      </div>
      <div className={cn('container__right')}>
        <img src={article.photo} alt={article.header} />
      </div>
    </div>
  );
}

ArticleSection.propTypes = {
  article: PropTypes.object,
};
