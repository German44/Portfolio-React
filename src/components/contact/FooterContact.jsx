import React from "react";

const FooterContact = () => {
  return (
    <>
      <div className="w-full h-[10vh] ">
        <div className="w-full  h-full flex justify-end items-center ">
          <div className="flex text-[18px] lg:text-[40px] gap-x-5  sm:gap-x-8 max-w-max mx-auto lg:mx-0 items-center">
            <a
              className="social_links"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/german-ravarotto/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="social_links"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/German44"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="social_links"
              target="_blank"
              rel="noreferrer"
              href="mailto:g44ravarotto@gmail.com"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              className="social_links"
              target="_blank"
              rel="noreferrer"
              href="https://www.behance.net/germanravarotto1"
            >
             <i className="fa-brands fa-square-behance"></i>
            </a>
            <a
              className="social_links"
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/german44"
            >
              <i className="fa-solid fa-basketball"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
