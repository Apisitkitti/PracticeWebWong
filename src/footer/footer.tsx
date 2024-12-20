
import { dataInsideFooter, applicationImg, footerData, socialIcon } from "./footerData"
import './footer.css'
import { useState } from "react"
const FooterContent = ({ appImg, footerInformation }: dataInsideFooter) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  return (
    <footer>

      <div className="footerContent">
        <div className="logoContainer">
          <img className="wongnai-logo" src="../../img/wongnai-logo-header.png" alt="wongnaiLogo" />
        </div>
        <div className="advertisementApplicationContainer">
          <div className="applicationForWongnai">
            <p className="headAppText boldText">Dowload Wongnai App Free</p>
            <div className="applicationContainer">
              {appImg.dowloadPlatformImg.map((dowloadPlatformApp: socialIcon, index: number) =>
                <a key={index} href={dowloadPlatformApp.link}>
                  <img id='applicationAppset' src={dowloadPlatformApp.applicationImg} alt={dowloadPlatformApp.alt} />
                </a>
              )}
            </div>
          </div>
          <div className="applicationForWongnai">
            <p className="headAppText boldText">Follow Us</p>
            <div className="applicationContainer">
              {appImg.socialImg.map((socialImg: socialIcon, index: number) =>
                <a href={socialImg.link} key={index}>
                  <img id='applicationAppSocialSet' src={socialImg.applicationImg} alt={socialImg.alt} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="informationContainer">
          {footerData.map((footerItem, index) =>
            <div key={index}>
              <p className="normalText">{footerItem.header}</p>
              <div className="itemIndsideTextGroup">
                {footerItem.linkText.map((indsideText, index) =>
                  <div className="insideAboutWongnaiFooterText" key={index}><a className="blackText" href={indsideText.link}>{indsideText.insideText}</a></div>
                )}
              </div>
            </div>
          )}
        </div>
        <hr id="endLine" />
        <div className="wongnaiCopyRightGroup">
          <div className="normalText">Copyright 2010-2024  Wongnai Media Co., Ltd. All right reserved. <a href="##" className="blackText">Terms & Conditions | Privacy Policy</a></div>

          <p onClick={() => setIsToggle(!isToggle)}> <div><span className={isToggle ? "boldText" : "buttonText"}>TH</span> | <span className={isToggle ? "buttonText" : "boldText"}>EN</span> </div> </p>
        </div>
      </div >
    </footer >
  )
}

const Footer = () => {
  return (
    <>
      <hr className='end' />
      <FooterContent appImg={applicationImg} footerInformation={footerData} />
    </>
  )
}

export default Footer