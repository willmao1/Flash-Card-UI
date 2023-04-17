import React, { useState } from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MicromomentPreviewCard from "../components/MicromomentPreviewCard";
import SearchBar from "../components/SearchBar";
import MICROMOMENT_DATA from "../micromoment-data.json";
import CardModal from "../components/CardModal";
import cog from "../images/settings-cog.svg";

function SearchPage({handlerFunc}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = (e, id) => {
    setShow(id);
  }
    
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
          <Row onClick={(e) => handleShow(e,micromoment.id)}>
            <Col>
              <MicromomentPreviewCard   micromoment={micromoment} />
            </Col>
          </Row>
          <CardModal id = {micromoment.id} handleClose = {handleClose} show = {show} micromoment = {micromoment}/>
        </>
        ))}
      </Container>
        
    </>
  );
}

export default SearchPage;
