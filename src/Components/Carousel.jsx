"use client";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import BannerImageOne from "@/Images/BannerAgriculture.jpg";
import BannerImageTwo from "@/Images/BannerAnimal.jpg";

export default function CarouselPage(){
    return(
        <Carousel>
            <Carousel.Item>
                <div>
                    <div className="absolute w-full h-full flex flex-col justify-end mt-[-100px] ml-[150px] ">
                        <h1 className="text-white font-bold">Hello This is Testing</h1>
                        <button className="px-4 py-2 bg-blue-600 rounded-md w-48 hover:scale-110 transition ease-in-out duration-300 text-white ">
                            Buy now
                        </button>
                    </div>
                <Image src={BannerImageOne} alt="image first" className="h-[700px]" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div>
                <div className="absolute w-full h-full flex flex-col justify-end mt-[-100px] ml-[150px] gap-6 ">
                        <h1 className="text-white font-bold">Hello This is Testing</h1>
                        <button className="px-4 py-2 bg-blue-600 rounded-md w-48 hover:scale-110 transition ease-in-out duration-300 text-white ">
                            Buy now
                        </button>
                    </div>
                <Image src={BannerImageTwo} alt="image first" className="h-[700px]"/>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}   
