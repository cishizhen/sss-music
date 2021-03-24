import styled from 'styled-components'
import foot_enter from '../.../../../../assets/img/foot_enter.png'
import foot_enter_tt from '../.../../../../assets/img/foot_enter_tt.png'

const DivFooter = styled.div`
  border-top: 1px solid #d3d3d3;
  height: 173px;
  background-color: #F2F2F2;
  .wrap-v1 {
    display: flex;
    justify-content: space-between;
    height: 115px;
    p{
      width: 520px;
      height: 24px;
    }
    .footer-left {
      padding-top: 15px;
      width: 520px;
      height: 115px;
      .firstList {
        display: flex;
        justify-content: start;
        width: 520px;
        height: 24px;
      }
      .cutUp {
        display: inline-block;
        color: #C2C2C2;
        width: 3.13px;
        height: 14px;
        margin: 0 8px 0 10px;
      }
      p {
        color: #666666
      }
    }
    .footer-right {
      display: flex;
      margin-top: 33px;
      justify-content: space-between;
      width: 420px;
      height: 70px;
      a {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .rightImage {
        display: inline-block;
        width: 50px;
        height: 45px;
        background:url(${foot_enter}) no-repeat 0px 9999px;
        background-size: 110px 552px;
       }
       .rightFont {
        display: inline-block;
        width: 72px;
        height: 14px;
        background: url(${foot_enter_tt}) no-repeat 0 9999px;
        background-size: 180px 139px;
       }
      }
      a:nth-child(1) {
        .rightImage {
          background-position: -63px -456.5px;
        }
        .rightFont {
          background-position: 0 -108px;
        }
      }
      a:nth-child(2) {
        .rightImage {
          background-position: -63px -101px;
        }
        .rightFont {
          background-position: 7px -91px;
        }
      }
      a:nth-child(3) {
        .rightImage {
          background-position: 0 0;
        }
        .rightFont {
          background-position: 8px 0;
        }
      }
      a:nth-child(4) {
        .rightImage {
          background-position: -60px -50px;
        }
        .rightFont {
          background-position: 8px -54px;
        }
      }
      a:nth-child(5) {
        .rightImage {
          background-position: 0 -101px;
        }
        .rightFont {
          background-position: 7px -72px;
        }
      }
      
    }
  }
`
export {DivFooter}