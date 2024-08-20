import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';

const Modal = ({ message }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" bg-white p-6 rounded shadow-lg gap-4">
                <div className='flex flex-col items-center justify-center animate-pulse'>
                    <p className='font-bold'>{message}</p>
                    <CheckCircle size={40} className='text-green-600 ' />
                </div>
            </div>
        </div>
    );
};

export default Modal;