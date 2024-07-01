import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.png'
import slider4 from '../../assets/images/slider4.png'

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
      <SliderComponent arrImages= {[slider1, slider2, slider3, slider4]} />
    </div>
  )
}

export default HomePage