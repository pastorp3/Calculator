import PropTypes from 'prop-types';

const Display = ({ onInput }) => <div><span>{onInput}</span></div>;

Display.propTypes = {
  onInput: PropTypes.string,
};

Display.defaultProps = {
  onInput: '0',
};

export default Display;
