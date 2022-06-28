import React, { FC } from 'react';

import { Cita } from '../App';

import Titulo from './Titulo';
import CitaCard from './CitaCard';

interface CitasProps {
    citas: Cita[];
};

const Citas: FC<CitasProps> = ({ citas }) => {
    return (
        <div className='flex flex-col items-center w-full md:pr-40'>
            <Titulo title='Administra tus citas'/>
            {citas.map((cita, index) => (
                <CitaCard key={index} cita={cita}/>
            ))}
        </div>
    );
};

export default Citas;
