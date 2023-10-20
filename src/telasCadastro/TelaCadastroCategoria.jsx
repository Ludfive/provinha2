import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategorias from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import { useState } from "react";

export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        id: '',
        nome: '',
        descricao: '',
        organico: 'não orgânico',
        ativa: true,
        dataCriacao: new Date(),
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadCategorias 
                                            setExibirFormulario={setExibirFormulario} 
                                            setCategoriaParaEdicao={setCategoriaParaEdicao}
                                            categoriaParaEdicao={categoriaParaEdicao}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                                        /> 
                                    : <TabelaCategorias 
                                            setExibirFormulario={setExibirFormulario} 
                                            categoriaParaEdicao={categoriaParaEdicao}
                                            setCategoriaParaEdicao={setCategoriaParaEdicao}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                                    />
                }
            </Pagina>
        </Container>
    )
}