import { TouchableOpacityProps } from "react-native";

export type TButtonStyleProps = "SUCCESS" | "DANGER";

export interface IContainerProps {
    type?: TButtonStyleProps;
}

export interface IButtonProps extends TouchableOpacityProps {
    title: string;
    type?: TButtonStyleProps;
}
