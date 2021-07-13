const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];
const code = franc(input);


if(code==='und'){
    console.log('Oh No!!! ERROR'.red);
}
else{
    const language = langs.where('3', code);
    console.log(language.name.green);
}