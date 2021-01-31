
import React from 'react';
import styles from "../styles/Mic.module.css"
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default class Mic extends React.Component {

    state = {
        isRecording: false,
        blobURL: '',
        isBlocked: false,
    };

    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL, isRecording: false });
            }).catch((e) => console.log(e));
    };

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
            () => {
                this.setState({ isBlocked: false });
            },
            () => {
                this.setState({ isBlocked: true })
            },
        );
    }

    render() {
        return (
            <div className={styles.container}>
                <div className="App">
                    <header className={styles.micContainer}>
                        <audio className={styles.audio} src={this.state.blobURL} controls="controls" />
                        <button className={styles.btn} onClick={this.start} disabled={this.state.isRecording}>Record</button>
                        <button className={styles.btn} onClick={this.stop} disabled={!this.state.isRecording}>Stop</button>
                    </header>
                </div>
            </div>

        );
    }
}





// import React, { useState, useEffect, Component } from 'react'
// import { ReactMic } from 'react-mic';

// const Mic = () => {

//     const [record, setRecord] = useState(false)

//     const onStop = (recordBlob) => {
//         console.log('recordedBlob is: ', recordedBlob);
//     }
//     const onData = (recordBlob) => {
//         console.log('chunk of real-time data is: ', recordedBlob);
//     }

//     const startRecording = () => {
//         setRecord(true)
//     }

//     const stopRecording = () => {
//         setRecord(false)
//     }
//     return (
//         <div>
//             <ReactMic
//                 record={record}
//                 className="sound-wave"
//                 onStop={onStop}
//                 onData={onData}
//                 strokeColor="#000000"
//                 backgroundColor="#FF4081" />
//             <button onClick={startRecording} type="button">Start</button>
//             <button onClick={stopRecording} type="button">Stop</button>
//         </div>

//     )
// }
// export default Mic




















































// import MicRecorder from 'mic-recorder-to-mp3';
// import Recorder from 'react-mp3-recorder'
// import ReactMic from 'react-mic';
// import Recorder from 'react-voice-recorder'

// const Mic = () => {

//         const Mp3Recorder = new MicRecorder({ bitRate: 128 });

//         const [recording, isRecording] = useState(false)
//         const [blocked, isBlocked] = useState(false)
//         const [blobURL, setBlobURL] = useState("")

//         useEffect(() => {
//             navigator.getUserMedia({ audio: true },
//                 () => {
//                     console.log('Permission Granted');
//                     isBlocked(false)
//                 },
//                 () => {
//                     console.log('Permission Denied');
//                     isBlocked(true)
//                 },
//             );
//         })

//         const startRecorder = () => {
//             if (blocked) {
//                 console.log('Permission Denied');
//             } else {
//                 Mp3Recorder
//                     .start()
//                     .then(() => {
//                         isRecording(true)
//                     }).catch((e) => console.error(e));
//             }
//         }

//         const stopRecorder = () => {
//             Mp3Recorder
//                 .stop()
//                 .getMp3()
//                 .then(([buffer, blob]) => {
//                     isRecording(false)
//                 }).catch((e) => console.log(e));
//         }


//         return (
//             <div>
//                 <button onClick={startRecorder} disabled={recording}>Start</button>
//                 <button onClick={stopRecorder} disabled={!recording} >Stop</button>
//                 <audio src={blobURL} controls="controls" />
//             </div>
//         )
//     }

//     export default Mic




// export default class Mic extends Component {
//     render() {
//         return (
//             <Recorder
//                 onRecordingComplete={this._onRecordingComplete}
//                 onRecordingError={this._onRecordingError}
//             />
//         )
//     }

//     _onRecordingComplete = (blob) => {
//         console.log('recording', blob)
//     }

//     _onRecordingError = (err) => {
//         console.log('recording error', err)
//     }
// }


// export class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             record: false
//         }
//     }

//     startRecording = () => {
//         this.setState({ record: true });
//     }

//     stopRecording = () => {
//         this.setState({ record: false });
//     }

//     onData(recordedBlob) {
//         console.log('chunk of real-time data is: ', recordedBlob);
//     }

//     onStop(recordedBlob) {
//         console.log('recordedBlob is: ', recordedBlob);
//     }

//     render() {
//         return (
//             <div>
//                 <ReactMic
//                     record={this.state.record}
//                     className="sound-wave"
//                     onStop={this.onStop}
//                     onData={this.onData}
//                     strokeColor="#000000"
//                     backgroundColor="#FF4081" />
//                 <button onClick={this.startRecording} type="button">Start</button>
//                 <button onClick={this.stopRecording} type="button">Stop</button>
//             </div>
//         );
//     }
// }

// export class Example extends React.Component {
//     state = {
//         audioDetails = {
//             url: null,
//             blob: null,
//             chunks: null,
//             duration: {
//                 h: null,
//                 m: null,
//                 s: null,
//             }
//         }
//     }

//     handleAudioStop(data) {
//         console.log(data)
//         this.setState({ audioDetails: data });
//     }
//     handleAudioUpload(file) {
//         console.log(file);
//     }
//     handleRest() {
//         const reset = {
//             url: null,
//             blob: null,
//             chunks: null,
//             duration: {
//                 h: null,
//                 m: null,
//                 s: null,
//             }
//         }
//         this.setState({ audioDetails: reset });
//     }
//     render() {
//         <Recorder
//             record={true}
//             title={"New recording"}
//             audioURL={this.state.audioDetails.url}
//             showUIAudio
//             handleAudioStop={data => this.handleAudioStop(data)}
//             handleOnChange={(value) => this.handleOnChange(value, 'firstname')}
//             handleAudioUpload={data => this.handleAudioUpload(data)}
//             handleRest={() => this.handleRest()} />
//     }
// }