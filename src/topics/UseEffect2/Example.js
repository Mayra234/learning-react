import React, { useEffect, useState } from "react";

export const Example = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [generatedFullName, setGeneratedFullName] = useState();
  const [fullName, setFullName] = useState("");

  const generateFullName = () => {
    setFirstName("Mayra");
    setSecondName("Alejandra");
    setLastName("Diavanera");
    setSecondLastName("Herrera");
    setGeneratedFullName((prev) => !prev);
  };

  useEffect(() => {
    generatedFullName &&
      setFullName(`${firstName} ${secondName} ${lastName} ${secondLastName}`);
  }, [generatedFullName]);

  return (
    <>
      <div>
        <button onClick={generateFullName}>Generar nombre completo</button>
      </div>
      <span>Nombre completo: {fullName}</span>
    </>
  );
};
