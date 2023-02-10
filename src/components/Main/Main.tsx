import { Container, Header, Linha,SegundaLinha, PerguntaInput, Resposta, SubmitButton, PerguntaFeita } from "./Main.styles";
import { useState } from "react";
import sendRequest from "../../services/api";
import {FiSend} from "react-icons/fi"

interface MainProps {
    resultado: String,
    input: String,

}

export function Main(){

    const [input, setInput] = useState('');
    const [escrevendo, setEscrevendo] = useState(false);

    const [respostas, setRespostas] = useState<Array<{ input: string, resultado: string }>>([]);

    const SendQuestion = async () =>{
        setEscrevendo(true)
        const result = await sendRequest(input);
        const data = [ input, result.choices[0].text ];
        setRespostas([...respostas, data])
        setInput('')
        setEscrevendo(false)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          SendQuestion();
        }
      };



    return(
        <Container>
            <Header>
                <img src="https://raw.githubusercontent.com/AOdachowoski/API_CHAT_GPT/a498cac76876450e71d87c84e026e5fc9a77e96c/img/chatgpt-icon.svg" alt="chat gpt icon" />
                <div>
                    <label> Chat GPT</label>
                        <p>{escrevendo ? "escrevendo" : 'online'}</p>
                </div>
            </Header>
                <Linha>
                {respostas.map((valor : any, index)=>{
                    return(<div key={index}>
                            <PerguntaFeita>
                                {valor[0]}
                            </PerguntaFeita>

                            <Resposta>
                                {valor[1] ? valor[1] : "nada"}
                            </Resposta>
                            </div>
                    )
                })}
                
                </Linha>
                    <SegundaLinha>
                        <PerguntaInput
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Mensagem"
                        disabled={escrevendo}
                        />
                        <SubmitButton onClick={SendQuestion}><FiSend/></SubmitButton>
                    </SegundaLinha>
        </Container>
    )
}