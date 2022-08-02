import './css/AHeader.scss'
import router from '../../../router/index.js'

// import {Link} from 'react-router'
const headerRightBtn = [
    { id:1,title:'11'},
    { id:2,title:'22'},
    { id:3,title:'33'},
    { id:4,title:'44'},
]
const AHeader = () => { 
    console.log(router);
    return (
        <>
        <div className='headerBox'>
          <div className='flex'>
          {router.map(e=> (
          <div key={e.path} className="menuBtn">{e.name}</div>
          
          )
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