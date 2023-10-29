import Container from "@/UI/Container/Container";
import React from "react";
import Team from "./Team";

const imgs = ["team1.png", "team2.png", "team3.png", "team4.png"];

const Teams = () => {
  return (
    <div className='my-24'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {imgs.map((img) => (
            <Team src={img} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Teams;
