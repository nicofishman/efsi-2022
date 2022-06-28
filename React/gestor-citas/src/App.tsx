import React, { FC } from 'react';

import Citas from './Components/Citas';
import Formulario from './Components/Formulario';

interface AppProps {

};

const App: FC<AppProps> = () => {
    return (
        <div className="flex flex-col items-center pt-10 pb-20 w-full h-full text-white uppercase sm:px-20 bg-bgPrimary">
            <h1 className='text-5xl'>ADMINISTRADOR DE PACIENTES</h1>
            <div className='flex flex-row mt-20 w-full'>
                <div className="flex-1">
                    <Formulario />
                </div>
                <div className="flex-1">
                    <Citas />
                </div>
            </div>
        </div>
    );
};

export default App;
