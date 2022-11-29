import { useEffect, useState } from "react";

const AddFriends = ({ allusers, addFriendFn }) => {
  const [selectPerson, setSelectPerson] = useState(0);
  const [sourcePerson, setsourcePerson] = useState(null);
  const [targetedPerson, settargetedPerson] = useState([]);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    setsourcePerson(allusers.find((item) => item.id === selectPerson));
  }, [selectPerson, allusers]);

  const handleChange = (e) => {
    setSelectPerson(Number(e.target.value));

    // Blank friends list
    settargetedPerson([]);
    // Hide status
    setShowStatus(false);
  };
  const selectSecondFriendFn = (e) => {
    var result = allusers.find((item) => item.id === Number(e.target.value));
    const friendName = result.name;

    if (!targetedPerson.includes(result.name)) {
      settargetedPerson([...targetedPerson, friendName]);
    }
  };

  const addSelctedFriendFn = () => {
    addFriendFn(sourcePerson, targetedPerson);
    setShowStatus(true);
  };

  return (
    <>
      <h1>Add Friend(s)</h1>
      <label htmlFor="standard-select">Select a friend:</label>
      <div className="select">
        <select
          id="standard-select"
          value={selectPerson}
          onChange={(e) => handleChange(e)}
        >
          {allusers.map((item) => {
            return (
              <option className="select-option" key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <span className="focus"></span>
      </div>

      {selectPerson !== 0 ? (
        <>
          <label htmlFor="standard-select2">
            Select your friend for: {sourcePerson ? sourcePerson?.name : ""}
          </label>
          <div className="select">
            <select
              id="standard-select2"
              // value={sourcePerson?.id}
              onChange={(e) => selectSecondFriendFn(e)}
            >
              {allusers.map((item) => {
                return (
                  <option
                    key={item.id}
                    className="select-option"
                    disabled={
                      sourcePerson?.id === item.id ||
                      Object.values(targetedPerson).includes(item.name)
                    }
                    value={item.id}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <button onClick={addSelctedFriendFn}>Add Friend</button>
        </>
      ) : null}
      <p>
        {showStatus
          ? `Yeay!! now, ${
              sourcePerson.name
            } is friend with ${targetedPerson.toString()} `
          : null}
      </p>
    </>
  );
};

export default AddFriends;
