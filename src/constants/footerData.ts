const getDataYearCopyWriting = () => {
  return {
    year: new Date().getFullYear(),
  }
}

const {year} = getDataYearCopyWriting()

console.log(getDataYearCopyWriting())

export const footerData = {
  title: "ARTHUR",
    navLinks: [
      {
        text: "Inicio",
        href: "#"
      },
      {
        text: "Sobre",
        href: "#about"
      },
      {
        text: "Experiencia",
        href: "#experience"
      },
      {
        text: "Seriços",
        href: "#services"
      },
      {
        text: "Portfolio",
        href: "#portfolio"
      },
      {
        text: "Estudos",
        href: "#studied"
      },
      {
        text: "Contato",
        href: "#contact"
      }
    ],
    socialRedes: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/arthur.ropkedemoraes/"
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/arthurropkede/"
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/arthur-ropke/"
      },
      {
        name: "Github",
        href: "https://github.com/Arthury10"
      }
    ],
    copyWriter: `Copyright © ${year} Arthur Ropke. Todos os direitos reservados.`,
}