import './styles.css'
import { useState } from "react"
import InputField from "./components/InputField"
import ValidationResult from "./components/ValidationResult"

export default function App() {
    const [luhn, setLuhn] = useState(false)

    const runVerification = (e) => {
        e.target.value ?
            setLuhn(true)
            :
            setLuhn(false)

    }

    return (
        <div className="App">
            <InputField runVerification={runVerification} />
            <ValidationResult luhn={luhn} />
        </div>
    )
}