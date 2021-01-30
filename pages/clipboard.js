import React, { useState, useRef } from 'react'
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
        <div>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />

            <CopyToClipboard text={text}>
                <button onClick={onCopy} title="Copy">Copy</button>
            </CopyToClipboard>

        </div>
    )
}
