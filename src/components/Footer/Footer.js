import React from 'react';

const Footer = () => {
    const comapnyInfo = [
        'About Us',
        'Contact Us',
        'FAQs',
        'Terms & Conditions',
        'Cancellation & Refund Policy',
        "Privacy Policy",
        'Blog',
    ]
    const CoverageArea = [
        'Dhaka',
        'Keraniganj',
        'Gazipur',
        'Savar',
        'Chittagong',
        "Cox's Bazar",
        'Barisal',
    ]
    return (
        <footer className="bg-success p-2 text-dark bg-opacity-25 page-footer font-small blue pt-4 mt-5">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Foodies Express</h5>
                        <p>Your Favourite Food delivery Partner.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className=" text-start col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            {
                                comapnyInfo.map(info => <li key={info}><a href="#!">{info}</a></li>)
                            }
                        </ul>
                    </div>

                    <div className="text-start col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">COVERAGE AREA</h5>
                        <ul className="list-unstyled ">
                            {CoverageArea.map(area => <li key={area}><a className='text-decoration-none' href="/">{area} </a></li>)}

                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="https://dev-foysal.netlify.app/"> Mohammad Foysal</a>
            </div>

        </footer>

    );
};

export default Footer;