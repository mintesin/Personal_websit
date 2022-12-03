import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="slideanim footer">
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </section>
  );
}

export default Footer;
