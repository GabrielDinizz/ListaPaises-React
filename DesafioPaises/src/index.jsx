

const valores=fetch('./paises.json').then(res=>{
    res.json().then(dados=>{
        mostraDados(dados);
        });
}).catch(erro=>{
    console.log(erro+" erro na requisição")
});

function mostraDados(dados){
    paises=document.querySelector('#paises');

    dados.slice(0, 5).forEach(acesso => {

       paises.innerHTML+=` <tr> <td> ${acesso.name} </td> <td> ${acesso.capital}</td> <td>${acesso.alpha2Code}</td> <td><img src=${acesso.flag}></td> </tr> `
        
    });
}


function paises(){
   

return(
    <>
        <table id="paises">

        </table>
    </>

)

}

export default paises;