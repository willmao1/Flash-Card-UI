import React, { useState } from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MicromomentPreviewCard from "../components/MicromomentPreviewCard";
import SearchBar from "../components/SearchBar";
import MICROMOMENT_DATA from "../micromoment-data.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';
import TipModal from "../components/TipModal";
import cog from "../images/settings-cog.svg";

function SearchPage({handlerFunc}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  const onSearchChange = (e) => setSearchQuery(e.target.value);
  return (
    <>
      <Container fluid className="mt-3">
        <Row>
          <Col>
            <img src={cog} width="35" />
          </Col>
        </Row>
        <Row>
          <SearchBar searchText={searchQuery} onChange={onSearchChange} />
        </Row>
        {MICROMOMENT_DATA.filter((micromoment) =>
          micromoment.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((micromoment) => (
          <>
          <Row onClick={handleShow}>
            <Col>
              <MicromomentPreviewCard   micromoment={micromoment} />
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose}>
          <Container fluid className="mt-3">
          <Row>
              <Col>
                <img src={cog} width="35" />
              </Col>
          </Row>
          <Row>
              <Col>
                <Card className="m-2 overlay-gradient">
                  <Card.Body className = "overlay-content ">
                    <Card.Title className = "fs-1" >{micromoment.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fs-4">Description:</Card.Subtitle>
                    <Card.Text className="mb-3">
                      {micromoment.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted fs-4">Example:</Card.Subtitle>
                    <Card.Text className="mb-1">
                      {micromoment.example}
                    </Card.Text>
                  </Card.Body>
                  <Card.Header className="text-center">Header</Card.Header>
                </Card>
              </Col>
          </Row>
          <Row>
              <Col>
                <TipModal tip = {micromoment.tip}/>
              </Col>
              <Col>
                <Button onClick = {handleClose} className="float-right">Done</Button>
              </Col>
          </Row>
          </Container>
        </Modal>
        </>
        ))}
      </Container>
        
    </>
  );
}

export default SearchPage;
