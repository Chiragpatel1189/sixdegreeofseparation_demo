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
      <label htmlFor="standard-select">Source Person:</label>
      <div className="select">
        <select
          id="standard-select"
          value={selectPerson}
          onChange={(e) => handleChange(e)}
        >
          <option className="select-option" disabled>
            Select friend
          </option>
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
            Targeted person of : {sourcePerson ? sourcePerson?.name : ""}
          </label>
          <div className="select">
            <select
              id="standard-select2"
              // value={selectPerson}
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
          {targetedPerson.length !== 0 && selectPerson !== 0 && (
            <button onClick={addSelctedFriendFn}>Add Friend</button>
          )}
        </>
      ) : null}
      <p>
        {showStatus
          ? `Yeay!! ${
              sourcePerson.name
            } is friend with ${targetedPerson.toString()} `
          : null}
      </p>
    </>
  );
};

export default AddFriends;
