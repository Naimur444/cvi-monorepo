import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function DataTable({ columns, data }) {
  return (
    <div className="overflow-x-auto shadow-sm rounded-lg border">
      <Table>
        {/* Table Header */}
        <TableHeader className="bg-gray-100">
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className="px-4 py-3 text-gray-600 font-semibold text-xs uppercase"
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <TableRow key={i} className="border-b">
                {columns.map((col) => (
                  <TableCell key={col.key} className="px-4 py-3 text-gray-700">
                    {/* If cell is a function, call it to render custom element */}
                    {typeof col.render === "function"
                      ? col.render(row[col.key], row)
                      : row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-4">
                No data found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
