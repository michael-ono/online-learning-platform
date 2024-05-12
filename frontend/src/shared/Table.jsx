import React from "react";
import { useMemo } from "react";
import DataTable from "react-data-table-component";
import styled, { css } from "styled-components";

const Table = ({
  data,
  columns,
  handleRowSelect,
  onRowClicked,
  className,
  selectableRowsComponent,
  selectableRows,
  progressComponent,
  progressPending,
  pointer,
  pagination,
  paginationServer,
  paginationTotalRows,
  onChangeRowsPerPage,
  onChangePage,
  border,
  tableHeader,
  selectableRowDisabled,
}) => {
  const TableData = useMemo(() => data, [data]);
  const TableColumns = useMemo(() => columns, [columns]);

  return (
    <TableWrapper
      className={className}
      pointer={pointer}
      border={border}
      tableHeader={tableHeader}
    >
      <DataTable
        columns={TableColumns}
        data={TableData}
        onSelectedRowsChange={handleRowSelect}
        selectableRowDisabled={selectableRowDisabled}
        onRowClicked={onRowClicked}
        selectableRows={selectableRows}
        selectableRowsComponent={selectableRowsComponent}
        progressPending={progressPending}
        progressComponent={progressComponent}
        pagination={pagination}
        paginationServer={paginationServer}
        paginationTotalRows={paginationTotalRows}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onChangePage={onChangePage}
      />
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.div`
  .rdt_ {
    &TableRow {
      height: 57px;
      border-bottom: 0.0852273px solid rgba(91, 91, 91, 0.4);
      border-top: 0;
      font-size: 0.8rem;
      font-weight: 600;
      color: #11192a;
      cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
      ${({ border }) =>
        !border &&
        css`
          padding: 15px;
        `};
    }
    &TableHeadRow {
      height: 55px;
      background-color: #efefef;
      border-bottom: 0;
      padding: 15px;
      font-weight: 600;
      font-size: 0.8rem;
      color: #11192a;
      ${({ border }) =>
        border &&
        css`
          border: 0.0852273px solid rgba(91, 91, 91, 0.4);
        `};
      ${({ tableheader }) =>
        tableheader &&
        css`
          background-color: #fafafa;
        `};
    }
    &TableCell {
      ${({ border }) =>
        border &&
        css`
          border-right: 0.0852273px solid rgba(91, 91, 91, 0.4);
        `};
    }
    &Pagination {
      justify-content: center;
    }
  }

  .fxSmWS {
    border: 1px solid #ffa500;
    padding: 5px 4px;
    color: #ffa500;
  }

  .fSGGmj {
    width: 100%;
    height: 20px;
  }

  #pagination-previous-page,
  #pagination-next-page {
    border-radius: 3px;
    margin: 0 3px;
    border: 1px solid #dfe3e8;
  }

  #pagination-first-page,
  #pagination-last-page {
    display: none;
  }
`;
