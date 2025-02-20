import React, { useEffect, useCallback } from 'react';
import CustomNode from './CustomNode';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNode, updateResult } from '../redux/actions';

const UppercaseNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.nodes.result); 

 
  useEffect(() => {
    if (inputValue) {
      const uppercaseValue = inputValue.toUpperCase();
      dispatch(updateResult(uppercaseValue));
    }
  }, [inputValue, dispatch]);

  const onDeleteNode = useCallback(() => {
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
      onDeleteNode={onDeleteNode}
    />
  );
};

export default UppercaseNode;
