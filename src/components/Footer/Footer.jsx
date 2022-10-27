export const AppFooter = () => {

  const Pie = "Copyright &copy; Website 2022";

    return (
      <footer className="mt-auto py-5 bg-light text-center text-lg-start">
        <div className="container d-flex justify-content-center">
          <span className="text-muted">{Pie}</span>
        </div>
      </footer>
    );
  }
