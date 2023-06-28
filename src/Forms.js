import React, { useState } from "react";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.2037917220": "",
    "entry.1146839265": "",
    "entry.1451219623": ""
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSewQli5dBi0g1S8Ve-Bz6Xr7XP4W_27mBoVJwmftpsWTkFTVQ/formResponse?entry.2037917220=${formData["entry.2037917220"]}&entry.1146839265=${formData["entry.1146839265"]}&entry.1451219623=${formData["entry.1451219623"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">Thanks, will get back to you soon</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">
            <fieldset>
              <label htmlFor="entry.2037917220">Name:</label>
              <input
                required
                type="text"
                name="entry.2037917220"
                onChange={handleInputData("entry.2037917220")}
                value={formData["entry.2037917220"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1146839265">E-mail:</label>
              <input
                required
                type="email"
                name="entry.1146839265"
                onChange={handleInputData("entry.1146839265")}
                value={formData["entry.1146839265"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1451219623">Message:</label>
              <textarea
                required
                name="entry.1451219623"
                rows="4"
                cols="10"
                onChange={handleInputData("entry.1451219623")}
                value={formData["entry.1451219623"]}
                autoComplete={false}
              ></textarea>
            </fieldset>

            <button type="submit">Connect</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
