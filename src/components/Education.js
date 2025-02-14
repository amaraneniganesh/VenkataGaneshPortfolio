import React from 'react';
import { GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';
import './Education.css';

const educationData = [
  {
    year: "2022 - 2026",
    degree: "BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING",
    institution: "Koneru Lakshmaiah Education Foundation",
    location: "Vaddeswaram, AP",
    CGPA: "9.35 / 10"
  },
  {
    year: "2020 - 2022",
    degree: "BOARD OF INTERMEDIATE EDUCATION",
    institution: "Gayatri Junior College",
    location: "Tuni, AP",
    CGPA: "869 / 1000"
  },
  {
    year: "2019-2020",
    degree: "BOARD OF SECONDARY EDUCATION",
    institution: "Sri Chaitanya Techno School",
    location: "Tuni, AP",
    CGPA: "597 / 600"
  }
];

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-header">
        <GraduationCap className="education-icon" size={32} />
        <h2>Education</h2>
      </div>
      
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">
                <Calendar className="inline-icon" size={16} />
                <span>{edu.year}</span>
              </div>
              <h3>{edu.degree}</h3>
              <div className="timeline-details">
                <p className="institution">
                  <Building2 className="inline-icon" size={16} />
                  {edu.institution}
                </p>
                <p className="location">
                  <MapPin className="inline-icon" size={16} />
                  {edu.location}
                </p>
              </div>
              <p className="description">{edu.CGPA}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;