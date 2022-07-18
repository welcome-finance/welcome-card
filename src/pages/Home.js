import React from 'react'
import { Button, Container, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import bodyOne from '../assets/img/body-image.svg'
import arrowIcon from '../assets/img/arrow-icon.svg'
import playIcon from '../assets/img/play-icon.svg'
import blurOne from '../assets/img/orange-blur-1.svg'
import blurTwo from '../assets/img/blue-blur-1.svg'
import pinIcon from '../assets/img/pin-icon.svg'

import applePay from '../assets/img/apple-pay.svg'
import gPay from '../assets/img/g-pay.svg'
import payoneer from '../assets/img/payoneer.svg'
import masterCard from '../assets/img/master-card.svg'
import payPal from '../assets/img/paypal.svg'
import visa from '../assets/img/visa.svg'
import whyUse from '../assets/img/why-use.svg'
import howUse from '../assets/img/how-use.svg'

import phoneIcon from '../assets/img/phone-icon.svg'
import cardIcon from '../assets/img/card-icon.svg'
import payIcon from '../assets/img/pay-icon.svg'
import enjoyIcon from '../assets/img/enjoy-icon.svg'
import people from '../assets/img/people.svg'
import footerBg from '../assets/img/footer.svg'
import mssgBoxOne from '../assets/img/message-box.svg'
import mssgBoxTwo from '../assets/img/message-box-1.svg'

export default function Home() {
    return (
        <div className='App'>
            <div className='header row'>
                <div className='col-md-3 h-logo h-text justify-content-start'>
                    Welcome card
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <Col className='h-text'><>Home</></Col>
                        <Col className='h-text'><>About</></Col>
                        <Col className='h-text'><>Usage</></Col>
                        <Col className='h-text'><>Contact Us</></Col>
                    </div>

                </div>
                <div className='col-md-3 d-flex justify-content-end' >
                    <Button className='h-button'>Join waitlist</Button>
                </div>
            </div>

            <div className='section'>

                {/* Section 1 */}

                <div className='section-1 row'>
                    <div className='col-md-6'>
                        <div className='body-text-main'>
                            <p className='btm-text1'>Less Cash</p>
                            <p className='btm-text2'>More Spending</p>
                        </div>

                        <div className='body-text-desc'>
                            <p className='btd-text1'>Perform all your transactions in a foreign country, using
                                one card, and your mobile device. Worldwide service.</p>
                        </div>
                        <div className='body-buttons'>
                            <button className='grad-button'>
                                <div>
                                    <span>Join waitlist</span>
                                    <img src={arrowIcon} className='arrowIcon' alt='Arrow Icon' />
                                </div>
                            </button>
                            <button className='clear-button'>
                                <div>
                                    <img src={playIcon} className='icon' alt='Play Icon' />
                                    <span>How it works</span>
                                </div>
                            </button>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <img src={bodyOne} className='bodyOne' alt='Welcome card' />
                    </div>
                </div>

                <div className='blurOne-div'>
                    <img src={blurOne} className='blurOne' alt='Orange Blur' />
                </div>

                {/* Section 2 */}

                <div className='section-2'>
                    <img src={pinIcon} className='pin-icon' alt='Pin Icon' />
                    <div className='integration-glass row'>
                        <div className='col-md-6 row'>
                            <div className='col-md-1'></div>
                            <div className='iconcol-1 col-md-5'>
                                <div>
                                    <img src={payPal} className='int-logos1' alt='payPal logo' />
                                </div>
                                <div>
                                    <img src={payoneer} className='int-logos2' alt='payoneer logo' />
                                </div>
                                <div>
                                    <img src={applePay} className='int-logos6' alt='applePay logo' />
                                </div>
                            </div>
                            <div className='iconcol-1 col-md-5'>
                                <div>
                                    <img src={visa} className='int-logos4' alt='visa logo' />
                                </div>
                                <div>
                                    <img src={masterCard} className='int-logos5' alt='masterCard logo' />
                                </div>
                                <div>
                                    <img src={gPay} className='int-logos3' alt='gPay logo' />
                                </div>
                            </div>
                            <div className='col-md-1'></div>
                        </div>
                        <div className='col-md-6 int-texts'>
                            <p className='int-text1'>Freedom Finally</p>
                            <p className='int-text-desc'>Enjoy a wide range of payment options like you would with
                                any other bank card.
                                <br /> <br />
                                You can take advantage of multiple of integration services
                                with various payment methods.</p>
                        </div>
                    </div>
                </div>

                <div className='blurTwo-div'>
                    <img src={blurTwo} className='blurTwo' alt='Orange Blur' />
                </div>

                {/* Section 3 */}

                <div className='section-3 row'>
                    <div className='col-md-6 wu-texts'>
                        <p className='wu-text1'>Currency to card</p>
                        <p className='wu-text-desc'>Never struggle to access to funds while on vacation or tourism.
                            Welcome card provides a readily available and reliable  prepaid
                            card service that eliminates the high risk of carrying cash.
                            <br /> <br />
                            Now you can take the right amount of money that you need for
                            Your trip without fear or unease.</p>
                    </div>
                    <div className='col-md-6 whyUse-div'>
                        <img src={whyUse} className='whyUse' alt='why to Use welcome card' />
                    </div>
                </div>

                <div className='blurThree-div'>
                    <img src={blurOne} className='blurOne' alt='Orange Blur' />
                </div>

                {/* Section 4 */}

                <div className='section-4'>
                    <div className='sec-header'>
                        <p>How to use</p>
                    </div>
                    <div className='sec-body row'>
                        <div className='col-md-6 howUse-div'>
                            <img src={howUse} className='howUse' alt='How to Use welcome card' />
                        </div>

                        <div className='col-md-6'>
                            <div className='steps-container row'>
                                <div className='steps-1 col-md-6'>
                                    <div className='steps'>
                                        <img src={phoneIcon} className='steps-icon' alt='How to Use welcome card' />
                                        <p className='st-text1'>Step 1 : Register</p>
                                        <p className='st-text-desc'>Registering for a welcome card is a simple as walking to
                                            a designated kiosk and “demanding for a card” 😁.
                                            <br /><br />
                                            With a valid ID card, a smart phone and basic KYC you're
                                            good to go.
                                        </p>
                                    </div>
                                    <div className='steps'>
                                        <img src={payIcon} className='steps-icon' alt='How to Use welcome card' />
                                        <p className='st-text1'>Step 3 : Fund</p>
                                        <p className='st-text-desc'>After activation, the next step is to fund your card
                                            This can be done at the kiosk as well.
                                            <br /><br />
                                            The maximum amount you can fund your card with
                                            Is $10,000, it cannot be more.
                                        </p>
                                    </div>
                                </div>
                                <div className='steps-1 col-md-6'>
                                    <div className='steps'>
                                        <img src={cardIcon} className='steps-icon' alt='How to Use welcome card' />
                                        <p className='st-text1'>Step 2 : Collect</p>
                                        <p className='st-text-desc'>After registering you are now the proud owner of a
                                            Prepaid welcome card. Still at the kiosk proceed to
                                            Activate and collect your welcome card.</p>
                                    </div>
                                    <div className='steps'>
                                        <img src={enjoyIcon} className='steps-icon' alt='How to Use welcome card' />
                                        <p className='st-text1'>Step 4 : Enjoy!</p>
                                        <p className='st-text-desc'>Ensure to view your available balance on the prepaid card
                                            on the Welcome Card mobile App.
                                            <br /><br />
                                            Proceed to enjoy your visit!
                                            The prepaid card expires after 6  months.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='blurFour1-div'>
                    <img src={blurOne} className='blurTwo' alt='Orange Blur' />
                </div>

                <div className='blurFour-div'>
                    <img src={blurTwo} className='blurTwo' alt='Orange Blur' />
                </div>

                {/* Section 5 */}

                <div className='section-5'>
                    <div className='con-body'>
                        <div className='con-header'>
                            <p>Contact Us</p>
                        </div>
                        <form>
                            <input
                                className='con-input'
                                name='Name'
                                value={'Name'}
                            />
                            <input
                                className='con-input'
                                name='eMail'
                                value={'e-Mail'}
                            />
                            <textarea
                                className='con-textarea'
                                name='Message'
                                value={'Message'}
                                col="9"
                            ></textarea>
                            <button className='grad-button con-send'>
                                Send Message
                            </button>
                        </form>

                    </div>
                    <img src={people} className='con-people' alt='Contact People' />
                </div>

                {/* Section 6 */}

                <div className='section-6'>

                    <img src={mssgBoxOne} className='mssg-Box-One' alt='Mssg Box One' />

                    <img src={footerBg} className='bg-circle' alt='Circle bg' />

                    <div className='gea-body'>
                        <div className='gea-inside'>
                            <div className='gea-header'>
                                <p>Get Early Access</p>
                            </div>
                            <p className='gea-desc'>Be the first to know when we hit the market!</p>
                            <form className='gea-form'>
                                <div>
                                    <input
                                        className='gea-input'
                                        name='email'
                                        value={'Enter your email'}
                                    />
                                    <button className='grad-button gea-send'>
                                        Join waitlist
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <img src={mssgBoxTwo} className='mssg-Box-Two' alt='Mssg Box Two' />

                </div>

                <div className='blurFive-div'>
                    <img src={blurOne} className='blurTwo' alt='Blue Blur' />
                </div>

            </div>
        </div>
    )
}
