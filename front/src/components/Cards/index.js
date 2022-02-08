import * as S from './styles'

function Card({nome, mensagem, date}) {
    return(
        <S.Wrapper>
                <p>
                    {nome}
                </p>
                <p>
                    {mensagem}
                </p>
                <span>{date}</span>
        </S.Wrapper>
    )
}

export default Card