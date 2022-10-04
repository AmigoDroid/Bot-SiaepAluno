import pupter from 'puppeteer';
async function createPage(){
    const web = await pupter.launch({headless:false});
    const page = await web.newPage();
    async function stop(){
       await web.close();
       console.log('Navegador fechado;');
    }
    return {page,stop};
}
export default createPage;