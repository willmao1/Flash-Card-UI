import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from "react";
import Micromoment from '../models/Micromoment';
import axios from "axios";
import { BACKEND_URL } from "../util/constants";
import "../CardView.css"
function EditPage() {
    const [micromoments, setMicromoments] = useState([])
    const [formValues, setFormValues] = useState({id: '', title: '', type: '', time: '', description: '', tip: '', example: ''  })
    const handleSelect = (e) => {
        if(parseInt(e.target.value) === -1 || e.target.value === ""){
            setFormValues({id: '', title: '', type: '', time: '', description: '', tip: '', example: ''  })
        } else {
            setFormValues(micromoments[micromoments.findIndex((micromoment) => micromoment.id === parseInt(e.target.value))])
        }
    }
    const handleChange = (e) => {
            console.log(e.target.value)
            setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    useEffect(() => {
        async function updateMicromomentData() {
          let data = await Micromoment.getMicromoments()
          setMicromoments(data)
        }
    
        updateMicromomentData()
    }, []);
    const onSubmit = async (e) => {
        const formData = new FormData(e.target),
                formDataObj = Object.fromEntries(formData.entries())
        formDataObj.time = parseInt(formDataObj.time)
        formDataObj.id = parseInt(formDataObj.id)
        if(formDataObj.id === -1){
            formDataObj.id = Object.keys(micromoments).length;
            axios.post(`${BACKEND_URL}micromoments`, formDataObj)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        } else {
            let SearchId = micromoments[micromoments.findIndex((micromoment) => micromoment.id === formDataObj.id)]._id
            axios.patch(`${BACKEND_URL}micromoments/${SearchId}`, formDataObj)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        }
    }
    return (
        <Container className='border'>
            <Col>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mt-3 mb-3" controlId="formTitle">
                        <Form.Label className="required-label">Editing Card</Form.Label>
                        <Form.Select onChange={handleSelect} required name = "id" aria-label="Default select example">
                            <option value = "">Select Card</option>
                            <option value = "-1">+ New Card</option>
                            {micromoments
                                .map((micromoment) => (
                                    <option value = {micromoment.id}>{micromoment.title}</option>
                                ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label className="required-label">Title</Form.Label>
                        <Form.Control defaultValue = {formValues.title} value = {formValues.title} onChange={handleChange} name="title" type="text" placeholder="Enter Title" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formType">
                        <Form.Label className="required-label">Type</Form.Label>
                        <Form.Control defaultValue = {formValues.type} value = {formValues.type} onChange={handleChange} name="type" type="text" placeholder="Enter Type" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTime">
                        <Form.Label className="required-label">Time (min)</Form.Label>
                        <Form.Control defaultValue = {formValues.time} value = {formValues.time} onChange={handleChange} name="time" type="number" placeholder="Enter Time" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDesc">
                        <Form.Label className="required-label">Description</Form.Label>
                        <Form.Control defaultValue = {formValues.description} value = {formValues.description} onChange={handleChange} name="description" rows={3} as="textarea" placeholder="Enter Description" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTip">
                        <Form.Label className="required-label">Tip</Form.Label>
                        <Form.Control defaultValue = {formValues.tip} value = {formValues.tip} onChange={handleChange} name="tip" rows={3} as="textarea" placeholder="Enter Tip" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEx">
                        <Form.Label className="required-label">Example</Form.Label>
                        <Form.Control defaultValue = {formValues.example} value = {formValues.example} onChange={handleChange} name="example" rows={3} as="textarea" placeholder="Enter Example" required/>
                    </Form.Group>
                    <Form.Group style = {{"width":"8%","marginLeft": "auto", "marginRight":"0" }}>
                        <Form.Control  className = "btn btn-primary mb-3 btn-sm" type="submit" value = "Submit"/>
                    </Form.Group>
                </Form>
            </Col>
        </Container>
      );
}
export default EditPage;