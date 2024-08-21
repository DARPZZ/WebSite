import React from "react";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
const Modal: React.FC<propTypes> = ({ open, onClose, children }) => {
    return (
      <div
        className={`z-50 fixed inset-0 flex justify-center items-center 
      transition-colors ${open ? "visible bg-black/20" : "invisible"}
      `}
        onClick={onClose}
      >
        <div
          className={`rounded-lg shadow p-6 bg-slate-200
          transition-all max-w-5xl // Further increased width of modal
          ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-red-700 bg-black font-bold absolute top-2 right-2 py-1 px-2 
              border border-neutral-200 rounded-md 
               hover:bg-gray-50 hover:text-gray-600"
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  
