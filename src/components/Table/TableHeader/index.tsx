import { TColumns } from '../../../types';
import './index.scss';

type TTableHeaderProps = {
  columns: TColumns[];
};

export const TableHeader = ({ columns }: TTableHeaderProps) => (
  <tr className="table_row_header">
    {columns.map(({ key, title }: TColumns) => {
      return (
        <th key={key} className="table_header">
          {title}
        </th>
      );
    })}
  </tr>
);
