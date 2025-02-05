import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./style";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";
import slider4 from "../../assets/images/slider4.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  // const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(6);
  const [typeProducts, setTypeProducts] = useState([]);

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ProductService.getAllProduct(search, limit);

    return res;
  };

  // const fetchAllTypeProduct = async () => {
  //   const res = await ProductService.getAllTypeProduct()
  //   if(res?.status === 'OK') {
  //     setTypeProducts(res?.data)
  //   }
  // }

  const fetchAllTypeProduct = async () => {
    try {
      const res = await ProductService.getAllTypeProduct();
      if (res?.status === "OK") {
        setTypeProducts(res?.data);
      } else {
        console.warn("Unexpected response status:", res?.status);
      }
    } catch (error) {
      console.error("Error fetching product types:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
    }
  };
  const {
    isPending,
    data: products,
    isPreviousData,
  } = useQuery({
    queryKey: ["products", limit, searchDebounce],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  return (
    <>
      {/* // <Loading isPending={isPending || loading}> */}
      <div style={{ width: "1280px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        className="body"
        style={{ width: "100%", backgroundColor: "#efefef" }}
      >
        <div
          id="container"
          style={{ height: "auto", width: "1280px", margin: "0 auto" }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
          <div
            style={{
              width: "1280px",
              backgroundColor: "#fff",
              padding: "6px",
              margin: "16px 0",
              borderRadius: "4px",
            }}
          >
            <WrapperProducts>
              {products?.data?.map((product) => {
                return (
                  <CardComponent
                    key={product._id}
                    countInStock={product.countInStock}
                    description={product.description}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    type={product.type}
                    selled={product.selled}
                    discount={product.discount}
                    id={product._id}
                  />
                );
              })}
            </WrapperProducts>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <WrapperButtonMore
                textButton={isPreviousData ? "Load more" : "Xem thêm"}
                type="outline"
                styleButton={{
                  border: `1px solid ${
                    products?.total === products?.data?.length
                      ? "#f5f5f5"
                      : "#1791c8"
                  }`,
                  color: `${
                    products?.total === products?.data?.length
                      ? "#f5f5f5"
                      : "#1791c8"
                  }`,
                  width: "240px",
                  height: "38px",
                  borderRadius: "4px",
                }}
                disabled={
                  products?.total === products?.data?.length ||
                  products?.totalPage === 1
                }
                styleTextButton={{
                  fontWeight: 500,
                  color: products?.total === products?.data?.length && "#fff",
                }}
                onClick={() => setLimit((prev) => prev + 6)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* // </Loading> */}
    </>
  );
};

export default HomePage;
