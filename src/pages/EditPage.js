import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import React from "react";

function EditPage() {
    const onSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
                formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj);
    }
    return (
        <Container className='border'>
            <Col>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mt-3 mb-3" controlId="formTitle">
                        <Form.Label>Editing Card:</Form.Label>
                        <Form.Select name = "card" aria-label="Default select example">
                            <option>Select Card</option>
                            <option value="1">+ New Card</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" type="text" placeholder="Enter Title"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control name="type" type="text" placeholder="Enter Type" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTime">
                        <Form.Label>Time (min)</Form.Label>
                        <Form.Control name="time" type="text" placeholder="Enter Time" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="desc" rows={3} as="textarea" placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTip">
                        <Form.Label>Tip</Form.Label>
                        <Form.Control name="tip" rows={3} as="textarea" placeholder="Enter Tip" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEx">
                        <Form.Label>Example</Form.Label>
                        <Form.Control name="exam" rows={3} as="textarea" placeholder="Enter Example" />
                    </Form.Group>
                    <Form.Group style = {{"width":"8%","margin-left": "auto", "margin-right":"0" }}>
                        <Form.Control  className = "btn btn-primary mb-3 btn-sm" type="submit" value = "Submit"/>
                    </Form.Group>
                </Form>
            </Col>
        </Container>
      );
}
export default EditPage;