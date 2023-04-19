import axios from 'axios'
import { useContext } from 'react';
import { DatabaseContext } from '../context';
import { useDebounce } from '../utils/useDebounce';

export interface Recipe {
  title: string
  img: string
}

const data = {
  appId:'3aabdc85',
  appKey: 'ccc6797ba15937f74603dd7a5ba85e74'
}

export async function ApiConsumer(query: string) {
  console.log('chegamos aqui: ', query)
    const url = `https://api.edamam.com/search?q=${query}&app_id=${data.appId}&app_key=${data.appKey}`;

    const response = await axios.get(url)
    console.log(response.data.hits)
    return response.data.hits.map(item => {
      return {
        title: item.recipe.label,
        img: item.recipe.image
      } 
    }) as Recipe[]
   
  }

