import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <form>
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
