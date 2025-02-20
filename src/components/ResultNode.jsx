import React, { useCallback } from 'react';
import CustomNode from './CustomNode';
import { useDispatch, useSelector } from 'react-redux'; 
import { deleteNode } from '../redux/actions'; 

const ResultNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.nodes.result); 

 
  const onDeleteNode = useCallback(() => {
    dispatch(deleteNode(id)); 
  }, [dispatch, id]);

  return (
    <CustomNode
      id={id}
      data={{
        ...data,
        label: 'Result Node',
        description: `Result: ${result || 'No result available'}`, 
        nodeColor: '#e0e0e0',
      }}
      onDeleteNode={onDeleteNode} 
    />
  );
};

export default ResultNode;
