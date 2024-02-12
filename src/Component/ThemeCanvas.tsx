import { Layer, Rect, Stage } from "react-konva";

interface ThemeCanvasProps {
    color_background_tab: string;
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

const ThemeCanvas: React.FC<ThemeCanvasProps> = ({color_background_tab}) => {
    return <Stage width={400} height={500}>
        <Layer>
        <Rect stroke='black' strokeWidth={4} x={5} y={5} width={350} height={490} />
        <Rect stroke='gray' strokeWidth={1} x={25} y={25} width={300} height={400} />
        <Rect fill={rgbaToHex(color_background_tab)} opacity={extractAlphaFromRGBA(color_background_tab)} x={25} y={25} width={300} height={20} />
        <Rect fill="red" opacity={extractAlphaFromRGBA(color_background_tab)} x={25} y={45} width={300} height={35} />
        <Rect fill="gray" opacity={extractAlphaFromRGBA(color_background_tab)} x={65} y={48} width={200} height={15} />

        
        </Layer>
    </Stage>;
};

export default ThemeCanvas;