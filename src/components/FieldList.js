import { FieldType, initialField } from "../data/folderData";
import FieldInput from "./FieldInput";

const FieldList = ({ fields, onChange, onDelete }) => {
  const handleFieldChange = (index, field) => {
    const newFields = [...fields];
    newFields[index] = field;
    onChange(newFields);
  };

  const handleAddField = () => {
    // console.log(fields.id);
    // if (!fields) {
    //   return;
    // }
    onChange([...fields, initialField]);
  };

  const handleFieldDelete = (field) => {
    const newFields = fields.filter((f) => f !== field);
    onDelete(newFields);
  };

  return (
    <div className="field-list-container">
      {fields?.map((field, index) => (
        <div key={index} className="nested-fields">
          <FieldInput
            field={field}
            onChange={(f) => handleFieldChange(index, f)}
            onDelete={handleFieldDelete}
          />
          {field.type === FieldType.OBJECT && (
            <FieldList
              fields={field.fields}
              onChange={(fs) =>
                handleFieldChange(index, { ...field, fields: fs })
              }
              onDelete={(fs) =>
                handleFieldChange(index, { ...field, fields: fs })
              }
            />
          )}
        </div>
      ))}
      <button className="add-field-button" onClick={handleAddField}>
        Add Field
      </button>
    </div>
  );
};

export default FieldList;
