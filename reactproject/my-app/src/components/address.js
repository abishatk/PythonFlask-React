
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table,Button ,Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Address() {
    const [APIData_add, setAPIData_add] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/add`)
            .then((response) => {
                console.log(response.data)
                setAPIData_add(response.data);
            })
    }, []);
    const addressData = (data)=> {
       let { id, company_id, address_id, street_name, city, Country } = data; 
        localStorage.setItem('ID', id);
        localStorage.setItem('Company ID', company_id);
        localStorage.setItem('Address ID', address_id);
        localStorage.setItem('Street Name', street_name);
        localStorage.setItem('City', city);
        localStorage.setItem('Country', Country)
    }



    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/add`)
            .then((response) => {
                setAPIData_add(response.data);
            })
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Street Name</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData_add.map((data) => {
                    return(
                    <Table.Row>
                        <Table.HeaderCell>{data.company_name}</Table.HeaderCell>
                        <Table.Cell>{data.street_name}</Table.Cell>
                        <Table.Cell>{data.city}</Table.Cell>
                        <Table.Cell>{data.Country}</Table.Cell>
                        <Link to='/updateadd'>
                            <Table.Cell>
                             <Button onClick={() => addressData(data)}>Update</Button>
                            </Table.Cell>
                        </Link>
                    </Table.Row>
                    
                )
})}
                </Table.Body>
            </Table>
        </div>
    )
}
