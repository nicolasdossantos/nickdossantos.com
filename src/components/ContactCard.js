import React from 'react'
import ContactTray from './ContactTray'

export default function ContactCard({ handleContact }) {
  
  return (
    <div id="contactForm" className="container mtl mbl">
      <div className="row">
        <div className="col-11 title">Contact Me</div>
        <button
          type="button"
          className="close whiteText"
          aria-label="Close"
          onClick={handleContact}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <hr className="hrClass" />

      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
      <div className="row">
        <div className="col-2"></div>
        <button className="btn btn-outline-secondary text-white body-text bold mbs col-8">
          Send
        </button>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <ContactTray size="small" />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
