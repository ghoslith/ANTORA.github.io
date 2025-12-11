import React, { useState } from 'react';
import { PET_DATA } from './constants';
import InfoRow from './components/InfoRow';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#e5e7eb] flex justify-center shadow-none sm:py-8">
      {/* Mobile-first Container */}
      <div className="w-full max-w-md bg-[#f4f6f8] min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col">
        
        {/* Header Section */}
        <header className="bg-[#1a2230] pt-12 pb-16 px-6 text-center relative rounded-b-[2rem]">
          
          {/* Pet Image Container */}
          <div className="relative mx-auto w-40 h-40 mb-4">
            <div className="w-full h-full rounded-full border-4 border-[#c5a059] overflow-hidden shadow-lg bg-gray-800">
              <img 
                src={PET_DATA.imageUrl} 
                alt={PET_DATA.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Crown Icon */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#1a2230] rounded-full p-2 border border-[#c5a059]">
              <i className="fa-solid fa-crown text-[#c5a059] text-xl"></i>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl font-serif-custom italic text-white mb-2">
            {PET_DATA.name}
          </h1>
          
          <div className="flex items-center justify-center gap-3 opacity-90">
            <div className="h-px w-8 bg-[#c5a059]"></div>
            <span className="text-[#c5a059] uppercase tracking-[0.15em] text-xs font-bold">
              {PET_DATA.subtitle}
            </span>
            <div className="h-px w-8 bg-[#c5a059]"></div>
          </div>
        </header>

        {/* Info Content */}
        <main className="flex-1 px-6 -mt-8 pb-32">
          {/* Card Container for Info */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex flex-col">
              {PET_DATA.details.map((detail, index) => (
                <InfoRow key={index} detail={detail} />
              ))}
            </div>
          </div>

          {/* Quote Block */}
          <div className="bg-[#fffbf0] border border-[#c5a059]/30 rounded-xl p-6 relative mb-8">
            <i className="fa-solid fa-quote-left absolute -top-3 left-6 text-2xl text-[#c5a059] bg-[#fffbf0] px-2"></i>
            <p className="text-gray-700 italic leading-relaxed text-center font-serif-custom text-lg pt-2">
              "{PET_DATA.quote}"
            </p>
          </div>

          {/* Footer Branding */}
          <div className="text-center pb-8">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              {PET_DATA.footer}
            </p>
          </div>
        </main>

        {/* Sticky Action Button */}
        <div className="fixed bottom-0 w-full max-w-md z-30 p-4 bg-gradient-to-t from-[#f4f6f8] to-transparent pointer-events-none">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#1a2230] text-[#c5a059] font-bold py-4 rounded-full shadow-xl hover:bg-[#252f40] transition-transform active:scale-95 flex items-center justify-center gap-3 pointer-events-auto border border-[#c5a059]/50"
          >
            <i className="fa-solid fa-phone-volume text-xl animate-pulse"></i>
            <span className="tracking-widest">CONTACTAR FAMILIA</span>
          </button>
        </div>

        {/* Modal Overlay */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />

      </div>
    </div>
  );
};

export default App;