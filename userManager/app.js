const uid =Math.floor(Math.random() * 1000)
console.log(uid);
const express = require('express')
const json = require('jsonfile')
const app = express()
const fs = require('fs');
let count = 0
app.use(express.urlencoded({extended:false}))
app.use(express.static('./public'))
app.use(express.json())
app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', (req, res)=>{
res.render('index')
})
app.get('/home',(req,res)=>{
    res.render('index')
})
app.get('/Users',(req,res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err)=>{
        if(err)throw err;
        res.render('info1')
    })
})
app.get('/edit1',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere1`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit2',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere2`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit3',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere3`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit4',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere4`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit5',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere5`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit6',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere6`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit7',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere7`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit8',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere8`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit9',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere9`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/edit10',(req, res)=>{
    res.render('edit')
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        let linesExceptFirst = data.split(`//- splithere10`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.post('/Users', (req, res)=>{
    count++
    const user= {
        username: req.body.userName,
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
    }
    usersId = uid
    fs.writeFile(`./views/info1.pug`,
`
    //- splithere${count}
    tr(id="row${count}")
        td ${user.name}
        td ${user.username}
        td ${user.email}
        td ${user.age}
        td #${usersId}
        td(class="none")
            form(action="/edit${count}" method="GET")
                button(class="button", id="edit${count}") Edit
            form(action="/delete${count}" method="GET") 
                button(class="button", id="delete${count}") Delete\n`, {flag: 'a+'},(err)=>{
        if(err) console.log('err')
        else{res.render('info1')}
    })
fs.writeFile('./views/edit.pug',
`html 
head 
    link(rel='stylesheet', href='styles.css')
    title='Edit page'
body
    header
        a(href='/Users') All users
    div.container
        form(action='/Users', method='post', class="form") 
            label(for='userName') Username:
            input(type='text', id='userName', name='userName', class='input', value=\`${user.username}\`)
            label(for='name') Name:
            input(type='text', id='name', name='name', class='input', value=\`${user.name}\`)
            label(for='email') Email:
            input(type='text', id='email', name='email', class='input', value=\`${user.email}\`)
            label(for='age') Age:
            input(type='text', id='age', name='age', class='input', value=\`${user.age}\`) 
            button(class='submit') Send`
 ,(err)=>{
    if(err) throw err
})
})
app.get('/delete1', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere1`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete2', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere2`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete3', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere3`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete4', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere4`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete5', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere5`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete6', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere6`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete7', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere7`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete8', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere8`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete9', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere9`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.get('/delete10', (req, res)=>{
    fs.readFile('./views/info1.pug', 'utf8', (err, data)=>{
        console.log(data)
        if (err)console.log('error');
        console.log(count)
        let linesExceptFirst = data.split(`//- splithere10`).slice(0, 1).join('\n');
        fs.writeFile('./views/info1.pug', linesExceptFirst, function(err, data) { if (err) {console.log('error')} });
    });
    res.render('info1')
})
app.listen(5000,()=>{
    console.log('5000')
})