import React from "react";

const AddPersonForm = ({
  newName,
  newPhonenumber,
  handleNameChange,
  handlePhonenumberChange,
  addPerson
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input value={newPhonenumber} onChange={handlePhonenumberChange} />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default AddPersonForm;
