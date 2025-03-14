import React from "react";
import "../styles/About.css"; // Ensure you have an associated CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Why This Project Matters</h1>
        <p>
          Immigration plays a crucial role in shaping the U.S. economy. This project was created to highlight 
          the contributions of immigrants in the workforce and to analyze trends using real-world data.
        </p>
      </div>

      {/* Section: The Role of Immigrants in the Workforce */}
      <div className="info-section">
        <h2>🌍 The Role of Immigrants in the U.S. Workforce</h2>
        <p>
          Immigrants have historically been a driving force in the American labor market, filling critical roles 
          in industries ranging from **agriculture and construction to technology and healthcare**. In 2024, they 
          make up **18% of the total workforce**, bringing both skilled expertise and essential labor to key sectors.
        </p>
      </div>

      {/* Section: Economic Impact */}
      <div className="info-section">
        <h2>📈 Economic Impact of Immigrant Labor</h2>
        <p>
          The economic contributions of immigrants extend beyond just employment rates. Immigrant workers 
          **generate billions in tax revenue**, start businesses at **twice the rate of native-born citizens**, and 
          help fill gaps in labor shortages. Studies show that without immigrant labor, many industries 
          would experience **severe workforce shortages** and rising costs.
        </p>
      </div>

      {/* Section: Policy Challenges & Future Outlook */}
      <div className="info-section">
        <h2>🛂 Immigration Policies in 2024</h2>
        <p>
          Immigration policies directly impact the economy, with recent shifts in **visa regulations, border security, 
          and work permits** affecting businesses and workers alike. While stricter policies may reduce undocumented 
          immigration, they also limit labor supply in crucial industries. This project aims to explore **how these policies 
          influence economic trends**.
        </p>
      </div>

      {/* Research & Data Sources */}
      <div className="info-section">
        <h2>📚 Research & Data Sources</h2>
        <p>Our insights are backed by data from leading institutions:</p>
        <ul>
          <li><a href="https://www.bls.gov" target="_blank">Bureau of Labor Statistics - Labor Force Participation</a></li>
          <li><a href="https://www.migrationpolicy.org" target="_blank">Migration Policy Institute - Employment by Industry</a></li>
          <li><a href="https://www.americanimmigrationcouncil.org" target="_blank">American Immigration Council - Tax Contributions</a></li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div className="cta-section">
        <h2>🔎 Explore the Data</h2>
        <p>Discover key trends, wage comparisons, and employment breakdowns in our interactive reports.</p>
        <a href="/reports" className="explore-button">View Reports</a>
      </div>
    </div>
  );
};

export default About;
