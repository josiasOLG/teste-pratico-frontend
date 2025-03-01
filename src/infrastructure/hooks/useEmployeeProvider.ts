'use client';

import { useEffect, useState } from 'react';
import { Employee } from '@/domain/entities/Employee';
import { GetEmployeesUseCase } from '@/domain/useCases/GetEmployeesUseCase';
import { EmployeeRepository } from '@/domain/repositories/EmployeeRepository';
import { EmployeeSearchService } from '@/infrastructure/services/EmployeeSearch/EmployeeSearchService';

export const useEmployeeProvider = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState('');

  const employeeRepository = new EmployeeRepository();
  const getEmployeesUseCase = new GetEmployeesUseCase(employeeRepository);

  useEffect(() => {
    const fetchEmployees = async () => {
      const allEmployees = await getEmployeesUseCase.execute();
      setEmployees(allEmployees);
      setFilteredEmployees(allEmployees);
    };
    fetchEmployees();
  }, []);

  useEffect(() => {
    if (search.trim().length > 0) {
      const filtered = EmployeeSearchService.filterEmployees(employees, search);
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  }, [search, employees]);

  return {
    employees,
    filteredEmployees,
    search,
    setSearch,
  };
};
