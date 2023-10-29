import Container from "@/UI/Container/Container";
import React from "react";
import FeaturesItem from "./Features.item";

const Features = () => {
  return (
    <Container>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-end my-24'>
        <FeaturesItem src='1' />
        <FeaturesItem src='2' />
        <FeaturesItem src='3' w='41' />
        <FeaturesItem src='4' w='56' h='60' />
        <FeaturesItem src='5' />
        <FeaturesItem src='6' />
      </div>
    </Container>
  );
};

export default Features;
