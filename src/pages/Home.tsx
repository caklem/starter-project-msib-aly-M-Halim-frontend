import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px", 
        backgroundColor: "#232323",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Selamat Datang Di Web!</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px", textAlign: "center" }}>
        Sebelumnya Mohon maaf jika Tampilanya sama code nya masih tidak rapi, karena baru kali ini memakai React JS jadi ya se adanya :).
        Silahkan Klik Dekstop One, Dekstop Two, Dan Dekstop three jika ingin Melihat Tampilan Login page,Register Page dan Profil Page.
      </p>
      <ul style={{ listStyle: "none", padding: "0", display: "flex", justifyContent: "center" }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/desktopone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Desktop One
          </Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/desktoptwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Desktop Two
          </Link>
        </li>
        <li>
          <Link to="/desktopthree" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Desktop Three
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;