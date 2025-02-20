import React, { useCallback } from 'react';
import CustomNode from './CustomNode';
import { useDispatch } from 'react-redux';
import { deleteNode } from '../redux/actions'; 

const TextCardNode = ({ id, data }) => {
  const dispatch = useDispatch();

 
  const onDeleteNode = useCallback(() => {
    
    dispatch(deleteNode(id));
  }, [dispatch, id]);

  return (
    <CustomNode
      id={id}
      data={{
        ...data,
        label: 'Text Card Node',
        description: 'Displays a card with text content.',
      }}
      onDeleteNode={onDeleteNode} 
    />
  );
};

export default TextCardNode;
