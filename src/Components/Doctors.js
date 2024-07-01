import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.jpg";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.jpg";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our coordinators</span>
        </h3>

        <p className="dt-description">
        Meet our outstanding unit of dedicated training professionals and mentors.
         Each member is committed to guiding you on your journey to success with expertise and personalized support. They bring a wealth of experience and knowledge to help you achieve your goals effectively. Discover how our team can empower you to reach new heights and excel in your endeavors.
         Join us and benefit from their unwavering dedication and mentorship.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Mr.Diego bernabe"
          title="webflow mentor"
          stars="4.9"
          reviews="728"
        />
        <DoctorCard
          img={profile2}
          name="Ms. jorge gonzalez"
          title="job marketing mentor"
          stars="4.8"
          reviews="292"
        />
        <DoctorCard
          img={profile3}
          name="Mr.fernando reiis "
          title="Lead flipping mentor"
          stars="4.7"
          reviews="356"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Project Manager mentor"
          stars="4.8"
          reviews="43"
        />
      </div>
    </div>
  );
}

export default Doctors;
