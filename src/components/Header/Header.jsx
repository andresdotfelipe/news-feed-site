import { Navbar, Container, Nav, DropdownButton, DropdownItem, Avatar } from 'emerald-ui/lib';
import SportsIcon from '../Icons/SportsIcon';
import EntertainmentIcon from '../Icons/EntertainmentIcon';
import EconomicsIcon from '../Icons/EconomicsIcon';
import TechnologyIcon from '../Icons/TechnologyIcon';
import MusicIcon from '../Icons/MusicIcon';
import './Header.scss';

const Header = () => {
    return (
        <Navbar breakAt="lg">
            <Container>
                <Navbar.Brand>
                    <a href="#foo">NEWS</a>
                </Navbar.Brand>
                <Nav grow collapsible>                                        
                    <DropdownButton title="Sections" id="dd1">
                        <DropdownItem eventKey="1"><SportsIcon/>Sports</DropdownItem>
                        <DropdownItem eventKey="2"><EntertainmentIcon/>Entertainment</DropdownItem>
                        <DropdownItem eventKey="2"><EconomicsIcon/>Economics</DropdownItem>
                        <DropdownItem eventKey="2"><TechnologyIcon/>Technology</DropdownItem>
                        <DropdownItem eventKey="2"><MusicIcon/>Music</DropdownItem>
                    </DropdownButton>
                    <a href="#foo">Editorial</a>
                    <a href="#foo">Contact us</a>
                </Nav>
                <Nav collapsible>                    
                    <DropdownButton
                        noCaret
                        fromRight
                        id="dd2"
                        title={<Avatar title="JS" />}
                    >
                        <DropdownItem eventKey="1">Settings</DropdownItem>
                        <DropdownItem eventKey="2">Read later</DropdownItem>                        
                        <DropdownItem separator />
                        <DropdownItem eventKey="4">Sign out</DropdownItem>
                    </DropdownButton>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;