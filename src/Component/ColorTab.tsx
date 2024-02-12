import { Spacer, UIProvider, VStack } from '@yamada-ui/react';
import ColorSelector from '../Base/ColorSelector';

interface PropertyTabProps {
  color_background_tab: string
  onInputChange: (value: string) => void;
}

const ColorTab: React.FC<PropertyTabProps> = ({color_background_tab, onInputChange }) => {
  return (
    <UIProvider>
      <VStack divider={<Spacer />}>
        <ColorSelector parameterName='background_tab' value={color_background_tab} onChange={onInputChange}/>


        {/* <ColorSelector parameterName='background_tab_inactive' />
        <ColorSelector parameterName='background_tab_incognito' />
        <ColorSelector parameterName='background_tab_incognito_inactive' />
        <ColorSelector parameterName='bookmark_text' />
        <ColorSelector parameterName='frame' />
        <ColorSelector parameterName='frame_inactive' />
        <ColorSelector parameterName='frame_incognito' />
        <ColorSelector parameterName='frame_incognito_inactive' />
        <ColorSelector parameterName='ntp_background' />
        <ColorSelector parameterName='ntp_link' />
        <ColorSelector parameterName='ntp_text' />
        <ColorSelector parameterName='omnibox_background' />
        <ColorSelector parameterName='omnibox_text' />
        <ColorSelector parameterName='tab_background_text' />
        <ColorSelector parameterName='tab_background_text_inactive' />
        <ColorSelector parameterName='tab_background_text_incognito' />
        <ColorSelector parameterName='tab_background_text_incognito_inactive' />
        <ColorSelector parameterName='tab_text' />
        <ColorSelector parameterName='toolbar' />
        <ColorSelector parameterName='toolbar_button_icon' />
        <ColorSelector parameterName='toolbar_text' /> */}
      </VStack>
    </UIProvider>
  );
}

export default ColorTab;
