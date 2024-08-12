import React from 'react';

interface TagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: Boolean;
}

const ProjectTag: React.FC<TagProps> = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "text-white bg-purple-500 border-purple-500" : "text-[#ADB7BE] border-slate-600 hover:border-white";
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