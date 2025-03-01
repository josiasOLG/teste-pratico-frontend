import { EmployeeSearchService } from '@/infrastructure/services/EmployeeSearch';
import { Employee } from '@/domain/entities/Employee';

describe('EmployeeSearchService', () => {
  const employees: Employee[] = [
    {
      id: '1',
      name: 'Alice Silva',
      job: 'Developer',
      admission_date: '2022-01-10',
      phone: '123-456-7890',
      image: 'alice.jpg',
    },
    {
      id: '2',
      name: 'Bruno Souza',
      job: 'Designer',
      admission_date: '2021-06-15',
      phone: '987-654-3210',
      image: 'bruno.jpg',
    },
    {
      id: '3',
      name: 'Carlos Pereira',
      job: 'Manager',
      admission_date: '2019-09-23',
      phone: '555-555-5555',
      image: 'carlos.jpg',
    },
    {
      id: '4',
      name: 'Diana Costa',
      job: 'HR',
      admission_date: '2020-11-30',
      phone: '444-444-4444',
      image: 'diana.jpg',
    },
  ];

  it('should filter employees by name', () => {
    const result = EmployeeSearchService.filterEmployees(employees, 'Alice');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Alice Silva');
  });

  it('should filter employees by job', () => {
    const result = EmployeeSearchService.filterEmployees(employees, 'Designer');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Bruno Souza');
  });

  it('should filter employees by phone number', () => {
    const result = EmployeeSearchService.filterEmployees(
      employees,
      '555-555-5555'
    );
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Carlos Pereira');
  });

  it('should return an empty array when no match is found', () => {
    const result = EmployeeSearchService.filterEmployees(employees, 'NotExist');
    expect(result).toHaveLength(0);
  });

  it('should be case insensitive', () => {
    const result = EmployeeSearchService.filterEmployees(employees, 'alice');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Alice Silva');
  });

  it('should handle accents properly', () => {
    const accentedEmployees: Employee[] = [
      {
        id: '5',
        name: 'José Silva',
        job: 'Analyst',
        admission_date: '2018-03-12',
        phone: '333-333-3333',
        image: 'jose.jpg',
      },
    ];
    const result = EmployeeSearchService.filterEmployees(
      accentedEmployees,
      'Jose'
    );
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('José Silva');
  });
});
