import { HStack, UIProvider } from '@yamada-ui/react';
import React, { useState } from 'react';
import ManifestCodeArea from '../Component/ManifestCodeArea';
import ParameterTabs from '../Component/ParameterTabs';


const App: React.FC = () => {
    const [sharedValue, setSharedValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSharedValue(event.target.value);
    };

    return (
        <UIProvider>
        <HStack align="start">
            <ManifestCodeArea sharedValue={sharedValue} />
            <ParameterTabs sharedValue={sharedValue} onInputChange={handleInputChange} />
        </HStack>
        </UIProvider>
    );
};

export default App;