import { UIProvider, VStack } from '@yamada-ui/react';
import { ColorPicker } from '@yamada-ui/react';
import { Text } from '@yamada-ui/react';

interface Props{
  parameterName: string, 
}

const ColorSelector: React.FC<Props> = ({parameterName}) => {
  return (
    <UIProvider>
      <VStack rounded="4">
        <Text fontSize="2xl" as="b">
          {parameterName}
        </Text>
        <ColorPicker format='rgba' />
      </VStack>
    </UIProvider>
  );
}

export default ColorSelector;
