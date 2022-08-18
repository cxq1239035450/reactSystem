import './index.scss'

class Table extends ReactDOM {
    constructor(){}
    rules = ()=>{

    } 
    tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 ==0) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
    }
    a = {aa:'aaa',bb:'bbb',cc:'ccc'}
    tableData = [
        {aa:'aaa',bb:'bbb',cc:'ccc'},
        {aa:'aaa',bb:'bbb',cc:'ccc'}
    ]
    render(h) {
        return (
        <>
          <table border='0' cellSpacing="0" cellPadding="0" className='table' style={{'width': '682px'}}>
              <thead>
                <tr>
                    <th colSpan="1" rowSpan="1">
                        <div>{tableData}</div>
                    </th>
                    <th colSpan="1" rowSpan="1">
                        <div>{this.rules()}</div>
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
                            <Btn>修改</Btn>
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
                            <Btn>新增</Btn>
                            <Btn>修改</Btn>
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