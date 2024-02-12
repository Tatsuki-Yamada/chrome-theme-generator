import { UIProvider } from '@yamada-ui/react';
import CodeArea from '../Base/CodeArea';

interface ManifestCodeAreaProps {
  name: string;
  color_background_tab: string;
}

const toFormatJSON = (str: string): string => {
  const jsonObj = JSON.parse(str)
  return JSON.stringify(jsonObj, null, 2)
}

function convertRgbaToString(rgba: string): string {
  const match = rgba.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
  if (!match) 
    return "[0, 0, 0, 0]"
  return `[${match[1]}, ${match[2]}, ${match[3]}, ${match[4]}]`;
}

const formatSharedValue = (name: string = "", color_background_tab = ""): string => {
  const jsonString = `
  {
    "manifest_version": 3,
    "version": "2.6",
    "name": "${name}", 
    "theme": {
      "colors": {
        "background_tab": ${convertRgbaToString(color_background_tab)}
      }
    }
  }`

  return (toFormatJSON(jsonString))
};

const ManifestCodeArea: React.FC<ManifestCodeAreaProps> = ({ name, color_background_tab}) => {
  const formattedValueText = formatSharedValue(name, color_background_tab)
  return (
    <UIProvider>
      <CodeArea parameterName='Manifest.json:' valueText={formattedValueText} />
    </UIProvider>
  );
};

export default ManifestCodeArea;