import React from "react";

const Footer = () => {
  const backgroundImageUrl = "../assets/image/bg-top.png";

  const containerStyle = {
    background: `url(${backgroundImageUrl}) cover repeat `,
  };
  return (
    <>
      <footer id="footer bg-light">
<p class="text-center my-3"><i class="fa-solid fa-copyright"></i> IM Solutions</p>
  </footer>
    </>
  );
};

export default Footer;
