import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user ={name, email}

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data._id){
        alert("user added successfully")
        form.reset();
      }
    })
  }

  return (
    <>
      <h1>CURD</h1>
      <h3>Create User</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <button><Link to='/users'>!!!Users!!!</Link></button>
    </>
  )
}

export default App
