"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload

    // For now, just log the form data
    console.log(formData);

    // Optionally, clear the form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  

  const handleLinkedInClick = () => {
    // Add LinkedIn navigation logic here
    window.open('https://linkedin.com', '_blank');
  }
 
  return (
    <> 
      <div className="bg-white flex justify-center items-center min-h-screen p-4 font-dm-sans" >
        <main className="flex flex-col md:flex-row gap-12 max-w-6xl w-full">
          <section className="bg-gradient-to-r from-[#F6F3FF] via-[#F9F7FF] to-[#F3F0FF] rounded-2xl p-10 md:p-14 flex-1 max-w-lg">
            <h2 className="text-center text-3xl md:text-3xl font-semibold mb-4 leading-tight">
              Get in
              <span className="text-[#6433F6] text-3xl"> touch </span>
              today
            </h2>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold mb-1">
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-full py-2 px-5 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2  focus:ring-purple-600 font-light"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold mb-1">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-full py-2 px-5 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold mb-1">
                  Phone<span className="text-red-600">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-full py-2 px-5 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold mb-1">
                  Leave us message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please type your message here..."
                  className="w-full rounded-lg py-2 px-4 text-xs text-black placeholder:text-black/60 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6433F6] hover:bg-purple-700 text-white text-base font-semibold rounded-full px-4 py-3 transition-colors "
              >
                Send message
              </button>
            </form>
          </section>

          <section className="flex flex-col justify-center max-w-lg">
            <button className="inline-block text-[12px] font-bold text-[#6433F6] bg-white rounded-full px-5 py-1 mb-4 shadow-[0_1px_3px_rgba(0,0,0,0.1)] w-fit border border-purple-100 hover:bg-purple-50 transition-colors">
              CONTACT US
            </button>

            <h3 className="text-2xl text-[#000000] font-semibold mb-5 leading-normal tracking-normal">
              Ready to transform your leadership journey?
              <span className="bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] bg-clip-text text-transparent font-normal p-2">
                We’d love to hear from you.
              </span>
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={handleLinkedInClick}
                className="w-6 h-6 flex justify-center items-center rounded border bg-purple-100 text-[#6433F6] text-xs sm:text-sm transition"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
              <span className="text-xs font-bold">Neerja Bhatia</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}