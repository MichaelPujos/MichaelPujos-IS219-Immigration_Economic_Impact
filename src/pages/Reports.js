import React from "react";
import TaxChart from "../components/TaxChart";
import WageDisparityChart from "../components/WageDisparityChart";
import RiskOccupationChart from "../components/RiskOccupationChart";
import EntrepreneurshipChart from "../components/EntrepreneurshipChart";
import EconomicBenefitChart from "../components/EconomicBenefitChart";

const Reports = () => {
  return (
    <div className="container">
      <h1>📊 Immigration Economic Reports & Insights (2024)</h1>
      <p>
        This section provides data-driven insights into the economic contributions of immigrants,
        including tax revenue, wage trends, business ownership, and workforce risks.
      </p>

      {/* 💰 Tax Contributions */}
      <section>
        <h2>💰 Tax Contributions by Immigrants</h2>
        <p>
          Immigrants contribute significantly to the U.S. economy through income, payroll, and business taxes.
          In 2023, immigrants paid over **$492 billion in total taxes**, including **$330 billion in federal taxes**
          and **$162 billion in state and local taxes**. Their contributions fund essential services like Social
          Security, education, and healthcare.
        </p>
        <TaxChart />
      </section>

      {/* 📉 Wage Disparities */}
      <section>
        <h2>📉 Wage Disparities Among Immigrant Workers</h2>
        <p>
          Despite their contributions, immigrants often earn **10-15% less** than native-born workers in the same roles.
          Wage disparities are more pronounced in low-wage sectors but have improved slightly over the past decade.
          This graph shows wage trends for immigrant vs. native-born workers.
        </p>
        <WageDisparityChart />
      </section>

      {/* 🏗️ High-Risk Occupations */}
      <section>
        <h2>🏗️ Immigrants in High-Risk Occupations</h2>
        <p>
          Many immigrants work in **high-risk industries**, including construction, agriculture, and manufacturing.
          In 2024, over **37% of immigrant workers** were employed in jobs with a higher likelihood of injury or 
          hazardous conditions. This chart highlights the percentage of immigrant workers in these industries.
        </p>
        <RiskOccupationChart />
      </section>

      {/* 🚀 Entrepreneurship */}
      <section>
        <h2>🚀 Immigrant Entrepreneurship</h2>
        <p>
          Immigrants are **twice as likely** to start a business compared to native-born citizens. 
          In 2023, immigrant-owned businesses generated over **$1.3 trillion in revenue** and employed millions
          of workers. This visualization shows the growth of immigrant entrepreneurship.
        </p>
        <EntrepreneurshipChart />
      </section>

      {/* 📈 Economic Growth */}
      <section>
        <h2>📈 Long-Term Economic Benefits of Immigration</h2>
        <p>
          Immigration plays a key role in long-term economic stability. Over the past two decades, immigrant labor 
          has accounted for **33% of GDP growth**. This graph illustrates the economic impact of immigration from 2000-2024.
        </p>
        <EconomicBenefitChart />
      </section>
    </div>
  );
};

export default Reports;

