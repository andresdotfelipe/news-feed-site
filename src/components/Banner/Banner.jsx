import BannerImg from '../../assets/banner.jpg';
import { Container } from 'emerald-ui/lib';
import './Banner.scss';

const Banner = () => {
    return (
        <section className='banner'>
            <img src={BannerImg} alt='Subscribe banner' />
            <Container>
                <section className='details'>
                    <h1>Subscribe to our newsletter.</h1>
                    <p className="description">Subscribe to our newsletter to receive weekly digests of the best and most ground-breaking news. Also receive a discount on your monthly subscription.</p>
                    <button className="subscribe-button">Subscribe</button>
                </section>               
            </Container>
        </section>
    );
}

export default Banner;