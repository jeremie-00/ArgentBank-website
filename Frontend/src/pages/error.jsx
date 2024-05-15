import Header from "@layouts/header";
import Footer from "@layouts/footer";

export default function PageError() {
  return (
    <>
      <Header />
      <div className="error">
        <h1>404</h1>
        <div>
          Oups! La page que <span>vous demandez n&apos;existe pas.</span>
        </div>
        <h2>Retouner sur page d&apos;accueil</h2>
      </div>
      <Footer />
    </>
  );
}
