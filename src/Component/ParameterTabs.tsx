import { Tab, TabPanel, Tabs, UIProvider } from '@yamada-ui/react';
import ColorTab from './ColorTab';
import PropertyTab from './PropertyTab';

interface ParameterTabsProps {
  name: string;
  color_background_tab: string
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onColorBackgroundTabChange: (value: string) => void;
}

const ParameterTabs: React.FC<ParameterTabsProps> = ({name, color_background_tab, onNameChange, onColorBackgroundTabChange}) => {
  return (
    <UIProvider>
      <Tabs>
        <Tab>Property</Tab>
        <Tab>Color</Tab>

        <TabPanel>
          <PropertyTab name={name} onInputChange={onNameChange} />
        </TabPanel>

        <TabPanel>
          <ColorTab color_background_tab={color_background_tab} onInputChange={onColorBackgroundTabChange} />
        </TabPanel>
      </Tabs>
    </UIProvider>
  );
};

export default ParameterTabs;