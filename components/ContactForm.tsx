import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatus('success');
            setLoading(false);
            formRef.current?.reset();
          },
          (error) => {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setLoading(false);
          }
        );
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1a3a5c] focus:outline-none transition-colors duration-300 bg-gray-50 text-gray-700 placeholder-gray-400';

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
      <h3 className="text-2xl font-bold font-heading text-[#1a3a5c] mb-6">Send us a Message</h3>
      
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-start gap-3 animate-fadeIn">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-bold">Message sent successfully!</p>
            <p className="text-sm mt-1">Thank you for reaching out. We will get back to you soon.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 mb-6 flex items-start gap-3 animate-fadeIn">
          <span className="text-2xl">❌</span>
          <div>
            <p className="font-bold">Something went wrong.</p>
            <p className="text-sm mt-1">Please try again later or email us directly at info@fathersheartchurch.ca</p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-sm font-semibold text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="user_name"
            name="user_name"
            required
            type="text"
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700 mb-1">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            id="user_email"
            name="user_email"
            required
            type="email"
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Write your message here..."
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-[#1a3a5c] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#0f2540] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <span>✉️ Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
