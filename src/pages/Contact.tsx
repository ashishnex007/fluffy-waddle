import ContactComponent from "@/components/ContactComponent";
import Stars from "@/components/Stars";
import { RiTwitterXLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "../index.css";

const socialMediaLinks = {
  instagram: "https://www.instagram.com/team__405_?utm_source=qr&igsh=ams3aDQ3bmJvc2Rs",
  twitter: " https://x.com/_team405_?t=fKA3DJskd4ggOetugOi8HA&s=08",
  youtube: "https://www.youtube.com/channel/UCAL_XXInL47ZSAkGth_crCw",
  gmail: "mailto:ashish.goutham@gmail.com",
};

const Contact = () => {
  return (
    <div className="py-5">
      <div className="flex justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl first:mt-0 font-DMSans" data-aos="fade-down">
          Contact Us
        </h1>
      </div>
      <div>
        <ContactComponent />
        <Stars />
      </div>

      <div>
        <div className="flex justify-center pt-20 pb-10" data-aos="fade-down">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl first:mt-0 font-DMSans">
            Socials
          </h1>
        </div>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-center" data-aos="fade-down">
          Follow us on our social media platforms to stay updated on our latest
          projects
        </h4>

        <div className="box-wrap py-10" data-aos="fade-right">
          <div className="box">
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram className="iconx"/>
            </a>
          </div>
          <div className="box">
            <a
              href={socialMediaLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXLine className="iconx" />
            </a>
          </div>
          <div className="box">
            <a
              href={socialMediaLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="iconx" />
            </a>
          </div>
          <div className="box">
            <a
              href={socialMediaLinks.gmail}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="iconx"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
