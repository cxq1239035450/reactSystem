// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
//     useNavigate
//   } from 'react-router-dom';
// const Header = ()=>{
//     const Navigate = useNavigate()
//     return (
//       <>
//         <div className='Header'>
//         {items1.map(e=>{
//          return (  <div to={e.label} onClick={()=>Navigate(e.label)}  key={e.key} className="link">{e.key}</div>)
//         })}
//         </div>
//       </>
//     )
//   }
//   const App = () => {

//     return (
//       <>
//       <Router>
//         <Header></Header>
//         <Routes>
//           {routers.map((item, index) => {
//             return (
//               <Route
//                 key={index}
//                 exact
//                 path={item.path}
//                 element={<item.component />} // 不是老版本的：component 或 render
//               />
//             );
//           })}
//         </Routes>
//       </Router>
//       </>
//     );
//   };
const AMain = () => { 
    return (
        <>
        AMain
        </>
    )
}
export default AMain;