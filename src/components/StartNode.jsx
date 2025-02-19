import React, { useCallback } from 'react';
import CustomNode from './CustomNode';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNode } from '../redux/actions';

const StartNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes.nodes);
  const edges = useSelector((state) => state.nodes.edges);

 
  const onDeleteNode = useCallback(
    (nodeId) => {
      
      dispatch(deleteNode(nodeId));
    },
    [dispatch]
  );

  return (
    <CustomNode
      id={id}
      data={{ ...data, label: 'Start Node', description: 'This is the starting point.' }}
      onDeleteNode={onDeleteNode} 
    />
  );
};

export default StartNode;
