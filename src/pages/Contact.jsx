// ===============================
// Página: Contact (Contacto)
// Descripción: Formulario de contacto funcional con envío por email
// ===============================
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import "../styles/Contact.css";

// Manejo de estado del formulario y envío de mensajes
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para manejar el envío y mensajes de estado
  const [status, setStatus] = useState({
    type: "", // "loading", "success", "error"
    message: "",
  });

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Enviando mensaje..." });

    try {
      // Crear el asunto del email
      const subject = `Mensaje de ${formData.name} desde tu portafolio`;

      // Crear el cuerpo del email con formato
      const body = `
      Nombre: ${formData.name}
      Email: ${formData.email}

      Mensaje:
      ${formData.message}

      ---
      Enviado desde tu portafolio web
      `;

      // Crear el enlace mailto con datos codificados
      const mailtoLink = `mailto:jjaquezlopez236@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Abrir cliente de email del usuario
      window.location.href = mailtoLink;

      // Mostrar mensaje de éxito
      setStatus({
        type: "success",
        message:
          "¡Perfecto! Se ha abierto tu cliente de email. Envía el mensaje desde ahí.",
      });

      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setStatus({ type: "", message: "" });
      }, 3000);
    } catch (error) {
      // Manejo de errores
      console.error("Error:", error);
      setStatus({
        type: "error",
        message:
          "Hubo un error. Por favor, envía un email directamente a jjaquezlopez236@gmail.com",
      });
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <header className="contact-header">
          <h1>Contáctame</h1>
          <p>¿Tienes una oportunidad laboral o proyecto en mente? ¡Hablemos!</p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="contact-item">
              <Mail size={24} />
              <span>jjaquezlopez236@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={24} />
              <span>+502 3079-3526</span>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <span>San Lucas Sacatepéquez, Guatemala</span>
            </div>

            <div className="availability-info">
              <h4>Disponibilidad</h4>
              <p>🕒 Medio Tiempo para prácticas profesionales</p>
              <p>💬 Respondo mensajes en menos de 24 horas</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu.email@ejemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre la oportunidad, proyecto o consulta que tienes..."
                required
              ></textarea>
            </div>

            {/* Mostrar estado del envío */}
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.type === "success" && <CheckCircle size={20} />}
                {status.type === "error" && <AlertCircle size={20} />}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status.type === "loading"}
            >
              <Send size={20} />
              {status.type === "loading" ? "Enviando..." : "Enviar Mensaje"}
            </button>

            <p className="form-note">
              También puedes escribirme directamente a:
              <a href="mailto:jjaquezlopez236@gmail.com" className="email-link">
                jjaquezlopez236@gmail.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
