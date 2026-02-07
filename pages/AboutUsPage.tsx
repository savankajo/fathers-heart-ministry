import React from 'react';
import { TEAM_MEMBERS, CONTENT } from '../constants';
import { TeamMember } from '../types';
import SEO from '../components/SEO';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center p-4">
    <img 
      src={member.imageUrl} 
      alt={member.name} 
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
    />
    <h3 className="text-xl font-bold font-heading text-olive">{member.name}</h3>
    <p className="text-gray-600">{member.role}</p>
  </div>
);

const AboutUsPage: React.FC = () => {
  const t = CONTENT.about;

  return (
    <div className="font-body">
      <SEO 
        title="About Us" 
        description="Learn about the mission and vision of Father's Heart Ministry. Meet our lead pastors and the team dedicated to sharing the Gospel in Surrey, BC." 
      />
      
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-cream to-olive/20 py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-olive mb-4">{t.title}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="prose lg:prose-xl max-w-none">
              <h2 className="text-4xl font-bold font-heading text-olive mb-4">{t.missionTitle}</h2>
              <p>
                {t.missionText}
              </p>
            </div>
            <div className="prose lg:prose-xl max-w-none">
              <h2 className="text-4xl font-bold font-heading text-olive mb-4">{t.visionTitle}</h2>
              <p>
                {t.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-heading text-olive mb-12">{t.teamTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map(member => <TeamMemberCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;