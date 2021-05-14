const Square = (props) => {
    return <button style={{backgroundColor:props.color?"#ffffff":props.value==="X"?"#eec4c4":props.value==="O"?"#f29191":"#ffffff"}} onClick={()=>props.onClick()}>{props.value}</button>
}
export default Square;