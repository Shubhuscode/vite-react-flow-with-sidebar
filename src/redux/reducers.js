import { ADD_NODE, DELETE_NODE, ADD_EDGE, UPDATE_NODE , UPDATE_RESULT} from './actions'; 

const initialState = {
  nodes: [],
  edges: [],
};

const nodeReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NODE:
        return {
          ...state,
          nodes: [...state.nodes, action.payload],
        };
      case DELETE_NODE:
        return {
          ...state,
          nodes: state.nodes.filter((node) => node.id !== action.payload),
          edges: state.edges.filter(edge => edge.source !== action.payload && edge.target !== action.payload),
        };
      case UPDATE_NODE:
        return {
          ...state,
          nodes: action.payload,
        };
      case ADD_EDGE:
        return {
          ...state,
          edges: [...state.edges, action.payload],
        };
      case UPDATE_RESULT: 
        return {
          ...state,
          result: action.payload, 
        };
      default:
        return state;
    }
  };

export default nodeReducer;
