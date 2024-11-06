import React from 'react';

interface TagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: Boolean;
}

const ProjectTag: React.FC<TagProps> = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" : "text-slate-800 border-slate-600 hover:border-white";
    return (
        <button
            className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
            onClick={() => onClick(name)}   
        >
            {name}
        </button>
    );
};

export default ProjectTag;