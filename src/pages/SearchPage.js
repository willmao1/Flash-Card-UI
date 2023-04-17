import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FiltersModal from "../components/filter/FiltersModal";
import MicromomentPreviewCard from "../components/MicromomentPreviewCard";
import SearchBar from "../components/SearchBar";
import MICROMOMENT_DATA from "../micromoment-data.json";
import { TIME_FILTER_OPTIONS, TYPES } from "../util/constants";
import CardModal from "../components/CardModal";

import cog from "../images/settings-cog.svg";

function SearchPage({ handlerFunc }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [enabledTimes, setEnabledTimes] = useState([]);
  const [enabledTypes, setEnabledTypes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [show, setShow] = useState(null);
  
  const handleClose = () => setShow(null);
  const handleShow = (e, id) => {
    setShow(id);
  }
  const onSearchChange = (e) => setSearchQuery(e.target.value);
  const onTimeFiltersChange = (value) => setEnabledTimes(value);
  const onTypeFiltersChange = (value) => setEnabledTypes(value);

  const searchFilter = (micromoment) =>
    micromoment.title.toLowerCase().includes(searchQuery.toLowerCase());
  const timeFilter = (micromoment) =>
    enabledTimes.length === 0 ||
    enabledTimes.some(
      (index) =>
        micromoment.time >= TIME_FILTER_OPTIONS[index][0] &&
        micromoment.time <= TIME_FILTER_OPTIONS[index][1]
    );
  const typeFilter = (micromoment) =>
    enabledTypes.length === 0 ||
    enabledTypes.map((index) => TYPES[index]).includes(micromoment.type);

  return (
    <>
      <Container fluid className="mt-3">
        <Row>
          <Col>
            <img src={cog} alt="Settings Cog" width="35" />
          </Col>
        </Row>
        <Row>
          <SearchBar
            searchText={searchQuery}
            onSearchChange={onSearchChange}
            onFilterClick={() => setShowFilters(true)}
          />
        </Row>
        {MICROMOMENT_DATA.filter(searchFilter)
          .filter(timeFilter)
          .filter(typeFilter)
          .map((micromoment) => (
            <>
              <Row
                onClick={
                  (e) => handleShow(e,micromoment.id)
                }
              >
                <Col>
                  <MicromomentPreviewCard micromoment={micromoment} />
                </Col>
              </Row>
              <CardModal id = {micromoment.id} handleClose = {handleClose} show = {show} micromoment = {micromoment}/>
            </>
          ))}
      </Container>
      <FiltersModal
        show={showFilters}
        onHide={() => setShowFilters(false)}
        enabledTimes={enabledTimes}
        onTimeFiltersChange={onTimeFiltersChange}
        enabledTypes={enabledTypes}
        onTypeFiltersChange={onTypeFiltersChange}
      />
    </>
  );
}

export default SearchPage;
