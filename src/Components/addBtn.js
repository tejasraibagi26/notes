import React from "react";
import { BsPlusLg } from "react-icons/bs";

const AddBtn = ({ onOpenForm, onSubmitForm, isOpen }) => {
  return (
    <>
      <div className={isOpen ? "add" : "add hide"} id="add">
        <div className="create-note">
          <div className="container">
            <div className="title">
              <h1>Create a note</h1>
            </div>
            <form id="create">
              <label>
                <input type="text" name="title" placeholder="Title" />
              </label>
              <label>
                <textarea
                  type="text"
                  name="content"
                  placeholder="Content"
                ></textarea>
              </label>
              <button type="submit" onClick={onSubmitForm}>
                Add note
              </button>
            </form>
          </div>
        </div>
      </div>
      <button className="add-btn" onClick={onOpenForm}>
        <BsPlusLg />
      </button>
    </>
  );
};

export default AddBtn;
