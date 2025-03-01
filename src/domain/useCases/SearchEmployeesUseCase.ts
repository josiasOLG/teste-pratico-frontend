import { IEmployeeRepository } from '@/domain/repositories/IEmployeeRepository';
import { Employee } from '@/domain/schemas/EmployeeSchema';

export class SearchEmployeesUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute(query: string): Promise<Employee[]> {
    if (!query.trim()) {
      return this.employeeRepository.getEmployees();
    }
    return await this.employeeRepository.searchEmployees(query);
  }
}
