import PropTypes from 'prop-types';
import CardLayout from 'layouts/CardLayout/CardLayout';
import ImageLayout from 'layouts/ImageLayout/ImageLayout';
import TextLayout from 'layouts/TextLayout/TextLayout';

export default function Product({ data, index, option, onClick }) {
  return (
    <CardLayout>
      <ImageLayout image={data} index={index} />
      <TextLayout data={data} option={option} onClick={onClick} />
    </CardLayout>
  );
}

Product.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  option: PropTypes.string,
  onClick: PropTypes.func,
};
