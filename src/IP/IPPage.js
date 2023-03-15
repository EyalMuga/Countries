// 
// The new page is called: IP

import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { useState} from "react";


export default function IPPage() {
    const [ip, setIp] = useState("")
    const [ipInfo, setIpInfo] = useState(null)
    const [error, setError] = useState(null)

    const getIpInfo = async () => {
        try {
            const response = await fetch("https://api.ipify.org/?format=json")
            const data = await response.json()
            setIp(data.ip)
            const response2 = await fetch(`http://ip-api.com/json/${ip}`)
            const data2 = await response2.json()
            setIpInfo(data2)
        } catch (e) {
            setError(e)
        }
    }
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <h1>IP Address</h1>
            <p>Gets your IP Address and Location</p>
            <br />
            <br />
            <Button variant="contained" onClick={getIpInfo}>Get IP</Button>
            <br />
            <br />
            {ipInfo && (
                <div>
                    <p>IP: {ipInfo.query}</p>
                    <p>Country: {ipInfo.country}</p>
                    <p>City: {ipInfo.city}</p>
                    <p>Region: {ipInfo.regionName}</p>
                    <p>Timezone: {ipInfo.timezone}</p>
                    <p>ISP: {ipInfo.isp}</p>
                </div>
            )}
        </Container>
    )
}





