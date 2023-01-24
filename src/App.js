import logo from './logo.svg';
import './App.css';
import {Users} from "./components/Users";
import {UsersForm} from "./components/UsersForm";

function App() {
  return (
    <div className="App">

        <UsersForm/>
<hr/>
        <Users/>
    </div>
  );
}

export default App;
