const Cards = (props)=>{
    const { header, content} = props
    return (
      <>
      <div className='cards'>
      <div className='cardHeader'>
        {header}
      </div>
      <div className='cardContent'>
        {content}
      </div>
      </div>
      </>
    )
  }
  export default Cards;