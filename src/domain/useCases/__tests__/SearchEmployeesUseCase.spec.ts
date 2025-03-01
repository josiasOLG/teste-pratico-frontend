import { SearchEmployeesUseCase } from '@/domain/useCases/SearchEmployeesUseCase';
import { IEmployeeRepository } from '@/domain/repositories/IEmployeeRepository';
import { Employee } from '@/domain/schemas/EmployeeSchema';

describe('SearchEmployeesUseCase', () => {
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

  let mockEmployeeRepository: IEmployeeRepository;
  let searchEmployeesUseCase: SearchEmployeesUseCase;

  beforeEach(() => {
    mockEmployeeRepository = {
      getEmployees: jest.fn().mockResolvedValue(mockEmployees),
      searchEmployees: jest.fn().mockResolvedValue([]),
    };
    searchEmployeesUseCase = new SearchEmployeesUseCase(mockEmployeeRepository);
  });

  it('should return all employees when query is empty or blank', async () => {
    const result = await searchEmployeesUseCase.execute('');
    expect(mockEmployeeRepository.getEmployees).toHaveBeenCalled();
    expect(result).toEqual(mockEmployees);

    (mockEmployeeRepository.getEmployees as jest.Mock).mockClear();

    const resultSpaces = await searchEmployeesUseCase.execute('  ');
    expect(mockEmployeeRepository.getEmployees).toHaveBeenCalled();
    expect(resultSpaces).toEqual(mockEmployees);
  });

  it('should search employees with the given query when it is not empty', async () => {
    (mockEmployeeRepository.searchEmployees as jest.Mock).mockResolvedValue([
      mockEmployees[0],
    ]);

    const result = await searchEmployeesUseCase.execute('Alice');
    expect(mockEmployeeRepository.searchEmployees).toHaveBeenCalledWith(
      'Alice'
    );
    expect(result).toEqual([mockEmployees[0]]);
  });
});
