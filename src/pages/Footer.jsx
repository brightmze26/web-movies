import React from 'react';
import FooterNavItems from '../components/FooterNavItems';
import './footer.css'

function Footer() {
    
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of service',
        'Privacy Policy',
    ];
    const locations = [
        'Student',
        'Premium',
        'Best Quality',
        'Unlimited',
    ];


  return (
    <footer id='about' className='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 footer-info">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>BIFLIX</span>
                        </a>
                        <p>
                        Biflix is ​​a film website that has been licensed and has been used by more than 100 thousand people. We provide attractive features and quality for your comfort. You can check us via the social media that we have provided. Support and support us via our social media.
                        </p>
                        <div className="social-links mt-3">
                            <a href="" className="facebook">
                                <ion-icon name='logo-facebook'></ion-icon>
                            </a>
                            <a href="" className="instagram">
                                <ion-icon name='logo-instagram'></ion-icon>
                            </a>
                            <a href="" className="twitter">
                                <ion-icon name='logo-twitter'></ion-icon>
                            </a>
                            <a href="" className="youtube">
                                <ion-icon name='logo-youtube'></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            {usefulLinks.map(link => (
                                <FooterNavItems key={link} name={link} />
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Subscribe</h4>
                        <ul>
                            {locations.map(link => (
                                <FooterNavItems key={link} name={link} />
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            Jatinangor <br/>
                            Bandung, Indonesia <br/> 
                            <br />
                            <strong><ion-icon name="call-outline"></ion-icon> :</strong> +62 85262763526
                            <br />
                            <strong><ion-icon name="mail-outline"></ion-icon> :</strong> biflix@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>
                        BIFLIX MOV
                    </span> 
                </strong>
                 .All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="#">Bright Misael Zega</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
