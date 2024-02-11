import { Text, Textarea, UIProvider, VStack } from '@yamada-ui/react';

interface CodeAreaProps {
  parameterName: string;
  sharedValue: string;
}

const CodeArea: React.FC<CodeAreaProps> = ({ parameterName, sharedValue }) => {
  return (
    <UIProvider>
      <VStack>
        <Text fontSize="2xl" as="b">
          {parameterName}
        </Text>
        <Textarea autosize value={sharedValue}></Textarea>
      </VStack>
    </UIProvider>
  );
};

export default CodeArea;