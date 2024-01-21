import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const loadedUser = useLoaderData();
    const [updatedUser, setUpdatedUser] = useState(loadedUser);
    
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email}

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert("user updated successfully")
                setUpdatedUser(user)
            }
        })
    }
    return (
        <div>
            <h1>Update User-{updatedUser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={updatedUser.name} />
                <br />
                <input type="email" name="email" defaultValue={updatedUser.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
            <Link to='/users'><button>!!!Users!!!</button></Link>
        </div>
    );
};

export default UpdateUser;