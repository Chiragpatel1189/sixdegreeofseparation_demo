import { useState } from "react";
import { NoteText, InputUserBox } from "./styles";

const AddUser = ({ addUserfn }) => {
  const [person, setPerson] = useState("");

  const addUserInputHandler = (e) => {
    setPerson(e.target.value);
  };

  const addPersonHandler = () => {
    const user = {
      name: person,
      friends: [],
    };
    addUserfn(user);
  };

  return (
    <>
      <h1>Add People</h1>
      <InputUserBox>
        <input
          placeholder="Enter your name"
          type="text"
          name="person"
          value={person}
          onChange={(e) => addUserInputHandler(e)}
        />
        <button onClick={addPersonHandler}>Add User</button>
      </InputUserBox>
      <NoteText>
        Note: I've already added few friends with their relationship with
        friends.
      </NoteText>
    </>
  );
};

export default AddUser;
