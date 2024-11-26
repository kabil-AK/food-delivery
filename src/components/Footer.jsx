import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>&copy; 2024 Food Delivery. All rights reserved.</p>
      <p>
        <a href="/terms" className="underline">
          Terms & Conditions
        </a>{" "}
        |{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
