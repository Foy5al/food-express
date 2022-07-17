import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BagHeart } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';

const Shop = () => {
    let { shopId } = useParams();

    const cardData = [{
        resid: 1,
        resturent_name: 'Espresso Drive',
        logo: "https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/53347547_633033387145641_3555041896592048128_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE-cgOEkNA106LX5SQhxht-vpE3z_QkK12-kTfP9CQrXVJREAEHYnOfoOFD9cpDo3QnOdLJwlAJ8xGtGZl5wb8_&_nc_ohc=3wZw3eLy184AX915KVA&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-sIZCLfx2TbFyqlOXVVYW5Goh882lOX5Ne92x-8y5d-w&oe=62F8E512",
        imgLink: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/122781161_1068779126904396_6098568081504606109_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHRJtgHLgdM2tEh5rvKpiAzEyertap3y7ETJ6u1qnfLsT9O2wqR0rRAM2UGc1TOb_iLw4yy-udX7dYGWq9yeFe7&_nc_ohc=_ClAFGvhKiUAX8q2T9M&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-yLA6IwKU9K9bwsnAwmRFk2A3p6pF98v-zSEkEPFTHdw&oe=62F36EF7',
        rating: 4,
        menus:
            [
                {
                    itemName: 'Cappuccino',
                    price: 190,
                    img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t45.5328-9/283333801_6085103181506202_2913245163985801169_n.jpg?stp=dst-jpg_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEvU8H_ScBotsICfI8l9DYGJb0P3KI6-gwlvQ_cojr6DDQfeT3ift-XoKZV_1pnvC-bfl8HY_auxfo6jBj2Q4D-&_nc_ohc=zmVloHxNCUsAX__hPzC&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8-zyK6cDCo2uhBjV4WvfYT3VZPjt_bhUGIfX-YrcKZ9w&oe=62D896C4'
                },
                {
                    itemName: 'Espresso Coffee',
                    price: 130,
                    img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t45.5328-9/279612207_4439742856129371_8890096504746246659_n.jpg?stp=dst-jpg_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFps3dNmwn3vpEpIMRIeKL_O0g_lbKUZ0k7SD-VspRnScn6yNrMbFQzaSgPyY_nByPpVbLmKfysHw35XYyV6Z8i&_nc_ohc=K-hAZ3x-xDEAX8hMtuu&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8VIa9efruzGKDz9iZ-Q9j8FxmRjJQq6Hl9M7i4QchmeQ&oe=62D98BE0'
                },
                {
                    itemName: 'Chocolate Coated Butterscotch Brittles (85 g)',
                    price: 295,
                    img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t45.5328-9/139544740_3709193775804808_5287610247090242720_n.png?_nc_cat=101&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHchoRgXV1rvlK2RbHIbqWBkDPMm_6T_hOQM8yb_pP-E-qAtc8uenhoQzWjRQb89l4LRYes2tXIxxKBC39hrIb8&_nc_ohc=KrwezBYs9Z8AX-jlu68&_nc_ht=scontent.fdac7-1.fna&oh=00_AT97I1bUzF7XcaBVXMjrla0REb-T8xEom0BjALgZXW6IVA&oe=62D8794F'
                }
            ]
    },
    {
        resid: 2,
        resturent_name: "Sultan's Dine",
        logo: "https://scontent.fdac7-1.fna.fbcdn.net/v/t31.18172-8/27798164_1940361492947066_7845266033364491482_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXfSYSjuON1qRaisHCYB3s4VDn2xDIa3jhUOfbEMhrePTp0e290LQJscqWNUesZ8mWXGB2oyrCQo00guEVZbYO&_nc_ohc=iFpdEC8rbiQAX-_l3mJ&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8IuqubNx9HUGTulUk4V4wxfeMRQZfu9xq37VnaVdUIvg&oe=62F57E2D",
        imgLink: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/271276107_3057930737856797_9078600796578511423_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFCCSPVOoXlLA1PYgBIVCpabQ2GfVs7LDFtDYZ9WzssMZK3lDrClB9jU6UcP9vP8RG7BAU1iQQOaAjSCK8T2mUm&_nc_ohc=o-mcG0oF0IEAX-BU6sx&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8YnAC0cFU2dHjO5DH0LuMJ2bQQ1M7kp-8zVPuoujnG1A&oe=62D3FA6D',
        rating: 4.8,
        menus:
            [
                {
                    itemName: 'Kacchi (basmati) 1:2',
                    price: 649,
                    img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t45.5328-4/278996388_5014456761924372_4901887631140869888_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeE-5ZxNkv0ZAomJkxHL94D285kaHXKXDsrzmRodcpcOyq_3lQoqzlCCKGX5v48S8VxTXBhrDMmwmqKluzHZ0KpA&_nc_ohc=qiLJOGt6NaUAX8LTWwh&_nc_ht=scontent.fdac7-1.fna&oh=00_AT96pEJHD1fc9yGtNIu87Hd-8owH6HlrueXs2UO29PskzQ&oe=62D90913'
                },
                {
                    itemName: 'Mutton Teheri Half',
                    price: 199,
                    img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t45.5328-4/280655999_5375821325813186_8776814838573259970_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGAcjwosgypxUE_v4hLr7T-4Ik8x9u7bbDgiTzH27ttsFFy-Qv7_KTAHEz4gMzWED-aUxHX-08U8UfsPTLF8fz5&_nc_ohc=AJPFik5oRpIAX8FnEzZ&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_IcpS4A2t8aklHNvn3hkn6EXVuPhplXu3stKD7DXPE2w&oe=62D917FC'
                },
                {
                    itemName: 'Plain Polaw Platter 1:1',
                    price: 570,
                    img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t45.5328-4/279279598_5106478656107477_7833804703073289429_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeG_rUVDxcIgbZ-ap8M-XjO17ZoPFbK8iwvtmg8VsryLC0RUY_mqUw0D-gRdmJWZAbjs1Aqa2uyD3OTpzqeXNfWy&_nc_ohc=gZtFjFN4G3wAX9Zsbw5&tn=1gT4Ho07ojn6po65&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_UVaETmjdFcS7Z02975zBmFAPLKAU-tikzx82hA-PT-g&oe=62D8F475'
                },
                {
                    itemName: 'Plain Polaw, Chicken Roast & Borhani 1:1',
                    price: 250,
                    img: 'https://scontent.fdac7-1.fna.fbcdn.net/v/t45.5328-4/277292469_5395291297169117_8770540811132886541_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFrVQDCDrAvZ-1UXUtX0-53zdYGY-JakarN1gZj4lqRqoFTyqquCRJwDWPxqtHpL6-4vwFv8_E1GsjdOzPxKS9B&_nc_ohc=pu6FGhmBu8QAX9BCq-y&tn=1gT4Ho07ojn6po65&_nc_ht=scontent.fdac7-1.fna&oh=00_AT9cuvS7cPQVAVofOlJ4UIeAzcH4zmc3-940Xtoc4dMrrg&oe=62D9F142'
                },
            ]
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

    const shopDetails = cardData.find((shop) => shop.resid === parseInt(shopId));
    return (
        <div className='container'>
            {/* top card */}

            <div>
                <img style={{ height: "350px", width: '100%' }} src={shopDetails.imgLink} alt="shop fb cover" />
                <div className='d-flex p-2 justify-content-center'>
                    <img className="rounded-circle z-depth-2 mx-2" style={{ width: '100px' }} src={shopDetails.logo} alt="shop logo" />
                    <h1 className='text-center'>{shopDetails.resturent_name}</h1>
                </div>
            </div>

            {/* card contain shop menu */}

            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                {shopDetails?.menus?.map((item) => (
                    <Col key={item.itemName}>
                        <Card>
                            <Card.Img style={{ height: '350px' }} variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.itemName} </Card.Title>
                                <Card.Text>
                                    <span className='p-2 mt-2 fs-4 rounded shadow fw-bold'>Price: <strong className='text-success'>{item.price}৳</strong></span>
                                </Card.Text>
                                <Button>
                                    <BagHeart /> Add to cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Shop;