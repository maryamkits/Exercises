let regEx = new RegExp('abcd');
let regEx2 = /abcd/;

// test(), exec()
let sourceStr = 'Hello RegExp Hello';
let helloRegEx = /hello/gi;
// [abc]
// ^

let chSet = /[ts]ell/i
let result = helloRegEx.test(sourceStr);  /// test() ბულინი
let result2 = helloRegEx.exec(sourceStr);  /// exec() აბრუნებს მასივს
// console.log(result)
// console.log(result2)
let str = 'Sell';
// console.log(chSet.test(str))

/////// range
// console.log(/[a-c]{2,}/i.test('AbCd'))


////  მოკლე ჩანაწერები
/// [0-9] = \d
// [a-zA-Z0-9_] = \w
// [^0-9] = \D
// [^a-zA-Z0-9_] = \W
// \s space, tab, newLine verticalLine...
// . all exept newLine(\n)
// \S non whitespac

// +, *, ?
// +  1 or more times,  *  0 or more,   ?  0 or 1 time


// console.log(/\d+/.test('43992379wef'))
// console.log(/d*g/.test('td'))    // d ან 0ჯერ ან მეტჯერ, g უნდა ემთხვეოდეს ერთხელ მაინც
// console.log(/doo?g/.test('doog'))  // მეორე o არაა სავალდებულო რომ შეიცავდეს

// let alt = /red|green Car/i
// console.log(alt.test('green car'))
// console.log(alt.test('yellow car'))


/// ემთხვევა ნებისმიერ 10-ნიშნა რიცხვს
// let n = /\d{10}/
// console.log(n.test('1234567890'))


/// DD-MM-YYYY || DD-MM-YY
// let date = /\d{2}-\d{2}-\d{4}|\d{2}-\d{2}-\d{2}/
let k = /^(\d{1,2}-){2}\d{2}(\d{2})?$/
console.log(k.test('23-05-93'))