import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDateFormat } from '../contexts/DateFormatContext';

const StyledBalanceTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  fontWeight: 700,
  color: theme.palette.text.primary
}));

const Overview: React.FC = () => {
  const { dateFormat } = useDateFormat();

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    switch (dateFormat) {
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'YYYY-MM-DD':
        return `${year}-${month}-${day}`;
      default: // DD/MM/YYYY
        return `${day}/${month}/${year}`;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Card>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Total Balance
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <StyledBalanceTypography>₹1,234.50</StyledBalanceTypography>
          <Typography variant="body2" color="text.secondary">
            Last updated: {formatDate(new Date())}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Overview;
