import Card from '../../Card/index'
import Btn from '../../Btn/index'
import Loading from '../../Loading/index'
import Table from '../../Table/index'
import './css/AMain.scss'
import React, {  useEffect, useState,useRef, createRef, Fragment } from 'react';
import notify from '../../Notification';
import message from '../../Message';
import {Drag} from '../../../publicMethods/setDom'

// import ReactDOM from 'react-dom'
const AMain = () => {
    const [name, setName] = useState('内容');
    const ref = useRef(null)
    useEffect((prevProps,prevStates)=>{
        Drag(ref.current)
        console.log(ref,'执行Effect');
    },[ref])
    return (
        <>
        <Card title="function" className='aa' ref={ref} style={{height:'200px',width:'200px'}}>
            <div>{name}</div>
        </Card>
        <Btn click={()=>{setName(name+1);notify('欢迎','欢迎光临')}}>a</Btn>
        <A style={{height:'200px',width:'300px'}}>
            <div>{name}</div>
        </A>
        </>
    )
}
class A extends React.Component {
    constructor(props){
        super(props);
        this.state = { counter: 0,timer:null,show:false }; //初始化state
        this.ref = createRef(null)
    }

    componentDidUpdate(){
        console.log('更新',this.ref);
    }
    componentWillUnmount(){
        console.log("即将卸载");
    }
    componentDidMount(){
        console.log('挂载后',this.ref);
    }
    sumbit(e){
        e.preventDefault();
        console.log(this);
    }
    change(e){
        this.setState({
            counter:e.target.value
        })
    }
    showDialog(e){
        let show = !this.state.show
        this.setState({
            show
        })
        console.log(this);
    }
    clearDialog(){
        return (
            <div className='dialog'>
                <div className='mask_layer' onClick={(e)=>this.showDialog(e)}></div>
                <Card title="function" className='page_center' style={{height:'30vh',width:'50vw'}}  ref={this.ref}>
                    <div>测试</div>
                    <div onClick={(e)=>this.showDialog(e)}>x</div>
                </Card>
            </div>
        )
    }
    ajax(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                return resolve({data:{},message:'成功',code:1})
            },1000)
            // return reject({code:0})
        })
    }
    ssr=async()=>{
        notify('标题','测试')
        // let res =  await this.ajax()
        // if(res.code ===1){
        //     notify('标题',res.message)
        // }
    }
    sh=()=>{
        message('skyblue','测试')
        // let res =  await this.ajax()
        // if(res.code ===1){
        //     notify('标题',res.message)
        // }
    }
    render() {
        return (
            <>
                <Card title="class" className='aa' style={this.props.style}>
                    {this.props.children}
                </Card>
                <form>
                    <input type={'input'} value={this.state.counter} onChange={(e)=>this.change(e)}></input>
                    <input type={'submit'} onClick={(e)=>this.sumbit(e)}></input>
                </form>
                <button onClick={(e)=>this.showDialog(e)} className={'button'} style={{'margin':'30px'}}>
                    <div className='contain'>
                    <Loading></Loading>
                    </div>
                </button>
                <Table></Table>
                <div onClick={this.ssr}>
                    <span>A</span>
                </div>
                <Btn click={()=>this.sh()}>message</Btn>
                {this.state.show && this.clearDialog()}
                
            </>
        )
    }
}
export default AMain;