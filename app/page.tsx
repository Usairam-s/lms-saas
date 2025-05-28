import CompanionsCard from "@/components/CompanionsCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionsCard
          id="1"
          title="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="science"
          color="#E5D0FF"
        />
        <CompanionsCard
          id="2"
          title="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          duration={30}
          subject="maths"
          color="#FFDA6E"
        />
        <CompanionsCard
          id="3"
          title="Verba the Vocabulary Builder"
          topic="English Literature "
          duration={30}
          subject="language"
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
