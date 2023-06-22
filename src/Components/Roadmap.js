import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import smoke1 from "../Images/road1.png";
import smoke2 from "../Images/road2.png";
const Roadmap = () => {
  return (
    <div id="Roadmap">
      {" "}
      <div className="py-5 ">
        <div className="my-5">
          <p className="problemP">Roadmap</p>
          <h2 className="echoH2">Roadmap</h2>

          <Container className="px-5">
            <Row className="mt-5">
              <Col md={6} data-aos="fade-right">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-12">
                      <div id="content" className="roadmar">
                        <ul className="timeline-1 text-black">
                          <li className="event" data-date="2023">
                            <p className="timeP">Website launch and pinksale hosting</p>
                          </li>
                          <li className="event" data-date="2023">
                            <p className="timeP">
                            Pinksale presale marketing on twitter.
                            </p>
                          </li>
                          <li className="event" data-date="2023">
                            <p className="timeP">
                            Kols group marketing and contests.
                            </p>
                          </li>
                          <li className="event" data-date="2023">
                            <p className="timeP">Uniswap launch.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} data-aos="fade-down" className="moving-div mt-5">
                <img src={smoke1} className="roadImg hiddenmobile" />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={6} data-aos="fade-down" className="moving-div mt-5">
                <img src={smoke2} className="roadImg hiddenmobile" />
              </Col>
              <Col md={6} data-aos="fade-right">
                <div className="container pt-5">
                  <div className="row">
                    <div className="col-md-12">
                      <div id="content" className="roadmar">
                        <ul className="timeline-1 text-black">
                          <li className="event" data-date="2023">
                            <p className="timeP">Coingecko/coinmarketcapp listings. </p>
                          </li>
                          <li className="event" data-date="2023">
                            <p className="timeP">
                            DEXT tools and AVE trending.
                            </p>
                          </li>
                          <li className="event" data-date="2023">
                            <p className="timeP">Partnerships and CEX listings.</p>
                          </li>
                          <li className="event" data-date="2023">
                            <p className="timeP">1000 holders goal.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
