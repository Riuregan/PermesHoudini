import { useTable, useSortBy, Column, usePagination, useGlobalFilter } from 'react-table';
import React from 'react';
//import styles from '../../table.css'
import GlobalFilter from './GlobalFilter';


const SortTable = (props) => {
    const { columns, data, InitialPageSize } = props;

    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: { pageSize: InitialPageSize }
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setGlobalFilter,
        nextPage,
        previousPage,
        prepareRow,
        preGlobalFilteredRows
    } = tableInstance;

    const { pageIndex, globalFilter } = state;

    return (
        <div className="global">
            {/* <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            ></GlobalFilter> */}

            {/* <div className="search">
                <span >
                    Search: {' '}
                    <input value={globalFilter || ' '} onChange={e => setGlobalFilter(e.target.value)}></input>
                </span>
            </div> */}

            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th key={column.id}
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    style={{
                                        minWidth: column.minWidth,
                                        fontWeight: 700,
                                        textAlign: 'center',
                                        fontFamily: 'Raleway, sans-serif'
                                    }}
                                >
                                    <span>{column.render('Header')}</span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr key={row.id}{...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td key={cell.id}{...cell.getCellProps()} style={{}}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <span>
                    Página{' '}
                    <strong>
                        {pageIndex + 1} de {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Vá para a página:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(pageNumber);
                        }}
                        style={{ width: '50px' }}
                    ></input>
                </span>
                <button className="go" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button className="previous" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Anterior
                </button>
                <button className="next" onClick={() => nextPage()} disabled={!canNextPage}>
                    Próxima
                </button>
                <button className="go" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
            </div>
            <style jsx>{`
table {
    font-family: Raleway, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

table td,
table th {
    border: 1px solid #ddd;
    padding: 8px;
}
table thead th span {
    cursor: pointer;
}

table tr:nth-child(even) {
    background-color: #f7f7f7;
}

table tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.89);
}

table tr {
    background-color: #ececec;
}

table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #ffffffd7;
    color: rgb(0, 0, 0);
}

.pagination {
    right: 50px;
    padding: 10px;
    background-color: #f7f7f74f;
    border-radius: 0px 0px 18px 18px;
}
.pagination {
    flex-direction: row;
    position: flex;
    justify-content: flex-end;
}
.search {
    padding: 10px;
    font-weight: bold;
    border-radius: 18px 18px 0px 0px;
}
.search input {
    border: 1px solid rgb(0, 0, 0);
}

.global {
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
    margin: 0.8rem 1rem;
}

.previous,
.next {
    width: 80px;
}

.go {
    width: 30px;
}

            `}</style>
        </div>
    );
};

export default SortTable;