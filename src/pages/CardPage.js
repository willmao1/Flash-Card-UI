import React,  { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import lightBulb from "../images/light-bulb.svg"
import cog from "../images/settings-cog.svg"
import TipModal from "../components/TipModal";
function CardPage({micromoment, backFunc}) {
  const [tipDisplay, setTipDisplay] = useState(false);
  const toggleTip = () => {
    if(tipDisplay){
      setTipDisplay(false);
    }else {
      setTipDisplay(true);
    }
  }
  return (
    <>
      <img src={cog} width="35" />
      <Card className="m-2 overlay-gradient">
        <Card.Body className = "overlay-content ">
          <Card.Title>{micromoment.title}</Card.Title>
          <Card.Subtitle>Description:</Card.Subtitle>
          <Card.Text className="mb-1">
            {micromoment.description}
          </Card.Text>
          <Card.Subtitle>Example:</Card.Subtitle>
          <Card.Text className="mb-1">
            {micromoment.example}
          </Card.Text>
        </Card.Body>
      </Card>
      <Button onClick = {(e) => backFunc(e)} className="float-right">Done</Button>
      <TipModal tip = {micromoment.tip}/>
    </>
  );
}

export default CardPage;
