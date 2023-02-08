import React from "react";

const Footer=()=>{
    return(
        <div class="ui segment"><div class="ui active transition visible dimmer"></div><p><img src="/images/wireframe/short-paragraph.png" class="ui image"/></p><p><img src="/images/wireframe/short-paragraph.png" class="ui image"/></p></div>
        // <footer className="panel-footer">
        <div className="ui active transition dimmer segment">
          <div className=" row">
            <section id="hours" className="col-sm-4">
              <span>Hours:</span><br/>
              Sun-Thurs: 11:15am - 10:00pm<br/>
              Fri: 11:15am - 2:30pm<br/>
              Saturday Closed
              <hr className="d-block d-sm-none"/>
            </section>
            <section id="address" className="col-sm-4">
              <span>Address:</span><br/>
              7105 Reisterstown Road<br/>
              Baltimore, MD 21215
              <p>* Delivery area within 3-4 miles, with minimum order of $20 plus $3 charge for all deliveries.</p>
              <hr className="d-block d-sm-none"/>
            </section>
            <section id="testimonials" className="col-sm-4">
              <p>"The best Chinese restaurant I've been to! And that's saying a lot, since I've been to many!"</p>
              <p>"Amazing food! Great service! Couldn't ask for more! I'll be back again and again!"</p>
            </section>
          </div>
          <div className="text-center">&copy; Copyright David Chu's China Bistro 2016</div>
        </div>
        
      /* </footer> */
    )
}
export default Footer