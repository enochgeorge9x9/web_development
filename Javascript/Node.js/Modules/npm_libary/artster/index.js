const figlet = require('figlet');
const colors = require('colors');

figlet('WOWOW', function(err, data){
    if(err){
        console.log('Something went wrong...')
        console.log(err)
        return;
    }
    console.log(data.green)
})