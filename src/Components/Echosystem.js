/* eslint-disable no-console */

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import lock from "../Images/lock.svg";
const Echosystem = () => {
  return (
    <div id="Universe" className="py-5">
      <div className="my-5">
        <p className="problemP ">Universe</p>
        <h2 className="echoH2">
          <span style={{ color: "#00BF63" }}>The</span> Ecosystem
        </h2>
        <Container className="mt-5" data-aos="fade-up">
          <div className="mobileAdjust gap-4">
            <Card className="echocard cls">
              <Card.Body>
                <h2 className="marketboxH text-center">Ordinals</h2>
                <p className="coinP text-center">
                  Universe of collections interlinked to one another through
                  storytelling.
                </p>
                <ul>
                  <li className="ul">Collection 1:</li>
                </ul>
                <p className="ulitem">Miniature Alpha Males : 650</p>
                <ul>
                  <li className="ul">Collection 2:</li>
                </ul>
                <p className="ulitem">Miniature Beta Females : TBA</p>
                <ul>
                  <li className="ul">Collection 3:</li>
                </ul>
                <p className="ulitem">Miniature Mutant Babies: TBA</p>
              </Card.Body>
            </Card>
            <Card className="margintopA echocard cls">
              <Card.Body>
                <h2 className="marketboxH text-center">Brc-20</h2>
                <p className="coinP text-center">
                  Native token powering the ecosystem with multiple use cases.
                </p>
                <p className="ulbelow">21M supply</p>
                <ul className="echo2bullet">
                  <li>45% Holders claim </li>
                  <li>45% Collabs & Partners </li>
                  <li>20% Team & Treasury</li>
                </ul>
                <p className="ulbelow mt-2">Use Cases</p>
                <button className="echobutton">
                  {" "}
                  <img src={lock} />
                  Locked
                </button>
              </Card.Body>
            </Card>
            <Card className="margintopA echocard cls">
              <Card.Body>
                <h2 className="marketboxH text-center">Passive Income</h2>

                <p className="coinP text-center">
                  Regular monetary reward distribution.
                </p>
                <p className="ulbelow mt-5">Miniature auction platform</p>
                <button className="echobutton">
                  {" "}
                  <img src={lock} />
                  Locked
                </button>
                <p className="ulbelow mt-3">Staking rewards</p>
                <button className="echobutton mt-0">
                  {" "}
                  <img src={lock} />
                  Locked
                </button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Echosystem;
