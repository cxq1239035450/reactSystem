import './index.scss'
import React from 'react';
import Btn from '../Btn/index'
class Table extends React.Component {
    constructor(props){
        super(props)
    }
    setColor(){
        
    }
    render(h) {
        return (
        <>
          <table border='0' cellSpacing="0" cellPadding="0" className='table' style={{'width': '682px'}}>
              <thead>
                <tr>
                    <th colSpan="1" rowSpan="1">
                        <div></div>
                    </th>
                    <th colSpan="1" rowSpan="1">
                        <div></div>
                    </th>
                    <th colSpan="1" rowSpan="1">
                        <div>操作</div>
                    </th>
                </tr>
              </thead>
              <tbody>
                <tr colSpan="1" rowSpan="1">
                    <td>
                        <div className='cell'>11</div>
                    </td>
                    <td>
                        <div className='cell'>12</div>
                    </td>
                    <td>
                        <div className='cell'>
                            <Btn>新增</Btn>
                            <Btn style={{'marginLeft':'10px'}}>修改</Btn>
                        </div>
                    </td>
                </tr>
                <tr colSpan="1" rowSpan="1">
                    <td>
                        <div className='cell'>21</div>
                    </td>
                    <td>
                        <div  className='cell'>22</div>
                    </td>
                    <td>
                        <div className='cell'>
                            <Btn click={()=>console.log('新增')}>新增</Btn>
                            <Btn style={{'marginLeft':'10px'}}  click={()=>console.log('修改')}>修改</Btn>
                        </div>
                    </td>
                </tr>
              </tbody>
          </table>
        </>
        )   
    }
}
export default Table