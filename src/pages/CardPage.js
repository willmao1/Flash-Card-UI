import React, { useState } from "react";
import FullCard from "../components/FullCard";
import MICROMOMENT_DATA from "../micromoment-data.json";
function CardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <>
      <FullCard micromoment={MICROMOMENT_DATA[1]}/>
    </>
  );
}

export default CardPage;
