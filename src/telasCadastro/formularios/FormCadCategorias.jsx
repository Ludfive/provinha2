import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

export default function FormCadCategorias(props) {
    const categoriaVazia = {
        id: '',
        nome: '',
        descricao: '',
        organico: 'não orgânico',
        ativa: true,
        dataCriacao: new Date(),
    };

    const estadoInicialCategoria = props.categoriaParaEdicao;
    const [categoria, setCategoria] = useState(estadoInicialCategoria);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(evento) {
        const componente = evento.currentTarget;
        const valor = componente.type === 'checkbox' ? componente.checked : componente.value;
        setCategoria({ ...categoria, [componente.name]: valor });
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaCategorias([...props.listaCategorias, categoria]);
                alert("Categoria cadastrada com sucesso!");
            } else {
                props.setListaCategorias([
                    ...props.listaCategorias.filter((itemCategoria) => itemCategoria.id !== categoria.id),
                    categoria
                ]);
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazia);
                alert("Categoria alterada com sucesso!");
            }
            props.setExibirFormulario(false);
            setCategoria(categoriaVazia);
            setFormValidado(false);
        } else {
            setFormValidado(true);
        }

        evento.stopPropagation();
        evento.preventDefault();
    }

    return (
        <Container style={{marginTop: '20px'}}>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="ID:"
                                className="mb-3">
                                <Form.Control type="text" placeholder="ID da categoria" id="id" name="id" required value={categoria.id} onChange={manipularMudancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o ID!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Nome da categoria" id="nome" name="nome" required value={categoria.nome} onChange={manipularMudancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Descrição:"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="Descrição da categoria" id="descricao" name="descricao" required value={categoria.descricao} onChange={manipularMudancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <FloatingLabel controlId="floatingSelect" label="Orgânico:">
                                <Form.Select aria-label="Orgânico" id="organico" name="organico" required value={categoria.organico} onChange={manipularMudancas}>
                                    <option value="orgânico">Orgânico</option>
                                    <option value="não orgânico">Não Orgânico</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Check
                                type="switch"
                                id="ativa"
                                name="ativa"
                                label="Ativa"
                                checked={categoria.ativa}
                                onChange={manipularMudancas}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                {/* Adicione outros campos específicos da categoria, se necessário */}
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={props.modoEdicao ? "warning":"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.setModoEdicao(false);
                            props.setCategoriaParaEdicao(categoriaVazia); 
                            props.setExibirFormulario(false)
                        }
                    }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}