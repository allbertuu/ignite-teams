import * as S from "./styles";

import logoImg from "@assets/logo.png";
import { IHeaderProps } from "./types";

export function Header({ showBackButton = false }: IHeaderProps) {
    return (
        <S.Container>
            {showBackButton && (
                <S.BackButton>
                    <S.BackIcon />
                </S.BackButton>
            )}
            <S.Logo source={logoImg} />
        </S.Container>
    );
}
