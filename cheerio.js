import * as cheerio from 'cheerio';

function getDados(htmlPage){

    const BoletinObj=[];
    const ObjDados ={};

    const $ = cheerio.load(""+htmlPage);

    $('[id="grdBoletim"] > tbody > tr').each((i,e)=>{
       const todos = $(e).find('td');

       const materia = $(todos[0]).text();
       
       const perildo1 ={
           notas:$(todos[1]).text(),
           faltas:$(todos[2]).text()
       }
       const perildo2 ={
           notas:$(todos[3]).text(),
           faltas:$(todos[4]).text()
       }
       const perildo3 ={
           notas:$(todos[5]).text(),
           faltas:$(todos[6]).text()
       }
       const perildo4 ={
           notas:$(todos[7]).text(),
           faltas:$(todos[8]).text()
       }

       const dados = {
        Materia:materia,
        perildo1,perildo2,perildo3,perildo4}
        BoletinObj.push(dados)

        for(let item of BoletinObj){
            const materia = item.Materia;
            const Bimestre1 ={
                nota: item.perildo1.notas,
                faltas: item.perildo1.faltas
            }
            const Bimestre2 ={
                nota: item.perildo2.notas,
                faltas: item.perildo2.faltas
           }
           const Bimestre3 ={
            nota: item.perildo3.notas,
            faltas: item.perildo3.faltas
           }
           const Bimestre4 ={
            nota: item.perildo4.notas ,
            faltas: item.perildo4.faltas
       }
            if(!materia){}else {
               ObjDados[""+materia] = {Bimestre1,Bimestre2,Bimestre3,Bimestre4} 
            }
            
        }
     
    }) 
     return ObjDados;
}
export default getDados;