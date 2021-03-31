/* eslint-disable  arrow-body-style */
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  return (
    <div className="panel">
      <div className="row">
        <Button name="AC" color="btn-style" click={clickHandler('AC')} />
        <Button name="+/-" color="btn-style" click={clickHandler('+/-')} />
        <Button name="%" color="btn-style" click={clickHandler('%')} />
        <Button name="÷" click={clickHandler('÷')} />
      </div>
      <div className="row">
        <Button name="7" color="btn-style" click={clickHandler('7')} />
        <Button name="8" color="btn-style" click={clickHandler('8')} />
        <Button name="9" color="btn-style" click={clickHandler('9')} />
        <Button name="X" click={clickHandler('X')} />
      </div>
      <div className="row">
        <Button name="4" color="btn-style" click={clickHandler('4')} />
        <Button name="5" color="btn-style" click={clickHandler('5')} />
        <Button name="6" color="btn-style" click={clickHandler('6')} />
        <Button name="-" click={clickHandler('-')} />
      </div>
      <div className="row">
        <Button name="1" color="btn-style" click={clickHandler('1')} />
        <Button name="2" color="btn-style" click={clickHandler('2')} />
        <Button name="3" color="btn-style" click={clickHandler('3')} />
        <Button name="+" click={clickHandler('+')} />
      </div>
      <div className="row">
        <Button name="0" color="btn-style" wide="btn-0" click={clickHandler('0')} />
        <Button name="." color="btn-style" click={clickHandler('.')} />
        <Button name="=" click={clickHandler('=')} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;

/* eslint-enable  arrow-body-style */
