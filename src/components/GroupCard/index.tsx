import * as S from "./styles";

import { IGroupCardProps } from "./types";

export function GroupCard({ title, ...props }: IGroupCardProps) {
    return (
        <S.Container {...props}>
            <S.Icon />
            <S.Title>{title}</S.Title>
        </S.Container>
    );
}
