import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Home/home";
import CountriesPage from "./countries/countries-page";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import ChuckNorrisJokePage from "./chuck-norris-joke/chuck-norris-joke";
import AboutPage from "./about/about";
import CountdownPage from "./Countdown/countdownPage";

export default function App() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (timeLeft === 0) {
            return;
        }
        // need to set timerId to a variable so we can clear it later
        console.log("setting timer", timeLeft);
        const timerId = setTimeout(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);

        // we have to provide clean-up function to stop interval/timer!
        return () => {
            console.log("calling clearTimeout for timerId", timerId);
            clearTimeout(timerId);
        };
    }, [timeLeft]);

    return (
        <Box>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="countries/" element={<CountriesPage />} />
                    <Route
                        path="chuck-norris-joke/"
                        element={<ChuckNorrisJokePage />}
                    />
                    <Route path="about/" element={<AboutPage />} />
                    <Route
                        path="countdown/"
                        element={
                            <CountdownPage
                                timeLeft={timeLeft}
                                onSecondsSubmitted={(seconds) => {
                                    setTimeLeft(seconds);
                                }}
                            />
                        }
                    />
                </Route>
            </Routes>
        </Box>
    );
}
