import React,{ useState, useEffect } from 'react';
// import axios from 'axios';
import { Table } from 'react-bootstrap';
import authFetch from './AuthFetch';


function Profile(){
    const [data, setData] = useState([]);
    useEffect(() => {
      authFetch.get('https://real-pear-fly-kilt.cyclic.app/accounts', {

        headers : {

            Authorization : "Bearer " + localStorage.getItem("token")
        }

        })
          .then(response => {
            setData(response.data); // Assuming the API response is an array of user objects
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }, []);

      // console.log(data);
      

      return (
        <Table striped bordered hover>
          <thead>
            <tr>
            {/* <th>userId</th> */}
            <th>S.No</th>
            <th>id</th>
            <th>title</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((user,index) => (
             <tr key={user.id}>
              <td>{index}</td>
              <td>{user.id}</td>
             <td>{user.title}</td>
             <td>{user.firstName}</td>
             <td>{user.lastName}</td>
             <td>{user.email}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </Table>
      );
}

export default Profile;