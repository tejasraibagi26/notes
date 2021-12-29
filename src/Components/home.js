import React, { useState, useEffect } from "react";
import "../CSS/home.css";
import AddBtn from "./addBtn";
import firebase, { db } from "../services/firebase";
import { MdDelete } from "react-icons/md";

export default function HomeComponent({ user }) {
  const [notes, setNotes] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    db.collection("notes")
      .get()
      .then((querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().userId === user.uid) {
            notes.push({ ...doc.data(), id: doc.id });
          }
        });
        setNotes(notes);
      });
  };

  const deleteNote = async (id) => {
    console.log(id);
    db.collection("notes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === id) {
            doc.ref.delete();
            fetchData();
          }
        });
      });
  };

  const addNote = async (e) => {
    e.preventDefault();
    const title = e.target.parentNode.childNodes[0].firstChild.value;
    const content = e.target.parentNode.childNodes[1].firstChild.value;
    console.log(title, content);
    const db = firebase.firestore();
    const notesRef = db.collection("notes");
    let demo = {
      title: title,
      content: content,
      id: Math.floor(Math.random() * 1000000),
      userId: user.uid,
    };
    await notesRef.add(demo);
    e.target.parentNode.childNodes[0].firstChild.value = "";
    e.target.parentNode.childNodes[1].firstChild.value = "";
    handleFormOpen();
    fetchData();
  };

  const handleFormOpen = () => {
    if (isFormOpen) {
      setIsFormOpen(false);
    } else setIsFormOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <AddBtn
          onOpenForm={handleFormOpen}
          onSubmitForm={addNote}
          isOpen={isFormOpen}
        />
        <div className="greeting">
          <h1>Your Notes</h1>
        </div>
        {/* Add notes here! */}
        <div className="notes">
          {notes.length > 0 ? (
            notes.map((note) => {
              return (
                <div className="note" key={note.id} id={note.id}>
                  <h2 className="note-title">{note.title}</h2>
                  <p className="note-content">{note.content}</p>
                  <button
                    className="delete"
                    onClick={() => deleteNote(note.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              );
            })
          ) : (
            <h1>No notes</h1>
          )}
        </div>
      </div>
    </section>
  );
}
