import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-4">
      <h2 className="text-3xl mb-4">Kontakt</h2>
      <p>Telefon: +48 505 967 935</p>
      <p>Email: volta.szczepanski@gmail.com</p>
      <form className="mt-4">
        <div>
          <label className="block mb-2">Imię:</label>
          <input type="text" className="w-full p-2 border" />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input type="email" className="w-full p-2 border" />
        </div>
        <div>
          <label className="block mb-2">Wiadomość:</label>
          <textarea className="w-full p-2 border"></textarea>
        </div>
        <button type="submit" className="bg-blue-800 text-white p-2 mt-4">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default Contact;
