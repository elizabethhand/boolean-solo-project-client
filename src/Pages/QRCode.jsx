import React, { useState, useEffect } from "react"
import { QRCode } from "react-qr-svg";
import { useParams } from "react-router-dom"

export default function QrCode() {
    const { id } = useParams();
    const [cafe, setCafe] = useState()

    useEffect(() => {
        fetch(`http://localhost:3030/cafe/${id}`)
            .then(response => response.json())
            .then(data => setCafe(data.data.name))

    }, []);

    if (cafe) {
        return (
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value={cafe}
            />
        );
    }
    return null
}