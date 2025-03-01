import { GetEmployeesUseCase } from '@/domain/useCases/GetEmployeesUseCase';
import { IEmployeeRepository } from '@/domain/repositories/IEmployeeRepository';
import { Employee } from '@/domain/schemas/EmployeeSchema';

describe('GetEmployeesUseCase', () => {
  it('should get employees from the repository', async () => {
    const mockEmployees: Employee[] = [
      {
        id: '1',
        name: 'Alice Silva',
        job: 'Developer',
        phone: '123-456-7890',
        admission_date: '2021-10-01',
        image: 'alice.jpg',
      },
      {
        id: '2',
        name: 'Bruno Souza',
        job: 'Designer',
        phone: '987-654-3210',
        admission_date: '2022-01-10',
        image: 'bruno.jpg',
      },
    ];

    const mockEmployeeRepository: IEmployeeRepository = {
      getEmployees: jest.fn().mockResolvedValue(mockEmployees),
      searchEmployees: jest.fn().mockResolvedValue(mockEmployees),
    };

    const getEmployeesUseCase = new GetEmployeesUseCase(mockEmployeeRepository);

    const result = await getEmployeesUseCase.execute();

    expect(mockEmployeeRepository.getEmployees).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockEmployees);
  });
});
