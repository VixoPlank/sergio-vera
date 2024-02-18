import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const { nombre, correo, telefono, mensaje } = await request.json();
  const htmlContent = emailTemplate({ nombre, correo, telefono, mensaje });

  const send = await resend.emails.send({
    from: "Sergio Vera <onboarding@resend.dev>",
    to: ["sergiovera.pf@gmail.com"],
    subject: "Nuevo mensaje desde el formulario de contacto",
    html: htmlContent,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        messsage: send.data,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        messsage: send.error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};

function emailTemplate({ nombre, correo, telefono, mensaje }) {
  return `
  <main>
    <body
      className="body"
      style="width: 100%; height: 100%; padding: 0; margin: 0"
    >
      <div
        dir="ltr"
        className="es-wrapper-color"
        lang="es"
        style="background-color: #fafafa"
      >
        <table
          className="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          role="none"
          style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
        >
          <tr>
            <td valign="top" style="padding: 0; margin: 0">
              <table
                cellpadding="0"
                cellspacing="0"
                className="es-content"
                align="center"
                role="none"
                style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
              >
                <tr>
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      bgcolor="#ffffff"
                      className="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      role="none"
                      style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                          margin: 0;
                          padding-top: 30px;
                          padding-right: 20px;
                          padding-bottom: 30px;
                          padding-left: 20px;
                        "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      font-size: 0px;
                                    "
                                    >
                                      <img
                                        src="https://eeemkoy.stripocdn.email/content/guids/CABINET_25929db57ee8169db5526221b6000188fb6233e36133cdf9dbddf5c53184276e/images/logo.png"
                                        alt="Logo"
                                        style="
                                        display: block;
                                        font-size: 12px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                        width="200"
                                        title="Logo"
                                        className="adapt-img"
                                        height="63"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      className="es-m-txt-c"
                                      style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    "
                                    >
                                      <h2
                                        style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 46px;
                                        font-style: normal;
                                        font-weight: bold;
                                        line-height: 46px;
                                        color: #333333;
                                      "
                                      >
                                        Hola <strong>Sergio Vera,</strong>
                                      </h2>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 5px;
                                    "
                                    >
                                      <p
                                        align="left"
                                        style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                      >
                                        Has recibido una nueva consulta a través
                                        del formulario de contacto en tu
                                        <strong>Página Web</strong>. Aquí están
                                        los detalles de la consulta para tu
                                        revisión y acción:
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                className="es-footer"
                align="center"
                role="none"
                style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
              >
                <tr>
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      className="es-footer-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                      role="none"
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-bottom: 20px;
                          padding-top: 20px;
                        "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 600px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      bgcolor="#f8f9f8"
                                      style="padding: 0; margin: 0"
                                    >
                                      <ul
                                        style="
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        padding: 0px 0px 0px 40px;
                                        margin: 15px 0px;
                                      "
                                      >
                                        <li
                                          style="
                                          color: #333333;
                                          margin: 0px 0px 15px;
                                          font-size: 14px;
                                        "
                                        >
                                          <strong>Nombre del Cliente:</strong>
                                          ${nombre}
                                        </li>
                                        <li
                                          style="
                                          color: #333333;
                                          margin: 0px 0px 15px;
                                          font-size: 14px;
                                        "
                                        >
                                          <strong>Correo Electrónico:</strong>
                                          ${correo}
                                        </li>
                                        <li
                                          style="
                                          color: #333333;
                                          margin: 0px 0px 15px;
                                          font-size: 14px;
                                        "
                                        >
                                          <strong>Número de Teléfono:</strong>
                                          ${telefono} 
                                        </li>
                                        <li
                                          style="
                                          color: #333333;
                                          margin: 0px 0px 15px;
                                          font-size: 14px;
                                        "
                                        >
                                          <strong>Mensaje Detallado:</strong>
                                          ${mensaje}
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                className="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
                role="none"
                style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="transparent"
                    style="padding: 0; margin: 0"
                  >
                    <table
                      className="es-content-body"
                      cellpadding="0"
                      cellspacing="0"
                      bgcolor="#ffffff"
                      align="center"
                      role="none"
                      style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                          padding: 0;
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 20px;
                        "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            role="none"
                            style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="padding: 0; margin: 0"
                                    >
                                      <p
                                        style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                      >
                                        Por favor, asegúrate de manejar esta
                                        consulta con la atención y
                                        profesionalismo que caracterizan a
                                        "sergiovera.fit". Si necesitas
                                        asistencia adicional o deseas discutir
                                        esta consulta en detalle, no dudes en
                                        contactarme directamente.
                                      </p>
                                      <p
                                        style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                      >
                                        Gracias por tu atención a este asunto.
                                      </p>
                                      <p
                                        style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                      >
                                        Saludos,
                                      </p>
                                      <p
                                        style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                      >
                                        <em>
                                          <strong>Sergio Vera</strong>
                                        </em>
                                      </p>
                                      <p
                                        style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                      ></p>
                                      <p
                                        style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                      ></p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </main>
`;
}
