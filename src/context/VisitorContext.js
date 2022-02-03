import { useState, createContext } from "react";

const VisitorContext = createContext();
const VisitorProvider = ({ children }) => {
  const [visitor, setVisitor] = useState("Anonmyous Visitor");
  const [entry, setEntry] = useState("");
  const [count, setCount] = useState(0);
  const state = {
    visitorState: [visitor, setVisitor],
    entryState: [entry, setEntry],
    countState: [count, setCount],
  };

  return (
    <VisitorContext.Provider value={state}>{children}</VisitorContext.Provider>
  );
};

export { VisitorContext, VisitorProvider };
