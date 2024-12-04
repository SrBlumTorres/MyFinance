import TransactionCard from "./TransactionCard";

function Transaction() {
  return (
    // Aquí se llama al fetch que contendrá la información de todas las transacciones
    <> 
        <div className="flex p-4 flex-wrap justify-evenly gap-6">
            <TransactionCard id={0} title={"Tarjeta de ejemplo"} amount={15.700} extraInformation="Ejemplo de información extra"/>
            <TransactionCard id={0} title={"Tarjeta de ejemplo"} amount={15.700} extraInformation="Ejemplo de información extra"/>
            <TransactionCard id={0} title={"Tarjeta de ejemplo"} amount={15.700} extraInformation="Ejemplo de información extra"/>
            <TransactionCard id={0} title={"Tarjeta de ejemplo"} amount={15.700} extraInformation="Ejemplo de información extra"/>
        </div>
    </>
  )
}

export default Transaction;