import Header from "../components/Header"
import Container from "../components/Container";
import TransactionList from "../components/TransactionList";

function TransactionsPage() {
  return (
    <>
      <Header/>
      <Container>
        <TransactionList />
      </Container>
    </>
  )
}

export default TransactionsPage