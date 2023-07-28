
export const CuadrosPasos = ({text = 'Cuadro'}) => {
  return (
    <div className='h-32 w-48 flex flex-shrink-0 overflow-hidden rounded-md border border-gray-200 text-center bg-[#bea347]'>
        <h1 className='m-auto text-black font-bold text-xl'>{text}</h1>
    </div>
  )
}
