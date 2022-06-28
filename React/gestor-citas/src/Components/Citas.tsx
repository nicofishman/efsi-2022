import React, { FC } from 'react';

import Titulo from './Titulo';

interface CitasProps {

};

const Citas: FC<CitasProps> = () => {
    return (
        <div className='flex flex-col items-center'>
            <Titulo title='Administra tus citas'/>
        </div>
    );
};

export default Citas;
