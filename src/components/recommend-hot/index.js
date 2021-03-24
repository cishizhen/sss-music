import React, { memo } from 'react'

import { RecHotDiv } from './style'

export default memo(function RecHotHeader(props) {

  // const [hotList] = useState(['华语','流行','摇滚','民谣','电子'])
  const { title } = props;
  return (
    <RecHotDiv className='sprite_02'>
      <div className='hotLeft'>
        <h3>{title}</h3>
        {/* <ul>
          {
            hotList.map( (item, index) => {
              return <li key={item}><a href="/">{item}</a><span className='line'>|</span></li>
            }
            )
          }
        </ul> */}
      </div>
      <div>
        <h3>更多</h3>
        <i className='arrow'></i>
      </div>
    </RecHotDiv>
  )
})

