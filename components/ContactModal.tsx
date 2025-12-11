import React from 'react';
import { CONTACTS } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] sm:animate-[fadeIn_0.3s_ease-out]">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-serif-custom font-bold text-[#1a2230]">
            Contacto de Emergencia
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div className="space-y-6">
          {CONTACTS.map((contact, index) => (
            <div key={index} className="bg-[#f4f6f8] p-4 rounded-xl border border-gray-200">
              <h3 className="text-[#c5a059] font-bold uppercase text-sm mb-3 tracking-wider">
                {contact.role}
              </h3>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#1a2230] text-[#c5a059] flex items-center justify-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-lg font-bold text-[#333333] hover:underline">
                  {contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#c5a059] text-[#c5a059] flex items-center justify-center">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <span className="text-base text-gray-600">
                  {contact.social}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ContactModal;