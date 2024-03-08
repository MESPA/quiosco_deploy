'use client'
import React, { useState } from 'react';
import ModalMostrarDetalleProd from '@/components/ModalMostrarDetalleProd'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-8 max-w-md mx-auto rounded-md">
            
           {children}
         
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
