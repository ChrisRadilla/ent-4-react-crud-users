import React, { useState } from 'react';
import './styles/userCard.css';

const UserCard = ({ user, deleteUser, setUpdateUser }) => {
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const handleDelete = () => {
        setIsConfirmationOpen(true);
    };

    const confirmDelete = () => {
        deleteUser('users', user.id);
        setIsConfirmationOpen(false);
    };

    const cancelDelete = () => {
        setIsConfirmationOpen(false);
    };

    const handleEdit = () => {
        setUpdateUser(user);
    };

    return (
        <section className='user'>
            <h2 className='user_name'>
                {user.first_name} {user.last_name}
            </h2>
            <hr className='user_line' />
            <ul className='user_list'>
                <li className='user_item'>
                    <span>Email: </span>
                    <span>
                        {user.email}
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                </li>
                <li className='user_item'>
                    <span>Birthday: </span>
                    <span>
                        <ion-icon name="gift-outline"></ion-icon>
                        {user.birthday}
                    </span>
                </li>
            </ul>
            <hr className='user_line' />
            <div className='user_button'>
                <button className='user_btn' onClick={handleDelete}>
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
                <button className='user_btn2' onClick={handleEdit}>
                    <ion-icon name="create-outline"></ion-icon>
                </button>
            </div>

            {isConfirmationOpen && (
                <div className="confirmation-modal">
                    <p>Want to <span>DELETE</span> User?</p>
                    <button className='btn_yes btn_dicision' onClick={confirmDelete}>Yes</button>
                    <button className='btn_no btn_dicision' onClick={cancelDelete}>No</button>
                </div>
            )}
        </section>
    );
};

export default UserCard;
