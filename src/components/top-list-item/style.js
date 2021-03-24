import styled from 'styled-components'

const TopListMainDiv = styled.div `
  width: 230px;
  height: 472px;
`

const TopListTopDiv = styled.div `
  display: flex;
  width: 230px;
  height: 120px;
  padding: 20px 0 0 19px;
    .topImg {
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: pink;
    }
    .tit {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 116px;
      height: 51px;
      margin: 6px 0 0 10px;
      .word {
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        color: #333;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }
      .btn {
      height: 20px;
      .play,.collect {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
      .play {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }
      .collect {
        background-position: -300px -205px;
        &:hover {
          background-position:-300px -235px;
        }
      }
    }
    }
    
`

const TopListContentDiv = styled.div `
  width: 230px;
  height: 352px;
  background-color: red;
   ol{
     height: 319px;
     margin-left: 50px;
     background-color: #fff;
    .song-content {
      width: 170px;
      height: 32px;
      background-color: #ccc;
        .song-count {
        display: inline-block;
        width: 35px;
        height: 32px;
        margin-left: -35px;
        background-color: blue;
        }
        .song-title {
          display: inline-block;
          width: 100%;
          height: 100%;
          background-color: pink;
        }
   }
  
  }
  
`

export {
  TopListMainDiv,
  TopListTopDiv,
  TopListContentDiv
}