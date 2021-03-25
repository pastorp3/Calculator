import operate from './operate';

const calculate = (data,btnName) => {
    let total = null;
    let next = null;
    const operation = null;
    let total = null;

    let op = ['X','+','-','÷']
    


    if( operator == '+/-') { total *= -1; next *= -1 }
    else if ( operation == 'AC') { total = null, next = null, operate = null }
    else if ( operation == '%' ) { total = total / 100, next = next / 100 }
    else if ( operation == '.') { total += '.', next += '.' };

    if( op.includes(btnName)) total = operate(total,next,btnName);
    
}

export default calculate;