import { useState } from 'react'
import Product from './Components/Product/Product'
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
      <ItemListContainer greeting='Versus Gaming' />
    </div>
      <div>
        <Product
        img="../Img/nintendo.jpg"
        titulo="Nintendo Switch Oled"
        descripcion="Consola Nintendo Switch Oled"
        precio={400}/>
        <Product
        img="../Img/PlayStaion5.jpg"
        titulo="PlayStation 5"
        descripcion="Consola PlayStation 5"
        precio={700}/>
        <Product
        img="../Img/XboxSeriesX.png"
        titulo="Xbox Series X"
        descripcion="Consola Xbox Series X"
        precio={600}/>
  </div>
    </>
  )
}

export default App
