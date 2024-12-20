import { Fontisto, Entypo } from '@expo/vector-icons';

const Icons = {
    User: ({ color, size, style }) => <Fontisto name="person" color={color} size={size} style={style} />,
    Locked: ({ color, size, style }) => <Fontisto name="locked" color={color} size={size} style={style} />,
    ArrowRight: ({ color, size, style }) => <Entypo name="arrow-right" color={color} size={size} style={style} />,
};

export default Icons;
