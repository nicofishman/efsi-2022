import React, { FC } from 'react';

import { Cita } from '../App';

interface CitaCardProps {
    cita: Cita;
    deleteCita: (fecha: string, hora: string) => void;
};

const CitaCard: FC<CitaCardProps> = ({ cita, deleteCita }) => {
    return (
        <div className='flex flex-col py-4 px-5 my-2 w-full h-auto font-sans text-black bg-white rounded-xl'>
            <p className='mb-3'><span className='font-bold'>Mascota:</span> {cita.nombre}</p>
            <p className='mb-3'><span className='font-bold'>Dueño:</span> {cita.dueno}</p>
            <p className='mb-3'><span className='font-bold'>Fecha:</span> {cita.fecha}</p>
            <p className='mb-3'><span className='font-bold'>Hora:</span> {cita.hora}</p>
            <p className='mb-3'><span className='font-bold'>Sintomas:</span> {cita.sintomas}</p>
            <button className='py-2 mt-2 text-gray-600 uppercase border-2 border-gray-300 hover:border-gray-400' onClick={() => deleteCita(cita.fecha, cita.hora)}>Eliminar ×</button>
        </div>
    );
};

export default CitaCard;
