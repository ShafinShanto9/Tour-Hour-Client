import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

const ManagePackage = () => {
    const [packages , setPacakes] = useState([])

    const [control, setControl] = useState(false);
    
    useEffect(() => {
        fetch(("https://intense-badlands-05606.herokuapp.com/allpackage"))
        .then(res => res.json())
        .then(data => setPacakes(data))
    }, [])

    const handleDelete = (id) => {
      alert('are you sure want to delete')
        fetch(`https://intense-badlands-05606.herokuapp.com/deleteEvent/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setControl(!control);
            } else {
              setControl(false);
            }
          });
        console.log(id);
      };
    return (
      <>
      <NavBar></NavBar>
        <div className = "container">
            <h2 className ="text-center text-success mt-5">Manage All Orders</h2>
             <Table className ='mt-5' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Destination</th>
            <th>Present_Adress</th>
            <th>Mobile No.</th>
          </tr>
        </thead>
        {packages?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.place}</td>
              <td>{pd?.adress}</td>
              <td>{pd?.mobile}</td>
              <button
               onClick={() => handleDelete(pd._id)}
              className="btn bg-danger p-2 w-100 m-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
        </div>
        </>
    );
};

export default ManagePackage;