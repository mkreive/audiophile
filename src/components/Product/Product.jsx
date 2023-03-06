import PropTypes from 'prop-types';
// import { CardLayout, ImageLayout, TextLayout } from 'layouts';

export default function Product({ data, index, option }) {
  return (
    <div>
      <span>dsd</span>
    </div>
    // <CardLayout>
    //   <ImageLayout image={data} index={index} />
    //   <TextLayout data={data} option={option} />
    // </CardLayout>
  );
}

Product.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  option: PropTypes.string,
};
