import { UIProvider, VStack } from '@yamada-ui/react';
import TextForm from '../Base/TextForm';

interface PropertyTabProps {
  name: string
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PropertyTab: React.FC<PropertyTabProps> = ({name, onInputChange }) => {
  return (
    <UIProvider>
      <VStack>
      <TextForm
        parameterName='name'
        defaultString='custom-theme'
        value={name}
        onChange={onInputChange}
      />
      <TextForm
        parameterName='hoge'
        defaultString='custom-theme'
        value={name}
        onChange={onInputChange}
      />
      </VStack>
    </UIProvider>
  );
};

export default PropertyTab;