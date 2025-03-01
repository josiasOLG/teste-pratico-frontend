import { Employee } from '@/domain/schemas/EmployeeSchema';

export interface IEmployeeRepository {
  getEmployees(): Promise<Employee[]>;
  searchEmployees(query: string): Promise<Employee[]>;
}
