import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import { Container, TextField, Box, Typography, Button } from '@mui/material';
import html2canvas from 'html2canvas';

const QRCodeGenerator: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const qrCodeRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleDownload = async () => {
        if (qrCodeRef.current === null) {
            return;
        }

        const canvas = await html2canvas(qrCodeRef.current, {
            scale: 2, 
            useCORS: true,
            width: 256,
            height: 256
        });

        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qr-code.png';
        link.click();
    };

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>QR Code Generator</Typography>
            <TextField
                label="Enter text or URL"
                variant="outlined"
                fullWidth
                value={inputValue}
                onChange={handleInputChange}
                style={{ marginBottom: '20px' }}
            />
            <Box
                ref={qrCodeRef}
                style={{
                    display: 'inline-block',
                    padding: '16px',
                    backgroundColor: 'white',
                    width: 'auto',
                    height: 'auto'
                }}
            >
                {inputValue && <QRCode value={inputValue} size={224} renderAs="svg" />}
            </Box> <br />
            {inputValue && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDownload}
                    style={{ marginTop: '20px' }}
                >
                    Download QR Code
                </Button>
            )}
        </Container>
    );
};

export default QRCodeGenerator;
