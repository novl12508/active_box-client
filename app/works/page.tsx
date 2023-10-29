import Header from "@/components/Header/Header";
import Works from "@/components/Works/Works";
import React from "react";

const WorksPage = () => {
  return (
    <>
      <Header />
      <section className='works_page pt-40 px-10'>
        <Works />
      </section>
    </>
  );
};

export default WorksPage;
