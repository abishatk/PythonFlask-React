import axios from 'axios';
import { Table, Button } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Read() {

const [APIData, setAPIData] = useState([]);

useEffect(() => {
    axios.get(`http://127.0.0.1:5000/comp`)
        .then((response) => {
            console.log(response.data)
            setAPIData(response.data);
        })
}, []);

const setData = (data) => {
    let {id,company_id,company_name,year_established,type} = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Company ID', company_id);
    localStorage.setItem('Company Name', company_name);
    localStorage.setItem('Year Established', year_established);
    localStorage.setItem('Type', type)
}

const getData = () => {
    axios.get(`http://127.0.0.1:5000/comp`)
        .then((getData) => {
            setAPIData(getData.data);
        })
}


const onDelete = (company_id) => {
    axios.delete(`http://127.0.0.1:5000/comp/${company_id}`)
.then(() => {
    getData();
})
}



    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Year Established</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
                    return(
                    <Table.Row>
                        <Table.Cell>{data.company_name}</Table.Cell>
                        <Table.Cell>{data.year_established}</Table.Cell>
                        <Table.Cell>{data.type}</Table.Cell>
                        <Link to='/update'>
                            <Table.Cell>
                             <Button onClick={() => setData(data)}>Update</Button>
                            </Table.Cell>
                        </Link>
                        <Table.Cell>
                        <Button onClick={() => onDelete(data.company_id)}>Delete</Button>
                        </Table.Cell>
                        <Link to='/address'>
                        <Table.Cell>
                        <Button onClick={() => setAPIData(data.id)}>Address</Button>
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
