import React, { FC } from 'react';

import Clima from './components/Clima';
import Formulario from './components/Formulario';
import Header from './components/Header';

interface AppProps {

};

const App: FC<AppProps> = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-blue-400 text-3xl text-white">
            <Header titulo='Clima React App'/>
            <div className='mt-52 flex h-max w-full flex-row gap-8'>
                <div className="flex flex-1 justify-end">
                    <Formulario />
                </div>
                <div className="flex flex-1 justify-start">
                    <Clima />
                </div>
            </div>
        </div>
    );
};

export default App;
