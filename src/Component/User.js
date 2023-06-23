import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';



function User(){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(response => {
            setUsers(response.data); // Assuming the API response is an array of user objects
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }, []);

      console.log(users);
      

      return (
        <Table striped bordered hover>
          <thead>
            <tr>
            {/* <th>userId</th> */}
            <th>id</th>
            <th>title</th>
            <th>completed</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {users.map((user,i) => (
             <tr key={user.id}>
             <td>{user.id}</td>
             <td>{user.title}</td>
             <td>{user.completed.toString()}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </Table>
      );
}

export default User;