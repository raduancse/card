import React from "react";
function Card() {
  return (
    <div className="card">
      <div className="header-content">
        <div><img src="./images/ieb.png" /></div>
        <div className="bio">
          <h2 style={{color:'#996666'}}>Engr. Md. Raduan Islam</h2>
          <p>Software Engineer, Large IT Solution, Dhaka</p>
          <p>Associate Member, Institution of Engineers, Bangladesh (IEB), Dhaka</p>
          <p style={{color:'green'}}>IEB Membership No: A-20089</p>
        </div>
      </div>
      <div className="footer-content">
        <p>Mobile: +8801675386216</p>
        <p>E-mail: raduan.cse@gmail.com</p>
        <p>Github: https://github.com/raduancse</p>
        <p>Portfolio:https://raduancse.github.io/portfolio/</p>
      </div>
    </div>
  );
}

export default Card;
