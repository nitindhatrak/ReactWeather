var names = ['Nitin', 'Ashish', 'Atul'];

names.forEach(function(name){
	console.log('forEach ', name);
});

names.forEach((name) => {
	console.log('arrowFunc ', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + "!";
console.log(returnMe('Nitin'));

function add(a,b){
	return a+b;
}

var addStatement = (a,b) => {
	return a+b;
} 

console.log(addStatement(4,7));
