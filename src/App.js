import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState([]);
  function onSubmit() {
    console.log(note);
    setNoteList((prev) => [...prev, note]);
  }
  function onType(e) {
    setNote(e.target.value);
  }

  return (
    <div className="App">
      <div className="input_field">
        <input onChange={onType} type="text" placeholder="Write a note" />
        <button onClick={onSubmit}>Submit</button>
      </div>
      <div className="notelist_container">
        {noteList.map((ele, index) => (
        <Card key={index} note={ele}/>
      ))}
      </div>
      
    </div>
  );
}

export default App;
