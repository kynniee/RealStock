import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'

const HomePage = () => {
  const arr =['PC', 'Laptop',' linh kien']
  return (
    <div style={{padding: '0 120px'}}>
      <WrapperTypeProduct>
      {arr.map((item)=>{
        return(
          <TypeProduct name={item} key={item} />
        )
      })}


      </WrapperTypeProduct>
      <SliderComponent />
    </div>
  )
}

export default HomePage