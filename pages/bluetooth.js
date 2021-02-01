import React from 'react'
import styles from "../styles/Location.module.css"
const Bluetooth = () => {

    const bluetoothHandler = () => {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
        })
            .then(device => {
                // Human-readable name of the device.
                console.log(device.name);
                console.log(device.id);
                // Attempts to connect to remote GATT Server.
                return device.gatt.connect();
            })
            .then(server => { /* ... */ })
            .catch(error => { console.error(error); });
    }
    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={bluetoothHandler}>
                bluetooth
            </button>
        </div>
    )
}

export default Bluetooth