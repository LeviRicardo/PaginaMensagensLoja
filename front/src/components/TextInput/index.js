import * as S from './styles'

function TextInput({name, valores}) {
    return(
        <S.Wrapper placeholder={name} onChange={valores}/>
    )
}


export default TextInput