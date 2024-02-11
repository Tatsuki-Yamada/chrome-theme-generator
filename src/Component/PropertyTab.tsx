import { UIProvider, VStack } from '@yamada-ui/react';
import TextForm from '../Base/TextForm';

interface PropertyTabProps {
  sharedValue: string
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PropertyTab: React.FC<PropertyTabProps> = ({sharedValue, onInputChange }) => {
  return (
    <UIProvider>
      <VStack>
      <TextForm
        parameterName='name'
        defaultString='custom-theme'
        value={sharedValue}
        onChange={onInputChange}
      />
      <TextForm
        parameterName='hoge'
        defaultString='custom-theme'
        value={sharedValue}
        onChange={onInputChange}
      />
      </VStack>
    </UIProvider>
  );
};

export default PropertyTab;