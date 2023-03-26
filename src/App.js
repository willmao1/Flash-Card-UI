import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import MicromomentPreviewCard from "./components/MicromomentPreviewCard";
import SearchBar from "./components/SearchBar";

import MICROMOMENT_DATA from "./micromoment-data.json";

import cog from "./images/settings-cog.svg";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

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
          <Row>
            <Col md="auto">
              <MicromomentPreviewCard micromoment={micromoment} />
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default App;
