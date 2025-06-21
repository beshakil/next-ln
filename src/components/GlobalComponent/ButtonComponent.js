import React from 'react';

const ButtonComponent = ({ onClick, buttonClass, buttonText, startContent }) => {
    return (
        <button
            onClick={onClick}
            className={`${buttonClass} flex items-center justify-center h-10 gap-1.5 bg-purple-600 hover:bg-purple-500 text-sm text-zinc-50 px-3 rounded-lg`} color="primary" type="submit">
            {startContent}{buttonText}
        </button>
    );
};

export default ButtonComponent;