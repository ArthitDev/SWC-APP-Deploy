import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface BackButtonPageProps {
  label?: string;
  onClick?: () => void;
  customRoute?: string;
}

const BackButtonPage: React.FC<BackButtonPageProps> = ({
  label = 'กลับ',
  onClick,
  customRoute,
}) => {
  const router = useRouter();

  const handleBackClick = () => {
    if (customRoute) {
      router.push(customRoute);
    } else if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <Button
      onClick={handleBackClick}
      color="primary"
      sx={{
        textTransform: 'none',
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <ArrowBackIcon sx={{ fontSize: '1.7rem' }} />
      <Typography variant="body1" sx={{ fontSize: '1.5rem' }}>
        {label}
      </Typography>
    </Button>
  );
};

export default BackButtonPage;
