import React, { useContext, useEffect, useMemo, useState } from 'react'
import Header from './components/header';
import MenuNavigation from '../../components/menu';
import {  searchRecipes } from '../../api/server';
import RecipeItem from './components/reciepeItem';
import { DatabaseContext } from '../../context';

function Home() {
    const [item, setItem] = useState('')
    const {database} = useContext(DatabaseContext)

  

    const handleSearchInputChange = (event) => {
        console.log(event.target.value)
        setItem(event.target.value);
        debounce(async () => {
          // função que faz a requisição à API
          console.log('estou entrando aqui')
          try {
            await searchRecipes(item)

          }catch(err){
            console.log(err)
          }
        }, 5000);
      };

      const debounce = (fn, delay) => {
        console.log('nem chamad')
        let timeoutId;
    
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
        
      };
    // const dados = useMemo(async () => {
    //    await searchRecipes(item)
    // },[item, setItem])
    // useEffect(() => {
    //     searchRecipes(item)
    // },[database])

    // console.log(database)

    return (
        <div className="h-screen">
            <MenuNavigation />
            <Header />
            <main className='w-full !h-[calc(100vh-128px-80px)]  flex flex-col items-center justify-center absolute top-36'>
                <div className="w-2/3 max-w-7xl py-6 sm:px-6 lg:px-8 ">
                    <form >   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input value={item} onChange={handleSearchInputChange} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A receita que tem na sua casa..." required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                        </div>
                    </form>
                </div>
                <div className='w-2/3 pt-4 flex flex-wrap justify-between gap-4 max-h-96 overflow-auto'>
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />
                    <RecipeItem />

                </div>
            </main>
        </div>

       
    )
}

export default Home;