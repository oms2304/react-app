import React from "react";


import UsersList from "../components/UsersList";


const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Omar",
      image:
        "https://fastly.picsum.photos/id/960/200/200.jpg?hmac=jBtZLcx2FwawGC7rwl0dNWTD3q1uuB7CjJmALIF9pIg",
      places: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
