import React from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub'; // We'll replace this with the custom icon

const GitHubButton: React.FC = () => {
    return (
        <IconButton component="a" href="https://github.com/fog-zs/qr-code-generator" aria-label="GitHub link" target="_blank" rel="noopener noreferrer" sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
        }}>
            <GitHubIcon />
        </IconButton>
    );
};

export default GitHubButton;
