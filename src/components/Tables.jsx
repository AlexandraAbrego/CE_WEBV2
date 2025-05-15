import React, { useState } from 'react';
import { Tabs, Tab, Table, Form } from 'react-bootstrap';
import CustomButton from './CustomButton';

function Tables({tabs, tabledata}) {
    const [pestañaActiva, setPestañaActiva] = useState(tabs[0].clave);
    const [busqueda, setBusqueda] = useState('');
    const [paginaActual, setPaginaActual] = useState(1);
    const entradasPorPagina = 10;

    const manejarCambioPestaña = (clave) => {
        setPestañaActiva(clave);
        setBusqueda('');
        setPaginaActual(1);
    };

    const manejarCambioBusqueda = (e) => {
        setBusqueda(e.target.value);
        setPaginaActual(1);
    };

    const datos = tabledata[pestañaActiva] || [];

    const datosFiltrados = datos.filter((fila) =>
        Object.values(fila).some((valor) =>
            valor.toString().toLowerCase().includes(busqueda.toLowerCase())
        )
    );

    const totalPaginas = Math.ceil(datosFiltrados.length / entradasPorPagina);
    const indiceInicial = (paginaActual - 1) * entradasPorPagina;
    const indiceFinal = indiceInicial + entradasPorPagina;
    const datosPaginados = datosFiltrados.slice(indiceInicial, indiceFinal);

    const manejarPaginaAnterior = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
        }
    };

    const manejarPaginaSiguiente = () => {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1);
        }
    };

    const obtenerColumnas = () => {
        if (datos.length > 0) {
            return Object.keys(datos[0]);
        }
        return [];
    };

    return (
        <div className="mt-4">
            <Tabs
                id="pestañas-de-datos"
                activeKey={pestañaActiva}
                onSelect={manejarCambioPestaña}
                className="mb-3"
            >
                {tabs.map(({ clave, titulo }) => (
                    <Tab key={clave} eventKey={clave} title={titulo} />
                ))}
            </Tabs>

            <Form.Group controlId="busqueda">
                <Form.Control
                    type="text"
                    placeholder="Buscar..."
                    value={busqueda}
                    onChange={manejarCambioBusqueda}
                />
            </Form.Group>

            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        {obtenerColumnas().map((columna) => (
                            <th key={columna}>{columna}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {datosPaginados.map((fila, index) => (
                        <tr key={index}>
                            {obtenerColumnas().map((columna) => (
                                <td key={columna}>{fila[columna]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-flex justify-content-end mt-3 gap-2">
                <CustomButton title={'Anterior'} onClick={manejarPaginaAnterior} disabledC={paginaActual === 1} />
                <CustomButton title={'Siguiente'} onClick={manejarPaginaSiguiente}
                    disabledC={paginaActual === totalPaginas || totalPaginas === 0} />
            </div>
        </div>
    );
}

export default Tables;
