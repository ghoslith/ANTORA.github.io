import React from 'react';
import { PetDetail } from '../types';

interface InfoRowProps {
  detail: PetDetail;
}

const InfoRow: React.FC<InfoRowProps> = ({ detail }) => {
  return (
    <div className="flex items-start gap-4 py-3 border-b border-gray-200 last:border-0">
      <div className="w-8 flex-shrink-0 flex justify-center mt-1">
        <i className={`${detail.icon} text-[#c5a059] text-xl`}></i>
      </div>
      <div className="flex-1">
        <span className="font-bold text-[#333333] block text-sm uppercase tracking-wide opacity-80 mb-0.5">
          {detail.label}
        </span>
        <span className={`text-base font-medium ${detail.isImportant ? 'text-red-600' : 'text-gray-700'}`}>
          {detail.value}
        </span>
      </div>
    </div>
  );
};

export default InfoRow;