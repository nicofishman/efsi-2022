import React, { FC } from 'react';

import { Cita } from '../App';

import Titulo from './Titulo';
import CitaCard from './CitaCard';

interface CitasProps {
    citas: Cita[];
    setCitas: React.Dispatch<React.SetStateAction<Cita[]>>;
};

const Citas: FC<CitasProps> = ({ citas, setCitas }) => {
    const deleteCita = (fecha: string, hora: string) => {
        setCitas(citas.filter(cita => cita.fecha !== fecha || cita.hora !== hora));
    };

    return (
        <div className='flex flex-col items-center w-full md:pr-40'>
            <Titulo title='Administra tus citas'/>
            {citas.map((cita, index) => (
                <CitaCard key={index} cita={cita} deleteCita={deleteCita}/>
            ))}
        </div>
    );
};

export default Citas;
