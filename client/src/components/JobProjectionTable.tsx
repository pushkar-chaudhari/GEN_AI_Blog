import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface JobProjection {
  category: string;
  impact: string;
  change: string;
  isPositive: boolean;
}

interface JobProjectionTableProps {
  projections: JobProjection[];
}

export default function JobProjectionTable({ projections }: JobProjectionTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table data-testid="table-job-projections">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold" data-testid="header-category">Job Category</TableHead>
            <TableHead className="font-semibold" data-testid="header-impact">AI Impact</TableHead>
            <TableHead className="font-semibold text-right" data-testid="header-change">Projected Net Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projections.map((projection, index) => (
            <TableRow key={index} data-testid={`row-projection-${index}`}>
              <TableCell className="font-medium" data-testid={`cell-category-${index}`}>
                {projection.category}
              </TableCell>
              <TableCell className="text-muted-foreground" data-testid={`cell-impact-${index}`}>
                {projection.impact}
              </TableCell>
              <TableCell 
                className={`text-right font-semibold ${
                  projection.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}
                data-testid={`cell-change-${index}`}
              >
                {projection.change}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
