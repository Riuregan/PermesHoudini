import React from 'react';
import { useAsyncDebounce, Row } from 'react-table';


const GlobalFilter = (props) => {
    const { globalFilter, preGlobalFilteredRows, setGlobalFilter } = props;

    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    // const onChange = useAsyncDebounce((value) => {
    //     setGlobalFilter(value || undefined);
    // }, 200);

    return (
        <div className="search">
            <span>
                Procurar:{' '}
                <input
                    value={value || ''}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={` ${count} registros...`}
                    style={{
                        fontSize: '1.1rem'
                    }}
                />
            </span>
        </div>
    );
};

export default GlobalFilter;