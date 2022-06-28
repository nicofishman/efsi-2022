import React, { FC } from 'react';

import { Cita } from '../App';

interface CitaCardProps {
    cita: Cita;
};

const CitaCard: FC<CitaCardProps> = ({ cita }) => {
    return (
        <div className='flex flex-col py-4 px-3 my-2 w-full h-auto font-sans text-black bg-white rounded-xl'>
            <p><span className='font-bold'>Mascota:</span> {cita.nombre}</p>
            <p><span className='font-bold'>Dueño:</span> {cita.dueno}</p>
            <p><span className='font-bold'>Fecha:</span> {cita.fecha}</p>
            <p><span className='font-bold'>Hora:</span> {cita.hora}</p>
            <p><span className='font-bold'>Sintomas:</span> {cita.sintomas}</p>
        </div>
    );
};

export default CitaCard;
