import { HStack, UIProvider, VStack } from '@yamada-ui/react';
import React, { useState } from 'react';
import ManifestCodeArea from '../Component/ManifestCodeArea';
import ParameterTabs from '../Component/ParameterTabs';
import ThemeCanvas from '../Component/ThemeCanvas';


const App: React.FC = () => {
    const [name, setName] = useState('');
    const [color_frame, setColorBackgroundTab] = useState("")
    const [toolbar, setToolbar] = useState("")
    const [button_background, setButtonBackground] = useState("")


    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const onColorBackgroundTabChange = (value: string) => {
        setColorBackgroundTab(value);
    };

    const onToolbarChange = (value: string) => {
        setToolbar(value)
    }

    const onButonBackgroundChange = (value: string) => {
        setButtonBackground(value)
    }

    return (
        <UIProvider>
            <HStack align="flex-start">
                <VStack>
                    <ThemeCanvas color_frame={color_frame} color_toolbar={toolbar} color_button_background={button_background}/>
                    <ManifestCodeArea name={name} color_frame={color_frame} color_toolbar={toolbar} color_button_background={button_background}/>
                </VStack>
                    <ParameterTabs 
                        name={name} 
                        color_frame={color_frame} 
                        color_toolbar={toolbar}
                        color_button_background={button_background}
                        onNameChange={onNameChange} 
                        onColorBackgroundTabChange={onColorBackgroundTabChange}
                        onToolbarChange={onToolbarChange}
                        onButonBackgroundChange={onButonBackgroundChange}
                    />
            </HStack>
        </UIProvider>
    );
};

export default App;