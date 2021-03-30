import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ onInput }) => <div className="display"><span>{onInput}</span></div>;

Display.propTypes = {
  onInput: PropTypes.string,
};

Display.defaultProps = {
  onInput: '0',
};

export default Display;
