import React from 'react'
import styles from '../styles/ToText.module.css'

const SpeechToText = () => {

    // process.browser ? window.SpeechRecognition : null

    // const sound = document.querySelector('.sound');
    // console.log(sound)

    // const dictate = () => {
    //     recognition.start();
    //     recognition.onresult = (event) => {
    //         const speechToText = event.results[0][0].transcript;

    //         paragraph.textContent = speechToText;
    //     }
    // }
    // const onMic = () => {
    //     dictate();
    // }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.textBox} contentEditable="true"></div>
                <i className={`${styles.fa} ${styles.faMicrophone}`}>Mic</i>
            </div>
            {/* <audio className={styles.sound} src="chime.mp3"></audio> */}
        </>

    )
}

export default SpeechToText