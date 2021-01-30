import React, { useState } from 'react'
import Link from 'next/link';
import fetch from "node-fetch"


const Location = () => {

    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")


    const showPosition = (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude);
    }

    const getUserLocationDetails = () => {
        if (navigator.geolocation) {

            const location = navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }


    return (
        <div>
            <button onClick={getUserLocationDetails}>Show My Location Details</button>
            {latitude && longitude &&
                <ul>
                    {/* <li>
                        Country Code : {details.country_code}
                    </li>
                    <li>
                        Country Name: {details.country_name}
                    </li>
                    <li>
                        City : {details.city}
                    </li> */}
                    <li>
                        Latitude & Longitude :{`${latitude} ----- ${longitude}`}
                    </li>
                    {/* <li>
                        IP Address: {details.IPv4}
                    </li> */}
                </ul>}

            <Link href="/">
                <a>Back To Home Page</a>
            </Link>
        </div>
    )
}


// export async function getServerSideProps() {

//     let response = await fetch("https://geolocation-db.com/json/c0593a60-4159-11eb-80cd-db15f946225f")
//     let data = await response.json()

//     return {
//         props: {
//             data
//         }
//     }
// }

export default Location