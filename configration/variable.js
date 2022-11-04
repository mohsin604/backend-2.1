const dotenv=require('dotenv')
let MyEnviroment={}
if(process.env.NODE_ENV ==='testing'){
MyEnviroment =dotenv.config({path:`${__dirname}/../testing.env`});
}
console.log(MyEnviroment)