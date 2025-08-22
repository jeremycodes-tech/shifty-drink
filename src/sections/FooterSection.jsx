import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #BUILT FOR GREATNESS
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
          />
        ) : (
         <video
  src="/videos/splash.mp4" // replace with your new file path
  autoPlay
  playsInline
  muted
  loop
  className="absolute top-0 left-0 w-full h-full object-cover mix-blend-lighten"
/>

        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

     <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
  <div className="flex items-center md:gap-16 gap-5">
    <div>
      <p>Witdashifts Flavors</p>
    </div>
    <div>
      <p>The Shift Squad</p>
      <p>Campus Ambassadors</p>
      <p>Fuel Partners</p>
    </div>
    <div>
      <p>About</p>
      <p>Contact +254708716419</p>
      <p>Flavor Feedback</p>
    </div>
  </div>

  <div className="md:max-w-lg">
    <p>
      Get early access to limited drops, new flavors, athlete collabs, and insider-only updates. Power up with the latest from Witdashifts.
    </p>
    <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="BUILT FOR LEGENDS "
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2025 WITDASHIFTS - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
