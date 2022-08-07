import React, { useEffect, useState } from "react";
import axios from "axios";

export const Example = () => {
  const [users, setUsers] = useState([]);
  const [colombianUsers, setColombianUsers] = useState([]);

  const listUsers = async () => {
    //#2
    const response = await axios.get("http://localhost:4200/users");
    setUsers(response.data);
  };

  const filterColombianUsers = () => {
    //#4
    setColombianUsers(users.filter((user) => user.country === "Colombia"));
  };

  useEffect(() => {
    //#3
    filterColombianUsers();
  }, [users]);

  useEffect(() => {
    //#1
    listUsers();
  }, []);

  return (
    <>
      <h3>Usuarios de todos los paises</h3>
      <ul>
        {users.map((user) => (
          <li>
            {user.id} {user.name}
          </li>
        ))}
      </ul>

      <h3>Usuarios de solo Colombia</h3>
      <ul>
        {colombianUsers.map((user) => (
          <li>
            {user.id} {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};
