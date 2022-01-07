import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./service.css";

const Service = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
  ];
  return (
    <div className="k">
      <div className="heading">
        <h4 className="heading-1">My Services</h4>
      </div>
      <Carousel breakPoints={breakPoints}>
          <Item>Blockchain Development</Item>
          <Item>Full Stack Web Development</Item>
          <Item>UX/UI Design</Item>
          <Item>Mobile App Development</Item>
          <Item>Python Scripting</Item>
          <Item>Data Mining</Item>
          <Item>linux Administration</Item>
          <Item>Music Composing</Item>
      </Carousel>
    </div>
  );
};



export default Service;
