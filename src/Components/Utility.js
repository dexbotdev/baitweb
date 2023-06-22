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
          <h2 className="echoH2 utilityH2">Markting Plans</h2>
          <div className="mobileAdjust gap-4 mt-5">
            <div className="SimBox cls">
              <img src={img1} className="iconU" />
              <p className="simP mt-3">
              Pre-Launch marketing
              </p>
            </div>{" "}
            <div className="SimBox cls margintopA">
              <img src={img2} className="iconU" />

              <p className="simP mt-3">Japanese Marketing</p>
            </div>
            <div className="SimBox cls margintopA">
              <img src={img3} className="iconU" />

              <p className="simP mt-3">Chinese Marketing</p>
            </div>
          </div>
          <div
            className="mobileAdjust  gap-4 mt-3"
            style={{ justifyContent: "center" }}
          >
            <div className="SimBox cls margintopA">
              <img src={img4} className="iconU" />
              <p className="simP mt-3">
              Giveaways and Eth Trendings
              </p>
            </div>
            <div className="SimBox cls margintopA">
              <img src={img5} className="iconU" />

              <p className="simP mt-3">
              Projects Patnerships
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
                <h2 className="missionh2">BAITONOMICS</h2>
                <p className="missionP">
                100% of BAITONOMICS is locked for more than 1 year with 0% of team token..
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
