import React, { FC, useId } from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    type: 'text' | 'date' | 'time' | 'number' | 'textarea';
};

const Input: FC<InputProps> = ({ label, placeholder, value, type, onChange, onChangeTextArea }) => {
    const id = useId();
    const classes = 'py-2 px-3 mt-2 w-full h-10 placeholder:min-h-full placeholder:font-sans font-sans text-black placeholder:text-gray-600 rounded-md';

    return (
        <div className='block mb-5 w-full sm:w-96'>
            <label className='font-sans font-bold capitalize' htmlFor={id}>{label}</label>
            {type === 'textarea'
                ? <textarea className={`${classes} min-h-[65px]`} id={id} placeholder={placeholder} value={value} onChange={onChangeTextArea} />
                : <input className={classes} id={id} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
            }
        </div>
    );
};

export default Input;
