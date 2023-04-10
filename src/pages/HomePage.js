import React, { useState } from "react";
import SearchPage from "./SearchPage";
import CardPage from "./CardPage"
function HomePage() {
  const [selectCard, setSelectCard] = useState({cardData : null, searchView : true});
  const onCardSelect = (micromoment,e) => {
    setSelectCard({cardData: micromoment, searchView: false})
  } 
  const onBack = (e) => {
    setSelectCard({cardData: null, searchView: true})
  }
  if(selectCard.searchView){
    return <SearchPage handlerFunc = {onCardSelect}/>
  } else {
    var micromoment = selectCard.cardData
    
    return <CardPage  micromoment={micromoment} backFunc = {onBack}/>
  }
  
}

export default HomePage;
