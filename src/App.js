import { useState } from "react";
import "./App.css";
import FieldList from "./components/FieldList";
import { initialField } from "./data/folderData";

function App() {
  const [fields, setFields] = useState([initialField]);

  const handleSave = () => {
    console.log(fields);
  };

  return (
    <div className="data-form">
      <FieldList fields={fields} onChange={setFields} onDelete={setFields} />
      <button className="save-data" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default App;
