import { Input, Text, UIProvider } from '@yamada-ui/react';

interface Props {
  parameterName: string;
  defaultString?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextForm: React.FC<Props> = ({ parameterName, defaultString="", value, onChange}) => {
  return (
    <UIProvider>
      <Text fontSize="2xl" as="b">
        {parameterName}
      </Text>
      <Input defaultValue={defaultString} value={value} onChange={onChange} />
    </UIProvider>
  );
}

export default TextForm;
