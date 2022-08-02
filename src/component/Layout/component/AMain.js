import Card from '../../Card/index'
import Btn from '../../Btn/index'
import './css/AMain.scss'
import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom'
const AMain = () => {
    const [name, setName] = useState(0);
    useEffect((prevProps,prevStates)=>{
        console.log(prevProps,prevStates,'执行Effect');
    })
    return (
        <>
        <Card title="111" className='aa'>
            <div>{name}</div>
        </Card>
        <Btn click={()=>setName(name+1)}>a</Btn>
        <A name={'李四'} age={18}></A>
        </>
    )
}
class A extends React.Component {
    constructor(props){
        super(props);
        this.state = { counter: 0,timer:null }; //初始化state
        this.ssslog = this.ssslog.bind(this); 
    }
    // componentDidMount(){
    //     console.log('挂载后');
    // }
    // componentWillUnmount(){
    //     console.log('卸载前');
    // }
    ssslog(){
    }
    render() {
        return (
            <>
            <button onClick={this.ssslog}>ssss</button>
            {this.state.counter}
            </>
        )
    }
}
export default AMain;