import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { useState } from "react";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroProduto(props) {
    const [exibirFormulario,setExibirFormulario]=useState(false);
    const [mostrarMensagem,setMostrarMensagem]=useState(false);
    const [mensagem,setMensagem]=useState("");
    const [tipoMensagem,setTipoMensagem]=useState("");
    
    const [produtoParaEdicao,setProdutoParaEdicao]=useState ({
        
        nome:'',
        id:'',
        preco:'',
        qtd:'',
        unidade:'',
        dtValidade:'',
        descricao:'',
    });
    const [modoEdicao,setModoEdicao]=useState(false);

    if(mostrarMensagem) {
        return(
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
        )
    }
    else
    {
        return(
            <Container>
                <Pagina>
                    {
                        exibirFormulario ? <FormCadProduto exibirFormulario={setExibirFormulario}
                            produtoParaEdicao={produtoParaEdicao}
                            setProdutoParaEdicao={setProdutoParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMensagem={setMensagem}
                            setMostrarMensagem={setMostrarMensagem}    
                            setTipoMensagem={setTipoMensagem}
                        />
                            :
                            <TabelaProdutos exibirFormulario={setExibirFormulario}
                                produtoParaEdicao={produtoParaEdicao}
                                setProdutoParaEdicao={setProdutoParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                            />
                    }
                </Pagina>
            </Container>
        )
    }
}

