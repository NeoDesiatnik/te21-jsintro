for (let i = 0; i < 10; i++) {
        //console.log(i);
}

let names = ['Neo','Neo 2','Neo 3','Neo 4','Neo 5']

for (let index = 0; index < names.length; index++) {
    //const element = names[index];
    //console.log(element)
    //console.log(names[index]);
}

names.forEach(name => {
    //console.log(name);
});

let nummer = []

for (let i = 0; i < 300; i++) {
    const roll = Math.ceil(Math.random()*20);
    nummer.push(roll)
    console.log(nummer[i])
}
