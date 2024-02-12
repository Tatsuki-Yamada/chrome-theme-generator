import { Text, Textarea, UIProvider, VStack } from '@yamada-ui/react';

interface CodeAreaProps {
  parameterName: string;
  valueText: string;
}

const CodeArea: React.FC<CodeAreaProps> = ({ parameterName, valueText }) => {
  return (
    <UIProvider>
      <VStack>
        <Text fontSize="2xl" as="b">
          {parameterName}
        </Text>
        <Textarea autosize value={valueText}></Textarea>
      </VStack>
    </UIProvider>
  );
};

export default CodeArea;