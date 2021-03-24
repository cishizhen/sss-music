import styled from 'styled-components'

const HeaderDiv = styled.div`
  height: 35px;
  background-color: #C20C0C;
  .wrap {
    width: 744px;
    margin-left: 180px;
    display: flex;
      a {
      display: inline-block;
      height: 20px;
      color: #ffffff;
      font-size: 12px;
      border-radius: 10px;
      padding: 0 13px;
      margin: 7px 17px 0;
       &:hover, &.active  {
         background-color: #9b0909;
       }
      
      }
    }
`
export { HeaderDiv } 