import { useState, Fragment, ReactNode } from 'react';
import { IPrepareData } from '../../../types';
import './index.scss';

type TTableRowProps = {
  item: IPrepareData;
  children: ReactNode;
  level: number;
};

export const TableRow = ({ item, children, level }: TTableRowProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const { id, name, email, balance, isActive, hasChildren } = item;

  const arrowRender = () =>
    isCollapsed ? <span>&#9658;</span> : <span>&#9660;</span>;

  const handlerCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Fragment key={`row-${id}`}>
      <tr
        style={{ left: `${level}px` }}
        className="table_row"
        onClick={handlerCollapsed}
      >
        <td>{name}</td>
        <td>{email}</td>
        <td>{balance}</td>
        <td>{isActive ? 'yes' : 'no'}</td>
        <td>{hasChildren && arrowRender()}</td>
      </tr>

      {!isCollapsed && children}
    </Fragment>
  );
};
