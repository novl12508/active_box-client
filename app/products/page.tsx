import Header from "@/components/Header/Header";
import Works from "@/components/Works/Works";
import React from "react";

const WorksPage = () => {
  return (
    <div className='bg-[#FFFFFF] bg-opacity-70 overflow-hidden h-screen'>
      <section className='w-full'>
        <Works />
      </section>
    </div>
  );
};

export default WorksPage;
