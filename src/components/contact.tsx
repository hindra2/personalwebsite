import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center">
        <div className='flex gap-8 bg-overlay1/50 rounded-full px-10 py-3'>
          <a 
            href="mailto:harold.d.indra.uni@gmail.com" 
            className="flex items-center gap-2 text-text hover:text-overlay2 transition-colors"
          >
            <Mail size={40} />
          </a>

          <a 
            href="https://www.instagram.com/haroldindra/" 
            className="flex items-center gap-2 text-text hover:text-overlay2 transition-colors"
          >
            <Instagram size={40} />
          </a>

          <a 
            href="https://www.linkedin.com/in/harold-indra-4734b9296/" 
            className="flex items-center gap-2 text-text hover:text-overlay2 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;