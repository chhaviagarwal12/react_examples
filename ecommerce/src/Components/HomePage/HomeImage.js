import React from "react";
import 'semantic-ui-css/semantic.min.css'

import Carousel from "semantic-ui-carousel-react";
import sale from "../../images/sale.jpg"
import shopping from "../../images/shopping.jpg"
import woman from "../../images/woman.jpg"
const HomeImage = () => {
 
  let elements = [
    {
      render: () => {
        return (
          <img className="ui image fluid" src={sale}/>
        );
      }
    },
    {
      render: () => {
        return <img className="ui image fluid" src={shopping} />;
      }
    },
    {
      render: () => {
        return (
          <img className="ui image fluid" src={woman} />
        );
      }
    }
  ];
  return (
    <div >
      <Carousel
        elements={elements}
        duration={5000}
        animation="fade left"
        showNextPrev={false}
        showIndicators={false}
      />
    </div>
  );
};
export default HomeImage

