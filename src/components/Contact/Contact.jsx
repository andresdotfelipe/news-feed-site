import { useState, useRef } from 'react';
import ContactModal from '../ContactModal';
import { Panel, Row, Col, Button } from 'emerald-ui/lib';
import './Contact.scss';

const Contact = () => {

    const [contactInfo, setContactInfo] = useState({
        'first-name': '',
        'last-name': '',
        'email': '',
        'phone-number': '',
        'message': '',
        'emails-check': false
    });
    const [showModal, setShowModal] = useState(false);
    const contactForm = useRef(null);

    const submitContactForm = e => {
        e.preventDefault();
        setShowModal(true);        
    }

    const onHideModal = () => {
        setContactInfo({
            'first-name': '',
            'last-name': '',
            'email': '',
            'phone-number': '',
            'message': '',
            'emails-check': false
        });
        setShowModal(false);
    }

    const onChange = e => {        
        if (e.target.type === 'checkbox') setContactInfo({...contactInfo, [e.target.name]: e.target.checked }); 
        else setContactInfo({...contactInfo, [e.target.name]: e.target.value }); 
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
                                    <label htmlFor="first-name">First name</label>                                    
                                </Col>
                                <Col xs={12}>
                                    <input type="text" name="first-name" required pattern="[a-zA-Z]*" value={contactInfo['first-name']} onChange={onChange}/>
                                </Col>
                            </Row>                            
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <label htmlFor="last-name">Last name</label>                                    
                                </Col>
                                <Col xs={12}>
                                    <input type="text" name="last-name" required pattern="[a-zA-Z]*" value={contactInfo['last-name']} onChange={onChange}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <label htmlFor="email">Email</label>                                    
                                </Col>
                                <Col xs={12}>
                                    <input type="email" name="email" required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" value={contactInfo['email']} onChange={onChange}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <label htmlFor="phone-number">Phone number</label>                                    
                                </Col>
                                <Col xs={12}>
                                    <input type="tel" name="phone-number" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={contactInfo['phone-number']} onChange={onChange}/>
                                </Col>
                            </Row>
                        </Col>                    
                        <Col xs={12}>
                            <Row>
                                <Col xs={12}>
                                    <label htmlFor="message">Message</label>
                                </Col>
                                <Col xs={12}>
                                    <textarea name="message" rows="5" required value={contactInfo['message']} onChange={onChange}></textarea>    
                                </Col>                            
                            </Row>                            
                        </Col>                    
                        <Col xs={12} className="emails-check-col">
                            <input type="checkbox" id="emails-check" name="emails-check" checked={contactInfo['emails-check']} onChange={onChange}/>
                            <label htmlFor="emails-check">Send me emails about breaking news and promotions.</label>
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