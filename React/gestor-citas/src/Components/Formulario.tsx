import React, { FC } from 'react';

import Input from './Input';
import Titulo from './Titulo';

interface FormularioProps {

};

const Formulario: FC<FormularioProps> = () => {
    return (
        <div className='flex flex-col items-center'>
            <Titulo title='Crear mi cita'/>
            <Input label='Nombre mascota' placeholder='Nombre Mascota' type="text"/>
            <Input label='Nombre dueño' placeholder='Nombre del dueño de la mascota' type="text"/>
            <Input label='Fecha' type="date"/>
            <Input label='Hora' type="time"/>
            <Input label='Sintomas' type="textarea"/>
        </div>
    );
};

export default Formulario;
