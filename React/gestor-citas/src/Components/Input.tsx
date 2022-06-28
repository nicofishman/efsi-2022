import React, { FC, useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Input: FC<InputProps> = ({ label, type, onChange, onChangeTextArea, ...props }) => {
    const id = useId();
    const classes = 'py-2 px-3 mt-1 w-full h-10 placeholder:min-h-full placeholder:font-sans font-sans text-black placeholder:text-gray-600 rounded-md bg-white';

    return (
        <div className='block mb-3 w-full'>
            <label className='font-sans font-bold capitalize' htmlFor={id}>{label}</label>
            {type === 'textarea'
                ? <textarea className={`${classes} min-h-[65px] max-h-36`} id={id} onChange={onChangeTextArea} />
                : <input {...props} className={classes} id={id} type={type} onChange={onChange}/>
            }
        </div>
    );
};

export default Input;
