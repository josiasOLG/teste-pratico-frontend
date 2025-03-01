import { Employee } from '@/domain/schemas/EmployeeSchema';
import { Card, CardContent } from '@/components/atoms/Card';
import { ImageThumb } from '@/components/atoms/ImageThumb';
import { Text } from '@/components/atoms/Text';

export const EmployeeCard = ({ employee }: { employee: Employee }) => (
  <Card>
    <CardContent>
      <ImageThumb src={employee.image} alt={employee.name} />
      <Text>Nome: {employee.name}</Text>
      <Text>Cargo: {employee.job}</Text>
      <Text>
        Admissão: {new Date(employee.admission_date).toLocaleDateString()}
      </Text>
      <Text>Telefone: {employee.phone}</Text>
    </CardContent>
  </Card>
);
