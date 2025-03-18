import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LazyLoad from 'react-lazyload';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <LazyLoad key={user.id} height={100} offset={100}>
            <div className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default UserList;