import createPage from "./puppetter.js";
import login from "./login.js";
import getDados from "./cheerio.js";
import express from 'express';
const porta = process.env.PORT || 3000;

const app = express();

app.get('/:codigo/:data',start);
app.use((req,res)=>{res.json({response:false,message:'erro 404'})})

app.listen(porta,()=>{
    console.log('Rodando na porta ',porta);
})


async function start(req,res){
    const {codigo,data} = req.params;

    if(!codigo || !data){
        res.json({response:false,message:'coloque o codigo do aluno e data de nascimento dd/mm/aaaa'});
    }else{
    const web = await createPage();
    await login(web.page,''+codigo,''+data);
   
    
    const pagina = await web.page.evaluate(()=>{
        const tabela = document.querySelector('html');
        return tabela.innerHTML;

    });
    const dados = getDados(pagina);
    web.stop();
    console.log(dados);
    if(!dados['ARTE']){
        res.json({response:false,message:'codigo ou data de nascimento invalidos ou não existe'})
    }else{
       res.json(dados) 
    }
    
}
}