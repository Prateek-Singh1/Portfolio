/* eslint-disable no-unused-vars */
import React, { InputHTMLAttributes } from 'react';
import '../RangeSlider/style.css';


interface RangeSliderProps {
    value?: number;
    min?: number;
    max?: number;
    step?: InputHTMLAttributes<HTMLInputElement>['step'];
}

const RangeSlider: React.FunctionComponent<RangeSliderProps> = ({ min = 0, max = 10, value, step, }) => {
    return (
        <div className='relative w-full'>
            <div>
                <input
                    type='range'
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    style={{ width: `${value}%` }}
                    className={`w-full range-slider `}
                />
            </div>
        </div>
    );
};

export default RangeSlider;
