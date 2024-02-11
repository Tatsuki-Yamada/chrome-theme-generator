import { UIProvider } from '@yamada-ui/react';
import CodeArea from '../Base/CodeArea';

interface ManifestCodeAreaProps {
  sharedValue: string;
}

const ManifestCodeArea: React.FC<ManifestCodeAreaProps> = ({ sharedValue }) => {
  return (
    <UIProvider>
      <CodeArea parameterName='Manifest.json:' sharedValue={sharedValue} />
    </UIProvider>
  );
};

export default ManifestCodeArea;