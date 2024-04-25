import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <h2 className="mt-12 text-5xl">Contact</h2>
        <div className="mt-6">
          <div>
            <p>
              I'd love to connect and chat further. Please feel free to send me
              a direct message on LinkedIn. You can click{" "}
              <a
                href="https://www.linkedin.com/in/jamespalderman/"
                className="underline cursor-pointer"
              >
                here
              </a>{" "}
              to do that.
            </p>
            <br></br>
            <p>
              Or... you can&nbsp;
              <a
                href="mailto:james_codes@icloud.com"
                class="underline cursor-pointer"
              >
                send me an email here
              </a>
              . Thank you!
            </p>
            <br />
            <p>James.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
