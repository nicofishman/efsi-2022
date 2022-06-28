import React, { FC, useState } from 'react';

import Citas from './Components/Citas';
import Formulario from './Components/Formulario';

interface AppProps {

};

export interface Cita {
    nombre: string;
    dueno: string;
    fecha: string;
    hora: string;
    sintomas: string;
}

const App: FC<AppProps> = () => {
    const [cita, setCita] = useState<Cita>({
        nombre: '',
        dueno: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [citas, setCitas] = useState<Cita[]>([]);

    return (
        <div className="flex flex-col items-center px-10 pt-10 pb-20 w-full h-full text-white bg-auto md:px-20 bg-bgPrimary">
            <h1 className='text-5xl uppercase'>ADMINISTRADOR DE PACIENTES</h1>
            <div className='flex flex-col gap-32 mt-20 w-full md:flex-row'>
                <div className="flex flex-1 justify-center">
                    <Formulario addCita={setCitas} cita={cita} citas={citas} setCita={setCita} />
                </div>
                <div className="flex flex-1 justify-center">
                    <Citas citas={citas} setCitas={setCitas}/>
                </div>
            </div>
        </div>
    );
};

export default App;
