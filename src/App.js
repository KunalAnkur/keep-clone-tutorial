import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState([]);

  const [show, setShow] = useState(false);

  function onSubmit() {
    const newDocument = {
      title: title,
      note: note,
    };
    const array = [...noteList, newDocument];
    setNoteList(array);
  }
  function onTypeTitle(e) {
    setTitle(e.target.value);
  }

  function onTypeNote(e) {
    setNote(e.target.value);
  }
  function onStartCreatingNote() {
        setShow((prev) => !prev);
  }
  return (
    <div className="App">
      <div className="input_field">
        {show ? (
          <div className="create_note_container">
            <input onChange={onTypeTitle} type={"text"} placeholder="Title" />
            <input
              onChange={onTypeNote}
              type={"text"}
              placeholder="Write you notes"
            />
            <div className="button_container">
              <button onClick={onSubmit}>Submit</button>
            </div>
          </div>
        ) : (
          <div onClick={onStartCreatingNote} className="take_a_note">
            <p>Take a note</p>
          </div>
        )}
      </div>
      <div className="notelist_container">
        {noteList.map((ele,index) => 
           <Card key={index} title={ele.title} note={ele.note} />
        )}
      </div>
    </div>
  );
}

export default App;
