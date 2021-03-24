import styled from 'styled-components'

const RecHotDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  border-bottom: 2px solid #C10D0C;
  background-position: -225px -156px;
  .hotLeft {
    display: flex;
    margin-left: 34px;
    h3 {
      font-size: 20px;
      line-height: 35px;
    }
    ul {
      display: flex;
      margin: 7px 0 0 20px;
      li {
        a {
        color: #666;
        }
        .line {
          margin: 0 10px;
          color: #ccc;
        }
      }
    }
    .arrow {
      width: 12px;
      height: 12px;
      background-color: red;
    }
  }
 
`

export { RecHotDiv }