import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmployeeListTemplate from '../EmployeeListTemplate';
import { useEmployeeContext } from '../../../../infrastructure/providers/EmployeeProvider';

jest.mock('../../../../infrastructure/providers/EmployeeProvider');

describe('EmployeeListTemplate', () => {
  const mockEmployees = [
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
  ];

  beforeEach(() => {
    (useEmployeeContext as jest.Mock).mockReturnValue({
      filteredEmployees: mockEmployees,
      search: '',
      setSearch: jest.fn(),
    });
  });

  it('should render title and search bar', () => {
    render(<EmployeeListTemplate />);
    expect(screen.getByText('Funcionários')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render employees from context', () => {
    render(<EmployeeListTemplate />);
    expect(screen.getAllByText('Alice Silva')).toHaveLength(2);
    expect(screen.getAllByText('Bruno Souza')).toHaveLength(2);
  });

  it('should call setSearch when typing in search bar', () => {
    const setSearchMock = jest.fn();
    (useEmployeeContext as jest.Mock).mockReturnValue({
      filteredEmployees: mockEmployees,
      search: '',
      setSearch: setSearchMock,
    });

    render(<EmployeeListTemplate />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Carlos' } });

    expect(setSearchMock).toHaveBeenCalledWith('Carlos');
  });
});
