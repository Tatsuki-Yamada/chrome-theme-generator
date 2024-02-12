import { Layer, Rect, Stage } from "react-konva";

interface ThemeCanvasProps {
    color_frame: string;
    color_toolbar: string;
    color_button_background: string;
}

const rgbaToHex = (rgba: string): string => {
    const rgbaValues = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*\d+(?:\.\d+)?)?\)$/);
    if (!rgbaValues) {
      return "white"
    }
    const r = parseInt(rgbaValues[1],  10).toString(16).padStart(2, '0');
    const g = parseInt(rgbaValues[2],  10).toString(16).padStart(2, '0');
    const b = parseInt(rgbaValues[3],  10).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
};

  const extractAlphaFromRGBA = (rgba: string): number => {
    const rgbaValues = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))\)$/);
    if (!rgbaValues || !rgbaValues[4]) {
      return 1;
    }
    return parseFloat(rgbaValues[4]);
  };

const ThemeCanvas: React.FC<ThemeCanvasProps> = ({color_frame, color_toolbar, color_button_background}) => {
    return <Stage width={400} height={500}>
        <Layer>
          {/*外枠*/}
        <Rect stroke='gray' strokeWidth={1} x={25} y={25} width={300} height={400} />
          {/*Frame*/}
        <Rect fill={rgbaToHex(color_frame)} opacity={extractAlphaFromRGBA(color_frame)} x={25} y={25} width={300} height={20} />
        
          {/*toolbar*/}
        <Rect fill={rgbaToHex(color_toolbar)} opacity={extractAlphaFromRGBA(color_toolbar)} x={75} y={25} width={25} height={20} />
        <Rect fill={rgbaToHex(color_toolbar)} opacity={extractAlphaFromRGBA(color_toolbar)} x={25} y={45} width={300} height={35} />

          {/*button_background*/}
        <Rect fill={rgbaToHex(color_button_background)} opacity={extractAlphaFromRGBA(color_button_background)} x={250} y={25} width={75} height={20} />

          {/*検索窓*/}
        <Rect fill="gray" opacity={extractAlphaFromRGBA(color_frame)} x={65} y={48} width={200} height={15} />

        </Layer>
    </Stage>;
};

export default ThemeCanvas;