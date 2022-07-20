import ASide from './component/ASide'
import AHeader from './component/AHeader'
import AMain from './component/AMain'
import AFooter from './component/AFooter'
import './component/css/Layout.scss'
const Layout = () => { 
    return (
        <>
        <div className='Layout'>

          <ASide></ASide>
          <AHeader></AHeader>
          
          <AMain></AMain>
          <AFooter></AFooter>
        </div>
        </>
    )
}
export default Layout;

