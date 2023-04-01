import { FieldType } from "../data/folderData";

const FieldInput = ({ field, onChange, onDelete }) => {
  const handleNameChange = (event) => {
    onChange({ ...field, name: event.target.value });
  };

  const handleTypeChange = (event) => {
    onChange({ ...field, type: event.target.value, fields: [] });
  };

  const handleDelete = () => {
    onDelete(field);
  };

  return (
    <div className="field-input">
      <input type="text" value={field.name} onChange={handleNameChange} />
      <select
        value={field.type}
        onChange={handleTypeChange}
        className="field-name-input"
      >
        <option className="field-type-dropdown" value={FieldType.STRING}>
          String
        </option>
        <option className="field-type-dropdown" value={FieldType.NUMBER}>
          Number
        </option>
        <option className="field-type-dropdown" value={FieldType.BOOLEAN}>
          Boolean
        </option>
        <option className="field-type-dropdown" value={FieldType.OBJECT}>
          Object
        </option>
      </select>
      <button className="field-delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default FieldInput;
