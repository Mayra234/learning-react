import React, { useEffect, useState } from "react";

export const Example = () => {
  const [loadedMessage, setLoadedMessage] = useState();

  /**
   * Ciclo de vida mounted
   */
  useEffect(() => {
    console.log("Mounted");
    setLoadedMessage("El componente se ha cargado");
  }, []);

  return (
    <>
      {loadedMessage && <span style={{ color: "green" }}>{loadedMessage}</span>}
    </>
  );
};
