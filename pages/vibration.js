import React from 'react'

const Vibration = () => {

    const vibrateHandler = () => {

        process.browser ? window.navigator.vibrate(1000) : null

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