import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import './Certificates.css';

const certificatesData = [
  {
    title: 'AUTOMATION ANYWHERE CERTIFIED ESSENTIALS RPA PROFESSIONAL',
    issuer: 'Automation Anywhere',
    date: 'July 25, 2024', // Date not mentioned in the original JSON
    logo: 'https://amaraneniganesh.onrender.com/aancer.png',
    verifyLink: 'https://certificates.automationanywhere.com/a2b5b793-5dce-4acb-9adf-0d76aa3a6ca9#acc.PlYXHyu8',
  },
  {
    title: 'RED HAT Certified Enterprise Application Developer',
    issuer: 'Red Hat',
    date: 'Dec 23, 2024', // Date not mentioned in the original JSON
    logo: 'https://amaraneniganesh.onrender.com/redhat.png',
    verifyLink: 'https://www.credly.com/badges/d1723ddc-b9a9-4863-b308-048f97e9dd27/public_url',
  },
  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    date: 'Oct 20, 2024', // Date not mentioned in the original JSON
    logo: 'https://amaraneniganesh.onrender.com/AIAssociate.png',
    verifyLink: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=tY4tWmH8Wua7G5Cp+NmTsP04WnX2PcZB6/6PJ/5SSRj2p8e0L0gE68HCu3rFzLoP',
  },
];


const CertificateCard = ({ certificate }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="certificate-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="certificate-logo">
        <img src={certificate.logo} alt={`${certificate.issuer} logo`} />
      </div>
      <div className="certificate-content">
        <h3>{certificate.title}</h3>
        <p className="issuer">{certificate.issuer}</p>
        <p className="date">{certificate.date}</p>
        <a
          href={certificate.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="verify-link"
        >
          <ExternalLink size={16} />
          Verify Certificate
        </a>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">My <span>Certificates</span></h2>
      <div className="certificates-container">
        {certificatesData.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;