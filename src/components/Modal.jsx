
export default function({ children, titulo, estado, cambiarEstado }) {
    return (
        <>
            {estado && <div className='w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center'>
                <div className='w-[500px] min-h-[100px] bg-white rounded-lg shadow-lg relative p-5'>
                    <div className="flex items-center justify-between mb-7 pb-7 border-b-2 border-gray-200">
                    <h1 className='text-2xl font-bold'>{titulo}</h1>
                    </div>
                    <button className="absolute top-5 right-5 w-7 h-7 rounded hover:bg-red-500 transition-all font-bold text-gray-800" onClick={() => cambiarEstado(false)}>X</button>
                    { children }
                </div>
            </div>
            }
        </>
    )
}
