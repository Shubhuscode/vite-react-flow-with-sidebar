import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MenuItem, Select, FormControl, InputLabel, TextField, Button } from '@mui/material';
import { addNode } from '../redux/actions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [selectedNode, setSelectedNode] = useState('');
  const [nodeColor, setNodeColor] = useState('#ffffff');
  const [nodeLabel, setNodeLabel] = useState('');

  const handleNodeSelection = (event) => {
    setSelectedNode(event.target.value);
  };

  const handleAddNode = () => {
    if (!selectedNode) return; 
    const newNode = {
      id: `${selectedNode}-${Date.now()}`,
      type: selectedNode,
      style: { backgroundColor: nodeColor },
      data: { label: nodeLabel || selectedNode, nodeColor }, 
      position: { x: Math.random() * 300, y: Math.random() * 300 }, 
    };

    dispatch(addNode(newNode));

    setNodeLabel('');
    setNodeColor('#ffffff');
    setSelectedNode('');
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="node-select-label">Select Node</InputLabel>
        <Select
          labelId="node-select-label"
          value={selectedNode}
          onChange={handleNodeSelection}
          label="Node Type"
        >
          <MenuItem value="startNode">Start Node</MenuItem>
          <MenuItem value="inputNode">Input Node</MenuItem>
          <MenuItem value="uppercaseNode">Uppercase Node</MenuItem>
          <MenuItem value="resultNode">Result Node</MenuItem>
          <MenuItem value="textCardNode">Text Card Node</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Node Label"
        variant="outlined"
        fullWidth
        value={nodeLabel}
        onChange={(e) => setNodeLabel(e.target.value)}
        margin="normal"
      />

      <TextField
        label="Node Color"
        variant="outlined"
        type="color"
        fullWidth
        value={nodeColor}
        onChange={(e) => setNodeColor(e.target.value)}
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={handleAddNode}>
        Add Node
      </Button>
    </div>
  );
};

export default Sidebar;
