import React, { Component } from "react";
import ContactForm from "./ContactForm";
import contact from "../../../assets/illustrations/contact.svg";

export default class ContactMe extends Component {
  render() {
    return (
      <section className="page-section bg-white" id="contact">
        <div className="container">
          <h2 className="display-4 mb-0 text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row d-flex">
            {/* j */}
            <div className="col-lg-6 mx-auto pt-5">
              <ContactForm />
            </div>
            <div className="col-lg-6 mx-auto d-none d-lg-block">
              <img
                src={contact}
                alt="I’m John and I’m a Backend & Devops engineer!"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
