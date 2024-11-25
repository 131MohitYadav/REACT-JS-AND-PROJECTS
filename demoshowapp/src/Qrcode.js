import { useEffect, useState } from "react";
import './Qrcode.css';

function Qrcode() {

    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(200);
    const [bgColor, setBgColor] = useState('ffffff');
    const [qrCode, setQrCode] = useState("");

    // changing the url only when the user change the input

    useEffect(() => {
        setQrCode
            (`http://api.qrserver.com/v1/create-qr-code/?data=${word}@paytm&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor]);

    // updating the input  word when user 
    // create generate button
    function handleClick() {
        setWord(temp);
    }
    return (
        <fieldset>
            <div className="App">
                <h1>QR Code Generator</h1>
                <div className="input-box">
                    <div className="gen">
                        <input type="text" onChange={(e) => { setTemp(e.target.value) }}
                            placeholder="Enter text to encode" />
                        <button className="button" onClick={handleClick}>Generate
                        </button>
                    </div>
                    <div className="extra">
                        <h5>Background Color</h5>
                        <input type="color" onChange={(e) => { setBgColor(e.target.value.substring(1)) }} />
                        {/* Qr code size */}
                        <h5>Dimension</h5>
                        <input type="range" min="200" max="600" value={size} onChange={(e) => { setSize(e.target.value) }} />

                    </div>
                </div>
                <div className="output-box">
                    <img src={qrCode} alt="" />
                    <a href={qrCode} download="QRCode">
                        <button type="button">Download</button>
                    </a>
                </div>
            </div>
        </fieldset>
    );
}

export default Qrcode;