import React, { FC } from 'react';

import Glosario from './components/Glosario';

interface AppProps {

};

const App: FC<AppProps> = () => {
    return (
        <div className="bg-slate-600 flex h-screen w-full justify-center items-center">
            <div className='text-white flex justify-center text-3xl gap-4 flex-wrap'>
                <Glosario color='#6932e0' title='Subcontractors'/>
                <Glosario color='#29b7cb' desc='No resources' title='Training'/>
                <Glosario color='#f1736b' desc='6 resources' title='Pending status'/>
                <Glosario color='#f4a548' title='Overassigned'/>
                <Glosario color='#f664f1' title='Low Allocation'/>
            </div>
        </div>
    );
};

export default App;
