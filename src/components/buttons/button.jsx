const alertLabel =(label)=>{
  alert(`A label desse botão é ${label}`);
}
const Button = ({label})=>{
  return(
    <>
    <button className='button' onClick={()=>alertLabel(label)} >
     {label}
    </button>
    </>
  )
}

export default Button