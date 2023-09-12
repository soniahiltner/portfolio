import {  useState } from "react";
import "./Contact.css";
import { onValidate } from "../../../public/assets/formValidator";
import Thanks from "../../components/Thanks/Thanks";


const Contact = () => {
  const initialData = {
    name: "",
    email: "",
    message: "",
  };
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value }); 
  };

  const submitForm = (e) => {
    e.preventDefault();
    const err = onValidate(data);

    if (err === null) {
      setIsLoading(true);
      console.log('Sending...');
      fetch("https://formsubmit.co/ajax/sonia.hiltner@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          setIsLoading(false);
          setErrors({});
          setError(null)
          setData(initialData);
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(() => {
          setTimeout(() => {
            setSuccess(false);
            setError(null);
            setIsLoading(false)
        }, 4000)
      })
    } else {
      setErrors(err);
    }
  };

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={submitForm}>
        <legend>Contact me</legend>
        <input
          value={data.name}
          type="text"
          name="name"
          placeholder="Your name"
          onChange={handleChange}
          required
        />
        <input
          value={data.email}
          type="email"
          name="email"
          placeholder="Your email"
          title="Enter a valid email"
          onChange={handleChange}
          required
        />

        <textarea
          value={data.message}
          name="message"
          cols="50"
          rows="10"
          placeholder="Your message"
          title="Your message must not exceed 255 characters"
          onChange={handleChange}
          required
        />
        <input type="submit" value="Get in touch" className="submit-btn" />
        {isLoading  && !error && (
          <div className="contact-form-loader">
            <img src="/assets/images/loader.svg" alt="Sending..." />
          </div>
        )}
        {errors && !isLoading && (
          <div className="errors">
            {Object.values(errors).map((error, index) => (
              <span key={index}> {error}</span>
            ))}
          </div>
        )}
        {error && (
          <div className="errors">
            <span>An error occurred while sending, please try again</span>
          </div>
        )}
        {success && (
          <Thanks />
        )}
      </form>
    </div>
  );
};

export default Contact;
