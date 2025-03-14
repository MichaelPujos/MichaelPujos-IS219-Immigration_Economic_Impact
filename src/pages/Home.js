import React from "react";
import "../styles/Home.css";
import IndustryChart from "../components/IndustryChart";
import WageTrendChart from "../components/WageTrendChart";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Immigration Economic Impact</h1>
        <p>Explore interactive data visualizations on immigration’s role in the U.S. economy.</p>
      </header>

      {/* 📊 Key Immigration Workforce Statistics */}
      <section className="stats-section">
        <div className="stat-card">
          <h2>📊 18%</h2>
          <p><strong>Immigrants in the U.S. Workforce (2024)</strong></p>
          <p className="stat-description">
            As of **2024**, immigrants make up **18% of the total U.S. labor force**, according to the Bureau of Labor Statistics. 
            This marks a steady increase from **16.9% in 2014** and highlights the growing role of immigrants in the economy.
          </p>
        </div>

        <div className="stat-card">
          <h2>🏗️ Healthcare, Construction, Tech</h2>
          <p><strong>Top Industries Employing Immigrants (2023-2024)</strong></p>
          <p className="stat-description">
            Recent employment reports from **2023-2024** indicate that immigrants are most concentrated in 
            **healthcare (27% of the workforce), construction (24%), and technology (19%)**. These industries rely 
            on foreign-born professionals for both skilled and essential labor.
          </p>
        </div>

        <div className="stat-card">
          <h2>💰 10% Lower</h2>
          <p><strong>Wage Gap: Immigrants vs. Non-Immigrants (2024)</strong></p>
          <p className="stat-description">
            In **2024**, data from the U.S. Department of Labor shows that immigrant workers earn approximately **10% less** 
            than U.S.-born employees in similar roles. This wage disparity has slightly improved from **12% in 2018**, 
            reflecting progress in workplace policies but also persistent challenges in wage equality.
          </p>
        </div>
      </section>

      {/* 📊 Industry Breakdown Chart */}
      <section className="chart-section">
        <h2>📊 Immigrant Workforce by Industry (2024)</h2>
        <p>This chart illustrates the distribution of immigrant workers across various industries in the current labor market.</p>
        <IndustryChart />
      </section>

      {/* 📈 Wage Trends Over Time */}
      <section className="chart-section">
        <h2>📈 Wage Trends Over Time (2014-2024)</h2>
        <p>This graph presents the average wages of immigrants from **2014 to 2024**, showing patterns in income growth 
        and wage disparities over the past decade.</p>
        <WageTrendChart />
      </section>

      <footer className="footer">
        <p>© 2024 Immigration Economic Impact | Data Visualization Project</p>
      </footer>
    </div>
  );
};

export default Home;
