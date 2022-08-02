import './index.scss'
import {Drag} from '../../publicMethods/setDom'
import { useEffect } from 'react';
const Cards = (props)=>{
    const { style,title, children,className} = props
    console.log(props);
    useEffect(()=>{
      Drag('card')
    })
    return (
      <>
      <div className={`cards ${className||''}`} style={style} id="card">
        <div className='cardHeader'>
          {title}
        </div>
        <div className='cardContent'>
          {children}
        </div>
      </div>
      </>
    )
  }
  export default Cards;