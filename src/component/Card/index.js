import './index.scss'
import { useEffect,forwardRef } from 'react';
const Cards = forwardRef((props, ref)=>{
    const { style,title, children,className} = props
    return (
      <>
      <div className={`cards ${className||''}`} style={style} id="card" ref={ref}>
        <div className='cardHeader'>
          {title}
        </div>
        <div className='cardContent'>
          {children}
        </div>
      </div>
      </>
    )
  })
  export default Cards;