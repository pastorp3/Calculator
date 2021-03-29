/* eslint-disable  arrow-body-style */
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ButtonPanel = ({ clickHandler }) => {
  return (
    <div>
      <div>
        <Button name="AC" click={clickHandler('AC')} />
        <Button name="+/-" click={clickHandler('+/-')} />
        <Button name="%" click={clickHandler('%')} />
        <Button name="÷" click={clickHandler('÷')} />
      </div>
      <div>
        <Button name="7" click={clickHandler('7')} />
        <Button name="8" click={clickHandler('8')} />
        <Button name="9" click={clickHandler('9')} />
        <Button name="X" click={clickHandler('X')} />
      </div>
      <div>
        <Button name="4" click={clickHandler('4')} />
        <Button name="5" click={clickHandler('5')} />
        <Button name="6" click={clickHandler('6')} />
        <Button name="-" click={clickHandler('-')} />
      </div>
      <div>
        <Button name="1" click={clickHandler('1')} />
        <Button name="2" click={clickHandler('2')} />
        <Button name="3" click={clickHandler('3')} />
        <Button name="+" click={clickHandler('+')} />
      </div>
      <div>
        <Button name="0" click={clickHandler('0')} />
        <Button name="." click={clickHandler('.')} />
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
