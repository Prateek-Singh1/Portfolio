import React, { ChangeEvent } from 'react';
import './Toggle.css';

interface ToggleProps {
    isChecked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    backgroundColor?: string;
}

const Toggle: React.FunctionComponent<ToggleProps> = ({ isChecked = false, onChange, backgroundColor }) => {
    return (
        <label className="switch">
            <input
                aria-label='Check Box'
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            <span className="slider round" style={{backgroundColor: backgroundColor}}></span>
        </label>
    );
}

export default Toggle;
