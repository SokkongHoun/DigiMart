import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded bg-black mt-20">
      <form>
        <h6 className="text-lg text-custom">Newsletter</h6>
        <fieldset className="form-control w-80">
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item bg-inherit text-custom"
            />
            <button className="btn bg-custom hover:bg-secondary join-item text-white">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
      <nav className="grid grid-flow-col gap-4 text-white">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img className="w-7" src="/github.png" alt="our github" />
          </a>
          <a>
            <img className="w-7" src="/facebook.png" alt="out facebook" />
          </a>
          <a>
            <img className="w-7" src="/instagram.png" alt="our instagram" />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-white">
          Copyright © 2024 - All right reserved by Sokkong Houn
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
