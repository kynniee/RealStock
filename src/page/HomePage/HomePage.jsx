import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";
import slider4 from "../../assets/images/slider4.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import { WrapperButtonMore, WrapperProducts } from "../../components/NavBarComponent/style";
import * as ProductService from '../../services/ProductService'
import { isPending } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";



const HomePage = () => {
  const arr = ["PC", "Laptop", " linh kien"];
  const fetchProductAll = async ()=>{
   const res= await ProductService.getallProduct()
   console.log('res',res);
   return res
  }
  const {isPending, data: products} = useQuery(['products'], fetchProductAll,{ retry: 3, retryDelay: 1000})
  console.log("data", products);
  return (
    <>
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#fefefe' }} >
      <div
        id="container"
        style={{ height: '1000px', width: '1270px', margin: '0 auto' }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "10px",
            justifyContent: "center",
          }}
        >
          <WrapperButtonMore
            textButton="xem thêm"
            type="outline"
            styleButton={{
              border: " 1px solid rgb(11,116,229)",
              color: "rgb(11,116,229)",
              width: "240px",
              height: " 38px",
              borderRadius: "4px",
            }}
            styleTextButton ={{ fontWeight: '500'  }}
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
