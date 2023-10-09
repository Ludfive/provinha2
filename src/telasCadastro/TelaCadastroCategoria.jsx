import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategorias from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import { useState } from "react";

export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCategorias, setListaCategorias] = useState([]);
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
                                            listaCategorias={listaCategorias}
                                            setListaCategorias={setListaCategorias}
                                            setCategoriaParaEdicao={setCategoriaParaEdicao}
                                            categoriaParaEdicao={categoriaParaEdicao}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                                        /> 
                                    : <TabelaCategorias 
                                            setExibirFormulario={setExibirFormulario} 
                                            listaCategorias={listaCategorias}
                                            setListaCategorias={setListaCategorias}
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