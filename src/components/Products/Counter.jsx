

export const Counter = (props) => {
   const {counter,SetCounter,children} = props
  return (
    <div></div>
    // <div>
    //     <button onClick={() => SetCounter(counter+1)} >+</button> <br />
    //     <span>{children}</span> <br />
    //     <button onClick={()=> SetCounter(counter-1)}>-</button>
    // </div>
  )
}
export default Counter  