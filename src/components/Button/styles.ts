import theme from "@theme/index";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { IContainerProps } from "./types";

const COLORS = {
    SUCCESS: theme.COLORS.GREEN_700,
    DANGER: theme.COLORS.RED_DARK,
};

const DEFAULT_COLOR = COLORS["SUCCESS"];

export const Container = styled(TouchableOpacity)<IContainerProps>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ type }) => {
        if (!type) return DEFAULT_COLOR;
        return COLORS[type];
    }};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
