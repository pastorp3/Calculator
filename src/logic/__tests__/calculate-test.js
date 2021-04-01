import calculate from '../calculate';

describe('Change number to negative or positive with +/- ', () => {
  it('Change number to negative', () => {
    expect(calculate({
      total: null,
      next: '1',
      operator: null,
    }, '+/-')).toEqual({
      total: -0,
      next: -1,
      operator: null,
    })
  })

  it('Change number to positive', () => {
    expect(calculate({
      total: null,
      next: '-1',
      operator: null,
    }, '+/-')).toEqual({
      total: -0,
      next: 1,
      operator: null,
    })
  })
});

describe('Clear calculatoe with AC', () => {
  it('Clear all values', () => {
    expect(calculate({
      total: '10',
      next: '1',
      operator: '+',
    }, 'AC')).toEqual({
      total: null,
      next: null,
      operator: null,
    })
  })
})

describe('Change values to percentage with %', () => {
  it('Change numbers to percentage', () => {
    expect(calculate({
      total: '10',
      next: '1',
      operator: null,
    }, '%')).toEqual({
      total: '0.1',
      next: '0.01',
      operator: null,
    })
  })
})

describe('Change current value from integer to float with .', () => {
  it('Add . to number', () => {
    expect(calculate({
      total: null,
      next: '12',
      operator: null,
    }, '.')).toEqual({
      total: null,
      next: '12.',
      operator: null,
    })
  })
})

describe('Test Subtract operation with -', () => {
  it('Subtract two positive numbers', () => {
    expect(calculate({
      total: '10',
      next: '1',
      operator: '-',
    }, '=')).toEqual({
      total: '9',
      next: null,
      operator: null,
    })
  })

  it('Subtract a negtaive number to a positive number', () => {
    expect(calculate({
      total: '10',
      next: '-1',
      operator: '-',
    }, '=')).toEqual({
      total: '11',
      next: null,
      operator: null,
    })
  })

  it('Subtract a positive number to a negative number', () => {
    expect(calculate({
      total: '-10',
      next: '1',
      operator: '-',
    }, '=')).toEqual({
      total: '-11',
      next: null,
      operator: null,
    })
  })

  it('Subtract a negtaive number to a negative numebr', () => {
    expect(calculate({
      total: '-10',
      next: '-1',
      operator: '-',
    }, '=')).toEqual({
      total: '-9',
      next: null,
      operator: null,
    })
  })

  it('Subtract a float number to a positive number', () => {
    expect(calculate({
      total: '10',
      next: '1.5',
      operator: '-',
    }, '=')).toEqual({
      total: '8.5',
      next: null,
      operator: null,
    })
  })
})

describe('Test Add operation with +', () => {
  it('Add to positive numbers', () => {
    expect(calculate({
      total: '10',
      next: '1',
      operator: '+',
    }, '=')).toEqual({
      total: '11',
      next: null,
      operator: null,
    })
  })

  it('Add a negative number to a positive number', () => {
    expect(calculate({
      total: '10',
      next: '-1',
      operator: '+',
    }, '=')).toEqual({
      total: '9',
      next: null,
      operator: null,
    })  
  })

  it('Add a float number to a positive number', () => {
    expect(calculate({
      total: '10',
      next: '1.5',
      operator: '+',
    }, '=')).toEqual({
      total: '11.5',
      next: null,
      operator: null,
    })
  })
})

describe('Test Multipy operation with X', () => {
  it('Multiply two positive numbers', () => {
    expect(calculate({
      total: '10',
      next: '2',
      operator: 'X',
    }, '=')).toEqual({
      total: '20',
      next: null,
      operator: null,
    })
  })

  it('Multiply a negtaive number with a positive number', () => {
    expect(calculate({
      total: '10',
      next: '-2',
      operator: 'X',
    }, '=')).toEqual({
      total: '-20',
      next: null,
      operator: null,
    })
  })

  it('Multiply a float number with whole number', () => {
    expect(calculate({
      total: '10',
      next: '1.5',
      operator: 'X',
    }, '=')).toEqual({
      total: '15',
      next: null,
      operator: null,
    })
  })
})

describe('Test Devide operation with ÷', () => {
  it('Devide two positive numbers', () => {
    expect(calculate({
      total: '10',
      next: '2',
      operator: '÷',
    }, '=')).toEqual({
      total: '5',
      next: null,
      operator: null,
    })
  })

  it('Devide two negative numbers', () => {
    expect(calculate({
      total: '-10',
      next: '-2',
      operator: '÷',
    }, '=')).toEqual({
      total: '5',
      next: null,
      operator: null,
    })
  })

  it('Devide a negative number with a positive number', () => {
    expect(calculate({
      total: '10',
      next: '-2',
      operator: '÷',
    }, '=')).toEqual({
      total: '-5',
      next: null,
      operator: null,
    })
  })

  it('Devide a number with zero and show error', () => {
    expect(calculate({
      total: '10',
      next: '0',
      operator: '÷',
    }, '=')).toEqual({
      total: 'Cant divide by 0',
      next: null,
      operator: null,
    })
  })
})