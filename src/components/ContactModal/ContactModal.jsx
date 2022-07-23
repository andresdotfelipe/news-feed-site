import { Modal, Row, Col } from 'emerald-ui/lib';
import './ContactModal.scss';

const ContactModal = ({ close, show, contactInfo }) => (
    <Modal onHide={close} show={show} className="contact-modal">
        <Modal.Header closeButton={true}>
          <Modal.Title>Contact form submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
              <span className="title">First name</span>
              <p>{contactInfo['first-name']}</p>
            </Col>
            <Col xs={12}>
              <span>Last name</span>
              <p>{contactInfo['last-name']}</p>
            </Col>
            <Col xs={12}>
            <span>Email</span>
              <p>{contactInfo['email']}</p>                
            </Col>
            <Col xs={12}>
              <span>Phone number</span>
              <p>{contactInfo['phone-number']}</p>
            </Col>
            <Col xs={12}>
              <span>Message</span>
              <p>{contactInfo['message']}</p>
            </Col>
            <Col xs={12}>
              <span>Send me emails about breaking news and promotions</span>
              <p>{contactInfo['emails-check'] === true ? 'Yes' : 'No'}</p>
            </Col>
          </Row>
        </Modal.Body>          
    </Modal>  
);

export default ContactModal;