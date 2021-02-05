const fetch=require('node-fetch')

module.exports= async function buscaCep(uf,cidade,rua){
    const response = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`);
    const json = await response.json();

    return json;
}

