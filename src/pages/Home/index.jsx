import React from "react";
import Barriere from "../../components/Banniere/banniere";
import Logement from "../../components/Logements/logements";
import "../Home/home.css";
import imgbanniere from "../../assets/imgbanniere.png"

function Home (){
  return (
    <div className="home-contenant">
      <Barriere title="Chez vous partout et ailleurs" image={imgbanniere}/>
   
     <Logement />
    
     </div>
  )
}

export default Home