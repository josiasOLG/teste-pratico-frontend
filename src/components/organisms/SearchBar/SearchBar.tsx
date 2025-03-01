import { Input } from '@/components/atoms/Input';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="mb-6">
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Pesquisar por nome, cargo ou telefone..."
      className="p-3 border rounded-md w-full shadow-sm"
    />
  </div>
);
