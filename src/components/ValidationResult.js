export default function ValidationResult(props) {
    return (
      <div className="validation-result">
        {props.luhn? <p>true</p> :<p>false</p>}
      </div>
    )
  }