import axios from "axios";
import { useEffect, useState } from "react"
import * as React from "react"
import { Chip } from "@mui/material"
import { Container } from "@mui/system";

export default function Joke() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
        getJoke()
        setLoading(false)
    }, [])

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
                <br />
                <br />
                <Chip onClick={getJoke} label="Get Joke" />
                <br />
                <br />
                <h3 >{joke}</h3>
            </Container>
        </>
    )
}


