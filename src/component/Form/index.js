import React from 'react';
import './index.scss'
class form extends React.Component {
    constructor(props){
        super(props)
    }
    render(h) {
        h(
            <form autocomplete='off'>
                <input>1</input>
                <select>2</select>
            </form>
        )
    }
}
export default form
console.log(111);