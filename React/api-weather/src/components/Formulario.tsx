import React, { FC, useEffect } from 'react';
import { Country, City } from 'country-state-city';

import { useSearchContext } from '../context/SearchContext';

import Dropdown from './Dropdown';

interface FormularioProps {

};

const Formulario: FC<FormularioProps> = () => {
    const { countries, setCountries, setCurrentCountry, currentCountry, setCities, cities, currentCity, setCurrentCity } = useSearchContext();

    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    useEffect(() => {
        currentCountry && setCities(City.getCitiesOfCountry(currentCountry?.code));
        currentCountry && setCurrentCity(null);
    }, [currentCountry]);

    return (
        <div className='-mt-52 flex h-screen w-2/3 flex-col justify-center gap-52'>
            <Dropdown countries={countries} placeholder={currentCountry?.name || 'Seleccione Pais'} setCurrent={(lol: {name: string, code: string} | null) => setCurrentCountry(lol)} />
            <Dropdown cities={cities} placeholder={currentCity?.name || 'Seleccione Ciudad'} setCurrent={(lol: {name: string, code: string} | null) => setCurrentCity(lol)} />
        </div>
    );
};

export default Formulario;
