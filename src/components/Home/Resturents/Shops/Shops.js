import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shops = () => {
    const cardData = [{
        resid: 1,
        resturent_name: 'Espresso Drive',
        imgLink: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/122781161_1068779126904396_6098568081504606109_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHRJtgHLgdM2tEh5rvKpiAzEyertap3y7ETJ6u1qnfLsT9O2wqR0rRAM2UGc1TOb_iLw4yy-udX7dYGWq9yeFe7&_nc_ohc=_ClAFGvhKiUAX8q2T9M&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-yLA6IwKU9K9bwsnAwmRFk2A3p6pF98v-zSEkEPFTHdw&oe=62F36EF7',
        rating: 4,
    },
    {
        resid: 2,
        resturent_name: "Sultan's Dine",
        logo: "https://scontent.fdac7-1.fna.fbcdn.net/v/t31.18172-8/27798164_1940361492947066_7845266033364491482_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXfSYSjuON1qRaisHCYB3s4VDn2xDIa3jhUOfbEMhrePTp0e290LQJscqWNUesZ8mWXGB2oyrCQo00guEVZbYO&_nc_ohc=iFpdEC8rbiQAX-_l3mJ&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8IuqubNx9HUGTulUk4V4wxfeMRQZfu9xq37VnaVdUIvg&oe=62F57E2D",
        imgLink: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/271276107_3057930737856797_9078600796578511423_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFCCSPVOoXlLA1PYgBIVCpabQ2GfVs7LDFtDYZ9WzssMZK3lDrClB9jU6UcP9vP8RG7BAU1iQQOaAjSCK8T2mUm&_nc_ohc=o-mcG0oF0IEAX-BU6sx&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8YnAC0cFU2dHjO5DH0LuMJ2bQQ1M7kp-8zVPuoujnG1A&oe=62D3FA6D',
        rating: 4.8,
    },
    {
        resid: 3,
        resturent_name: 'Ashta Banjan',
        logo: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/80739177_120352159459442_2719723692991971328_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGqAQxYEU3KWce5s7r8DS0O5Y9b60fDpRflj1vrR8OlFzs0nug7RRDp-vu-LMZecNwCH3Wtu9RGZUWcGxpcAYsV&_nc_ohc=17uFt9ClVXwAX9kyL5M&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_CmPNayU5ArdL6jUwM6SZWAMs5IGw9R1ITEjUd46-cbw&oe=62F40BF1',
        imgLink: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/80991632_120371382790853_3065808648715370496_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH86X-4vwKZCUM0TjxeH8GuFvYNwRT7rc0W9g3BFPutzTc_18nmaZms7RSKL37D-Fjd7MOyj6kzl_DuIEGK49jC&_nc_ohc=JkMs_OCfQPwAX83BIVL&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8nypU4qKgbF_J5sD2sQ12graLRkQxY-uYRDfO-pAOAsQ&oe=62F590DC',
        rating: 4.2,
    },
    {
        resid: 4,
        resturent_name: 'Espresso Drive',
        imgLink: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/122781161_1068779126904396_6098568081504606109_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHRJtgHLgdM2tEh5rvKpiAzEyertap3y7ETJ6u1qnfLsT9O2wqR0rRAM2UGc1TOb_iLw4yy-udX7dYGWq9yeFe7&_nc_ohc=_ClAFGvhKiUAX8q2T9M&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-yLA6IwKU9K9bwsnAwmRFk2A3p6pF98v-zSEkEPFTHdw&oe=62F36EF7',
        rating: 4,
    },
    ]
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {cardData.map((shops, idx) => (
                    <Col>
                        <Card>
                            <Card.Img style={{ height: '150px' }} variant="top" src={shops.imgLink} />
                            <Card.Body>
                                <Card.Title> <Card.Img className="rounded-circle z-depth-2 mx-2" alt="40x40 logo" style={{ width: "40px" }} variant="top" src={shops.logo} />{shops.resturent_name}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <Button>
                                    <Link className='text-decoration-none text-white' to={`/shop/${shops.resid}`}>Order Now</Link>
                                </Button>
                                <p>Rating: {shops.rating}</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    );
};

export default Shops;