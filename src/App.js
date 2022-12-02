import { useState } from "react";
import "./App.css";
import AddFriends from "./components/AddFriends";
import AddUser from "./components/AddUser";
import MakeRelationship from "./components/MakeRelationship";

const usersData = [
    {
        id: 1,
        name: "Sameer",
        friends: ["Aayushi", "Kamalnath"],
    },
    {
        id: 2,
        name: "Aayushi",
        friends: ["Bhaskar"],
    },
    {
        id: 3,
        name: "Bhaskar",
        friends: [],
    },
    {
        id: 4,
        name: "Kamalnath",
        friends: ["Shanti"],
    },
    {
        id: 5,
        name: "Shanti",
        friends: ["Bhaskar"],
    },
];

function App() {
    const [users, setUsers] = useState(usersData);

    const addUserHandler = person => {
        const newUser = [...users, { ...person, id: users.length + 1 }];
        setUsers(newUser);
    };
    const addFriendHandler = (userInfo, userFriends) => {
        let newUsers = users.reduce((acc, item) => {
            if (item.id === userInfo.id) {
                return [...acc, { id: item.id, name: item.name, friends: userFriends }];
            } else return [...acc, item];
        }, []);

        setUsers(newUsers);
    };

    return (
        <div className="App">
            <div className="addpeople-section">
                <div className="inner-section">
                    <AddUser addUserfn={addUserHandler} />
                    {users.length > 2 ? (
                        <AddFriends allusers={users} addFriendFn={addFriendHandler} />
                    ) : (
                        <p>Please add two friends, atleast.</p>
                    )}
                </div>
            </div>
            <div className="relationship-section">
                <MakeRelationship allusers={users} />
            </div>
        </div>
    );
}

export default App;
