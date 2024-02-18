import useForm from "@/hooks/useForm";
import { emailRegex } from "@/utils/regex";
import Test from "@/icons/Test";
import SendMessage from "./SendMessage";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const {
    formData,
    handleChange,
    reset,
    validateEmptyFields,
    handleChangePhone,
  } = useForm(
    {
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
    },
    "contacto"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del Formulario
    const emptyFields = validateEmptyFields();

    if (emptyFields.length > 0) {
      toast.error("Error de Campos", {
        description: `Los siguientes campos están vacíos: ${emptyFields.join(
          ", "
        )}.`,
      });

      return;
    }

    //TOAST: si el Correo le falta "@" tira error
    if (!emailRegex.test(formData.correo)) {
      toast.warning("Debe ingresar un correo válido!");
      return;
    }

    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Procesar la respuesta si es necesario
        toast.success("Mensaje Enviado Correctamente", {
          description: "Nos podremos en contacto con usted lo antes posible.",
        });

        // Reiniciar formulario
        reset();
      } else {
        // Manejar errores
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <section id="contacto" className="dark:text-white body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-2xl lg:text-5xl font-bold title-font mb-4 dark:text-green-500">
            Comienza Tu Transformación Hoy
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Contáctame para saber más sobre los servicios, agendar tu primera
            sesión o resolver cualquier duda. Estoy aquí para ayudarte a
            alcanzar tus metas de{" "}
            <span className="dark:text-green-500">fitness</span> y{" "}
            <span className="dark:text-green-500">bienestar.</span>
          </p>
        </div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="nombre"
                  className="leading-7 text-sm dark:text-gray-400"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Escriba aquí su nombre"
                  onChange={handleChange}
                  value={formData.nombre}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:focus:border-green-500 dark:text-gray-300"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="correo"
                  className="leading-7 text-sm dark:text-gray-400"
                >
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Test />
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Escriba aquí su correo electrónico"
                    onChange={handleChange}
                    value={formData.correo}
                    className="pl-10 pr-3 py-1 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:focus:border-green-500 dark:text-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="telefono"
                  className="leading-7 text-sm dark:text-gray-400"
                >
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Escriba aquí su número de teléfono"
                  onChange={handleChangePhone} // Usa el nuevo manejador específico para el teléfono
                  value={formData.telefono || ""}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:focus:border-green-500 dark:text-gray-300"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="mensaje"
                  className="leading-7 text-sm dark:text-gray-400"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escriba aquí su mensaje"
                  onChange={handleChange}
                  value={formData.mensaje}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:focus:border-green-500 dark:text-gray-300"
                ></textarea>
              </div>
            </div>
            <SendMessage />
          </div>
        </form>
      </div>
      <Toaster richColors />
    </section>
  );
};

export default Contact;
