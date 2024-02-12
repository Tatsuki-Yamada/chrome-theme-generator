import { Tab, TabPanel, Tabs, UIProvider } from '@yamada-ui/react';
import ColorTab from './ColorTab';
import PropertyTab from './PropertyTab';

interface ParameterTabsProps {
  name: string;
  color_frame: string
  color_toolbar: string
  color_button_background: string
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onColorBackgroundTabChange: (value: string) => void;
  onToolbarChange: (value: string) => void;
  onButonBackgroundChange: (value: string) => void;

}

const ParameterTabs: React.FC<ParameterTabsProps> = ({name, color_frame, color_toolbar, color_button_background, onNameChange, onColorBackgroundTabChange, onToolbarChange, onButonBackgroundChange}) => {
  return (
    <UIProvider>
      <Tabs>
        <Tab>Property</Tab>
        <Tab>Color</Tab>

        <TabPanel>
          <PropertyTab name={name} onInputChange={onNameChange} />
        </TabPanel>

        <TabPanel>
          <ColorTab color_frame={color_frame} color_toolbar={color_toolbar} color_button_background={color_button_background} onInputChange={onColorBackgroundTabChange} onToolbarChange={onToolbarChange} onButonBackgroundChange={onButonBackgroundChange} />
        </TabPanel>
      </Tabs>
    </UIProvider>
  );
};

export default ParameterTabs;