/* eslint-disable  react/require-default-props */
import PropTypes from 'prop-types';

const Button = ({ name }) => <button type="button">{name}</button>;

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;

/* eslint-enable  react/require-default-props */
