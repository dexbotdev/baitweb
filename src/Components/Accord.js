import Accordion from "react-bootstrap/Accordion";

function Accord() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="faq">
        <Accordion.Header className="accordH">
        How can i buy $BAIT ?
        </Accordion.Header>
        <Accordion.Body className="accordP">
        The best price for $BAIT that you can get is by participating in pinksale presale.
If missed you can buy at launch on uniswap.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="faq">
        <Accordion.Header className="accordH">
         When does $BAIT launches?
        </Accordion.Header>
        <Accordion.Body>$BAIT launches 24 after filling the presale on uniswap.The exact time and date will be announced in our TG group and twitter.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="faq">
        <Accordion.Header className="accordH">
        Does $bait have any secuirty measures?
        </Accordion.Header>
        <Accordion.Body>$BAIT has done its audit by the elite pinksale auditors. You can check the audit anytime by visiting on the audit badge in presale page.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="faq">
        <Accordion.Header className="accordH">
        Does team have any experiences?
        </Accordion.Header>
        <Accordion.Body>
        Team has onboarded marketers that have done projects that went multiple Xs on launch after pinksale presale.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accord;
