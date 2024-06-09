import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import Button from "../Components/Button";
import axios from "axios";
import InputRegister from "../Components/InputRegister";
import { useRoute, useLocation } from "wouter";
import { useEffect, useState } from "react";

function PageUpdatePromocion() {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [match, params] = useRoute("/editardescuento/:id");
    const [descuento, setDescuento] = useState(null);
    const [, setLocation] = useLocation();

    useEffect(() => {
        axios.get(`http://127.0.0.1/api_php/services/AdmistrativoService.php?descuentoID=${params.id}`)
            .then((response) => {
                setDescuento(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
    }, [params.id]);

    useEffect(() => {
        if (descuento) {
            setValue('descuento', descuento.porcentaje_reabaja);
            setValue('fechainicio', descuento.fecha_inicio_cupon_oferta);
            setValue('vencimiento', descuento.fecha_fin_cupon_oferta);
        }
    }, [descuento, setValue]);

    const onSubmit = handleSubmit(async (data) => {
        var f = new FormData();
        f.append("idActualizarPromocion", params.id);
        f.append("descuento", data.descuento);
        f.append("fecha_inicio", data.fechainicio);
        f.append("fecha_vencimiento", data.vencimiento);
        f.append("METHOD", "POST");

        try {
            const response = await axios.post("http://127.0.0.1/api_php/services/AdmistrativoService.php", f);
            toast.success(response.data);
            reset();
        } catch (error) {
            toast.error("Error al registrar la empresa");
            console.error("Error al enviar datos:", error);
        }
    });

    if (!match) setLocation(`/home`);

    return (
        <div>
            <h1>Actualizar Promoción</h1>
            <form onSubmit={onSubmit} className="w-full max-w-md p-4 bg-white rounded shadow-md">
                <h2 className="mb-4 text-2xl font-bold">Registro</h2>
                <InputRegister
                    type="text"
                    id="descuento"
                    label="Precio"
                    register={register("descuento", {
                        required: { value: true, message: "El descuento es requerido" },
                        minLength: { value: 1, message: "El descuento debe tener al menos 1 digito" },
                        maxLength: { value: 2, message: "Excedió el número permitido de digitos" },
                        validate: {
                            isNumber: value => !isNaN(value) || "El precio debe ser un valor numérico"
                        }
                    })}
                    error={errors.descuento}
                />
                <InputRegister
                    type="datetime-local"
                    id="fechainicio"
                    label="Fecha de inicio"
                    register={register("fechainicio", {
                        required: { value: true, message: "La fecha es requerida" },
                    })}
                    error={errors.fechainicio}
                />
                <InputRegister
                    type="datetime-local"
                    id="vencimiento"
                    label="Vencimiento"
                    register={register("vencimiento", {
                        required: { value: true, message: "El vencimiento es requerido" },
                        validate: {
                            futureDate: (value, allValues) => {
                                const startDate = new Date(allValues["fechainicio"]);
                                const endDate = new Date(value);

                                if (startDate.getTime() >= endDate.getTime()) {
                                    return "La fecha de vencimiento debe ser posterior a la fecha de inicio";
                                }

                                return true;
                            },
                            differentDates: (value, allValues) => {
                                const startDate = new Date(allValues["fechainicio"]);
                                const endDate = new Date(value);

                                if (startDate.getTime() === endDate.getTime()) {
                                    return "Las fechas de inicio y vencimiento no pueden ser iguales";
                                }

                                return true;
                            }
                        }
                    })}
                    error={errors.vencimiento}
                />

                <Button text="Registrar" type={"submit"} />
            </form>

            <Toaster
                theme="dark"
                position="top-right"
                duration={4000}
                visibleToasts={2}
            />
        </div>
    )
}

export default PageUpdatePromocion;
