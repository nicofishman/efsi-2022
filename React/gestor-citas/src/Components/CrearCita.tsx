import React, { FC } from 'react';

interface CrearCitaProps {
    onClick?: () => void;
    name: string
};

const CrearCita: FC<CrearCitaProps> = ({ name, onClick }) => {
    return (
        <button className='w-full h-10 font-sans font-bold capitalize bg-teal-400 hover:bg-teal-500 rounded-sm' onClick={onClick}>{name}</button>
    );
};

export default CrearCita;
