import { Spacer, UIProvider, VStack } from '@yamada-ui/react';
import ColorSelector from '../Base/ColorSelector';

interface PropertyTabProps {
  color_frame: string
  color_toolbar: string
  color_button_background: string
  onInputChange: (value: string) => void;
  onToolbarChange: (value: string) => void;
  onButonBackgroundChange: (value: string) => void;
}

const ColorTab: React.FC<PropertyTabProps> = ({color_frame, color_toolbar, color_button_background, onInputChange, onToolbarChange, onButonBackgroundChange }) => {
  return (
    <UIProvider>
      <VStack divider={<Spacer />}>
        <ColorSelector parameterName='frame' value={color_frame} onChange={onInputChange}/>
        <ColorSelector parameterName='toolbar' value={color_toolbar} onChange={onToolbarChange}/>
        <ColorSelector parameterName='button_background' value={color_button_background} onChange={onButonBackgroundChange}/>

        {/* <ColorSelector parameterName='frame_inactive' />
        <ColorSelector parameterName='frame_incognito' />
        <ColorSelector parameterName='frame_incognito_inactive' />
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
