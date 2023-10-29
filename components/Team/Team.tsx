import Links from "@/UI/Links/Links";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const icons = ["facebook.png", "instagram.png", "twitter.png"];

const Team: FC<{ src: string }> = ({ src }) => {
  return (
    <section className='flex flex-col md:items-stretch md:text-start text-center items-center justify-center'>
      <Image src={`/team/${src}`} alt='team' width={270} height={270} />
      <div className='mt-7'>
        <div>Name</div>
        <div className='text-orange-500 uppercase mt-1'>Prof</div>
      </div>

      <div className='mt-7'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aut
        dolor eligendi voluptates, sint dignissimos molestias aspernatur,
        blanditiis incidunt totam recusandae, odit libero quas sed?
      </div>

      <Links />
    </section>
  );
};

export default Team;
