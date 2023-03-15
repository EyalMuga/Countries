export default function Countdown({ timeLeft }) {
    return (
        <>
            <h5>Counting down...</h5>
            <div style={{ fontSize: "3rem", allign: "center" }}>
                {timeLeft}
            </div>
        </>
    );
}
