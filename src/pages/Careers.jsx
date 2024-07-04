const Careers = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Karriere</h1>
      <p className="mb-4">
        Werden Sie Teil des Invin Society Teams! Wir suchen talentierte und engagierte Fachleute, die unsere Mission teilen und gemeinsam mit uns wachsen möchten.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Offene Stellen</h2>
      <p className="mb-4">
        Schauen Sie sich unsere aktuellen Stellenangebote an und bewerben Sie sich noch heute.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Stelle #1</h2>
          <p>
            Beschreibung der offenen Stelle #1.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Stelle #2</h2>
          <p>
            Beschreibung der offenen Stelle #2.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Stelle #3</h2>
          <p>
            Beschreibung der offenen Stelle #3.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;