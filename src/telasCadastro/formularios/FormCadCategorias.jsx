import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
export default function FormCadCategoria(props) {
    //os atributos deste objeto devem estar associados aos inputs do formulários
    const categoriaVazio = {
        codigo:'',
        nomeComercial:'',
        tipo:'',
        preco:'',
    }
    const estadoInicialCategoria = props.categoriaParaEdicao;
    const [categoria, setCategoria] = useState(estadoInicialCategoria);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setCategoria({...categoria,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            //todos os campos preenchidos
            //mandar os dados para o backend
            if(!props.modoEdicao){
                props.setListaCategoria([...props.listaCategoria,categoria]);
                props.setMensagem('Categora incluída com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            }
            else{
                //alterar os dados do categoria (filtra e adiciona)

                props.setListaCategoria([...props.listaCategoria.filter((itemCategoria)=>itemCategoria.codigo !== categoria.codigo),categoria]);
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazio);                
            }
            setCategoria(categoriaVazio); // ou sair da tela de formulário 
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="CNPJ:"
                                className="mb-3"
                            >

                                <Form.Control 
                                    type="text" 
                                    placeholder="000.000.000-00" 
                                    id="cnpj" 
                                    name="cnpj" 
                                    value={categoria.cnpj}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cnpj!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome Comercial:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nome Comercial completo" 
                                    id="nomeComercial" 
                                    name="nomeComercial" 
                                    value={categoria.nomeComercial}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nomeComercial!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                label="Tipo do produto:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="..." 
                                    id="tipo" 
                                    name="tipo" 
                                    onChange={manipularMudancas}
                                    value={categoria.tipo}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o tipo!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                label="Preco"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="number" 
                                    placeholder="Nº" 
                                    id="preco" 
                                    name="preco" 
                                    onChange={manipularMudancas}
                                    value={categoria.preco}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                        }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}