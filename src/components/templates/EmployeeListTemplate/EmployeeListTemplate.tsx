'use client';

import { EmployeeTable } from '@/components/organisms/EmployeeTable/EmployeeTable';
import { SearchBar } from '@/components/organisms/SearchBar/SearchBar';
import { useEmployeeContext } from '@/infrastructure/providers/EmployeeProvider';

const EmployeeListTemplate = () => {
  const { filteredEmployees, search, setSearch } = useEmployeeContext();

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-6">
        <h2 className="text-2xl font-bold col-span-12 md:col-span-4">
          Funcionários
        </h2>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
};

export default EmployeeListTemplate;
