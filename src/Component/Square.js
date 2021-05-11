const Square = (props) => {
    return <button style={{backgroundColor:props.color?"#00000":props.value==="X"?"#cdc7be":props.value==="O"?"#87a7b3":"#00000"}} onClick={()=>props.onClick()}>{props.value}</button>
}
export default Square;