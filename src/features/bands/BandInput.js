import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onBandSubmit(name);
  }

  return (
    <div>
      <p>Band Input</p>

      <form onSubmit={handleSubmit}>
        <label>
          Band Name
          <input
            type="text"
            name="band"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Band</button>
      </form>
      Band Name: {name}
    </div>
  );
}

export default BandInput;
