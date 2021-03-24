import styled from 'styled-components'

const NewAlbumLi = styled.li`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 118px;
  height: 150px;
  margin-left: 11px;
  .album-cover {
    position: relative;
    width: 118px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
    .album-mask {
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-position: 0 -570px;
    }
  }
  .album-title, .album-artist {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    font-size: 12px;
    width: 106.19px;
    height: 18px;
  }
  .album-artist{
    color: #666;
  }
`

export { NewAlbumLi }