import './index.scss'
const Cards = (props)=>{
    const { title, children} = props
    console.log(props);
    return (
      <>
      <div className='cards'>
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