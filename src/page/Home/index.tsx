import React, { useState } from 'react'
import RecipeItem from './components/RecipeItem';
import { ApiConsumer, Recipe } from '../../api/useRecipes';


function Home() {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log('submetendo')
    event.preventDefault();
    const results = await ApiConsumer(query);
    setSearchResults(results);
  };
     
    return (
      <main className='w-full !h-[calc(100vh-128px-80px)]  flex flex-col items-center justify-center absolute top-36'>
      <div className="w-2/3 max-w-7xl py-6 sm:px-6 lg:px-8 ">
          <div className='mb-4'>
            <span className='font-sans text-6xl text-orange font-bold '>Cook</span>
            <span className='font-sans text-6xl text-green font-bold'>Match</span>

          </div>
          <form  onSubmit={handleSearch}>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                  </div>
                  <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900  shadow-2xl rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A receita que tem na sua casa..." required />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
              </div>
          </form>
      </div>
      <div className='w-2/3 pt-4 flex flex-wrap justify-between gap-4 max-h-96 overflow-auto'>
         {searchResults.map(recipe => <RecipeItem  recipe={recipe} />)}
      </div>
  </main>
    )
}

export default Home;