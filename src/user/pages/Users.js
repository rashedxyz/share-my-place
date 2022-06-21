import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Doe",
      image:
        "https://www.fakepersongenerator.com/Face/male/male2017108405017182.jpg",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
