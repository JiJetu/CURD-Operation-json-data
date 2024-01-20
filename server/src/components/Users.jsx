import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Number of User {users.length}</h1>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;