import { ColorPicker, Text, UIProvider, VStack } from '@yamada-ui/react';

interface Props{
  parameterName: string, 
  value: string
  onChange: (value: string) => void;
}

const ColorSelector: React.FC<Props> = ({parameterName, value, onChange}) => {
  return (
    <UIProvider>
      <VStack rounded="4">
        <Text fontSize="2xl" as="b">
          {parameterName}
        </Text>
        <ColorPicker format='rgba' value={value}  onChange={onChange} />
      </VStack>
    </UIProvider>
  );
}

export default ColorSelector;
