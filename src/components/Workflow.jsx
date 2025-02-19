import React, { useState, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider, MiniMap, Controls, Background } from 'react-flow-renderer';
import { useDispatch, useSelector } from 'react-redux';
import StartNode from './StartNode';
import InputNode from './InputNode';
import UppercaseNode from './UppercaseNode';
import ResultNode from './ResultNode';
import TextCardNode from './TextCardNode'; 
import { addNode, updateNode, addEdge, deleteNode } from '../redux/actions'; 

const Workflow = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes.nodes);
  const edges = useSelector((state) => state.nodes.edges);

  const nodeTypes = {
    startNode: StartNode,
    inputNode: InputNode,
    uppercaseNode: UppercaseNode,
    resultNode: ResultNode,
    textCardNode: TextCardNode,  
  };


  const onConnect = useCallback((params) => {
    dispatch(addEdge(params));
  }, [dispatch]);


  const onDeleteNode = useCallback((nodeId) => {
    dispatch(deleteNode(nodeId)); 
  }, [dispatch]);


  const onNodeChange = (event, node) => {
    const updatedNode = { ...node, position: node.position };  
    const updatedNodes = nodes.map((n) =>
      n.id === node.id ? { ...n, position: updatedNode.position } : n
    );
    dispatch(updateNode(updatedNodes)); 
  };


  const handleResultUpdate = () => {
    const result = transformedInput;  
    dispatch(updateResult(result));
  };
  
  const onAddNode = (nodeType) => {
    const newNode = {
      id: `${nodeType}-${Date.now()}`,
      type: nodeType,
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      data: { label: nodeType, description: 'Data here' },
    };
    dispatch(addNode(newNode));
    
    if (nodeType === 'startNode') {
      dispatch(addEdge({ source: newNode.id, target: 'inputNode-id' }));
    } else if (nodeType === 'inputNode') {
      dispatch(addEdge({ source: newNode.id, target: 'uppercaseNode-id' }));
    } else if (nodeType === 'uppercaseNode') {
      dispatch(addEdge({ source: newNode.id, target: 'resultNode-id' }));
    }
  };
  

  return (
    <div style={{ height: '1000px', width: '100%' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onNodeDragStop={onNodeChange} 
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Workflow;
