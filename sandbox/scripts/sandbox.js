let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter(name => name[0] == "B");

console.log(namesB);

const namesLength = names.map(name => name.length);

console.log(namesLength);

console.log(names.filter(name => name[0] == "B"));
console.log(names.map(name => name.length));

console.log(names.reduce((total, name) => total + name.length, 0) / names.length)