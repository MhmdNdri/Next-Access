import React, { useRef, useCallback, useState } from 'react'
import Webcam from "react-webcam";
import Link from 'next/link';
// class AppStreamCam extends React.Component {
//     constructor(props) {
//         super(props);
//         this.streamCamVideo = this.streamCamVideo.bind(this)
//     }
//     streamCamVideo() {
//         var constraints = { audio: true, video: { width: 1280, height: 720 } };
//         navigator.mediaDevices
//             .getUserMedia(constraints)
//             .then(function (mediaStream) {
//                 var video = document.querySelector("video");

//                 video.srcObject = mediaStream;
//                 video.onloadedmetadata = function (e) {
//                     video.play();
//                 };
//             })
//             .catch(function (err) {
//                 console.log(err.name + ": " + err.message);
//             }); // always check for errors at the end.
//     }
//     render() {
//         return (
//             <div>
//                 <div id="container">
//                     <video autoPlay={true} id="videoElement" controls></video>
//                 </div>
//                 <br />
//                 <button onClick={this.streamCamVideo}>Start streaming</button>
//             </div>
//         );
//     }
// }

// export default AppStreamCam

const camera = () => {


    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const mediaRecorderRef = useRef(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);



    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);



    const handleDataAvailable = useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );


    const handleStopCaptureClick = useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);


    const handleDownload = useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "react-webcam-stream-capture.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);


    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
        },
        [webcamRef, setImgSrc]
    );

    return (
        <div>
            <Webcam
                audio={true}
                height={500}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Capture photo</button> <br />
            <br />
            {capturing ? (
                <button onClick={handleStopCaptureClick}>Stop Capture</button>
            ) : (
                    <button onClick={handleStartCaptureClick}>Start Capture</button>
                )}

            {recordedChunks.length > 0 && (
                <button onClick={handleDownload}>Download</button>
            )}


            {imgSrc && (
                <p>
                    {imgSrc}
                </p>
            )
            }

            <Link href="/">
                <a>Back To Home Page</a>
            </Link>
        </div >
    );
}

export default camera;
