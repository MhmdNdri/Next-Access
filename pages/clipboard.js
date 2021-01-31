import React, { useState, useRef } from 'react'
import styles from "../styles/Clipboard.module.css"
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function clipboard() {

    const inputRef = useRef();
    const [text, setText] = useState("")
    const [copied, setCopied] = useState(false)

    const onCopy = () => {
        // const copyText = inputRef.current.value;
        // if (navigator.clipboard) {
        //     navigator.clipboard.writeText(copyText).then(
        //         () => {
        //             console.log("copy success");
        //         },
        //         error => {
        //             console.log(error);
        //         }
        //     );
        // } else {
        //     inputRef.current.select();
        //     console.log(document.execCommand("copy")); //true
        //     document.execCommand("copy");
        // }
        setCopied(true)
        alert(`You Copied ${text} to clipboerd `)
    };

    return (
        <div className={styles.container}>
            <input type="text"
                value={text}
                className={styles.input}
                onChange={(e) => setText(e.target.value)} />

            <CopyToClipboard text={text}>
                <button className={styles.btn} onClick={onCopy} title="Copy">Copy</button>
            </CopyToClipboard>

        </div>
    )
}
