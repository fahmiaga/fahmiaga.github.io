import React, { useState } from "react";

const Modal = ({ showModal, setShowModal, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div className={`justify-center items-center max-h-screen flex overflow-hidden transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"} overflow-y-auto fixed inset-0 z-10 outline-none focus:outline-none`}>
          <div
            className={`relative w-[900px] my-6 mx-auto max-w-3xl`}
          >
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between bg-yellow-500 p-5 border-b border-solid border-gray-300 rounded-t">
                <h3>{title}</h3>
                <button
                  className="p-1 ml-auto  border-0 text-black bg-transparent float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleClose}
                >
                  <span className="bg-transparent h-6 w-6 z-50 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>

              </div>
              <div className="relative p-6 flex-auto overflow-y-auto max-h-[85vh]">
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 -z-30 bg-gray-600 overflow-hidden"></div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;






