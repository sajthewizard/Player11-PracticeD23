import React from 'react';
import amage from '../../logo-footer.png'

const Footer = () => {
    return (
        < div className=' bg-neutral-300'>
      <div className='flex justify-center '>
      <img className='mt-24' src={amage} alt="" />
      </div>
        <footer className="footer sm:footer-horizontal text-base-content p-10">
       
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
        </div>
        
    );
};

export default Footer;