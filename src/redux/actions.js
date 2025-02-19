export const ADD_NODE = 'ADD_NODE';
export const UPDATE_NODE = 'UPDATE_NODE';
export const DELETE_NODE = 'DELETE_NODE'; 
export const ADD_EDGE = 'ADD_EDGE'; 
export const UPDATE_RESULT = 'UPDATE_RESULT'; 


export const addNode = (node) => ({
  type: ADD_NODE,
  payload: node,
});


export const updateNode = (nodes) => ({
  type: UPDATE_NODE,
  payload: nodes, 
});


export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  payload: nodeId,  
});


export const addEdge = (edge) => ({
  type: ADD_EDGE,
  payload: edge,
});

export const updateResult = (result) => ({
    type: 'UPDATE_RESULT',
    payload: result,
  });