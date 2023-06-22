import Accordion from "react-bootstrap/Accordion";

function Accord() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="faq">
        <Accordion.Header className="accordH">
          What will be the first mint ?
        </Accordion.Header>
        <Accordion.Body className="accordP">
          Alpha males with 650 supply will be the first mint from The Miniature
          universe
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="faq">
        <Accordion.Header className="accordH">
          What is the mint date ?
        </Accordion.Header>
        <Accordion.Body>July 2023</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="faq">
        <Accordion.Header className="accordH">
          What is the mint price ?
        </Accordion.Header>
        <Accordion.Body>Between 0.01-0.02 BTC</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="faq">
        <Accordion.Header className="accordH">
          Where can i contact the team?
        </Accordion.Header>
        <Accordion.Body>
          You can messaged on twitter or open a ticket in discord
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accord;
