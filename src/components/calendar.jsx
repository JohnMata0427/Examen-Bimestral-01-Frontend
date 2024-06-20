import fetchAPI from "../data/fetch.jsx";
import { useState } from "react";
import Modal from "./Modal.jsx";

export default function Calendar(){

    const { data, loading, error } = fetchAPI("https://examen-bimestral-01-backend.onrender.com/api/v1/tankers")
    
    console.log(data)
    
    const days = []
    for(let i = 1; i < 32; i++){
        days.push(i)
    }

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-[#25206c] to-[#7673a2] py-20" id="calendar">
            <h1 className="text-5xl font-extrabold my-4 text-white">{ months[new Date().getMonth()] } 2024</h1>
            <p className="text-white">Horario y Rutas de los Camiones Repartidores de Cilindros de Gas</p>
            <ul className="grid grid-cols-7 flex-wrap list-none">
            {
            days.map((day) =>
                (
                <li className="flex size-40 m-1 flex-col rounded p-1 font-light box-border bg-[#ffffff40] shadow-xl border-1 border-solid">
                    <time className="text-3xl mb-4 font-medium" datetime={`2022-06-${day}`}>{day}</time>
                    {
                    data.filter((tanker) => {
                        const date = new Date(tanker.startsAt);
                        return date.getDate() === day;
                    })
                    .map((item) => {
                        const startDate = new Date(item.startsAt);
                        const endDate = new Date(item.endsAt);
                        return (
                            <>
                            <button onClick={() => setOpen(!open)}>Horario de Partida: {startDate.toTimeString().split(' ')[0]}</button>
                            <Modal titulo={'Horario y rutas de ' + startDate.toDateString()} estado={open} cambiarEstado={setOpen}>
                                <p className="text-lg"><strong>Horario de Partida:</strong> {startDate.toTimeString().split(' ')[0]}</p>
                                <p className="text-lg"><strong>Horario de Llegada:</strong> {endDate.toTimeString().split(' ')[0]}</p>
                                <p className="text-lg"><strong>Recorrido:</strong> {item.rute}</p>
                            </Modal>
                            </>
                        );
                    })
                }
                </li>
                )
            )
            }   
            </ul>
        </div>
    )
}