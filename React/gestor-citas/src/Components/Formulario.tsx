import React, { FC } from 'react';

import { Cita } from '../App';

import CrearCita from './CrearCita';
import Input from './Input';
import Titulo from './Titulo';

interface FormularioProps {
    cita: Cita;
    setCita: React.Dispatch<React.SetStateAction<Cita>>;
    addCita: React.Dispatch<React.SetStateAction<Cita[]>>;
    citas: Cita[]
};

const Formulario: FC<FormularioProps> = ({ cita, setCita, citas, addCita }) => {
    const createCita = () => {
        // check if no other cita with same hora and fecha
        const existeCita = citas.find(c => c.fecha === cita.fecha && c.hora === cita.hora);
        const todosCamposLlenos = cita.nombre && cita.dueno && cita.fecha && cita.hora && cita.sintomas;

        if (!todosCamposLlenos) {
            alert('Todos los campos son obligatorios');
        } else if (existeCita) {
            alert('Ya existe una cita en esa fecha y hora');
        } else {
            addCita([...citas, cita]);
            setCita({
                nombre: '',
                dueno: '',
                fecha: '',
                hora: '',
                sintomas: ''
            });
        }
    };

    return (
        <div className='flex flex-col items-center w-full md:pl-40'>
            <Titulo title='Crear mi cita'/>
            <Input label='Nombre mascota *' placeholder='Nombre Mascota' type="text" value={cita.nombre} onChange={(e) => setCita({ ...cita, nombre: e.currentTarget.value })}/>
            <Input label='Nombre dueño  *' placeholder='Nombre del dueño de la mascota' type="text" value={cita.dueno} onChange={(e) => setCita({ ...cita, dueno: e.currentTarget.value })}/>
            <Input label='Fecha *' min={new Date().toLocaleDateString('en-ca')} type="date" value={cita.fecha} onChange={(e) => setCita({ ...cita, fecha: e.currentTarget.value })}/>
            <Input label='Hora *' type="time" value={cita.hora} onChange={(e) => setCita({ ...cita, hora: e.currentTarget.value })}/>
            <Input label='Sintomas *' type="textarea" value={cita.sintomas} onChangeTextArea={(e) => setCita({ ...cita, sintomas: e.currentTarget.value })}/>
            <CrearCita name='Agregar cita' onClick={() => createCita()}/>
        </div>
    );
};

export default Formulario;
