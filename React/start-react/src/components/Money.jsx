export default function Money(props) {
  function handleChange(e) {
    props.transformMoney(e.target.value)
  }


  return (
    <fieldset>
      <legend>{props.title}</legend>
      <input type="text" value={props.money} onChange={handleChange}/>
    </fieldset>
  )
} 