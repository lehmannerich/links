function Headline({ children }) {
  return <h2 className="font-bold mt-12">{children}</h2>;
}

function TextBlock({ children, className }) {
  return <div className={`font-light flex flex-col gap-4 ${className}`}>{children}</div>;
}

function Main({ children }) {
  return (
    <>
      <main className="mx-auto max-w-2xl p-4 pt-0 md:pt-10 print:pt-0 print:px-8">
        {children}
      </main>
      <div className="h-32"></div>
    </>
  );
}

export { Headline, Main, TextBlock };