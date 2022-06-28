import React, { FC } from 'react';

interface TituloProps {
    title: string
};

const Titulo: FC<TituloProps> = ({ title }) => {
    return (
        <h2 className='text-4xl pb-8'>{title}</h2>
    );
};

export default Titulo;
