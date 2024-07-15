import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSliderStyle = styled(Slider)`
    & .slick-arrow.slick-prev {
  left: 8px;
  top: 50%;
  z-index: 1;
  &:before {
    font-size: 40px;
    color: #fff;
  }
}

& .slick-arrow.slick-next {
  right: 26px;
  top: 50%;
  z-index: 1;
  &:before {
    font-size: 40px;
    color: #fff;
  }
}

& .slick-dots {
  z-index: 10;
  bottom: -2px !important;
  li {
    button {
      &:before {
        color: #ccc;
      }
    }
  }
  li.active {
    button{
        &::before{
            color: #fff;
        }
    }
  }
}

`