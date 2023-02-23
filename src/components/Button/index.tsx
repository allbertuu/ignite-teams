import * as S from "./styles";
import { IButtonProps } from "./types";

export function Button({ title, type, ...props }: IButtonProps) {
    return (
        <S.Container type={type} {...props}>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
}
