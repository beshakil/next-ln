import React from 'react';

const ActionBtnComponent = ({ onClick, buttonClass, buttonText, startContent }) => {
    return (
        <button
            onClick={onClick}
            className={`${buttonClass} flex items-center justify-center gap-1.5 text-sm bg-purple-600 hover:bg-purple-500 text-white pt-1 pb-1 rounded-md`} color="primary" type="submit">
            {startContent}{buttonText}
        </button>
    );
};

export default ActionBtnComponent;