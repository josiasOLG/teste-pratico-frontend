import { IEmployeeRepository } from '@/domain/repositories/IEmployeeRepository';
import { Employee } from '@/domain/schemas/EmployeeSchema';

export class GetEmployeesUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute(): Promise<Employee[]> {
    return await this.employeeRepository.getEmployees();
  }
}
