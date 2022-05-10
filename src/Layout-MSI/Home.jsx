import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Laptop from './Laptop'
import Nav from './Nav'
import Smartphone from './Smartphone'

export default function  () {
  return (
    <body className='bg-dark'>
      <Nav/>
      <Carousel/>
      <Smartphone/>
      <Laptop/>
      <Footer/>
    </body>
  )
}
