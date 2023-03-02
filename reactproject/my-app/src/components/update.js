import React, { useState,useEffect } from 'react';
import { Button,  Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
 
    const [company_id, setID] = useState('');
    const [company_name, setCompanyName] = useState('');
    const [year_established,setYear ] = useState('');
    const [type, setType] = useState('');

    const updateAPIData = () => {
        axios.put(`http://127.0.0.1:5000/update/comp`, {
            company_id,
            company_name,
            year_established,
            type
        })
    }

useEffect(() => {
    setID(localStorage.getItem('Company ID'))
    setCompanyName(localStorage.getItem('Company Name'));
    setYear(localStorage.getItem('Year Established'));
    setType(localStorage.getItem('Type'))
}, []);

    return (
        <div>
            <Form className="create-form">
            <Form.Field>
                    <label>Company ID</label>
                    <input placeholder='Company ID' value={company_id} onChange={(e) => setID(e.target.value)}/>
                </Form.Field> 
            
                <Form.Field>
                    <label>Company Name</label>
                    <input placeholder='Company Name' value={company_name} onChange={(e) => setCompanyName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <input placeholder='Year Established' value={year_established} onChange={(e) => setYear(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <input placeholder='Type' value={type} onChange={(e) => setType(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}