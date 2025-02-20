import React, { useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";
import { useDispatch, useSelector } from "react-redux";
import StartNode from "./StartNode";
import InputNode from "./InputNode";
import UppercaseNode from "./UppercaseNode";
import ResultNode from "./ResultNode";
import TextCardNode from "./TextCardNode";
import {
  addNode,
  updateNode,
  addEdge,
  deleteNode,
  updateResult,
} from "../redux/actions";

const Workflow = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes.nodes);
  const edges = useSelector((state) => state.nodes.edges);

  const [inputValue, setInputValue] = useState("");
  const [uppercaseValue, setUppercaseValue] = useState("");

  //   const nodeTypes = {
  //     startNode: StartNode,
  //     inputNode: InputNode,
  //     uppercaseNode: UppercaseNode,
  //     resultNode: ResultNode,  // Add ResultNode to nodeTypes
  //     textCardNode: TextCardNode,
  //   };

  const nodeTypes = {
    startNode: StartNode,
    inputNode: InputNode,
    uppercaseNode: UppercaseNode,
    resultNode: (props) => <ResultNode {...props} result={uppercaseValue} />,
    textCardNode: TextCardNode,
  };

  const onConnect = useCallback(
    (params) => {
      dispatch(addEdge(params));
    },
    [dispatch]
  );

  const onDeleteNode = useCallback(
    (nodeId) => {
      dispatch(deleteNode(nodeId));
    },
    [dispatch]
  );

  const onNodeChange = (event, node) => {
    const updatedNode = { ...node, position: node.position };
    const updatedNodes = nodes.map((n) =>
      n.id === node.id ? { ...n, position: updatedNode.position } : n
    );
    dispatch(updateNode(updatedNodes));
  };


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleUppercaseChange = () => {
    const result = inputValue.toUpperCase();
    setUppercaseValue(result);
    dispatch(updateResult(result)); 
  };

  const onAddNode = (nodeType) => {
    const newNode = {
      id: `${nodeType}-${Date.now()}`,
      type: nodeType,
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      data: { label: nodeType, description: "Data here" },
    };
    dispatch(addNode(newNode));

    if (nodeType === "startNode") {
      dispatch(addEdge({ source: newNode.id, target: "inputNode-id" }));
    } else if (nodeType === "inputNode") {
      dispatch(addEdge({ source: newNode.id, target: "uppercaseNode-id" }));
    } else if (nodeType === "uppercaseNode") {
      dispatch(addEdge({ source: newNode.id, target: "resultNode-id" }));
    }
  };

  return (
    <div style={{ height: "1000px", width: "100%" }}>
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

      {uppercaseValue && (
        <div style={{ marginTop: "20px" }}>
          <h3>Flow Output:</h3>
          <p>{uppercaseValue}</p>
        </div>
      )}
    </div>
  );
};

export default Workflow;
