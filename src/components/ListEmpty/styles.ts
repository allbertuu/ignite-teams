import styled from "styled-components/native";
import { Warning as WarningIcon } from "phosphor-react-native";

export const Container = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(WarningIcon).attrs(({ theme }) => ({
    color: theme.COLORS.RED,
    size: 50,
}))`
    margin-bottom: 6px;
`;
