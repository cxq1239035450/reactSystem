import './css/AHeader.scss'
const headerLeftBtn = [
    { id:1,title:'11'},
    { id:2,title:'22'},
    { id:3,title:'33'},
    { id:4,title:'44'},
]
const headerRightBtn = [
    { id:1,title:'11'},
    { id:2,title:'22'},
    { id:3,title:'33'},
    { id:4,title:'44'},
]
const AHeader = () => { 
    return (
        <>
        <div className='headerBox'>
          <div className='flex'>
          {headerLeftBtn.map(e=> (<div key={e.id} className="menuBtn">{e.title}</div>)
          )}
          </div>
          <div className='flex'>
          {headerRightBtn.map(e=> (<div key={e.id} className="menuBtn">{e.title}</div>)
          )}
          </div>
        </div>
        </>
    )
}
export default AHeader;