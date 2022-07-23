import { useState, useRef } from 'react';
import ContactModal from '../ContactModal';
import { Panel, Row, Col, Button } from 'emerald-ui/lib';
import './Contact.scss';

const Contact = () => {

    const [contactInfo, setContactInfo] = useState({});
    const [showModal, setShowModal] = useState(false);
    const contactForm = useRef(null);

    const submitContactForm = e => {
        e.preventDefault();
        setShowModal(true);
        console.log(contactInfo);
    }

    const onHideModal = () => {
        contactForm.current.reset();
        setShowModal(false);
    }

    const onChange = e => {
        setContactInfo({...contactInfo, [e.target.name]: e.target.value || e.target.checked});        
    }

    return (
        <section className="contact">
            <h1>Contact Us</h1>
            <Panel>
                <form method="post" ref={contactForm} onSubmit={submitContactForm}>
                    <Row>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <label for="first-name">First name</label>                                    
                                </Col>
                                <Col xs={12}>
                                    <input type="text" name="first-name" required pattern="[a-zA-Z]*" onChange={onChange}/>
                                </Col>
                            </Row>                            
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <label for="last-name">Last name</label>                                    
                                </Col>
                                <Col xs={12}>
                                    <input type="text" name="last-name" required pattern="[a-zA-Z]*" onChange={onChange}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <label for="email">Email</label>                                    
                                </Col>
                                <Col xs={12}>
                                    <input type="email" name="email" required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" onChange={onChange}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <label for="phone-number">Phone number</label>                                    
                                </Col>
                                <Col xs={12}>
                                    <input type="tel" name="phone-number" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={onChange}/>
                                </Col>
                            </Row>
                        </Col>                    
                        <Col xs={12}>
                            <Row>
                                <Col xs={12}>
                                    <label for="message">Message</label>
                                </Col>
                                <Col xs={12}>
                                    <textarea name="message" rows="5" required onChange={onChange}></textarea>    
                                </Col>                            
                            </Row>                            
                        </Col>                    
                        <Col xs={12} className="emails-check-col">
                            <input type="checkbox" id="emails-check" name="emails-check" onChange={onChange}/>
                            <label for="emails-check">Send me emails about breaking news and promotions.</label>
                        </Col>
                    </Row>                                                        
                    <Button type="submit" name="submit" color="brand">
                        Submit form
                    </Button>                
                </form>
            </Panel>
            <ContactModal close={onHideModal} show={showModal} contactInfo={contactInfo} />
        </section>
    );
}

export default Contact;