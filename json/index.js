//json string
const names = '["nandhini" , "vijitha" , "eichavathi"]';

const peson = '[{"name" : "Nandhini","age" : 19,"department" : "BCA","college" : "SASTRA University"}]';

const peoplee = '[{"name" : "Nandhini","age" : 19,"department" : "BCA","college" : "SASTRA University"}, {"name" : "vijitha","age" : 19,"department" : "BCA","college" : "SASTRA University"}, {"name" : "Eichavathi","age" : 19,"department" : "BCA","college" : "SASTRA University"} ]';

//js objects

const person = {
    "name" : "Nandhini",
    "age" : 19,
    "department" : "BCA",
    "college" : "SASTRA University"
}

const people = [
    {
        "name" : "Nandhini",
        "department" : "BCA",
        "certifications" : ["full stack development" , "python"]
    },
    {
        "name" : "Priyavijitha",
        "department" : "BCA",
        "certifications" : ["full stack development" , "c" , "c++"]
    },
    {
        "name" : "eichavathi",
        "department" : "BCA",
        "certifications" : ["full stack development" , "java"]
    }
];
const naame = ["nandhini" , "vijitha" , "eichavathi"];


//change the js object into json string
const obj = JSON.stringify(naame);

console.log(obj);

// change the json string into js object
const obi = JSON.parse(names);

console.log(obi[1]);

//fetch values from another json file
//for more than one array
fetch("data.json")
    .then(response => response.json())
    .then(values => values.forEach(value =>console.log(value.certifications)))



    
//for a single array
fetch("data1.json")
    .then(response => response.json())
    .then(value =>console.log(value.name))

