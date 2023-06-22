import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Blocktop from "../Images/blocktop.svg";
import img2 from "../Images/util2.svg";
import img1 from "../Images/drop.svg";
import img3 from "../Images/util3.svg";
import img4 from "../Images/util4.svg";
import img5 from "../Images/heart.svg";
import art from "../Images/art.png";
const Utility = () => {
  return (
    <div id="Utility" className="my-5">
      {" "}
      <div className="py-5 my-5">
        <Container data-aos="fade-down">
          {" "}
          <h2 className="echoH2 utilityH2">Utility</h2>
          <div className="mobileAdjust gap-4 mt-5">
            <div className="SimBox cls">
              <img src={img1} className="iconU" />
              <p className="simP mt-3">
                Access to future Miniature ecosystem ordinal drops
              </p>
            </div>{" "}
            <div className="SimBox cls margintopA">
              <img src={img2} className="iconU" />

              <p className="simP mt-3">Brc-20 holders claim</p>
            </div>
            <div className="SimBox cls margintopA">
              <img src={img3} className="iconU" />

              <p className="simP mt-3">Passive income</p>
            </div>
          </div>
          <div
            className="mobileAdjust  gap-4 mt-3"
            style={{ justifyContent: "center" }}
          >
            <div className="SimBox cls margintopA">
              <img src={img4} className="iconU" />

              <p className="simP mt-3">
                Access to elite ordinal alpha & giveaways
              </p>
            </div>
            <div className="SimBox cls margintopA">
              <img src={img5} className="iconU" />

              <p className="simP mt-3">
                Partnership with upcoming tools on Ordinals & Brc-20
              </p>
            </div>
          </div>
          <Row className="py-5 mt-5">
            <Col md={6} data-aos="fade-out" className="moving-div">
              <img src={art} className="missionImg mt-5" />
            </Col>
            <Col md={6} data-aos="fade-in">
              <div className="marginAdjustm mt-5">
                {" "}
                <img src={Blocktop} className="blockktop mb-3 mobcenter mt-5" />
                <h2 className="missionh2">Artwork</h2>
                <p className="missionP">
                  Hand-drawn pixel miniatures that you'll love to collect and
                  trade with over 100+ traits and 30+ 1/1s. From dope apparel to
                  gold accessories, guns, and nostalgic characters, there's
                  something for everyone.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Utility;
