const bodyParser = require('body-parser')
const express=require('express')
const app=express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
var tasks=[]
app.get('/',(req,res)=>{
    var today=new Date()
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Firday','Saturday']
    var todays_day=days[today.getDay()]+" "+"("+today.toLocaleDateString('en-Uk',{
        month:'long',
        day:'numeric'
    })+")"
    res.render('list',{day:todays_day,tasks:tasks})
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newItem)
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log('server started on port 3000')
})