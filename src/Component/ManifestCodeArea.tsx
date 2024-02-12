import { UIProvider } from '@yamada-ui/react';
import CodeArea from '../Base/CodeArea';

interface ManifestCodeAreaProps {
  name: string;
  color_frame: string;
  color_toolbar: string;
  color_button_background: string;
}

const toFormatJSON = (str: string): string => {
  const jsonObj = JSON.parse(str)
  return JSON.stringify(jsonObj, null, 2)
}

function convertRgbaToString(rgba: string): string {
  const match = rgba.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
  if (!match) {
    console.log(rgba + " isinvalid")
    return "[255, 255, 255, 1]"
  }
  return `[${match[1]}, ${match[2]}, ${match[3]}, ${match[4]}]`;
}

const formatSharedValue = (name: string = "", color_frame: string = "", color_toolbar: string = "", color_button_background: string = ""): string => {
  const jsonString = `
  {
    "manifest_version": 3,
    "version": "2.6",
    "name": "${name}", 
    "theme": {
      "colors": {
        "frame": ${convertRgbaToString(color_frame)},
        "toolbar": ${convertRgbaToString(color_toolbar)},
        "button_background": ${convertRgbaToString(color_button_background)}
      }
    }
  }`

  return (toFormatJSON(jsonString))
};

const ManifestCodeArea: React.FC<ManifestCodeAreaProps> = ({ name, color_frame, color_toolbar, color_button_background}) => {
  const formattedValueText = formatSharedValue(name, color_frame, color_toolbar, color_button_background)
  return (
    <UIProvider>
      <CodeArea parameterName='Manifest.json:' valueText={formattedValueText} />
    </UIProvider>
  );
};

export default ManifestCodeArea;