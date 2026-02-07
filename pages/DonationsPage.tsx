import React from 'react';
import { CONTENT } from '../constants';
import SEO from '../components/SEO';

const DonationsPage: React.FC = () => {
  const t = CONTENT.donations;

  return (
    <div className="font-body bg-cream">
      <SEO 
        title="Donations" 
        description="Support the work of Father's Heart Ministry. Secure options for giving inside and outside Canada to help spread the Father's love." 
      />
      
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-heading text-olive mb-4">{t.title}</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">{t.subtitle}</p>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-bold font-heading text-olive">{t.optionsTitle}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://tithe.ly/give_new/www/#/tithely/give-one-time/7590166" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 bg-olive text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-olive/80 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {t.insideCanada}
            </a>
            <a 
              href="https://www.canadahelps.org/en/charities/fathers-heart-ministry/?fbclid=IwY2xjawG4f45leHRuA2FlbQIxMAABHe2srJ5VNPVAPPj-glPnNGZurDMa9PGvDt5PPRPddRxvQoM4K0_mfu0SJQ_aem_-XJ6oXUSvUS8vKYvRrlRhg"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 bg-flame text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-flame/80 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {t.outsideCanada}
            </a>
          </div>
          <p className="text-sm text-gray-500 pt-4">{t.redirectText}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;