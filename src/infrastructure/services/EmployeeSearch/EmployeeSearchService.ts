import { Employee } from '@/domain/entities/Employee';

export class EmployeeSearchService {
  static filterEmployees(employees: Employee[], query: string): Employee[] {
    const normalizedQuery = query
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return employees.filter((employee) => {
      const normalizedName = employee.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      const normalizedJob = employee.job
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      const normalizedPhone = employee.phone
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      return (
        normalizedName.includes(normalizedQuery) ||
        normalizedJob.includes(normalizedQuery) ||
        normalizedPhone.includes(normalizedQuery)
      );
    });
  }
}
