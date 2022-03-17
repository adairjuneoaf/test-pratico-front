// Dependencies
import React from "react";

// Styles
import footerStyles from "../styles/components/footer.module.scss";

// Typings[TypeScript]
type FooterProps = {
  name?: string;
  portfolio?: string;
};

const Footer: React.FC<FooterProps> = ({ name = "Desenvolvedor", portfolio = "https://www.google.com.br/" }) => {
  return (
    <div className={footerStyles.infoFooter}>
      <p>
        Programado com <span title="CAFÉ!!!">☕</span> por{" "}
        <a href={portfolio} title={`Ir até o portfólio de ${name}`}>
          {name}
        </a>
      </p>
    </div>
  );
};

export default Footer;
