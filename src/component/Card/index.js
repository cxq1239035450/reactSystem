import './index.scss'
const Cards = (props)=>{
    const { style,title, children} = props
    console.log(props);
    return (
      <>
      <div className='cards' style={style}>
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