import axios from "axios";
import { useEffect, useState } from "react"
import * as React from "react"
import { Chip } from "@mui/material"
import { Container } from "@mui/system";

export default function Joke() {
    const [joke, setJoke] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getJoke = () => {
        setLoading(true)
        axios
            .get("https://api.chucknorris.io/jokes/random")
            .then((response) => {
                setJoke(response.data.value)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }
    useEffect(() => {
        const interval = setInterval(() => {
            getJoke()
        }, 5000)
        // clean up function to stop interval when component unmounts
        return () => clearInterval(interval)
    }, [])


    // export default async function getJoke() {
    //     console.log("getJoke called")
    //     const response = await axios.get("https://api.chucknorris.io/jokes/random")
    //     if (response.status === 200 {
    //         setJoke(response.data.value)
    //     } else {
    //         setError(response.data)
    //     }
    //     setLoading(false)
    // }

    return (

        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                <h1>Chuck Norris Joke</h1>
                <p> Automatically Gets a new joke every 5 seconds</p>
                <br />
                <br />
                <Chip onClick={getJoke} label="Get Joke" />
                <br />
                <br />
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
                <h3 >{joke}</h3>
            </Container>
        </>
    )
}


