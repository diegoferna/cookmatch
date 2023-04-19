import axios from 'axios'
import { useContext } from 'react';
import { DatabaseContext } from '../context';

const data = {
  appId:'3aabdc85',
  appKey: 'ccc6797ba15937f74603dd7a5ba85e74'
}
export async function searchRecipes(query) {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${data.appId}&app_key=${data.appKey}`;
  const {database, setDatabase} = useContext(DatabaseContext)

  console.log('não estou chegando aqui')
  return await axios.get(url)
    .then(response => {
      // A resposta da API é retornada como um objeto JSON.
      // Você pode acessar os resultados da pesquisa no objeto "response.data".
      console.log(response.data.hits)
      return response.data.hits;

    })
    .catch(error => {
      console.log(error);
    });
    
}
