export default function InputField (props) {
  return (
    <div className='input-field'>
      <input onChange={props.runVerification} maxlength='16' />
    </div>
  )
}
