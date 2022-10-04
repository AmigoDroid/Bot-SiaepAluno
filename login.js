const urlAlvo = 'https://siaep.educacao.ma.gov.br/frmLoginAluno.aspx';


 async function login(page,codigo,nascimento){
    await page.goto(urlAlvo);

    console.log('esperando ipunt do codigo...');
    await page.waitForSelector('[name="txtCodigoAluno"]');

    console.log('digitando codigo...');
    await page.type('[name="txtCodigoAluno"]',codigo);

    console.log('digitando data de nascimento...');
    await page.type('[name="txtDataNascimento"]',nascimento);

    console.log('apertando botão login!');
    await page.click('[name="cmdLogin"]');

    console.log('esperando o nome aparecer');
    await page.waitForSelector('[name="txtNomeAluno"]');

    console.log('apertando botão Pular');
    await page.click('[name="cmdSair"]');

    console.log('esperando a matricula');
    await page.waitForSelector(`[href="javascript:__doPostBack('grdMatricula','$0')"]`);

    console.log('Apertando na primeira matricula');
    await page.click(`[href="javascript:__doPostBack('grdMatricula','$1')"]`);

    console.log('esperando o nome aparecer');
    await page.waitForSelector(`[id="lblCabecalho"]`);
    console.log('BOLETIN DISPONIVEL!');
}
export default login;