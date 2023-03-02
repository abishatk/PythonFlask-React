
import { Button, Form } from 'semantic-ui-react'
import React, { useState } from 'react';
import axios from 'axios';
export default function Create() {
    const [company_id, setID] = useState('');
    const [company_name, setCompanyname] = useState('');
    const [year_established, setYear] = useState('');
    const [type, setType] = useState('');
    const [street_name, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [Country, setCountry] = useState('');
    
    
        const postData = () => {
            axios.post(`http://127.0.0.1:5000/create/join`, {
                company_name,
                year_established,
                type,
                street_name,
                city,
                Country

            })
        }
        

return (
 <div>

  <Form className="create-form">
    <Form.Field>
      <label>Company Name</label>
      <input placeholder='Company Name' onChange={(e) => setCompanyname(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Year Established</label>
      <input placeholder='Year Established' onChange={(e) => setYear(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Type</label>
      <input placeholder='Type' onChange={(e) => setType(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Street Name</label>
      <input placeholder='Street Name' onChange={(e) => setStreetName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>City</label>
      <input placeholder='City' onChange={(e) => setCity(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Country</label>
      <input placeholder='Country' onChange={(e) => setCountry(e.target.value)}/>
    </Form.Field>
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
 </div>
)
}
