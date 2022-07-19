
import './App.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate
} from 'react-router-dom';

import { Breadcrumb, Layout, Menu } from 'antd';
import Card from 'antd/lib/card/Card';
// 定义了三个函数组件
const Home = () => {
  return (
<div>我是Home组件</div>
)
}
const Login = () => <div>我是Login组件</div>
const User = () => <div>我是User组件</div>
const Seed = () =>{
  const [count, setCount] = useState('');
  const aaaa = ()=>{
    let log = document.createElement('div')
    log.className = 'cards fx'
    let body =  document.body
    log.innerText='提示信息'
    body.append(log)
    setTimeout(()=>{
      body.removeChild(log)
    },2000)
  }  
  const bbbb = (item)=>{
    item.preventDefault();
    console.log(count);
  }
  return (<div>
  我是Seed组件
  <form>
  <input type={'text'} onChange={(item)=>setCount(item.target.value)}></input>
  <input type={'submit'} onClick={bbbb}></input>
  </form>
  <button onClick={aaaa}>提示按钮</button>
  </div>)
  }
const routers = [
  {
    title: 'About',
    path: '/',
    component: Home,
  },
  {
    title: 'About',
    path: '/nav1',
    component: User,
  },
  {
    title: 'Inbox',
    path: '/nav2',
    component: Login,
  },
  {
    title: 'Seed',
    path: '/nav3',
    component: Seed,
  },
];
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav${key}`,
}));
const click = (item)=>{
}

const Header = ()=>{
  const Navigate = useNavigate()
  return (
    <>
    <div className='Header'>
    {items1.map(e=>{
      return (  <div to={e.label} onClick={()=>Navigate(e.label)}  key={e.key} className="link">{e.key}</div>)
    })}
    </div>
  </>
  )
}
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
const App = () => {

  return (
    <>
    <Router>
      <Header></Header>
      <Cards header={<div>标题</div>} content={<div>内容</div>}></Cards>
      <Routes>
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={item.path}
              element={<item.component />} // 不是老版本的：component 或 render
            />
          );
        })}
      </Routes>
    </Router>
    </>
  );
};
export default App;
