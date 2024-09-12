import React from "react";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import Footer from "../Components/Footer";

const OfferPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
   
      <main className="flex-grow">
        <Offers />
      </main>
   
    </div>
  );
};

export default OfferPage;
