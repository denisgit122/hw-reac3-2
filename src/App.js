import logo from './logo.svg';
import './App.css';
import {Users} from "./components/Users";
import {UsersForm} from "./components/UsersForm";
import {useEffect, useState} from "react";
import {userService} from "./service/userService";

function App() {

    const [users, setPosts]= useState([])
    console.log(users);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setPosts(value))
    },[])

    return (
    <div className="App">

        <UsersForm setPosts={setPosts}/>
<hr/>
        <Users users={users}/>
    </div>
  );
}

export default App;
