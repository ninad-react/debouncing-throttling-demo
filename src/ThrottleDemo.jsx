import React, { useState } from 'react'

const ThrottleDemo = () => {

    const [inputValue, setInputValue] = useState('');
    const [processedValue, setProcessedValue] = useState('');
    const [isThrottled, setIsThrottled] = useState(false)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

        if(!isThrottled) {
            setIsThrottled(true);

            setTimeout(() => {
                setIsThrottled(false)
                setProcessedValue(e.target.value)
            }, 1000)
        }
    }

  return (
    <div>
        <input 
        type='text'
        placeholder='Type Something...'
        value={inputValue}
        onChange={handleInputChange}
        />
        <p>Actual Value: {inputValue}</p>
        <p>Processed Value: {processedValue}</p>
    </div>
  )
}

export default ThrottleDemo