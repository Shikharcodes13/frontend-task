import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import debounce from '../utils/debounce';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const filterUsers = useMemo(() => {
    return debounce((term: string) => {
      if (!term) {
        setFilteredUsers(users);
        return;
      }
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, 300);
  }, [users]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterUsers(term);
  };

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">Our Users</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full max-w-md mx-auto block p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserList;