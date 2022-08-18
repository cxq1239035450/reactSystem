import './index.scss'

function loading (){
    return (
        <>
            <div className='loading'>
                <div style={{top:'0',left:'0',background: 'red'}}>
                </div>
                <div  style={{bottom:'0',left:'0',background: 'yellow'}}>
                </div>
                <div  style={{top:'0',right:'0',background: 'blue'}}> 
                </div>
                <div  style={{bottom:'0',right:'0',background: 'green'}}>
                </div>
            </div>
        </>
    )
}
export default loading