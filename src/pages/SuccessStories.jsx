const SuccessStories = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Erfolgsgeschichten</h1>
      <p className="mb-4">
        Lassen Sie sich von den inspirierenden Erfolgsgeschichten unserer Kunden motivieren. Lesen Sie Testimonials und Bewertungen, um zu sehen, wie wir anderen geholfen haben, ihre Ziele zu erreichen.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Kundenerfolg #1</h2>
          <p>
            "Dank Invin Society habe ich meine finanziellen Ziele schneller erreicht, als ich es mir je vorgestellt habe."
          </p>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Kundenerfolg #2</h2>
          <p>
            "Die Beratung und Unterstützung von Invin Society war entscheidend für meinen beruflichen und persönlichen Erfolg."
          </p>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Kundenerfolg #3</h2>
          <p>
            "Ich bin so dankbar für die Hilfe und die wertvollen Ratschläge, die ich von Invin Society erhalten habe."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;