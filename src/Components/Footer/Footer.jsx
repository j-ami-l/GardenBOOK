import React from 'react';

const Footer = () => {
    return (
        <footer className="footer  sm:footer-horizontal bg-secondary text-accent  p-10">
            <nav>
                <h6 className="footer-title text-accent-content">Services</h6>
                <a className="link text-accent-content link-hover">Branding</a>
                <a className="link text-accent-content link-hover">Design</a>
                <a className="link text-accent-content link-hover">Marketing</a>
                <a className="link text-accent-content link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-accent-content">Company</h6>
                <a className="link text-accent-content link-hover">About us</a>
                <a className="link text-accent-content link-hover">Contact</a>
                <a className="link text-accent-content link-hover">Jobs</a>
                <a className="link text-accent-content link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-accent-content">Legal</h6>
                <a className="link text-accent-content link-hover">Terms of use</a>
                <a className="link text-accent-content link-hover">Privacy policy</a>
                <a className="link text-accent-content link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;