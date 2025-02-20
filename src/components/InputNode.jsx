import React, { useState, useCallback } from 'react';
import CustomNode from './CustomNode';
import { useDispatch } from 'react-redux';
import { deleteNode, updateResult } from '../redux/actions'; 

const InputNode = ({ id, data }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

 
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    dispatch(updateResult(event.target.value)); 
  };

  const onDeleteNode = useCallback(() => {
    dispatch(deleteNode(id)); 
  }, [dispatch, id]);

  return (
    <CustomNode
      id={id}
      data={{
        ...data,
        label: 'Input Node',
        description: (
          <>
            <p>Enter data here:</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              style={{
                padding: '5px',
                width: 'calc(100% - 10px)',
                marginTop: '5px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                boxSizing: 'border-box',
              }}
            />
          </>
        ),
      }}
      onDeleteNode={onDeleteNode}
    />
  );
};

export default InputNode;
