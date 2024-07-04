const Index = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Willkommen bei Invin Society</h1>
      <p className="mb-4">Be Invincible with Invin</p>
      <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px] mb-4" />
      <p className="mb-4">
        Entdecken Sie unsere Dienstleistungen und erfahren Sie, wie wir Ihnen helfen können, Ihre Ziele zu erreichen.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Finanzanalyse</h2>
          <p>
            Wir bieten eine umfassende Analyse Ihrer finanziellen Situation.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Investitionsberatung</h2>
          <p>
            Unsere Experten unterstützen Sie bei Investitionen in verschiedene Märkte.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Versicherungslösungen</h2>
          <p>
            Wir helfen Ihnen, die beste Versicherungslösung zu finden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;