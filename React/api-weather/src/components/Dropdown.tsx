import { ICity, ICountry } from 'country-state-city/dist/lib/interface';
import React, { FC, useState } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';

interface DropdownProps {
    countries?: ICountry[]
    cities?: ICity[]
    setCurrent: (lol: {name: string, code: string}) => void;
    placeholder: string
};

const Dropdown: FC<DropdownProps> = ({ countries, cities, placeholder, setCurrent }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = (thing: {name: string, code: string}) => {
        setIsOpen(!isOpen);
        setCurrent(thing);
    };

    return (
        <div className="relative">
            <button className='flex w-full flex-row justify-between border-b-2 border-white text-white' onClick={() => setIsOpen(!isOpen)}>
                <span>{placeholder}</span>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isOpen && (
                <div className='scrollbar-thumb-blue-500 scrollbar-track-transparent scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full absolute top-12 flex h-40 w-full flex-col overflow-y-auto rounded-xl'>
                    <div className="rounded-xl bg-white/30">
                        {
                            countries && countries.map(country => {
                                return (
                                    <button key={country.isoCode} className='flex w-full flex-row justify-between border-b-2 border-white px-2 text-white last:border-none' onClick={() => handleClick({ name: country.name, code: country.isoCode })}>
                                        <span className='truncate'>{country.name}</span>
                                    </button>
                                );
                            })
                        }
                        {
                            cities && cities.map(city => {
                                return (
                                    <button key={city.name} className='flex w-full flex-row justify-between border-b-2 border-white px-2 text-white last:border-none' onClick={() => handleClick({ name: city.name, code: city.stateCode })}>
                                        <span>{city.name}</span>
                                    </button>
                                );
                            })
                        }

                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
