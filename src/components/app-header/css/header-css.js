import styled from 'styled-components'
import sprite_01 from '../.../../../../assets/img/sprite_01.png'

const DivHeader = styled.div`
  box-sizing: border-box;
  height: 70px;
  background-color: #242424;
  font-size: 14px;
  .wrap-v1 {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .wrap-ul {
    margin-left: 177px;
    a {
      display: inline-block;
      height: 70px;
      line-height: 70px;
      text-align: center;
      &:hover {
        background-color: #000;
      }
      &.active {
        position: relative;
      }
      &.active::after {
        position: absolute;
        display: block;
        content: '';
        top: 64px;
        left: 50%;
        transform: translate(-50%,0);
        width: 12px;
        height: 7px;
        background: url(${sprite_01}) no-repeat -226px 0;
      }
      &:nth-child(1) {
        width: 94px;
      }
      &:nth-child(2) {
        width: 94px;
      }
      &:nth-child(3) {
        width: 66px;
      }
      &:nth-child(4) {
        width: 66px;
      }
      &:nth-child(5) {
        width: 80px;
      }
      &:nth-child(6) {
        position: relative;
        width: 108px;
      }
      &:nth-child(6)::after {
        display: block;
        position: absolute;
        content: '';
        top: 15px;
        right: -25px;
        width: 28px;
        height: 19px;
        background: url(${sprite_01}) no-repeat -190px 0;
      }
    }
  }
  .sprite_01.logo {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 177px;
    height: 69px;
    text-indent: -9999px;
  }
  .wrap-right {
    input {
      position: relative;
      width: 158px;
      height: 32px;
      border-radius: 16px;
      padding-left: 26px;
      margin-top: 19px;
      background-color: #ffffff;
      background-position: 0 -99px;
    }
    .btn {
      margin: 19px 0px 0px 12px;
      width: 90px;
      height: 32px;
      padding-left: 16px;
      font-size: 12px;
      color: #cccccc;
      background-color: transparent;
      border: 1px solid #4F4F4F;
    }
    .Ahref {
      font-size: 12px;
      margin-left: 16px;
      color: #787878;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .redBorder {
    height: 5px;
    background-color: #C20C0C;
  }
`

export { DivHeader }