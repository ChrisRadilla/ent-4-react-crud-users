import { useEffect, useState } from 'react';
import './App.css'
import useCrud from './hook/useCrud';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';

function App() {
 const urlBase = "https://users-crud.academlo.tech/"

 const [isOpen, setIsOpen] = useState(false)
 const [updateUser, setUpdateUser] = useState()
const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase);

useEffect(() => {
 const path ='users';
getUsers(path);
}, [])

useEffect(() => {
  document.title = 'Crud User-CR';
}, []);


const handleOpen = () => {
  setIsOpen(true);
}

  return (
<div className='app'>
  <header className='app_header'>
  <h1 className='app_title'>Crud Users</h1>
<button className='moreUser_btn' onClick={handleOpen}><ion-icon name="person-add-outline"></ion-icon></button>
  </header>
  <UserForm
  createUser={createUser}
  updateUser={updateUser}
  editUser={editUser}
  setUpdateUser={setUpdateUser}
  setIsOpen={setIsOpen}
  isOpen={isOpen}
  />

<div className='app_container'>
  {
    users?.map((user) => (
      <UserCard
      key={user.id}
      user = {user}
      deleteUser={deleteUser}
    setUpdateUser={setUpdateUser}
      />
    ))
  }
</div>





  
<footer className="footer">
            Designed and Developed by Christopher.  Est.2024 🐉 
          </footer>
  </div>
  )
}

export default App
