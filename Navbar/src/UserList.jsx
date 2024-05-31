import React, { useState } from 'react';
import  "./UserList.css"
const UserList = () => {
    const initialUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
        { id: 5, name: 'Emily Davis', email: 'emily@example.com' },
        { id: 6, name: 'Michael Wilson', email: 'michael@example.com' },
        { id: 7, name: 'Emma Taylor', email: 'emma@example.com' },
        { id: 8, name: 'William Martinez', email: 'william@example.com' },
        { id: 9, name: 'Olivia Anderson', email: 'olivia@example.com' },
        { id: 10, name: 'James Thomas', email: 'james@example.com' },
        { id: 11, name: 'Sophia Hernandez', email: 'sophia@example.com' },
        { id: 12, name: 'Alexander Mitchell', email: 'alexander@example.com' },
        { id: 13, name: 'Charlotte Perez', email: 'charlotte@example.com' },
        { id: 14, name: 'Daniel Scott', email: 'daniel@example.com' },
        { id: 15, name: 'Ava Torres', email: 'ava@example.com' },
        { id: 16, name: 'Isabella Gonzales', email: 'isabella@example.com' },
        { id: 17, name: 'Mia Moore', email: 'mia@example.com' },
        { id: 18, name: 'Ethan Walker', email: 'ethan@example.com' },
        { id: 19, name: 'Benjamin King', email: 'benjamin@example.com' },
        { id: 20, name: 'Liam Rivera', email: 'liam@example.com' },
        { id: 21, name: 'Sebastian Allen', email: 'sebastian@example.com' },
        { id: 22, name: 'Logan Carter', email: 'logan@example.com' },
        { id: 23, name: 'Zoe Parker', email: 'zoe@example.com' },
        { id: 24, name: 'Nora Evans', email: 'nora@example.com' },
        { id: 25, name: 'Hannah Collins', email: 'hannah@example.com' },
        { id: 26, name: 'Elijah Stewart', email: 'elijah@example.com' },
        { id: 27, name: 'Aiden Sanchez', email: 'aiden@example.com' },
        { id: 28, name: 'Grace Morris', email: 'grace@example.com' },
        { id: 29, name: 'Jackson Rogers', email: 'jackson@example.com' },
        { id: 30, name: 'Scarlett Reed', email: 'scarlett@example.com' },
        { id: 31, name: 'Caleb Cook', email: 'caleb@example.com' },
        { id: 32, name: 'Victoria Morgan', email: 'victoria@example.com' },
        { id: 33, name: 'Gabriel Cooper', email: 'gabriel@example.com' },
        { id: 34, name: 'Mateo Peterson', email: 'mateo@example.com' },
        { id: 35, name: 'Madison Gray', email: 'madison@example.com' },
        { id: 36, name: 'Sofia Bell', email: 'sofia@example.com' },
        { id: 37, name: 'David Reed', email: 'david@example.com' },
        { id: 38, name: 'Avery Price', email: 'avery@example.com' },
        { id: 39, name: 'Joseph Howard', email: 'joseph@example.com' },
        { id: 40, name: 'Dylan Diaz', email: 'dylan@example.com' },
        { id: 41, name: 'Samuel Sanders', email: 'samuel@example.com' },
        { id: 42, name: 'Mila Bell', email: 'mila@example.com' },
        { id: 43, name: 'Lucas Richardson', email: 'lucas@example.com' },
        { id: 44, name: 'Evelyn Powell', email: 'evelyn@example.com' },
        { id: 45, name: 'Penelope Long', email: 'penelope@example.com' },
        { id: 46, name: 'Wyatt Young', email: 'wyatt@example.com' },
        { id: 47, name: 'Aria Ward', email: 'aria@example.com' },
        { id: 48, name: 'Jack Murphy', email: 'jack@example.com' },
        { id: 49, name: 'Luna Perry', email: 'luna@example.com' },
        { id: 50, name: 'Grayson Kim', email: 'grayson@example.com' }
    ];

    const [users, setUsers] = useState(initialUsers);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='user-list-container'>
            <input
            className="input-search"
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <ul className="user-list">
                {filteredUsers.map(user => (
                    <li key={user.id} className="user-item">
                        <div>Id:{user.id}</div>
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
