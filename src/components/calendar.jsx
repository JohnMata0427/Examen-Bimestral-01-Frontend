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
            <h1 className="text-5xl font-extrabold my-4">{ months[new Date().getMonth()] } 2024</h1>
            <p>Horario y Rutas de los Camiones Repartidores de Cilindros de Gas</p>
            <ul className="grid grid-cols-7 flex-wrap list-none">
            {
            days.map((day) =>
                (
                <li className="flex size-40 m-1 flex-col rounded p-1 font-light box-border bg-[#ffffff40] shadow-xl border-1 border-solid">
                    <time className="text-3xl mb-4 font-medium" datetime={`2022-06-${day}`}>{day}</time>
                    {
                        data.filter((item) => item.startsAt.split('T')[0].split('-')[2] === day.toString())
                            .map((item) => (
                                <>
                                <button onClick={() => setOpen(!open)}>Horario de Partida: {item.startsAt.split('T')[1]}</button>
                                <Modal titulo={'Horario y rutas de ' + item.startsAt.split('T')[0]} estado={open} cambiarEstado={setOpen}>
                                    <p className="text-lg"><strong>Horario de Partida:</strong> {item.startsAt.split('T')[1].split('.')[0]}</p>
                                    <p className="text-lg"><strong>Horario de Llegada:</strong> {item.endsAt.split('T')[1].split('.')[0]}</p>
                                    <p className="text-lg"><strong>Recorrido:</strong> {item.rute}</p>
                                </Modal>
                                </>
                            ))
                    }
                </li>
                )
            )
            }   
            </ul>
        </div>
    )
}