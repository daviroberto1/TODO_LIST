const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const hbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const Tarefas = require('./models/Tarefas')

app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout: 'main',
}));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    Tarefas.findAll().then((data)=>{
        if (data.length > 0) {
            return res.render('index',{tarefas: data.map(data=>data.toJSON())})
        }else{
            return res.render('index')
        }
    }).catch((err)=>{console.log(err)})
})

app.post('/add',(req,res)=>{
    let tarefa = req.body.tarefa;
    Tarefas.create({
        tarefa: tarefa
    }).then(()=>{
        return res.redirect('/')
    }).catch((err)=> console.log(err))
})

app.post('/update',(req,res)=>{
    let tarefaModificada = req.body.input_edit;
    let id = req.body.id;
    Tarefas.update(
        {
            tarefa: tarefaModificada
        },
        {
            where: {
                 id: req.body.id
            }
        }
    ).then(()=>{
        return res.redirect('/');
    }).catch((err)=>{console.log(err)})
})

app.post('/del', (req,res)=>{
    Tarefas.destroy({
        where: {
            id: req.body.id
        }}).then((retorno)=>{return res.redirect('/');
        }).catch((err)=>{console.log(err)})
})

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})