import { Col, Image, Rate, Row } from "antd";
import React from "react";
import imageProductSmall from "../../assets/images/imagesSmall.webp";
import imageProduct from "../../assets/images/bd-mang-nhen.webp";

import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperBtnQualityProduct,
  WrapperInfoName,
  WrapperParameter,
  WrapperProducts,
} from "./style";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../LoadingComponent/Loading";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderProduct, resetOrder } from "../../redux/slides/orderSlide";
import { convertPrice, initFacebookSDK } from "../../utils";
import { useEffect } from "react";
import * as message from "../Message/Message";
import LikeButtonComponent from "../LikeButtonComponent/LikeButtonComponent";
import CommentComponent from "../CommentComponent/CommentComponent";

import CardComponentInDetails from "../CardComponentInDetails/CardComponentInDetails";
import { useDebounce } from "../../hooks/useDebounce";


const ProductDetailsComponent = ({ idProduct }) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [limit, setLimit] = useState(5);
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [errorLimitOrder, setErrorLimitOrder] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onChange = (value) => {
    setNumProduct(Number(value));
  };

  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1];
    if (id) {
      const res = await ProductService.getDetailsProduct(id);
      return res.data;
    }
  };
  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ProductService.getAllProduct(search, limit);

    return res;
  };
  const {

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
    initFacebookSDK();
  }, []);

  useEffect(() => {
    const orderRedux = order?.orderItems?.find(
      (item) => item.product === productDetails?._id
    );
    if (
      orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
      (!orderRedux && productDetails?.countInStock > 0)
    ) {
      setErrorLimitOrder(false);
    } else if (productDetails?.countInStock === 0) {
      setErrorLimitOrder(true);
    }
  }, [numProduct]);

  useEffect(() => {
    if (order.isSucessOrder) {
      message.success("Đã thêm vào giỏ hàng");
    }
    return () => {
      dispatch(resetOrder());
    };
  }, [order.isSucessOrder]);

  const handleChangeCount = (type, limited) => {
    if (type === "increase") {
      if (!limited) {
        setNumProduct(numProduct + 1);
      }
    } else {
      if (!limited) {
        setNumProduct(numProduct - 1);
      }
    }
  };

  const { isPending, data: productDetails } = useQuery({
    queryKey: ["product-details", idProduct],
    queryFn: fetchGetDetailsProduct,
    enabled: !!idProduct,
  });
  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname });
    } else {
      // {
      //     name: { type: String, required: true },
      //     amount: { type: Number, required: true },
      //     image: { type: String, required: true },
      //     price: { type: Number, required: true },
      //     product: {
      //         type: mongoose.Schema.Types.ObjectId,
      //         ref: 'Product',
      //         required: true,
      //     },
      // },
      const orderRedux = order?.orderItems?.find(
        (item) => item.product === productDetails?._id
      );
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        dispatch(
          addOrderProduct({
            orderItem: {
              name: productDetails?.name,
              amount: numProduct,
              image: productDetails?.image,
              price: productDetails?.price,
              product: productDetails?._id,
              discount: productDetails?.discount,
              countInstock: productDetails?.countInStock,
            },
          })
        );
      } else {
        setErrorLimitOrder(true);
      }
    }
  };

  return (
    <Loading isPending={isPending}>
      <Row
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "4px",
          height: "110%",
        }}
      >
        <Col
          span={10}
          style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
        >
          <Image
            src={productDetails?.image}
            alt="image product"
            preview={false}
          />
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            <WrapperStyleColImage span={4} sty>
              <WrapperStyleImageSmall
                src={productDetails?.image}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={productDetails?.image}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={productDetails?.image}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={productDetails?.image}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={productDetails?.image}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span={14} style={{ paddingLeft: "10px" }}>
          <WrapperStyleNameProduct>
            {productDetails?.name}
          </WrapperStyleNameProduct>
          <div>
            <Rate
              allowHalf
              defaultValue={productDetails?.rating}
              value={productDetails?.rating}
            />
            <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              {convertPrice(productDetails?.price)}
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className="address">{user?.address}</span> -
            <span className="change-address">Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <LikeButtonComponent
            dataHref={
              process.env.REACT_APP_IS_LOCAL
                ? "https://developers.facebook.com/docs/plugins/"
                : window.location.href
            }
          />
          <div
            style={{
              margin: "10px 0 20px",
              padding: "10px 0",
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <div style={{ marginBottom: "10px" }}>Số lượng</div>
            <WrapperQualityProduct>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleChangeCount("decrease", numProduct === 1)}
              >
                <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
              <WrapperInputNumber
                onChange={onChange}
                defaultValue={1}
                max={productDetails?.countInStock}
                min={1}
                value={numProduct}
                size="small"
              />
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleChangeCount(
                    "increase",
                    numProduct === productDetails?.countInStock
                  )
                }
              >
                <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
            </WrapperQualityProduct>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div>
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "rgb(255, 57, 69)",
                  height: "48px",
                  width: "220px",
                  border: "none",
                  borderRadius: "4px",
                }}
                onClick={handleAddOrderProduct}
                textButton={"Chọn mua"}
                styleTextButton={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              ></ButtonComponent>
              {errorLimitOrder && (
                <div style={{ color: "red" }}>San pham het hang</div>
              )}
            </div>
            <ButtonComponent
              size={40}
              styleButton={{
                background: "#fff",
                height: "48px",
                width: "220px",
                border: "1px solid rgb(13, 92, 182)",
                borderRadius: "4px",
              }}
              textButton={"Mua trả sau"}
              styleTextButton={{ color: "rgb(13, 92, 182)", fontSize: "15px" }}
            ></ButtonComponent>
          </div>{" "}
        </Col>
</Row>
    <Row style={{ gap: '50px'}} >
        <Col span={12} style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "4px",
          height: "110%",
          margin:'14px 0'
        }}>
          <div class="container">
            <div class="product-info">
              <h2>Thông tin sản phẩm</h2>
              <Image src={imageProduct} style={{width:'600px', height:'430px'}} preview={false} ></Image>
            </div>
            <div >
              <h2>Thông số kỹ thuật</h2>
              <table style={{  width: '100%', borderCollapse: 'collapse'}}>
                <tr style={{ display: 'flex'}}>

                  <WrapperInfoName>Mainboard</WrapperInfoName>
                  <WrapperParameter>MSI MEG Z790 ACE DDR5</WrapperParameter>
                </tr>
                <tr style={{ display: 'flex'}}>
                  <WrapperInfoName>CPU</WrapperInfoName>
                  <WrapperParameter>
                    Intel Core i9 14900K / Turbo up to 6.0GHz / 24 Nhân 32 Luồng
                    / 36MB / LGA 1700
                  </WrapperParameter>
                </tr>
                <tr style={{ display: 'flex'}}>
                  <WrapperInfoName>RAM</WrapperInfoName>
                  <WrapperParameter>
                    Corsair Dominator Platinum 64GB (2x32GB) RGB 6000 DDR5
                  </WrapperParameter>
                </tr>
                <tr style={{ display: 'flex'}}>
                  <WrapperInfoName>VGA</WrapperInfoName>
                  <WrapperParameter>MSI GeForce RTX 4080 SUPER 16G GAMING X SLIM</WrapperParameter>
                </tr>
              </table>
            </div>
          </div>
        </Col>
        <Col span={11} 
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "4px",
          height: "110%",
          width: '600px',
          margin:'14px 0'
        }}
        >
          <div class="similar-products">
            <h2>Sản phẩm tương tự</h2>

            <WrapperProducts>
              {products?.data?.map((product) => {
                return (
                  <CardComponentInDetails
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
            

            
          </div>
        </Col>
      </Row>
    </Loading>
  );
};

export default ProductDetailsComponent;
