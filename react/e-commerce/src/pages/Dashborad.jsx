import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/productsAPI'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsList from '../components/ProductsList'

const Dashborad = () => {
  const [products, setProducts] = useState([])

  async function fetchData(){
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(()=>{
    fetchData()
  },[])
console.log(products)
  return (
    <>
    <Navbar />

    <ProductsList  products={products} />

    <Footer />
</>
  )
}

export default Dashborad