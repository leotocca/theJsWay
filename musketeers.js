// The JS way - Chapter 7 - https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter07.md

const musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.lenth; i++) {
	console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach(x => {
	console.log(x);
});

for (const x of musketeers) {
	console.log(x);
}

const values = [3, 11, 7, 2, 9, 10];

const max = arr => {
	let a = 0;
	arr.forEach(x => {
		a += x;
	});
	return a;
};

const ask = () => {
	let a = prompt('Escribi una palabra');
	let b = [];
	while (a !== 'stop') {
		b.push(a);
		a = prompt('Escribi una palabra');
	}

	return b;
};
