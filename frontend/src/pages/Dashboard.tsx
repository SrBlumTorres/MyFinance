import Transaction from "../components/transaction/Transaction";

// Dasboard es nuestro home 
function Dashboard() {
  return (
    <section className="flex w-4/5 flex-col">
      <Transaction />
    </section>
  )
}

export default Dashboard;