import Container from "@/UI/Container/Container";
import React from "react";
import FeaturesItem from "./Features.item";
import { featureItems } from "@/consts/features";

const Features = () => {
  return (
    <Container>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-end my-24'>
        {featureItems.map((item, i) => {
          return (
            <FeaturesItem src={`${i + 1}`} w={item.w} h={item.h} key={i} />
          );
        })}
      </div>
    </Container>
  );
};

export default Features;
