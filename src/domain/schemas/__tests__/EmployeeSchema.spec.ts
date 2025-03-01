import { EmployeeSchema } from '@/domain/schemas/EmployeeSchema';

describe('EmployeeSchema', () => {
  it('should validate a valid employee object', () => {
    const validEmployee = {
      id: '1',
      name: 'Alice Silva',
      job: 'Developer',
      admission_date: '2022-01-10',
      phone: '123-456-7890',
      image: 'https://example.com/image.jpg',
    };

    expect(() => {
      EmployeeSchema.parse(validEmployee);
    }).not.toThrow();
  });

  it('should throw an error for missing required fields', () => {
    const invalidEmployee = {
      name: 'Alice Silva',
      job: 'Developer',
      phone: '123-456-7890',
      image: 'https://example.com/image.jpg',
    };

    expect(() => {
      EmployeeSchema.parse(invalidEmployee);
    }).toThrowError();
  });

  it('should throw an error for invalid URL', () => {
    const invalidEmployee = {
      id: '1',
      name: 'Alice Silva',
      job: 'Developer',
      admission_date: '2022-01-10',
      phone: '123-456-7890',
      image: 'not-a-valid-url',
    };

    expect(() => {
      EmployeeSchema.parse(invalidEmployee);
    }).toThrowError();
  });
});
