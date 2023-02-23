import * as S from "./styles";

import { IHighlightProps } from "./types";

export function Highlight({ title, subtitle }: IHighlightProps) {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>

            <S.SubTitle>{subtitle}</S.SubTitle>
        </S.Container>
    );
}
