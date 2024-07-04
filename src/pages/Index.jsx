import { useEffect, useState } from "react";
import { Carousel } from "@/components/ui/carousel";

const Index = () => {
  const [services, setServices] = useState([]);
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    // Fetch services and success stories from an API or static file
    setServices([
      { title: "Finanzanalyse", description: "Wir bieten eine umfassende Analyse Ihrer finanziellen Situation." },
      { title: "Investitionsberatung", description: "Unsere Experten unterstützen Sie bei Investitionen in verschiedene Märkte." },
      { title: "Versicherungslösungen", description: "Wir helfen Ihnen, die beste Versicherungslösung zu finden." },
    ]);

    setSuccessStories([
      { title: "Kundenerfolg #1", description: "Dank Invin Society habe ich meine finanziellen Ziele schneller erreicht, als ich es mir je vorgestellt habe." },
      { title: "Kundenerfolg #2", description: "Die Beratung und Unterstützung von Invin Society war entscheidend für meinen beruflichen und persönlichen Erfolg." },
      { title: "Kundenerfolg #3", description: "Ich bin so dankbar für die Hilfe und die wertvollen Ratschläge, die ich von Invin Society erhalten habe." },
    ]);
  }, []);
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Willkommen bei Invin Society</h1>
      <p className="mb-4">Be Invincible with Invin</p>
      <div className="hero-banner mb-4">
        <img src="/hero-banner.jpg" alt="Hero Banner" className="mx-auto object-cover w-full h-[400px]" />
      </div>
      <p className="mb-4">
        Entdecken Sie unsere Dienstleistungen und erfahren Sie, wie wir Ihnen helfen können, Ihre Ziele zu erreichen.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {services.map((service, index) => (
          <div key={index} className="p-4 border rounded hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-4">Erfolgsgeschichten</h2>
      <Carousel>
        {successStories.map((story, index) => (
          <div key={index} className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
            <p>{story.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Index;