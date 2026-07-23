import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div class="container">
      {" "}
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {" "}
        <div class="col-md-4 d-flex align-items-center">
          {" "}
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            {" "}
            <svg class="bi" width="30" height="24" aria-hidden="true">
              <use xlinkHref="#bootstrap"></use>
            </svg>{" "}
          </a>{" "}
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2026 Company, Inc
          </span>{" "}
        </div>{" "}
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          {" "}
          <li class="ms-3">
            <a
              class="text-body-secondary"
              href="https://www.instagram.com/its_ravi_pandey15/link-body-emphasis"
              aria-label=<FaInstagramSquare />
            >
              <svg class="bi" width="24" height="24" aria-hidden="true">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>{" "}
          <li class="ms-3">
            <a
              class="text-body-secondary"
              href="https://www.facebook.com/ravikishan.pandey.39"
              aria-label="Facebook"
            >
              <svg class="bi" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>{" "}
        </ul>{" "}
      </footer>{" "}
    </div>
  );
};
export default Footer;
