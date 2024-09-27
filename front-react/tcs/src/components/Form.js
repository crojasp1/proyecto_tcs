import React from 'react';
import '../styles/Form.css';
import { useForm } from "react-hook-form";

function Formulario() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        defaultValues: {
            cedula: "",
            placa: "",
            modelo: "",
            marca: "",
            version: "",
            kilometraje: "",
            capacidad: "",
            descripcion: "",
        },
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });

    return (
        <form onSubmit={onSubmit}>
            <label>Cédula (ID del Cliente):</label>
            <input
                type="text"
                name="cedula"
                {...register("cedula", {
                    required: {
                        value: true,
                        message: "Cédula es requerida",
                    },
                    maxLength: 20,
                    minLength: 2,
                })}
            />
            {errors.cedula?.type === "required" && <span>Cédula requerida</span>}
            {errors.cedula?.type === "maxLength" && (
                <span>Cédula no debe ser mayor a 20 caracteres</span>
            )}
            {errors.cedula?.type === "minLength" && (
                <span>Cédula debe ser mayor a 2 caracteres</span>
            )}

            <label>Placa del Carro:</label>
            <input
                type="text"
                name="placa"
                {...register("placa", {
                    required: {
                        value: true,
                        message: "Placa es requerida",
                    },
                })}
            />
            {errors.placa && <span>{errors.placa.message}</span>}

            <label>Modelo:</label>
            <input
                type="text"
                name="modelo"
                {...register("modelo", {
                    required: {
                        value: true,
                        message: "Modelo es requerido",
                    },
                })}
            />
            {errors.modelo && <span>{errors.modelo.message}</span>}

            <label>Marca:</label>
            <input
                type="text"
                name="marca"
                {...register("marca", {
                    required: {
                        value: true,
                        message: "Marca es requerida",
                    },
                })}
            />
            {errors.marca && <span>{errors.marca.message}</span>}

            <label>Versión:</label>
            <input
                type="text"
                name="version"
                {...register("version", {
                    required: {
                        value: true,
                        message: "Versión es requerida",
                    },
                })}
            />
            {errors.version && <span>{errors.version.message}</span>}

            <label>Kilometraje:</label>
            <input
                type="number"
                name="kilometraje"
                {...register("kilometraje", {
                    required: {
                        value: true,
                        message: "Kilometraje es requerido",
                    },
                })}
            />
            {errors.kilometraje && <span>{errors.kilometraje.message}</span>}

            <label>Capacidad:</label>
            <input
                type="text"
                name="capacidad"
                {...register("capacidad", {
                    required: {
                        value: true,
                        message: "Capacidad es requerida",
                    },
                })}
            />
            {errors.capacidad && <span>{errors.capacidad.message}</span>}

            <label>Descripción:</label>
            <textarea
                name="descripcion"
                {...register("descripcion", {
                    required: {
                        value: true,
                        message: "Descripción es requerida",
                    },
                })}
            />
            {errors.descripcion && <span>{errors.descripcion.message}</span>}

            <label htmlFor="archivo">Subir Imagen:</label>
            <input
                type="file"
                {...register("archivo", {
                    required: {value: true, message: "Imagen es requerida."},
                })}
            />

            <button type="submit">Enviar</button>

            <pre style={{ width: "400px" }}>{JSON.stringify(watch(), null, 2)}</pre>
        </form>
    );
}

export default Formulario;