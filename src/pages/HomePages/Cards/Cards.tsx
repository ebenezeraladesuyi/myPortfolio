// import React from 'react'

import Card from "../../../components/static/Card";
import  "./Cards.css"
import { BsTelephoneFill, BsFillPersonFill, BsPhone } from "react-icons/bs"

const Cards = () => {
  return (
    <div className="cardHold">

      <div className="holder">
        <Card 
            icons= {<BsTelephoneFill />}
            card1= "Requisite Information"
            card2= "We only need a few essential details about your partner. Provide us with their phone number, and we will swiftly initiate a verification process"
         />

        <Card 
            icons= {<BsFillPersonFill />}
            card1= "Information Check"
            card2= "Once the verification process is finalized, we will commence phone access testing, which will be concluded within a short timeframe"
         />

        <Card 
            icons= {<BsPhone />}
            card1= "Phone Accessibility"
            card2= "Upon successful completion of the hacking process, we will integrate it with the application and furnish you with the APK file for installation, thereby granting you unrestricted access."
         />

         <Card 
             icons= {<BsPhone />}
             card1= "Phone Accessibility"
             card2= "Upon successful completion of the hacking process, we will integrate it with the application and furnish you with the APK file for installation, thereby granting you unrestricted access."
          />
      </div>
    </div>
  )
}

export default Cards;