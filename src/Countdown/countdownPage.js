import { Box } from "@mui/system";
import { useState } from "react";
import Countdown from "./countdown";

export default function CountdownPage({ onSecondsSubmitted, timeLeft }) {
    const [secondsInput, setSecondsInput] = useState("");

    return (
        <Box sx={{ textAlign: "center" }}>
            <h1>Countdown</h1>
            <div>
                <input
                    type="number"
                    value={secondsInput}
                    onChange={(e) => setSecondsInput(e.target.value)}
                />
                <button
                    onClick={() => {
                        onSecondsSubmitted(Number(secondsInput));
                    }
                }>
                    Start
                </button>
            </div>
            <Countdown timeLeft={timeLeft} />
        </Box>
    );
}


