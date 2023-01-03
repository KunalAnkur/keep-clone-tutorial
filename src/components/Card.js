import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import "./Card.css";
function Card({ title, note, setNoteList, index, noteList }) {
  console.log(index);
  const [editableTitle, onEditTitle] = useState(title);
  const [editableNote, onEditableNote] = useState(note);

  const [show, onShow] = useState(false);
  function onDelete() {
    setNoteList([
      ...noteList.slice(0, index),
      ...noteList.slice(index + 1, noteList.length),
    ]);
  }
  function onSave() {
    const obj = {};
    obj.title = editableTitle;
    obj.note = editableNote;
    setNoteList([
      ...noteList.slice(0, index),
      { ...obj },
      ...noteList.slice(index + 1, noteList.length),
    ]);

    onShow(false);
  }
  function onChangingTitle(e) {
    onEditTitle(e.target.value);
  }
  function onChangingNote(e) {
    onEditableNote(e.target.value);
  }

  function onEdit() {
    onShow(true);
  }
  return (
    <div className="card">
      {!show ? (
        <div className="note_container">
          <h4>{editableTitle}</h4>
          <p>{editableNote}</p>
        </div>
      ) : (
        <div className="edit_inputs">
          <input onChange={onChangingTitle} type="text" value={editableTitle} />
          <input onChange={onChangingNote} type="text" value={editableNote} />
        </div>
      )}

      <div className="buttons">
        <button onClick={onDelete} className="delete_btn">
          <DeleteIcon />
        </button>
        {show ? (
          <button onClick={onSave}>
            <SubdirectoryArrowRightIcon />
          </button>
        ) : (
          <button onClick={onEdit} className="edit_btn">
           <EditIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
