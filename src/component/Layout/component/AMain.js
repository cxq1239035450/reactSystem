import Card from '../../Card/index'
import Btn from '../../Btn/index'
import './css/AMain.scss'
const AMain = () => { 
    return (
        <>
        <Card  style={{margin:'20px'}} title="111">
            <div>aaa</div>
        </Card>
        <Btn click={()=>console.log(111)} className='aa'>a</Btn>
        </>
    )
}
export default AMain;