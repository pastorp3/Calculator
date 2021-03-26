import PropTypes from 'prop-types';

const Button = ({ name, click }) => <button type="button" onClick={() => click(name)}>{name}</button>;

Button.defaultProps = {
  name: null,
  click: null,
};

Button.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
