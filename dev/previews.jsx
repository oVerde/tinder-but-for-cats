import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import HomeScreen from '../screens/HomeScreen';
import App from '../App';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree />
            </ComponentPreview>
            <ComponentPreview path="/HomeScreen">
                <HomeScreen />
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;