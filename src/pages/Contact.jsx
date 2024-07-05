const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kontakt - Invin Society</h1>
      <p className="mb-4">
        Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Kontaktieren Sie uns über das untenstehende Formular oder besuchen Sie uns an unserem Standort.
      </p>
      <form className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
          <textarea id="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Absenden</button>
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Unsere Kontaktdaten - Invin Society</h2>
        <p className="mb-2">Adresse: Musterstraße 1, 12345 Musterstadt, Deutschland</p>
        <p className="mb-2">Telefon: +49 123 456 7890</p>
        <p>Email: info@invinsociety.de</p>
      </div>
    </div>
  );
};

export default Contact;