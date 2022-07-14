import { ICity, ICountry } from 'country-state-city/dist/lib/interface';
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface SearchContextType {
    countries: ICountry[];
    setCountries: Dispatch<SetStateAction<ICountry[]>>;
    cities: ICity[] | undefined;
    setCities: Dispatch<SetStateAction<ICity[]| undefined>>;
    currentCity: {name: string, code: string} | null;
    setCurrentCity: Dispatch<SetStateAction<{name: string, code: string} | null | null>>;
    currentCountry: {name: string, code: string} | null;
    setCurrentCountry: Dispatch<SetStateAction<{name: string, code: string} | null | null>>;
}
export const searchContext = createContext<SearchContextType | null>(null);

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [cities, setCities] = useState<ICity[]| undefined>([]);
    const [currentCity, setCurrentCity] = useState<{name: string, code: string} | null | null>(null);
    const [currentCountry, setCurrentCountry] = useState<{name: string, code: string} | null | null>(null);

    const value: SearchContextType = {
        countries,
        setCountries,
        cities,
        setCities,
        currentCity,
        setCurrentCity,
        currentCountry,
        setCurrentCountry
    };

    return <searchContext.Provider value={value}>{children}</searchContext.Provider>;
};

export default SearchProvider;

export const useSearchContext = () => {
    const context = useContext<SearchContextType>(searchContext as any);

    if (!context) {
        throw new Error('useSearchContext must be used within a SearchProvider');
    }

    return context;
};
