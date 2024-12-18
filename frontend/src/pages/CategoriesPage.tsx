import CategoryList from "../components/CategoryList";
import Container from "../components/Container";
import Header from "../components/Header";

// Dasboard es nuestro home 
function CategoriesPage() {
  return (
    <>
      <Header />
      <Container>
        <CategoryList/>
      </Container>
    </>
  )
}

export default CategoriesPage;