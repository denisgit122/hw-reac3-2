import {useEffect, useState} from "react";
import {userService} from "../service/userService";
import {User} from "./User";


const Users = () => {
  const [users, setPosts]= useState([])
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setPosts(value))
    },[])

return (
  <div>
      {users.map(value => <User key={value.id} post={value}/>)}
  </div>
);
};

export {Users};