import './brand.css'
import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import atlassin from "../../assets/atlassian.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"



const Brand = () => {
  return (
    <div className='gpt3__brand section__brand-padding'>
      <div className='gpt3__brand-content'>
        <img src={google} alt="google" />
        <img src= {slack} alt="slack" />
        <img src= {atlassin} alt="atlassin" />
        <img src= {dropbox} alt="dropbox" />
        <img src= {shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand