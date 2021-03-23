import PropTypes from 'prop-types';

const Display = ({ onInput }) => <input type="text" value={onInput} />;

Display.propTypes = {
  onInput: PropTypes.string,
};

Display.defaultProps = {
  onInput: '0',
};

export default Display;
