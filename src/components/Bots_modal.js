import React from 'react';

const Bots_modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
        <div className="relative bg-white w-full md:w-[640px] rounded-xl p-6">
          <button
            className="absolute top-4 right-4 text-[#0A0D26] text-xl cursor-pointer"
            onClick={onClose}
          >
            &#215;
          </button>
          <h2 className="text-[#0A0D26] text-2xl font-bold leading-8 mb-4">
            New Bot
          </h2>
          {/* Add your form or content for creating a new bot here */}
        </div>
      </div>
    )
  );
};

export default Bots_modal;
