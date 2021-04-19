import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <form>
        <button className="back-contact">
          <Link to="/">
            <i class="fas fa-arrow-left"></i> Back
          </Link>
        </button>
        <h1>Contact Us</h1>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" class="form-control" id="subject" />
        </div>

        <div class="form-group">
          <label for="body">Message</label>
          <textarea type="text" class="form-control" id="body" />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
