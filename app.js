const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const ejs=require('ejs')
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1>')
})

app.listen('3000',()=>{
    console.log('it is running')
})