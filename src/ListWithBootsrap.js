import React from 'react'
import {Table} from 'react-bootstrap'

function ListWithBootsrap() {
    const users = [
        { name: "Anil", email: "Anil@test", contact: 888 },
        { name: "sidhu", email: "sidhu@test", contact: 111 },
        { name: "sam", email: "sam@test", contact: 812 },
        { name: "Peter", email: "PeteA@test", contact: 842 },
      ];
  return (
    <div className='box marginTop'>
        <h1>List With Bootstrap Table</h1>
        <div className="display">
            <Table striped bordered hover variant="dark">
                <tbody>
            <tr>
                    <td>name</td> 
                    <td>email</td>
                    <td>contact</td>
                    
                </tr>
        {
            users.map((item,i)=>
                <tr key={i}>
                    <td>{item.name}</td> 
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    
                </tr>

            )
        }
        </tbody>
        </Table>
        </div>
    </div>
  )
}

export default ListWithBootsrap