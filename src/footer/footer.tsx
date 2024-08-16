
import { dataInsideFooter, applicationImg, footerData } from "./footerData"
import './footer.css'
function FooterContent({ appImg, footerInformation }: dataInsideFooter) {
  return (
    <footer>
      <div className="footerContent">
        <div className="logoContainer">
          <img className="wongnai-logo" src="../../img/wongnai-logo-header.png" alt="wongnaiLogo" />
        </div>
        <div className="advertisementApplicationContainer">
          <div>
            <p>Dowload Wongnai App Free</p>
            <div>
              {appImg.dowloadPlatformImg.map((dowloadPlatformApp, index) =>
                <div key={index}>
                  <button>
                    <div>
                      <img src={dowloadPlatformApp.icon} alt={dowloadPlatformApp.maintext} />
                    </div>
                    <div>
                      <p>{dowloadPlatformApp.subtext}</p>
                      <p>{dowloadPlatformApp.maintext}</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div>
            <p>Follow Us</p>
            <div>
              {appImg.socialImg.map((socialImg, index) =>
                <div key={index}>
                  <img src={socialImg.applicationImg} alt={socialImg.alt} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="informationContainer">
          {footerData.map((footerItem, index) =>
            <div key={index}>
              <h3>{footerItem.header}</h3>
              <div>
                {footerItem.insideText.map((indsideText, index) =>
                  <div key={index}>{indsideText}</div>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </footer>
  )
}

function Footer() {
  return (
    <>
      <FooterContent appImg={applicationImg} footerInformation={footerData} />
    </>
  )
}

export default Footer