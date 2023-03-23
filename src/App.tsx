import Logo from "./assets/logo-calimio.svg";
import ProductForm from "./components/forms/ProductForm";

function App() {
  return (
    <>
      <header className="container py-5">
        <img src={Logo} alt="Calimio logo" />
      </header>
      <main className="container">
        <h4 className="mb-3">Agregar producto</h4>
        <ProductForm />
      </main>
    </>
  );
}

export default App;
