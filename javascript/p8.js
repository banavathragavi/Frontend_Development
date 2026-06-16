const fs=require('fs');
console.log('started');
    fs.writeFile("abc.txt","Welcome...",()=>{
    console.log("Write operation done");
});

let data = fs.readFileSync("abc.txt");
console.log(data);
console.log("End");