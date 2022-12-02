import { Fragment, useEffect, useState } from "react";
import {
  ConnectionPaths,
  ConnectionSelection,
  ConnectionWrapper,
  UserNode,
} from "./styles";

const MakeRelationship = ({ allusers }) => {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [connectionPath, setConnectionPath] = useState([]);

  useEffect(() => {
    getConnectionsHandler();
  }, [personOne, personTwo]);

  const getConnectionsHandler = () => {
    const obj = {};
    for (let { name, friends } of allusers) {
      obj[name] = friends;
    }

    const relPath = [];

    function calculateRelations(
      personOne,
      personTwo,
      path = [personOne],
      visited = {}
    ) {
      if (visited[personOne]) return;
      visited[personOne] = true;

      if (obj[personOne]) {
        for (let friend of obj[personOne]) {
          if (friend === personTwo) {
            relPath.push(path.concat(personTwo));
          } else {
            calculateRelations(friend, personTwo, path.concat(friend), visited);
          }
        }
      }
    }

    calculateRelations(personOne, personTwo);
    setConnectionPath(relPath);
  };

  const handleTargetedUser = (targetedUser) => {
    setPersonTwo(targetedUser);
  };

  return (
    <ConnectionWrapper>
      <div className="container">
        <h1>Get Relationship Connection</h1>
        <p>Please select two users from the following box.</p>
        {allusers.length !== 0 ? (
          <>
            <ConnectionSelection>
              <div>
                <p>Please select first(source) friend.</p>
                <div className="userBox">
                  {allusers.map((item) => {
                    return (
                      <UserNode
                        key={item.id}
                        onClick={() => setPersonOne(item.name)}
                        className={personOne === item.name ? "selected" : ""}
                      >
                        {item.name}
                      </UserNode>
                    );
                  })}
                </div>
              </div>
              <div>
                <p>Please select second(target) friend.</p>
                <div className="userBox">
                  {allusers.map((item) => {
                    return (
                      <UserNode
                        key={item.id}
                        onClick={() => handleTargetedUser(item.name)}
                        className={`${
                          personTwo === item.name ? "selected" : ""
                        } ${personOne === item.name ? "userone" : ""}`}
                      >
                        {item.name}
                      </UserNode>
                    );
                  })}
                </div>
              </div>
            </ConnectionSelection>
            {personOne !== "" && personTwo !== "" ? (
              <>
                <h1>Get Relationship Path</h1>
                <div>
                  <p>
                    Get connection path between <strong>{personOne}</strong> and{" "}
                    <strong>{personTwo}</strong>.
                  </p>
                </div>
              </>
            ) : null}
            <ConnectionPaths>
              {connectionPath.length !== 0 ? (
                <>
                  {connectionPath.map((connection, index) => {
                    return (
                      <Fragment key={index}>
                        <p>Relation Path #{index + 1}</p>
                        <div className="connectionPath" key={index}>
                          {connection.map((connectionNode, index1) => {
                            return (
                              <div className="connectionNode" key={index1}>
                                <p>{connectionNode}</p>
                              </div>
                            );
                          })}
                        </div>
                      </Fragment>
                    );
                  })}
                </>
              ) : null}
            </ConnectionPaths>
          </>
        ) : (
          <p>No user found! Please add new users</p>
        )}
      </div>
    </ConnectionWrapper>
  );
};

export default MakeRelationship;
