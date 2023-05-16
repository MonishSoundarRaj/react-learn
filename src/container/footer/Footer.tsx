import './footer.css'
import GPT3Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='gpt3__footer-container'>
      <div className='gpt3__footer-container-heading'>
        <h1 className='gradient__text'>Do you want to step in to the <br /> future before others</h1>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-container-content'>
        <div className='gpt3__footer-container-content-logo'>
          <img src={GPT3Logo} alt="GPT-3 Logo" />
        </div>
        <div className='gpt3__footer-container-content-links'>
          <ul>
            <h1>Links</h1>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-container-content-company'>
          <ul>
            <h1>Company</h1>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-container-content-get-in-touch'>
          <ul>
            <h1>Get in touch</h1>
            <li>754-852-6879</li>
            <li>smithmatrix@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className='gpt3__footer-container-copy-rights'>
        <p>&#169; 2023 GPT3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer