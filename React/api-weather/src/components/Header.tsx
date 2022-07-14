import React, { FC } from 'react';

interface HeaderProps {
    titulo: string
};

const Header: FC<HeaderProps> = ({ titulo }) => {
    return (
        <div className='absolute top-0 flex h-20 w-full items-center justify-center bg-black/30'>
            <p className="opactity-1 font-bold">{titulo}</p>
        </div>
    );
};

export default Header;
