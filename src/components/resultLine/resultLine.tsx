import * as React from'react';
import  s from './resultLine.module.scss'

type Length = {
    length: number
}

export const ResultLine = ({length}: Length) => {
    return (
        <div className={s.results_line}>
            <p>Results: {length}</p>
            <hr/>
        </div>
    );
};
