import { HStack, UIProvider } from '@yamada-ui/react';
import React, { useState } from 'react';
import ManifestCodeArea from '../Component/ManifestCodeArea';
import ParameterTabs from '../Component/ParameterTabs';
import ThemeCanvas from '../Component/ThemeCanvas';


const App: React.FC = () => {
    const [name, setName] = useState('');
    const [color_background_tab, setColorBackgroundTab] = useState("")

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const onColorBackgroundTabChange = (value: string) => {
        setColorBackgroundTab(value);
    };

    return (
        <UIProvider>
        <HStack align="start">
            <ThemeCanvas color_background_tab={color_background_tab}/>
            <ManifestCodeArea name={name} color_background_tab={color_background_tab}/>
            <ParameterTabs name={name} color_background_tab={color_background_tab} onNameChange={onNameChange} onColorBackgroundTabChange={onColorBackgroundTabChange} />
        </HStack>
        </UIProvider>
    );
};

export default App;