export default function ValidationResult(props) {
    return (
      <div className="validation-result">
        {props.luhn? <p id="valid">VALID</p> :<p id="invalid">INVALID</p>}
      </div>
    )
  }