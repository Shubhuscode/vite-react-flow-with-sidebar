import React, { useCallback } from 'react';
import CustomNode from './CustomNode';
import { useDispatch } from 'react-redux';
import { deleteNode } from '../redux/actions'; // Import the delete action

const UppercaseNode = ({ id, data }) => {
  const dispatch = useDispatch();

  // Define the callback for deleting the node
  const onDeleteNode = useCallback(() => {
    // Dispatch the deleteNode action with the id
    dispatch(deleteNode(id));
  }, [dispatch, id]);

  return (
    <CustomNode
      id={id}
      data={{
        ...data,
        label: 'Uppercase Node',
        description: 'Converts input to uppercase.',
      }}
      onDeleteNode={onDeleteNode} // Pass the onDeleteNode callback
    />
  );
};

export default UppercaseNode;
