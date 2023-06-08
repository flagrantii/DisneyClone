
import './App.css'
import GenreMovieList from './component/GenreMovieList'
import Header from './component/Header'
import ProductionHouse from './component/ProductionHouse'
import Slide from './component/Slide'

function App() {

  return (
    <>
      <div className="">
        <Header/>
        
        <Slide/>

        <ProductionHouse/>

        <GenreMovieList/>
        
      </div>
    </>
  )
}

export default App
