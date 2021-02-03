import React from 'react'
import styles from "../styles/Location.module.css"

const Vibration = () => {

    const onStartVibrate = () => {
        process.browser ? window.navigator.vibrate(100000000) : null
    }
    const onStopVibrate = () => {
        process.browser ? window.navigator.vibrate(10) : null
    }
    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={onStartVibrate}>
                Start Vibration
            </button>
            <button className={styles.btn} onClick={onStopVibrate}>
                Stop the vibration
            </button>
        </div>
    )
}

export default Vibration