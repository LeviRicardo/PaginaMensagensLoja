import * as S from './styles'

function TextInput({name}) {
    return(
        <S.Wrapper>
            <input placeholder={name}></input>
        </S.Wrapper>
    )
}


export default TextInput