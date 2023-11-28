const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR', { timeStyle: 'short', hour12: false }).format();

  const hour = new Date().getHours();

  return (
    <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen overflow-hidden 
    flex flex-col items-center justify-center">
      <div className="text-9xl mb-9">{fullTime}</div>
      <div className="text-5xl font-bold">
        {hour >= 0 && hour < 12 && "Bom dia 😁"}
        {hour >= 12 && hour < 18 && "Bom tarde 😎"}
        {hour >= 18 && hour <= 23 && "Boa noite 😴"}
      </div>
    </div>
  )
}
export default Page;

//Outra forma de fazer

// const Page = () => {
//   const fullTime = new Intl.DateTimeFormat('pt-BR', { timeStyle: 'short', hour12: false }).format();

//   const hour = new Date().getHours();
//   let greeting = '';

//   if(hour >= 0 && hour < 12) {
//     greeting = 'Bom dia😊'
//   } else if(hour >= 12 && hour < 18) {
//     greeting = 'Boa Tarde😁'
//   } else if(hour >= 18 && hour < 23) {
//     greeting = 'Boa Noite😇'
//   }

//   return (
//     <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen overflow-hidden 
//     flex flex-col items-center justify-center">
//       <div className="text-9xl">{fullTime}</div>
//       <div className="text-5xl font-bold">{greeting}</div>
//     </div>
//   )
// }
// export default Page;