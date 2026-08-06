export function sampleEmail({
  email,
}: {
  email: string;
}) {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <!-- Define Charset -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,400i" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600" rel="stylesheet" />
    <link href="https://s3.amazonaws.com/phlur-emails/updated-fonts-new.css" rel="stylesheet" type="text/css" />
    <!-- Responsive Meta Tag -->
    <meta name="viewport" content="width=600" />
    <title>Your John Heher email</title>
    <style type="text/css">
      body {
        width: 100%;
        background-color: #f5f5f5;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        mso-margin-top-alt: 0px;
        mso-margin-bottom-alt: 0px;
        mso-padding-alt: 0px 0px 0px 0px;
        font-family: Averta-Light, Averta-Regular, Poppins, Arial, Helvetica, sans-serif;
      }

      p,
      h1,
      h2,
      h3,
      h4 {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
      }

      span.preheader {
        display: none;
        font-size: 1px;
      }

      html {
        width: 100%;
      }

      table {
        font-size: 14px;
        border: 0;
        font-family: Averta-Light, Averta-Regular, Poppins, Arial, Helvetica, sans-serif;
      }

      /* iOS BLUE LINKS */

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      .main-copy-header {
        font-size: 32px;
        line-height: 38px;
      }

      .main-copy {
        font-size: 18px;
        line-height: 24px;
      }

      .main-copy-cta {
        font-size: 16px;
        line-height: 48px;
      }

      .footer-copy {
        font-size: 12px;
        line-height: 22px;
      }

      .main-copy-support {
        font-size: 16px;
        line-height: 23px;
      }

      .help-faq {
        font-size: 15px;
        line-height: 20px;
      }

      .copyright {
        font-size: 10px;
        line-height: 16px;
      }

      @media screen and (max-device-width: 768px) {
        .main-copy {
          font-size: 22px;
          line-height: 28px;
        }

        .main-copy-cta {
          font-size: 20px;
          line-height: 48px;
        }

        .footer-copy {
          font-size: 14px;
          line-height: 24px;
        }

        .main-copy-support {
          font-size: 20px;
          line-height: 27px;
        }

        .help-faq {
          font-size: 21px;
          line-height: 26px;
        }

        .copyright {
          font-size: 12px;
          line-height: 18px;
        }
      }
    </style>
  </head>

  <body
    leftmargin="0"
    marginheight="0"
    marginwidth="0"
    style="-webkit-text-size-adjust: none; -ms-text-size-adjust: 100%; background-color: #f5f5f5"
    topmargin="0"
  >
    <div style="background-color: #f5f5f5; width: 100%">
      <table
        bgcolor="#dddfdf"
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="600"
        style="width: 600px; max-width: 600px; margin: 0 auto"
      >
        <tr>
          <td align="center" style="width: 200px; max-width: 200px; margin: 0 auto">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="200"
              style="width: 200px; max-width: 200px; margin: 0 auto"
            >
              <tr>
                <td style="background: #dddfdf; width: 70px; height: 70px; padding-right: 20px">
                  <a href="https://www.johnheher.com" style="display: block" target="_blank">
                    <img
                      alt="A picture of me"
                      border="0"
                      width="700"
                      height="70"
                      src="https://www.johnheher.com/images/email/me.png"
                      style="display: block; width: 70px; height: 70px; margin: 0 auto"
                    />
                  </a>
                </td>
                <td
                  class="main-copy"
                  align="left"
                  style="
                    background: #dddfdf;
                    font-family: 'Averta', 'Poppins', Arial, Helvetica, sans-serif;
                    font-weight: 400;
                    letter-spacing: 0.05em;
                    padding: 50px 0;
                    color: #0a0a0a;
                  "
                >
                  <a
                    href="https://www.johnheher.com"
                    target="_blank"
                    style="
                      font-family: 'Averta', 'Poppins', Arial, Helvetica, sans-serif;
                      font-weight: 400;
                      letter-spacing: 0.05em;
                      padding: 50px 0;
                      color: #0a0a0a;
                      text-decoration: none;
                    "
                  >
                    John Heher
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <div style="background-color: #f5f5f5; width: 100%">
      <table
        bgcolor="#F5f5f5"
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="600"
        style="width: 600px; max-width: 600px; margin: 0 auto"
      >
        <tr>
          <td
            class="main-copy-header"
            align="center"
            style="
              font-family: 'Averta', 'Poppins', Arial, Helvetica, sans-serif;
              font-weight: 400;
              letter-spacing: 0.05em;
              padding: 50px 75px 50px;
              color: #0a0a0a;
            "
          >
            Wow! A real email?!
          </td>
        </tr>
        <tr>
          <td
            class="main-copy"
            style="
              font-family: 'Averta', 'Poppins', Arial, Helvetica, sans-serif;
              font-weight: 400;
              letter-spacing: 0.05em;
              padding: 0px 70px 30px;
              color: #0a0a0a;
            "
          >
            That's right, this here is truly a wonder. What is email? How does it work? Some scholars believe it is an
            ancient Mayan technology whose origins have since been lost. Other smarter scientists believe it to be a
            simple text protocol.
          </td>
        </tr>
        <tr>
          <td
            class="main-copy"
            style="
              font-family: 'Averta', 'Poppins', Arial, Helvetica, sans-serif;
              font-weight: 400;
              letter-spacing: 0.05em;
              padding: 0px 70px 50px;
              color: #0a0a0a;
            "
          >
            A debate that will continue for decades to come, I suppose. All I know is they can be frustrating at times
            to work with and they're here to stay.
          </td>
        </tr>
        <tr>
          <td
            class="main-copy"
            style="
              font-family: 'Averta', 'Poppins', Arial, Helvetica, sans-serif;
              font-weight: 400;
              letter-spacing: 0.05em;
              padding: 0px 70px 50px;
              color: #0a0a0a;
            "
          >
            Anyway, head on back to the site to see some more advanced (post-Clinton presidency) web technologies.
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 50px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="220"
              style="width: 320px; max-width: 320px; margin: 0 auto"
            >
              <tr>
                <td
                  align="center"
                  class="main-copy-cta"
                  style="
                    font-family: 'Averta', 'Poppins', Arial, Helvetica, sans-serif;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    background-color: #5a795c;
                    width: 320px;
                    height: 48px;
                  "
                >
                  <a
                    href="https://www.johnheher.com"
                    style="display: block; color: #f5f5f5; text-decoration: none; text-transform: uppercase"
                    target="_blank"
                    >Back to site</a
                  >
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <!-- ======= End Content======= -->
    <!-- ======= Footer======= -->
    <div style="background-color: #dddfdf; width: 100%">
      <table
        bgcolor="#dddfdf"
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="600"
        style="width: 600px; max-width: 600px; margin: 0 auto"
      >
        <tr>
          <td align="center" style="width: 440px; max-width: 440px; margin: 0 auto; padding: 50px 0">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="440"
              style="width: 440px; max-width: 440px; margin: 0 auto"
            >
              <tr>
                <td
                  class="footer-copy"
                  style="
                    font-family: Helvetica, Arial, sans-serif;
                    font-weight: normal;
                    font-style: normal;
                    color: #666666;
                    text-align: center;
                  "
                >
                  This email was sent to ${email}.
                </td>
              </tr>
              <tr>
                <td
                  class="footer-copy"
                  style="
                    font-family: Helvetica, Arial, sans-serif;
                    font-weight: normal;
                    font-style: normal;
                    color: #666666;
                    text-align: center;
                    padding: 0 70px;
                  "
                >
                  Add mail@johnheher.com to your address book to make sure these emails arrive.
                </td>
              </tr>
              <tr>
                <td
                  class="footer-copy"
                  style="
                    font-family: Helvetica, Arial, sans-serif;
                    font-weight: normal;
                    font-style: normal;
                    color: #666666;
                    text-align: center;
                    padding: 30px 70px 0;
                  "
                >
                  (Or don't, see if I care.)
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
  `;
}
