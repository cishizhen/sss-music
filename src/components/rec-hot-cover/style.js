import styled from 'styled-components'

const HotCoverDiv = styled.div`
  width: 182px;
  height: 234px;
  padding: 0 0 30px 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: cneter;
  .content {
    position: relative;
    width: 140px;
    height: 140px;
    img {
      width: 140px;
      height: 140px;
    }
    .mask {
      position: absolute;
      display: inline-block;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
      background-position: 0 0;
    }
  }
  .dec {
    width: 140px;
    height: 47px;
    a {
      width: 100%;
      height: 100%;
      font-size: 14px;
      color: #000;
      overflow: hidden;
      text-overflow:ellipsis;
      display: -webkit-box;
    /*设置子元素排列方式*/
    /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /*设置显示的行数，多出的部分会显示为...*/
      -webkit-line-clamp: 2;
      &:hover {
        text-decoration: underline;
        
      }
    }
  }
`

export { HotCoverDiv }