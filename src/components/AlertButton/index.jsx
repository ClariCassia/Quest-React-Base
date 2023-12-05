const AlertButton = ({ label }) => {
  return <button className='button'
    onClick={() => alert(`A label desse botão é ${label}`)} >
    {label}
  </button>


}

export default AlertButton

