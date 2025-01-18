import React from 'react'
import Header from './Header'
import useAddMovies from '../hooks/useAddMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useAddMovies();

  return (
    <div>
      <Header />

{/* 
  MainContainer
    -video background
    -video title
  SecondaryContiner
    -MovieList * n
      -cards * n

 */}

 <MainContainer />
 <SecondaryContainer />


    </div>
  )
}

export default Browse
