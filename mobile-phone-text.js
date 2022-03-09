const { deepEqual } = require('assert');

const keypad = {
  '.,?!': '1',
  'abc': '2',
  'def': '3',
  'ghi': '4',
  'jkl': '5',
  'mno': '6',
  'pqrs': '7',
  'tuv': '8',
  'wxyz': '9',
  '\'-+=': '*',
  ' ': '0',
  '1': '1-',
  '2': '2-',
  '3': '3-',
  '4': '4-',
  '5': '5-',
  '6': '6-',
  '7': '7-',
  '8': '8-',
  '9': '9-',
  '0': '0-',
}

const dial = (lastDigit, caseToggle) => letter => {
  const { currentCase } = caseToggle

  for(const [keys, key] of Object.entries(keypad)){
    let caseToggleKey = ''
    let index

    // search for lower character
    index = keys.indexOf(letter)
    if(index >= 0){

      let leadingSpace = lastDigit.value === key ? ' ' : ''
      lastDigit.set(key)

      if(key !== '*' && currentCase !== 'lower'){
        caseToggleKey = '#'
        caseToggle.flip()
        leadingSpace = ''
      }

      return [ leadingSpace, caseToggleKey, ...new Array(index+1).fill(key) ].join('')
    }

    // search for upper character
    index = keys.toUpperCase().indexOf(letter)
    if(index >= 0){

      let leadingSpace = lastDigit.value === key ? ' ' : ''
      lastDigit.set(key)

      if(key !== '*' && currentCase !== 'upper'){
        caseToggleKey = '#'
        caseToggle.flip()
        leadingSpace = ''
      }

      return [ leadingSpace, caseToggleKey, ...new Array(index+1).fill(key) ].join('')
    }
  }
}

const sendMessage = message => {
  let lastDigit = {
    value: null,
    set: function(digit){ this.value = digit }
  }

  let caseToggle = {
    currentCase: 'lower',
    flip: function(toggle){ this.currentCase = this.currentCase === 'lower' ? 'upper' : 'lower' }
  }

  return message
    .split('')
    .map(dial(lastDigit, caseToggle))
    .join('')
}

[
  ["hey", "4433999"],
  ["hEy", "44#33#999"],
  ["heey", "4433 33999"],
  ["Def", "#3#33 333"],
  ["Def C", "#3#33 3330#222"],
  ["one two three", "666 6633089666084477733 33"],
  ["Hello World!", "#44#33555 5556660#9#66677755531111"],
  ["Def Con 1!", "#3#33 3330#222#666 6601-1111"],
  ["A-z", "#2**#9999"],
  ["1984", "1-9-8-4-"],
  ["Big thanks for checking out my kata", "#22#444 4084426655777703336667770222443322255444664066688 806999055282"]
].forEach(([message, expected]) => {
  deepEqual(sendMessage(message), expected);
});

console.log('OK')

