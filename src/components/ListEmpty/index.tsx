import * as S from "./styles";

import { IListEmptyProps } from "./types";

export function ListEmpty({ message }: IListEmptyProps) {
    return (
        <S.Container>
            <S.Icon />
            <S.Message>{message}</S.Message>
        </S.Container>
    );
}
