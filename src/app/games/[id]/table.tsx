import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import styled from "styled-components";

const TableContainer = styled.div`
  min-height: 400px;
  padding: 1px;
  overflow-y: scroll;

  table {
    border: 1px solid #bbb;
    border-collapse: collapse;
    border-radius: 4px;
    border-style: hidden; /* hide standard table (collapsed) border */
    box-shadow: 0 0 0 1px #bbb;
  }

  tbody {
    border-bottom: none;
  }

  & tbody td:first-child {
    position: sticky;
    left: 0px;
    background-color: white;
  }

  & tbody td {
    border-spacing: 0;
    padding: 8px;
    min-width: 80px;
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;

    &:not(:first-child) {
      text-align: right;
    }
  }

  th {
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
    padding: 8px 12px;
  }

  tr:nth-child(2) th {
    position: sticky;
    top: -2px;
    text-align: left;
    background-color: white;
    z-index: 1;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 10px 3px;

    &:not(:first-child) {
      text-align: right;
    }
  }

  tfoot {
    color: gray;
  }

  tfoot th {
    font-weight: normal;
  }
`;

function BoxScoreTable({ data }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: "Name",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "name",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
          // {
          //   accessorFn: (row) => row.lastName,
          //   id: "lastName",
          //   cell: (info) => info.getValue(),
          //   header: () => <span>Last Name</span>,
          //   footer: (props) => props.column.id,
          // },
        ],
      },
      {
        header: "Stats",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "pt",
            header: "pt",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "reb",
            header: "reb",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "ast",
            header: "ast",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "stl",
            header: "stl",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "blk",
            header: "blk",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "fgp",
            header: "fg%",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "fgm",
            header: "fgm",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "fga",
            header: "fga",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "ftp",
            header: "ft%",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "ftm",
            header: "ftm",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "fta",
            header: "fta",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "tpm",
            header: "tpm",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "tpa",
            header: "tpa",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "to",
            header: "to",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <TableContainer className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "  🔼",
                          desc: "  🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default BoxScoreTable;
