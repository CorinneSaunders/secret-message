let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


let secretMessageLength = secretMessage.length
console.log(secretMessageLength);

secretMessage.pop();
secretMessage.push('to','program')
secretMessage.splice(7, 1, 'right');
secretMessage.shift(0);
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));
