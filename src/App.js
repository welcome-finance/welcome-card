import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-animated-slider';
import ScrollAnimation from "react-animate-on-scroll";
import 'react-animated-slider/build/horizontal.css';
import './slider.css';
import './animate.css';

// import eclipseImage1 from './assets/eclipse-1.png';
// import eclipseImage2 from './assets/eclipse-2.png';
// import eclipseImage3 from './assets/eclipse-3.png';

import slide1 from './assets/slide-1.jpg';
import slide2 from './assets/slide-2.jpg';
import slide3 from './assets/slide-3.jpg';
import slide4 from './assets/slide-4.jpg';
import slide5 from './assets/slide-5.jpg';
import arrR from './assets/arr-r.svg';
import arrD from './assets/arr-d.svg';

import qr from './assets/qr.svg';
import travel1 from "./assets/t-1.jpg";
import travel2 from "./assets/t-2.jpg";
import phoneImage from "./assets/phone_img.png";
import cardImage from "./assets/card_img.png";
import travelImage from "./assets/travel_img.png";
import cardPhone from "./assets/phone_empty_2.svg";
import orangeLogo from "./assets/orange-logo.svg";

import Loader from './assets/grid.js'

function App() {

  const content = [
    {
      title: 'Local cards for international Travels',
      description:
        'Perform all your transactions in a foreign country, using one card, and your mobile device. Worldwide service.',
      image: slide1,
    },
    {
      title: 'Travel, shop and pay, anywhere, anytime.',
      description:
        'Never have to worry about making local payments again in your destination country.',
      image: slide3,
    },
    {
      title: "Shopping or touring, we've got you covered.",
      description:
        'As an international traveler, shop and pay in local currency without worry and with a safe pre-paid reloadable card.',
      image: slide2,
    },
    {
      title: 'Limitless possibilities when you travel',
      description:
        'Enjoy the flexibility to make numerous payments online and in stores in countries where Welcome is present. Not to worry, we are constantly opening up new countries.',
      image: slide4,
    },
    {
      title: 'Welcome Card',
      description:
        'Welcome To Your New Destination.',
      image: slide5,
    }
  ];

  const [menu, setMenu] = useState(false)

  const [modal, setModal] = useState(false)

  const [loading, setLoading] = useState(true)

  const [count, setCount] = useState(0)

  const [steps, setSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
  })

  const setLoad = () => { setCount(count => count + 1); console.log(count) }

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

  }, [])

  const { step1, step2, step3, step4, step5, step6, step7, step8, step9, } = steps

  return (

    loading ?
      <div className="header__inner">
        <Loader wrapperStyle={{
          position: "absolute",
          left: 0, right: 0,
          top: 0, bottom: 0,
          margin: "auto",
          overflow: "auto",
          lineHeight: "initial"
        }} />
      </div>
      :

      <div data-new-gr-c-s-check-loaded="14.1068.0" data-gr-ext-installed="">
        {/* header */}

        <header className="header">
          <div className="header__inner">
            <nav className="nav animated fadeInUp delay00">
              {/* Logo */}
              <div className="logo-container">
                <a href="#" aria-current="page">
                  {/* <img src="./assets/logo.svg" alt="Welcome Card - Home"> */}
                </a>
              </div>
              {/* lists */}
              <ul className="nav__lists">
                <li className="nav__list">
                  <a href="#" className="nav__link">
                    Learn </a>
                </li>
                <li className="nav__list">
                  <a href="#" className="nav__link">
                    Support </a>
                </li>
                <li className="nav__list">
                  <a href="#"
                    className="nav__link"> Our terms &amp; Policy </a>
                </li>
              </ul>
              {/* button */}
              <div className="button-container" aria-labelledby="downloadBtn">
                <span className="nav-btn modal-btn modal-set" id="downloadBtn" onClick={() => setModal(!modal)} > Join Waitlist </span>
              </div>
              {/* end of button */}

              {/* Mobile navigation */}
              <div className="mobile__nav">
                <div className={`nav-contents ${menu ? "activate" : ""}`}>
                  {/* mobile logo */}
                  <a href="#" aria-current="page">
                    {/* <img src="./assets/logo.svg" className = "mobile-ham-logo" alt="Welcome Card - Home"> */}
                  </a>
                  {/* end of mobile logo */}
                  {/* mobile lists */}
                  <ul>
                    <li className="mobile__list"><a
                      href="#"
                      className="mobile__link"> Learn </a></li>
                    <li className="mobile__list"><a
                      href="#"
                      className="mobile__link"> Support </a></li>
                    <li className="mobile__list"><a
                      href="#"
                      className="mobile__link"> Our terms &amp; Policy </a></li>
                  </ul>
                  {/* button */}
                  <a href="#" className="mobile-hero-btn mobile-ham-btn"
                    id="downloadBtn">
                    {/* <img src="./assets/Apple-logo.svg" alt=""> */}
                    <div className="hero-available">
                      <p>Be the first aboard</p>
                      <p>Join the waitlist</p>
                    </div>
                  </a>
                  {/* end of button */}

                  {/* end of mobile lists */}
                </div>
                {/* mobile hamburger */}
                <div className={`hamburger modal-set ${menu ? "active" : ""}`} onClick={() => setMenu(!menu)}>
                  <span></span>
                  <span></span>
                </div>
                {/* end of mobile hamburger */}
              </div>
              {/* End of mobile navigation */}
            </nav>
          </div>
          <Slider className="slider-wrapper">
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content animated fadeInZero"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner hero-section hero-section-inner">
                  <h1 className="hero-section_heading">{item.title}</h1>
                  <p className="hero-section_intro">{item.description}</p>
                  <section className="hero-btn-container" aria-labelledby="downloadBtn">
                    <span>
                      <a className="hero-section-btn modal-btn modal-set " id="downloadBtn" onClick={() => setModal(!modal)} > Join Waitlist </a>
                    </span>
                    {/* mobile btn */}
                    <span>
                      <a className="mobile-hero-btn modal-btn modal-set" id="downloadBtn" onClick={() => setModal(!modal)} > Join Waitlist </a>
                    </span>
                    {/* end of mobile btn */}
                  </section>
                </div>
              </div>
            ))}
          </Slider>

          {/* Hero */}
          {/* end of Hero */}

        </header>
        {/* end of header */}

        {/* modal section  */}
        <section className="modal" style={{ display: modal ? "block" : "none" }} >
          <div className="modal-inner" onClick={() => setModal(false)} >
            <div className="modal-content">
              <div className="qr_container">
                {/* hamburger */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={0}
                >
                  <div className="modal-cancel modal-set" onClick={() => setModal(false)} >
                    <span></span>
                    <span></span>
                  </div>
                </ScrollAnimation>
                <img src={qr} className="qr-code" alt="QR Code" onLoad={() => setLoad()} />
                {/* end of hamburger */}
              </div>
              <h3 className="qr-info"> You are one step away to Join our community </h3>
              <h3 className="qr-info">Scan the code to Join Waitlist</h3>
            </div>
          </div>
        </section>
        {/* modal section ends */}

        {/* Audience web*/}
        <section className="aud-web audience ">
          <div className="audience-inner">
            <div className="audience_info">
              {/* audience heading */}
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeIn"
                duration={0.7}
                delay={0}
              >
                <h2 className="audience__heading">Spend without borders</h2>
              </ScrollAnimation>
              {/* info wrapper */}
              <div className="info-wrapper-container">
                {/* 1 */}
                <div className="info-wrapper">
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeIn"
                    duration={0.7}
                    delay={0}
                  >
                    <span className="info-wrapper__num">01</span>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeInLeft"
                    duration={0.7}
                    delay={0}
                  >
                    <div>
                      <h3 className="info-wrapper__heading">
                        Register
                      </h3>
                      <p className="info-wrapper__explanation">
                        Registering for a welcome card is a simple as walking to a designated kiosk and “demanding for a card”
                        😁.
                        <br />With a valid ID card, a smart phone and basic KYC you're good to go.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                {/* 2 */}
                <div className="info-wrapper">
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeIn"
                    duration={0.7}
                    delay={0}
                  >
                    <span className="info-wrapper__num">02</span>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeInLeft"
                    duration={0.7}
                    delay={0}
                  >
                    <div>
                      <h3 className="info-wrapper__heading">
                        Collect
                      </h3>
                      <p className="info-wrapper__explanation">
                        After registering you are now the proud owner of a Prepaid welcome card. Still at the kiosk proceed to
                        Activate and collect your welcome card.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                {/* 3 */}
                <div className="info-wrapper">
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeIn"
                    duration={0.7}
                    delay={0}
                  >
                    <span className="info-wrapper__num">03</span>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeInLeft"
                    duration={0.7}
                    delay={0}
                  >
                    <div>
                      <h3 className="info-wrapper__heading">
                        Fund
                      </h3>
                      <p className="info-wrapper__explanation">
                        After activation, the next step is to fund your card This can be done at the kiosk as well.
                        <br />
                        The maximum amount you can fund your card with Is $10,000, it cannot be more.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                {/* 4 */}
                <div className="info-wrapper info-wrapper--nft">
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeIn"
                    duration={0.7}
                    delay={0}
                  >
                    <span className="info-wrapper__num">04</span>
                  </ScrollAnimation>
                  <div>
                    <ScrollAnimation
                      animateOnce={true}
                      animateIn="fadeInLeft"
                      duration={0.7}
                      delay={0}
                    >
                      <h3 className="info-wrapper__heading">
                        Enjoy!
                        {/* <span className = "colored-text mobile-soon">Coming Soon</span> */}
                      </h3>
                      <p className="info-wrapper__explanation">
                        Ensure to view your available balance on the prepaid card on the Welcome Card mobile App.
                        <br />
                        Proceed to enjoy your visit! The prepaid card expires after 6 months.
                      </p>
                    </ScrollAnimation>
                    {/* info btn */}

                    <ScrollAnimation
                      animateOnce={true}
                      animateIn="fadeIn"
                      duration={0.7}
                      delay={0}
                    >
                      <div className="info-btn-container" aria-labelledby="downloadBtn">
                        <span className="info-btn modal-btn" id="downloadBtn modal-set" onClick={() => setModal(!modal)}> Join Waitlist </span>
                      </div>
                    </ScrollAnimation>
                    {/* end of info btn */}
                  </div>
                </div>
                {/* end of 3 */}
              </div>
              {/* end of info wrapper */}
            </div>
            {/* end of audience info */}

            {/* audience image */}
            <figure className="audience-img-wrapper animated fadeIn delay10">
              <img src={travel1} className="audience-img" aria-hidden="true" alt="travel I" width="600" height="600" onLoad={() => setLoad()} />
              <div className="block"></div>
            </figure>
            {/* end of audience image */}
          </div>
        </section>
        {/* end of Audience */}

        {/* Welcome Card */}
        <section className="gist">
          <figure className="gist-inner">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
            >
              <div className="gist-img-wrapper">
                <img src={travel2} className="gist-inner__img" aria-hidden="true" width="430" height="400" alt="Travel 2" onLoad={() => setLoad()} />
              </div>
            </ScrollAnimation>
            {/* image caption */}
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInRight"
              duration={0.7}
              delay={0}
            >
              <figcaption className="gist-caption">
                <h2 className="gist-caption__heading"> Travel with Welcome Card... </h2>
                <p className="gist-caption__about">
                  Travel to a new location without having to worry about how to make payment.
                  We are here to remove payment barriers.
                  You can acquire your Welcome Card right from the airport and other locations to unlock all the
                  possibilities in your new destination.
                  <br /><br />
                  You can use Welcome Card if you're: Touring a new Country, On business trips,
                  Attending a conference, Vacation.

                </p>
                {/* gist btn */}
                <div className="gist-btn-wrapper" aria-labelledby="downloadBtn">
                  <span className="gist-btn modal-btn" id="downloadBtn modal-set" onClick={() => setModal(!modal)} > Join Waitlist </span>
                  {/* mobile gist btn */}
                  <a href="#" className="mobile-hero-btn gist-mobile-btn" id="downloadBtn">
                    {/* <img src="./assets/Apple-logo.svg" alt=""> */}
                    <div className="hero-available">
                      <p>Be the first aboard</p>
                      <p>Join the waitlist</p>
                    </div>
                  </a>
                  {/* end of mobile gist btn */}
                </div>
                {/* end of gist btn */}
              </figcaption>
            </ScrollAnimation>
            {/* end of image caption */}
          </figure>
        </section>
        {/* end of Welcome Card */}

        {/* Audience mobile */}
        <section className=" aud-mob audience">
          <div className=" aud-mob bg">
            <div className="audience-inner">
              <div className="audience_info">
                {/* audience heading */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={0}
                >
                  <h2 className="audience__heading">Spend without borders</h2>
                </ScrollAnimation>
                {/* info wrapper */}
                <div className="info-wrapper-container">
                  {/* 1 */}
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeIn"
                    duration={0.7}
                    delay={0}
                  >
                    <div className="info-wrapper">
                      <span className="info-wrapper__num">01</span>
                      <div>
                        <h3 className="info-wrapper__heading">
                          Register
                        </h3>
                        <p className="info-wrapper__explanation">
                          Registering for a welcome card is a simple as walking to a designated kiosk and “demanding for a card”
                          😁.
                          <br />With a valid ID card, a smart phone and basic KYC you're good to go.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  {/* 2 */}
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeIn"
                    duration={0.7}
                    delay={0}
                  >
                    <div className="info-wrapper">
                      <span className="info-wrapper__num">02</span>
                      <div>
                        <h3 className="info-wrapper__heading">
                          Collect
                        </h3>
                        <p className="info-wrapper__explanation">
                          After registering you are now the proud owner of a Prepaid welcome card. Still at the kiosk proceed to
                          Activate and collect your welcome card.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  {/* 3 */}
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeIn"
                    duration={0.7}
                    delay={0}
                  >
                    <div className="info-wrapper">
                      <span className="info-wrapper__num">03</span>
                      <div>
                        <h3 className="info-wrapper__heading">
                          Fund
                        </h3>
                        <p className="info-wrapper__explanation">
                          After activation, the next step is to fund your card This can be done at the kiosk as well.
                          <br />
                          The maximum amount you can fund your card with Is $10,000, it cannot be more.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  {/* 4 */}
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="fadeIn"
                    duration={0.7}
                    delay={0}
                  >
                    <div className="info-wrapper info-wrapper--nft">
                      <span className="info-wrapper__num">
                        04
                        {/* <span className = "colored-text mobile-soon">Coming Soon</span> */}
                      </span>
                      <div>
                        <h3 className="info-wrapper__heading">
                          Enjoy!
                          {/* <span className = "colored-text mobile-soon">Coming Soon</span> */}
                        </h3>
                        <p className="info-wrapper__explanation">
                          Ensure to view your available balance on the prepaid card on the Welcome Card mobile App.
                          <br />
                          Proceed to enjoy your visit! The prepaid card expires after 6 months.
                        </p>
                        {/* info btn */}
                        <div className="info-btn-container" aria-labelledby="downloadBtn">
                          <span className="info-btn modal-btn modal-set" id="downloadBtn" onClick={() => setModal(!modal)} > Join Waitlist </span>
                        </div>
                        {/* end of info btn */}
                      </div>
                    </div>
                  </ScrollAnimation>
                  {/* end of 3 */}
                </div>
                {/* end of info wrapper */}
              </div>
              {/* end of audience info */}

              {/* end of audience image */}
            </div>
          </div>
        </section>
        {/* end of Audience */}

        {/* set up */}
        <section className="set-up">
          <div className="set-up_inner">
            {/* set up header */}
            <div className="set-up__header">
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                duration={0.7}
                delay={0}
              >
                <h2 className="set-up__title">
                  Request a Welcome Card
                </h2>
                <p className="set-up__info">Be the first in line to order a Welcome Card.</p>
              </ScrollAnimation>
            </div>
            {/* end of set up header */}
            {/* Actions in gist */}
            <div className="gist-actions">
              <div className="gist-actions-inner">
                {/* 1 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={1}
                  className="center-anim"
                >
                  <div className="action-container">
                    <img src={phoneImage} className="action-icon" aria-hidden="true" alt="phone img" onLoad={() => setLoad()} />
                    <h3 className="action-title"> Sign Up </h3>
                    <p className="action-about">
                      It's super easy to sign up via our dedicated app.<br />
                      {/* With it you have access to varrious appps for different currencies. */}
                    </p>
                  </div>
                </ScrollAnimation>
                {/* 2 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={2}
                  className="center-anim"
                >
                  <div className="action-container">
                    <img src={cardImage} className="action-icon action-icon--share" aria-hidden="true" alt="card img" onLoad={() => setLoad()} />
                    <h3 className="action-title"> Get a card</h3>
                    <p className="action-about">
                      Gain access to various cards for different currencies.
                    </p>
                  </div>
                </ScrollAnimation>
                {/* 3 */}
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={0.7}
                  delay={3}
                  className="center-anim"
                >
                  <div className="action-container">
                    <img src={travelImage} className="action-icon action-icon--earn" aria-hidden="true" alt="travel img" onLoad={() => setLoad()} />
                    <h3 className="action-title"> Enjoy your Trip </h3>
                    <p className="action-about">
                      Travel anywhere and never have to worry about your cash.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* end of actions in gist */}
          </div>
        </section>
        {/* set up ends */}

        <section className="faq">
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeInUp"
            duration={0.7}
            delay={0}
          >
            <div className="faq__header">
              <h2 className="faq__title">
                FAQ
              </h2>
              <p className="faq__info">Quick answers to frequently asked questions.</p>
            </div>
          </ScrollAnimation>
          <div className='faq-item'>
            <button className={`accordion ${step1 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step1: !step1 })}>
              <div>
                <p>Can I order a card before traveling to my new destination country?</p>

                <img src={!step1 ? arrR : arrD} />
              </div>
            </button>
            <div className="panel animated fadeInDown" style={{ display: step1 ? "block" : "none" }}>
              <p>
                No, the card is waiting for you at your destination country. Lookout for a Welcome Card kiosk to register and fund your card.
              </p>
            </div>
          </div>
          <div className='faq-item'>
            <button className={`accordion ${step2 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step2: !step2 })}>
              <div>
                <p>How can I manage my card?
                </p>
                <img src={!step2 ? arrR : arrD} />
              </div></button>
            <div className="panel animated fadeInDown" style={{ display: step2 ? "block" : "none" }}>
              <p>You can activate and block your Welcome card on the mobile App. You can also set PIN and reset PIN on the App. Kindly check the settings on the App.</p>
            </div>

          </div>
          <div className='faq-item'>
            <button className={`accordion ${step3 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step3: !step3 })}>
              <div>
                <p>Are there top-up limits?
                </p>
                <img src={!step3 ? arrR : arrD} />
              </div></button>
            <div className="panel animated fadeInDown" style={{ display: step3 ? "block" : "none" }}>
              <p>Topup is in line with anti-fraud limits per currency in destination country. For example, daily top up limit in the Uk is less than £10,000 and in the USA less than $10,000 or its equivalence.</p>
            </div>
          </div>
          <div className='faq-item'>
            <button className={`accordion ${step4 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step4: !step4 })}>
              <div>
                <p>Can I reuse my card after leaving my destination country?
                </p>
                <img src={!step4 ? arrR : arrD} />
              </div></button>
            <div className="panel animated fadeInDown" style={{ display: step4 ? "block" : "none" }}>
              <p>You will be able to reuse the card if the card is still funded and the card is still valid for use.</p>
            </div>
          </div>
          <div className='faq-item'>
            <button className={`accordion ${step5 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step5: !step5 })}>
              <div>
                <p>How can I fund my card?
                </p>
                <img src={!step5 ? arrR : arrD} />
              </div></button>
            <div className="panel animated fadeInDown" style={{ display: step5 ? "block" : "none" }}>
              <p>You can fund your card at welcome card kiosk. We will be partnering with several outlets within cities to make funding closer to our users.</p>
            </div>
          </div>
          <div className='faq-item'>
            <button className={`accordion ${step6 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step6: !step6 })}>
              <div>
                <p>What happpens if I misplace my card?
                </p>
                <img src={!step6 ? arrR : arrD} />
              </div></button>
            <div className="panel animated fadeInDown" style={{ display: step6 ? "block" : "none" }}>
              <p>Go into the mobile app and block the card. This function will make the card inactive and keep you funds secured.</p>
            </div>
          </div>
          <div className='faq-item'>
            <button className={`accordion ${step7 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step7: !step7 })}>
              <div>
                <p>How do I report issues?
                </p>
                <img src={!step7 ? arrR : arrD} />
              </div></button>
            <div className="panel animated fadeInDown" style={{ display: step7 ? "block" : "none" }}>
              <p>Go to the compliant section in the app to log any issue.</p>
            </div>
          </div>
          <div className='faq-item'>
            <button className={`accordion ${step8 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step8: !step8 })}>
              <div>
                <p>What happens if I misplace or change my phone?
                </p>
                <img src={!step8 ? arrR : arrD} />
              </div></button>
            <div className="panel animated fadeInDown" style={{ display: step8 ? "block" : "none" }}>
              <p>Download the mobile app onto your new phone and log in with previous login details.Do note that the app on the previous phone will automatically become inactive,once you login on a new device.</p>
            </div>
          </div>
          <div className='faq-item'>
            <button className={`accordion ${step9 ? "acctive" : ""}`} onClick={() => setSteps({ ...steps, step9: !step9 })}>
              <div>
                <p>Is there a desktop version of the app?
                </p>
                <img src={!step9 ? arrR : arrD} />
              </div></button>
            <div className="panel animated fadeInDown" style={{ display: step9 ? "block" : "none" }}>
              <p>No.</p>
            </div>
          </div>
        </section>
        {/* Card section */}
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          duration={0.7}
          delay={2}
        >
          <section className="card">
            <div className="card-inner">
              <img src={cardPhone} className="card-phone" alt="Empty Phone" onLoad={() => setLoad()} />
            </div>
            <div className="mobile-card">
              <h3 className="mobile-card__heading">Join waitlist to get the app first.</h3>
              {/* mobile gist btn */}
              <a href="#" className="mobile-hero-btn card-mobile-btn" id="downloadBtn">
                <div className="hero-available">
                  <p>Join the waitlist</p>
                </div>
              </a>
              {/* end of mobile gist btn */}
            </div>
          </section>
        </ScrollAnimation>

        {/* end of card section */}

        <footer className="footer">
          <div>
            <p className="footer-rights">© Welcome Card 2022. All rights reserved.</p>
          </div>
          <div className="footer-lists">
            <a href="#"
              className="footer__list">Terms &amp; Conditions</a>
            <a href="#" className="footer__list">Privacy
              Policy</a>
            <a href="#" className="footer__list">Career</a>
          </div>
        </footer>
        <script src="./assets/main.js" defer=""></script>


      </div >

  );
}

export default App;
