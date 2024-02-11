import { Tab, TabPanel, Tabs, UIProvider } from '@yamada-ui/react';
import ColorTab from './ColorTab';
import PropertyTab from './PropertyTab';

interface ParameterTabsProps {
  sharedValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ParameterTabs: React.FC<ParameterTabsProps> = ({sharedValue, onInputChange }) => {
  return (
    <UIProvider>
      <Tabs>
        <Tab>Property</Tab>
        <Tab>Color</Tab>

        <TabPanel>
          <PropertyTab sharedValue={sharedValue} onInputChange={onInputChange} />
        </TabPanel>

        <TabPanel>
          <ColorTab />
        </TabPanel>
      </Tabs>
    </UIProvider>
  );
};

export default ParameterTabs;