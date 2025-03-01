import { renderHook, act } from '@testing-library/react';
import { useEmployeeProvider } from '@/infrastructure/hooks/useEmployeeProvider';
import { Employee } from '@/domain/entities/Employee';
import { GetEmployeesUseCase } from '@/domain/useCases/GetEmployeesUseCase';
import { EmployeeRepository } from '@/domain/repositories/EmployeeRepository';
import { EmployeeSearchService } from '@/infrastructure/services/EmployeeSearch/EmployeeSearchService';

jest.mock('@/domain/useCases/GetEmployeesUseCase');
jest.mock('@/domain/repositories/EmployeeRepository');
jest.mock('@/infrastructure/services/EmployeeSearch/EmployeeSearchService');

describe('useEmployeeProvider', () => {
  const mockEmployees: Employee[] = [
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
  ];

  beforeEach(() => {
    (EmployeeRepository as jest.Mock).mockImplementation(() => ({
      getEmployees: jest.fn().mockResolvedValue(mockEmployees),
    }));
    (GetEmployeesUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(mockEmployees),
    }));
    (EmployeeSearchService.filterEmployees as jest.Mock).mockImplementation(
      (employees: Employee[], query: string) =>
        employees.filter((emp: Employee) =>
          emp.name.toLowerCase().includes(query.toLowerCase())
        )
    );
  });

  it('should fetch employees on mount', async () => {
    const { result } = renderHook(() => useEmployeeProvider());
    await act(async () => {});
    expect(result.current.employees).toEqual(mockEmployees);
    expect(result.current.filteredEmployees).toEqual(mockEmployees);
  });

  it('should update search state', async () => {
    const { result } = renderHook(() => useEmployeeProvider());
    await act(async () => {});
    act(() => {
      result.current.setSearch('Alice');
    });
    expect(result.current.search).toBe('Alice');
  });

  it('should filter employees based on search query', async () => {
    const { result } = renderHook(() => useEmployeeProvider());
    await act(async () => {});
    act(() => {
      result.current.setSearch('Alice');
    });
    expect(result.current.filteredEmployees).toHaveLength(1);
    expect(result.current.filteredEmployees[0].name).toBe('Alice Silva');
  });

  it('should reset filtered employees when search is cleared', async () => {
    const { result } = renderHook(() => useEmployeeProvider());
    await act(async () => {});
    act(() => {
      result.current.setSearch('Alice');
    });
    expect(result.current.filteredEmployees).toHaveLength(1);
    act(() => {
      result.current.setSearch('');
    });
    expect(result.current.filteredEmployees).toEqual(mockEmployees);
  });
});
