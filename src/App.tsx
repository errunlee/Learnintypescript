import { useState } from "react";
import "./App.css";
import Clickin from "./components/Clickin";
import Great from "./components/Great";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Stylee from "./components/Stylee";
import Login from "./components/Login";
import Reducer from "./components/Reducer";

function App() {
  const persons = [
    {
      name: "arun",
    },
    {
      name: "sarunnn",
    },
    {
      name: "zawardoooooooooo",
    },
  ];
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <Great messages={10} isMale={true} thename="Arun" />
        {/* <Great thename="Zawardooooooooo" /> */}

        <Person name={{ first: "arun", last: "khatri" }} />
        <PersonList persons={persons} />
        <Status />
        <Clickin handleClick={handleClick} />
        <Input value={value} setValue={setValue} />
        <Stylee styles={{ border: "2px solid black" }} />
        <Login />
        <Reducer />
      </div>
    </>
  );
}

export default App;
