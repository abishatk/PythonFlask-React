import React, { useState,useEffect } from 'react';
import { Button,  Form } from 'semantic-ui-react'
import axios from 'axios';
export default function Updateadd() {
    const [id, setID_add] = useState('null');
    const [company_id, setCompanyID] = useState('');
    const [address_id, setAddID] = useState('');
    const [street_name, setStreetName] = useState('');
    const [city,setCity ] = useState('');
    const [Country, setCountry] = useState('');

    const updateAPIData_add = () => {
        axios.put(`http://127.0.0.1:5000/update/add`, {
            company_id,
            address_id,
            street_name,
            city,
            Country
        })
    }
    useEffect(() => {
        setID_add(localStorage.getItem('ID'))
        setCompanyID(localStorage.getItem('Company ID'))
        setAddID(localStorage.getItem('Address ID'))
        setStreetName(localStorage.getItem('Street Name'));
        setCity(localStorage.getItem('City'));
        setCountry(localStorage.getItem('Country'))
    }, []);
    
        return (
            <div>
                <Form className="create-form">
                
                   
                    <Form.Field>
                        <label>Street Name</label>
                        <input placeholder='Street Name' value={street_name} onChange={(e) => setStreetName(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                    <input placeholder='City' value={city} onChange={(e) => setCity(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                    <input placeholder='Country' value={Country} onChange={(e) => setCountry(e.target.value)}/>
                    </Form.Field>
                    <Button type='submit' onClick={updateAPIData_add}>Update</Button>
                </Form>
            </div>
        )
    }