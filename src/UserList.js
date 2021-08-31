import React, { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "./CarUser";

const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setlistOfUSer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ flexWrap: "wrap ", display: "flex" }}>
        
      {listOfUSer.map((user) => (
        <CardUser key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
