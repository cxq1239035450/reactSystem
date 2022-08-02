import './index.scss'
const Btn = (props) =>{
    const {children,click,disabled,className} = props
    console.log(props);
    return (
        <>
            <button className={`btnBox ${className}`}onClick={click} disabled={disabled} style={disabled?{backgroundColor:'gray'}:{}}>
                {children}
            </button>
        </>
    )
}
export default Btn