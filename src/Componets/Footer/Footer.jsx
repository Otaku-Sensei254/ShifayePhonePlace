import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <MDBFooter className='footer2'>
      <section className='myFoot'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Shifaye Enterprise
              </h6>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='list1'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/Shop' className='text-reset'>
                  Brand New Phones
                </a>
              </p>
              <p>
                <a href='/iPhones' className='text-reset'>
                  Ex-UK Phones
                </a>
              </p>
              <p>
                <a href='/Accessories' className='text-reset'>
                  Phone Accessories
                </a>
              </p>
              <p>
                <a href='/Accessories' className='text-reset'>
                  Electronic Accessories
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='list2'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='/Products' className='text-reset'>
                  Pricing
                </Link>
              </p>
              <p>
                <Link to='/Contact' className='text-reset'>
                  Orders
                </Link>
              </p>
              <p>
                <Link to='/Contact' className='text-reset'>
                  Help
                </Link>
              </p>
            </MDBCol>
            <MDBCol className='contact2'>
              <ul>
                <h6>Our socials</h6>
                <li>
                  <Link to="https://wa.me/+254746429881"><FaWhatsapp className='icon1'/>+254 746 429881</Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/shifaye_enterprises/?utm_source=ig_web_button_share_sheet"><FaInstagram className='icon2'/>Shifaye Instagram</Link>
                </li>
                <li>
                  <Link to="https://web.facebook.com/shifayeee"><IoLogoFacebook className='icon3'/>Shifaye FaceBook</Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='locate'>
              <h6 className='text-uppercase fw-bold mb-4'>Locate Us</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Nairobi , Along Luthuli Avenue Dawa house
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                shifayenterprises47@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />+254 746 429881
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://d-huhuinc.vercel.app/'>
        d-huhuinc.vercel.app
        </a>
      </div>
    </MDBFooter>
  );
}