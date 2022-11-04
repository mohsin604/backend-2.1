const dotenv=require('dotenv')
let MyEnviroment={}
if(process.env.NODE_ENV ==='testing'){
MyEnviroment =dotenv.config({path:`${__dirname}/../tasting.env`});
}
console.log(MyEnviroment)