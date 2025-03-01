'use client';

import { Employee } from '@/domain/schemas/EmployeeSchema';

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="hidden md:table-header-group">
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4">FOTO</th>
            <th className="py-3 px-4">NOME</th>
            <th className="py-3 px-4">CARGO</th>
            <th className="py-3 px-4">DATA DE ADMISSÃO</th>
            <th className="py-3 px-4">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-t hover:bg-gray-100 flex flex-col md:table-row"
            >
              <td className="py-3 px-4 flex items-center md:table-cell">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="md:hidden ml-2 font-semibold">
                  {employee.name}
                </span>
              </td>

              <td className="py-3 px-4 md:table-cell">
                <span className="block md:hidden font-semibold">Nome:</span>
                {employee.name}
              </td>

              <td className="py-3 px-4 md:table-cell">
                <span className="block md:hidden font-semibold">Cargo:</span>
                {employee.job}
              </td>

              <td className="py-3 px-4 md:table-cell">
                <span className="block md:hidden font-semibold">
                  Data de Admissão:
                </span>
                {new Date(employee.admission_date).toLocaleDateString()}
              </td>

              <td className="py-3 px-4 md:table-cell">
                <span className="block md:hidden font-semibold">Telefone:</span>
                {employee.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
