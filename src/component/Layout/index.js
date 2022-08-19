// import ASide from './component/ASide'
import AHeader from './component/AHeader'
import AMain from './component/AMain'
import AFooter from './component/AFooter'
import './component/css/Layout.scss'
const Layout = () => { 
    return (
        <>
        <div className='Layout'>
          <AHeader></AHeader>
          <div className='contentBox'>
            {/* <ASide></ASide> */}
            <AMain></AMain>
            <AFooter></AFooter>
          </div>
        </div>
        </>
    )
}

export default Layout;

