const Contact = () => {
  return (
    <div>
      <div>
        <h2>CONTACT ME</h2>
        <p>Sebadevalbornoz@gmail.com</p>
        <p>Argentina, Mendoza</p>
      </div>
      <div>
        <form>
          <div htmlFor="">
            <h2>Nombre</h2>
            <input type="text" placeholder="Nombre" />
            <h2>Apellido</h2>
            <input type="text" placeholder="Apellido" />
          </div>
          <div>
            <h2>Email</h2>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <h2>Mensaje</h2>
            <textarea placeholder="Message"></textarea>
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
