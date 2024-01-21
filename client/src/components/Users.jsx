import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = _id => {
        console.log(_id);

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("user deleted successfully")
                    const remainingUser = users.filter(user => user._id !== _id)
                    setUsers(remainingUser)
                }
            })
    }
    return (
        <div>
            <h1>Number of User {users.length}</h1>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email}
                    <button>
                        <Link to={`/users/${user._id}`}>Update</Link>
                    </button>
                    <button onClick={() => handleDelete(user._id)}>X</button></p>)
            }
            <Link to='/'><button>add user</button></Link>
        </div>
    );
};

export default Users;