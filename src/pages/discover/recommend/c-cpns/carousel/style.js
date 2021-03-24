import styled from 'styled-components'

import banner_sprite from '../../../../../assets/img/banner_sprite.png'

const BanDivWrapper = styled.div`
  height: 283px;
  background: url(${props => props.bImg})  center center;
  background-size: 6000px;
`

const BanDiv = styled.div`
  position: relative;
  display: flex;
  height: 285px;

  .carousel {
    width: 730px;
    height: 283.88px;

    a {
      display: block;
        img {
          width: 730px;
          height: 283px;
        }
    }

    .dots li  {
    width: 25px;
    height: 25px;
    }

    .dots li  button{
    width: 100%;
    height: 100%;
    background: url(${banner_sprite}) no-repeat 3px -343px;
    transition: none;
    }

    .dots li.slick-active button{
      background: url(${banner_sprite}) no-repeat -16px -343px;
    }
  }
 


  .btn1,.btn2 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;
  }
  .btn1 {
    left: -65px;
    background-position: 0 -360px;
      &:hover {
        background-position: 0 -430px;
      }
  }

  .btn2 {
    right: -65px;
    background-position: 0 -508px;
      &:hover {
        background-position: 0 -578px;
      }
  }
`
const DownloadCover = styled.div`
  width: 254px;
  height: 285px;
  background-position: 0 0;
`
export {
  BanDiv,
  DownloadCover,
  BanDivWrapper
}