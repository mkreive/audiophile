import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './features.module.scss';
import { Heading, Paragraph, List } from 'components';

const cn = classNames.bind(styles);

export default function Features({ features, content }) {
  return (
    <div className={cn('container')}>
      <article className={cn('article')}>
        <Heading tag='h3' theme='black'>
          Features
        </Heading>
        {features.map((paragraph, i) => (
          <Paragraph key={i} theme='black'>
            {paragraph}
          </Paragraph>
        ))}
      </article>
      <article className={cn('article')}>
        <Heading tag='h3' theme='black'>
          In the box
        </Heading>
        <List data={content} />
      </article>
    </div>
  );
}

Features.propTypes = {
  features: PropTypes.array,
  content: PropTypes.array,
};
