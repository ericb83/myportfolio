import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-primary text-neutral-content p-4">
      <div className="container ">
        <p className=" text-white text-lg ">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}
