import './styles.css'
import { useState } from "react"
import InputField from "./components/InputField"
import ValidationResult from "./components/ValidationResult"

export default function App() {
    const [luhn, setLuhn] = useState(false)
    const runVerification = (e) => {
            let verificationNum = [...e.target.value]
            let checkSum = 0
            for (let i = e.target.value.length-2; i >= 0; i -= 2) {
                verificationNum[i] = parseInt(verificationNum[i] * 2)
            }
            verificationNum=verificationNum.join("")
            for (let i = 0; i < verificationNum.length; i++) {
                checkSum = checkSum + parseInt(verificationNum[i])
            }
            if (checkSum%10===0) {
                setLuhn(true)
            } else setLuhn(false)
    }

    return (
        <div className="App">
            <h1>Luhn Algorithm Validation</h1>
            <InputField runVerification={runVerification} />
            <ValidationResult luhn={luhn} />
        </div>
    )
}