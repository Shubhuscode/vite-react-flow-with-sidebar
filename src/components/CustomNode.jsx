import React from 'react';
import { Handle } from 'react-flow-renderer';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const CustomNode = ({ id, data, onDeleteNode }) => {
  const { label, description, nodeColor } = data;

  return (
    <Card
      sx={{
        width: 250,
        backgroundColor: nodeColor || '#f5f5f5',
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      {/* Node Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2C3E50' }}>
          {label}
        </Typography>
        <IconButton
          size="small"
          onClick={() => onDeleteNode(id)}
          sx={{
            backgroundColor: '#e74c3c',
            color: 'white',
            '&:hover': {
              backgroundColor: '#c0392b',
            },
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Node Content */}
      <CardContent sx={{ paddingTop: 1 }}>
        <Typography variant="body2" sx={{ color: '#34495e' }}>
          {description}
        </Typography>
      </CardContent>

      {/* Node Handles */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
        <Handle
          type="target"
          position="top"
          style={{
            background: '#4CAF50',
            width: 12,
            height: 12,
            borderRadius: '50%',
          }}
        />
        <Handle
          type="source"
          position="bottom"
          style={{
            background: '#FF9800',
            width: 12,
            height: 12,
            borderRadius: '50%',
          }}
        />
      </Box>
    </Card>
  );
};

export default CustomNode;
