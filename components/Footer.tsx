export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-card/20 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Copyright &copy; {currentYear}. All Rights are Reserved.
          </p>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            Created by{" "}
            <a
              href="https://saksham-agrahari.vercel.app/"
              className="underline text-blue-200 font-medium"
            >
              Saksham Agrahari
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
