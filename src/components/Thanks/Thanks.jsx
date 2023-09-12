import "./Thanks.css"


const Thanks = () => {
  return (
    <div className="modal">
      <article className="contact-form-response">
        <h3>Thank you</h3>
        <h3>for your message</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#E48E3E"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z" />
          <path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
          <path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z" />
        </svg>
      </article>
    </div>
  );
}

export default Thanks