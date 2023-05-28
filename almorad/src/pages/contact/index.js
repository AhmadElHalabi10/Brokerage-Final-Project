import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <div className="contact-hero">
        <h1 className="contact-hero-h1">
          <span className="contact-hero-h1-1">Contact us</span> for your dream
          property. We're here to help.
        </h1>
      </div>
      <div className="contact-bigger">
        <div className="contact">
          <div className="contact-container">
            <form action="/action_page.php">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email.."
              />

              {/* <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select> */}

              <label for="subject">
                Subject
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                ></textarea>
              </label>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
