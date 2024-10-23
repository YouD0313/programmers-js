// console.log(a);

// try {
// 	console.log(b);
// 	console.log(c);
// } catch {}

// var a = 1;
// const b = 2;
// let c;

const str = 'abcdef';

console.log(str.padStart(10, 'l'));

const string = 'momocisclove';
const sliceArr = (string, split) => {
	return string.split(split).join(' ');
};

const result = sliceArr(string, 'c');
console.log(result);
