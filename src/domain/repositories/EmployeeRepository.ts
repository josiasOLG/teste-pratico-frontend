import api from '@/infrastructure/services/http-client/api';
import { Employee, EmployeeSchema } from '@/domain/schemas/EmployeeSchema';

export class EmployeeRepository {
  async getEmployees(): Promise<Employee[]> {
    const response = await api.get('/employees');
    return EmployeeSchema.array().parse(response.data);
  }

  async searchEmployees(query: string): Promise<Employee[]> {
    const normalizedQuery = encodeURIComponent(query.trim());
    const response = await api.get('/employees', {
      params: { name: normalizedQuery },
    });
    console.log('URL chamada:', response.config.url);
    console.log('Dados retornados:', response.data);
    return EmployeeSchema.array().parse(response.data);
  }
}
