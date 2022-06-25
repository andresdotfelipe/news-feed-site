import './Header.scss';
import { Navbar, Container, Nav, DropdownButton, DropdownItem, Avatar } from 'emerald-ui/lib';
import SportsIcon from '../Icons/SportsIcon';
import EntertainmentIcon from '../Icons/EntertainmentIcon';
import EconomicsIcon from '../Icons/EconomicsIcon';
import TechnologyIcon from '../Icons/TechnologyIcon';
import MusicIcon from '../Icons/MusicIcon';

const Header = () => {
    return (
        <Navbar breakAt="lg">
            <Container>
                <Navbar.Brand>
                    <a href="#foo">NEWS</a>
                </Navbar.Brand>
                <Nav grow collapsible>                                        
                    <DropdownButton title="Sections" id="dd1">
                        <DropdownItem eventKey="1">Sports<SportsIcon/></DropdownItem>
                        <DropdownItem eventKey="2">Entertainment<EntertainmentIcon/></DropdownItem>
                        <DropdownItem eventKey="2">Economics<EconomicsIcon/></DropdownItem>
                        <DropdownItem eventKey="2">Technology<TechnologyIcon/></DropdownItem>
                        <DropdownItem eventKey="2">Music<MusicIcon/></DropdownItem>
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