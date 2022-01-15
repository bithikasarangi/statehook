import React, { useState } from "react";

const NewAddform = () => {
  const [fullNames, setFullNames] = useState({ firstName: "", lastName: "" });

  const [forms, setForms] = useState([
    { firstName: "Lipika", lastName: "Panigrahi" },
    { firstName: "Bithika", lastName: "Sarangi" },
    { firstName: "Bhabatosh", lastName: "Pani" },
  ]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setFullNames({ ...fullNames, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = { ...fullNames, id: fullNames.length };
    console.log(forms);
    setForms([...forms, newForm]);
    console.log(forms);

    setFullNames({ firstName: "", lastName: "" });
  };
  const deleteForm = (id) => {
    console.log(id);
    const updatedForms = forms.filter((form, index) => {
      return index !== id;
    });
    setForms(updatedForms);
  };
  return (
    <div>
      <div>
        {forms.map((form, index) => {
          return (
            <div className="form item" key={index}>
              <p>Firstname:{form.firstName}</p>
              <p>Lastname:{form.lastName}</p>
              <button
                onClick={() => {
                  deleteForm(index);
                }}
              >
                Delete Form
              </button>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname:</label>
        <input
          type="text"
          name="firstName"
          value={fullNames.firstName}
          onChange={handleInput}
          id="firstname"
        />

        <label htmlFor="lastname">Lastname:</label>
        <input
          type="text"
          name="lastName"
          value={fullNames.lastName}
          onChange={handleInput}
          id="lastname"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewAddform;