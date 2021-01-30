import React from 'react'

const Vibration = () => {

    const vibrateHandler = () => {

        navigator.vibrate(1000)

    }
    return (
        <div>
            <button onClick={vibrateHandler}>
                Vibrate The Phone
            </button>
        </div>
    )
}

export default Vibration