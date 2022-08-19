import './index.scss'
function Btn(props) {
    const { children, click, disabled, className, style } = props

    return (
        <>
            <button className={`btnBox ${className}`} onClick={click} disabled={disabled} style={disabled ? { ...style, backgroundColor: 'gray' } : { ...style }}>
                {children}
            </button>
        </>
    )
}
export default Btn