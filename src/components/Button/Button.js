import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  name,
  click,
  color,
  wide,
}) => <button className={`${color} ${wide}`} type="button" onClick={() => click(name)}>{name}</button>;

Button.defaultProps = {
  color: 'btn-style-def',
  wide: 'btn',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

export default Button;
