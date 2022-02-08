import * as S from './styles'

function Botao({click}) {
    return (
        <S.Wrapper onClick={click}>
                <div>
                    ENVIAR
                </div>
        </S.Wrapper>
    )
}

export default Botao