import React from "react";
import MUIDataTable from "mui-datatables";

interface Datas {
    data: string[] | null;
}

interface DataTableProps {
    options: object;
    columns: string[];
    data: any;
    title?: string;
}
const MuiDatatables: React.FC<DataTableProps> = ({ title, options, columns, data }: DataTableProps) => {
    return (
        <>
            <MUIDataTable title={title} data={data} columns={columns} options={options} />
        </>
    );
};

export default MuiDatatables;
