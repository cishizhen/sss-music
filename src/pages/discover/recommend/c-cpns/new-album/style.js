import styled from 'styled-components'

const DiskDiv = styled.div`
  position: relative;
  width: 689px;
  height: 188px;
  margin: 20px 0;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  
  .carousel {
    width: 645px;
    height: 180px;
    margin-left: 20px;

    .Albums {
      display: flex !important;
      justify-content: space-between;
      margin-top: 28px;
    }
  }

  .pre,.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
  }

  .pre {
    left: 0;
    background-position: -260px -75px;

    &:hover {
      background-position: -280px -75px;
    }
  }

  .next {
    right: 0;
    background-position: -300px -75px;
    
    &:hover {
      background-position: -320px -75px;
    }
  }
`

export { DiskDiv }