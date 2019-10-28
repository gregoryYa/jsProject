let options = {
    width: 1024,
    height: 1024,
    name: "test"

};

//console.log(options.name);

options.bool = true;
options.colours = {
    border: "black",
    background: "red"
};

delete options.bool;

//console.log(options);

for (let key in options) {
    console.log('Properties ' + key + ' has value ' + options[key]);
}

console.log(Object.keys(options).length);

