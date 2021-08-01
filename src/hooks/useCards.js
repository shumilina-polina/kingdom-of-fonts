import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
// import gorod from '../assets/fonts/Gorod/Gorod.zip';

const useCards = () => {


    const data = useStaticQuery(graphql`
        query cardImages {
            bebasNeue: file(relativePath: { eq: "previews/BebasNeue.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            gorod: file(relativePath: { eq: "previews/Gorod.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            irishAP: file(relativePath: { eq: "previews/IrishAP.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            ptSerif: file(relativePath: { eq: "previews/PT-Serif.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            playfairDisplay: file(relativePath: { eq: "previews/PlayfairDisplay.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            oranienbaum: file(relativePath: { eq: "previews/Oranienbaum.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            calypso: file(relativePath: { eq: "previews/Calypso.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            garciaMarquez: file(relativePath: { eq: "previews/GarciaMarquez.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            ouroboros: file(relativePath: { eq: "previews/Ouroboros.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            rassvet: file(relativePath: { eq: "previews/Rassvet.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            eBGaramond: file(relativePath: { eq: "previews/EBGaramond.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            clutchSans: file(relativePath: { eq: "previews/ClutchSans.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            dRAZKI9: file(relativePath: { eq: "previews/DRAZKI9.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            leMurmure: file(relativePath: { eq: "previews/LeMurmure.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            movieLetters: file(relativePath: { eq: "previews/MovieLetters.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            obrazec2: file(relativePath: { eq: "previews/Obrazec2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            outward: file(relativePath: { eq: "previews/Outward.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pobeda: file(relativePath: { eq: "previews/Pobeda.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            monTrappist: file(relativePath: { eq: "previews/MonTrappist.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            zooCage: file(relativePath: { eq: "previews/ZooCage.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            montserrat: file(relativePath: { eq: "previews/Montserrat.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            russoOne: file(relativePath: { eq: "previews/RussoOne.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            firaSans: file(relativePath: { eq: "previews/FiraSans.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            iBMPlexSans: file(relativePath: { eq: "previews/IBMPlexSans.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pTSans: file(relativePath: { eq: "previews/PTSans.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            rubik: file(relativePath: { eq: "previews/Rubik.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            butovo: file(relativePath: { eq: "previews/Butovo.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            furore: file(relativePath: { eq: "previews/Furore.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            incopinsClusters: file(relativePath: { eq: "previews/IncopinsClusters.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            lozungCaps: file(relativePath: { eq: "previews/LozungCaps.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            moscowMetro: file(relativePath: { eq: "previews/MoscowMetro.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sticks: file(relativePath: { eq: "previews/Sticks.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tablon: file(relativePath: { eq: "previews/Tablon.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const images = {
        bebasNeue: data?.bebasNeue?.childImageSharp?.fluid,
        gorod: data?.gorod?.childImageSharp?.fluid,
        irishAP: data?.irishAP?.childImageSharp?.fluid,
        ptSerif: data?.ptSerif?.childImageSharp?.fluid,
        playfairDisplay: data?.playfairDisplay?.childImageSharp?.fluid,
        oranienbaum: data?.oranienbaum?.childImageSharp?.fluid,
        calypso: data?.calypso?.childImageSharp?.fluid,
        garciaMarquez: data?.garciaMarquez?.childImageSharp?.fluid,
        ouroboros: data?.ouroboros?.childImageSharp?.fluid,
        rassvet: data?.rassvet?.childImageSharp?.fluid,
        eBGaramond: data?.eBGaramond?.childImageSharp?.fluid,
        clutchSans: data?.clutchSans?.childImageSharp?.fluid,
        dRAZKI9: data?.dRAZKI9?.childImageSharp?.fluid,
        leMurmure: data?.leMurmure?.childImageSharp?.fluid,
        movieLetters: data?.movieLetters?.childImageSharp?.fluid,
        outward: data?.outward?.childImageSharp?.fluid,
        pobeda: data?.pobeda?.childImageSharp?.fluid,
        monTrappist: data?.monTrappist?.childImageSharp?.fluid,
        zooCage: data?.zooCage?.childImageSharp?.fluid,
        montserrat: data?.montserrat?.childImageSharp?.fluid,
        russoOne: data?.russoOne?.childImageSharp?.fluid,
        firaSans: data?.firaSans?.childImageSharp?.fluid,
        iBMPlexSans: data?.iBMPlexSans?.childImageSharp?.fluid,
        pTSans: data?.pTSans?.childImageSharp?.fluid,
        rubik: data?.rubik?.childImageSharp?.fluid,
        butovo: data?.butovo?.childImageSharp?.fluid,
        furore: data?.furore?.childImageSharp?.fluid,
        incopinsClusters: data?.incopinsClusters?.childImageSharp?.fluid,
        lozungCaps: data?.lozungCaps?.childImageSharp?.fluid,
        moscowMetro: data?.moscowMetro?.childImageSharp?.fluid,
        sticks: data?.sticks?.childImageSharp?.fluid,
        tablon: data?.tablon?.childImageSharp?.fluid,
        obrazec2: data?.obrazec2?.childImageSharp?.fluid,
    }

    console.log("data", data)

    const cards = [
        {
            fontFormats: ["OTF"],
            image: images.gorod,
            name: "Gorod",
            variationsCount: "1 начертание",
            currency: "Валют нет :(",
            category: "Антиквы",
            subCategory: "Брусковые",
            authorsTextBeforeUrl: "Free by",
            authorUrl: "https://www.behance.net/gallery/90595033/GOROD-FREE-SLAB-SERIF-FONT",
            authorTextUrl: "Ilya Zakharov",
            color: "#350208",
            fontSize: 12,
            letterSpacing: null,
            lineHeight: 1.4,
        },
        {
            fontFormats: ["OTF"],
            image: images.irishAP,
            name: "IrishAP",
            variationsCount: "1 начертание",
            currency: "$",
            category: "Антиквы",
            subCategory: "Готические",
            authorsTextBeforeUrl: "Free by",
            authorUrl: "https://fontstore.ru/fonts/shrift-irishap/",
            authorTextUrl: "Alexander Pompeev",
            color: "#30202B",
            fontSize: 28,
            letterSpacing: null,
            lineHeight: 1.3,
        },
        {
          fontFormats: ["TTF", "WOFF", "WOFF2"],
          image: images.ptSerif,
          name: "PT-Serif",
          variationsCount: "6 начертаний",
          currency: "₽ $ € £ ¥ ₴",
          category: "Антиквы",
          subCategory: "Латинские",
          authorsTextBeforeUrl: "Free by",
          authorUrl: "https://www.paratype.ru/fonts/pt/pt-serif",
          authorTextUrl: "Paratype",
          color: "#32201A",
          fontSize: 22,
          letterSpacing: null,
          lineHeight: null,
      },
      {
        fontFormats: ["TTF", "WOFF", "WOFF2"],
        image: images.playfairDisplay,
        name: "Playfair-Display",
        variationsCount: "12 начертаний",
        currency: "$ € £ ¥",
        category: "Антиквы",
        subCategory: "Новостильные",
        authorsTextBeforeUrl: "Free by",
        authorUrl: "https://fonts.google.com/specimen/Playfair+Display",
        authorTextUrl: "Claus Eggers Sørensen",
        color: "#3F200C",
        fontSize: 22,
        letterSpacing: null,
        lineHeight: null,
    },
    {
      fontFormats: ["TTF", "WOFF", "WOFF2"],
      image: images.oranienbaum,
      name: "Oranienbaum",
      variationsCount: "1 начертание",
      currency: "$ € £ ¥",
      category: "Антиквы",
      subCategory: "Переходные",
      authorsTextBeforeUrl: "Free by",
      authorUrl: "https://fonts.google.com/specimen/Oranienbaum",
      authorTextUrl: "Oleg Pospelov",
      color: "#26272B",
      fontSize: 24,
      letterSpacing: null,
      lineHeight: null,
  },
  {
    fontFormats: ["TTF"],
    image: images.calypso,
    name: "Calypso",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥ ₴",
    category: "Антиквы",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/109978409/Calypso-FREE-FONT",
    authorTextUrl: "Karyna Manukian",
    color: "#331D23",
    fontSize: 22,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.garciaMarquez,
    name: "GarciaMarquez",
    variationsCount: "1 начертание",
    currency: "$",
    category: "Антиквы",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/118013041/GarciaMarquez-Free-TypeFace",
    authorTextUrl: "Shalom Guevara",
    color: "#03261E",
    fontSize: 22,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF", "EOT", "WOFF", "WOFF2"],
    image: images.ouroboros,
    name: "Ouroboros",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Антиквы",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://velvetyne.fr/fonts/ouroboros/",
    authorTextUrl: "Velvetyne Type Foundry",
    color: "#411F3F",
    fontSize: 20.5,
    letterSpacing: null,
    lineHeight: 1.2,
},
{
    fontFormats: ["TTF"],
    image: images.rassvet,
    name: "Rassvet",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Антиквы",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/98370563/Rassvet-Free-Typeface",
    authorTextUrl: "Arthur Avtukhov",
    color: "#2B0F10",
    fontSize: 17,
    letterSpacing: "0.03rem",
    lineHeight: 1.3,
},
{
    fontFormats: ["TTF", "EOT", "WOFF", "WOFF2"],
    image: images.eBGaramond,
    name: "EBGaramond",
    variationsCount: "10 начертаний",
    currency: "₽ $ € £ ¥ ₸ ₴",
    category: "Антиквы",
    subCategory: "Старостильные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://fonts.google.com/specimen/EB+Garamond",
    authorTextUrl: "Georg Duffner",
    color: "#322B20",
    fontSize: 25,
    letterSpacing: null,
    lineHeight: 1,
},
{
    fontFormats: ["OTF"],
    image: images.clutchSans,
    name: "ClutchSans",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://nomail.com.ua/family/Clutch%20Sans",
    authorTextUrl: "Jonathan Gibson",
    color: "#332014",
    fontSize: 25.5,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF"],
    image: images.dRAZKI9,
    name: "DRAZKI9",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/90500351/drzki-9-DRAZKI-9",
    authorTextUrl: "Ivailo Hristov",
    color: "#151F1B",
    fontSize: 20,
    letterSpacing: null,
    lineHeight: 1.3,
},
{
    fontFormats: ["TTF", "OTF", "EOT", "WOFF", "WOFF2"],
    image: images.leMurmure,
    name: "LeMurmure",
    variationsCount: "1 начертание",
    currency: "₽ $ € ₸ ₴",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/79641845/Le-Murmure-Cyrillic-Display-Typeface-Free-Font",
    authorTextUrl: "Alex Slobzheninov",
    color: "#130B37",
    fontSize: 32,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "EOT", "WOFF"],
    image: images.movieLetters,
    name: "MovieLetters",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://webfonts.pro/base-web-fonts/sans-serif-grotesque/275-movieletterscyrillic.html",
    authorTextUrl: "Bou Fonts",
    color: "#222934",
    fontSize: 42,
    letterSpacing: null,
    lineHeight: 1,
},
{
    fontFormats: ["TTF", "OTF", "WOFF", "WOFF2"],
    image: images.obrazec2,
    name: "Obrazec2",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/106304557/OBRAZEC-20-FREE-FONT-Latin-and-Cyrillic",
    authorTextUrl: "Ilya Zakharov",
    color: "#3C2B00",
    fontSize: 28,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "EOT", "WOFF", "WOFF2"],
    image: images.outward,
    name: "Outward",
    variationsCount: "3 начертания",
    currency: "$ € £ ¥",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://velvetyne.fr/fonts/outward/",
    authorTextUrl: "Velvetyne Type Foundry",
    color: "#360009",
    fontSize: 50,
    letterSpacing: "0.06rem",
    lineHeight: 0.8,
},
{
    fontFormats: ["TTF", "EOT", "WOFF"],
    image: images.pobeda,
    name: "Pobeda",
    variationsCount: "2 начертания",
    currency: "₽ $ € £ ¥ ₸ ₴",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "http://mishapanfilov.ru/fonts/pobeda/font_pobeda.html",
    authorTextUrl: "Misha Panfilov",
    color: "#212121",
    fontSize: 24,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "EOT", "WOFF", "WOFF2"],
    image: images.monTrappist,
    name: "MonTrappist",
    variationsCount: "1 начертание",
    currency: "₽ $ € £ ¥ ₴",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/80064573/Trappist-free-font",
    authorTextUrl: "Vika Usmanova",
    color: "#272707",
    fontSize: 23,
    letterSpacing: "0.04rem",
    lineHeight: null,
},
{
    fontFormats: ["TTF"],
    image: images.zooCage,
    name: "ZooCage",
    variationsCount: "1 начертание",
    currency: "₽ $ € £ ¥",
    category: "Гротески",
    subCategory: "Вытянутые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/107349461/ZOOCAGE-FONT",
    authorTextUrl: "Danil Kartashév, Nikita Sklyarov, Pasha Marin, Ilya Levit",
    color: "#310202",
    fontSize: 48,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "WOFF", "WOFF2"],
    image: images.montserrat,
    name: "Montserrat",
    variationsCount: "18 начертаний",
    currency: "₽ $ € £ ¥ ₸ ₴",
    category: "Гротески",
    subCategory: "Геометрические",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://fonts.google.com/specimen/Montserrat",
    authorTextUrl: "Julieta Ulanovsky",
    color: "#0E1E25",
    fontSize: 21,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "WOFF", "WOFF2"],
    image: images.russoOne,
    name: "RussoOne",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Гротески",
    subCategory: "Геометрические",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://fonts.google.com/specimen/Russo+One",
    authorTextUrl: "Jovanny Lemonad",
    color: "#241714",
    fontSize: 21,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "EOT", "WOFF", "WOFF2"],
    image: images.firaSans,
    name: "FiraSans",
    variationsCount: "18 начертаний",
    currency: "₽ $ € £ ¥ ₴",
    category: "Гротески",
    subCategory: "Гуманистические",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://fonts.google.com/?query=Carrois+Apostrophe",
    authorTextUrl: "Carrois Apostrophe",
    color: "#3F141E",
    fontSize: 22,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "EOT", "WOFF"],
    image: images.iBMPlexSans,
    name: "IBMPlexSans",
    variationsCount: "14 начертаний",
    currency: "₽ $ € £ ¥ ₸ ₴",
    category: "Гротески",
    subCategory: "Гуманистические",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.ibm.com/plex/concept/",
    authorTextUrl: "Mike Abbink, Bold Monday",
    color: "#160927",
    fontSize: 22,
    letterSpacing: "normal",
    lineHeight: null,
},
{
    fontFormats: ["TTF", "WOFF", "WOFF2"],
    image: images.pTSans,
    name: "PTSans",
    variationsCount: "4 начертания",
    currency: "₽ $ € £ ¥ ₴",
    category: "Гротески",
    subCategory: "Гуманистические",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.paratype.ru/fonts/pt/pt-sans",
    authorTextUrl: "ParaType",
    color: "#182315",
    fontSize: 23,
    letterSpacing: "0.03rem",
    lineHeight: null,
},
{
    fontFormats: ["TTF", "EOT", "WOFF", "WOFF2"],
    image: images.rubik,
    name: "Rubik",
    variationsCount: "14 начертаний",
    currency: "₽ $ € £ ¥ ₸ ₴",
    category: "Гротески",
    subCategory: "Гуманистические",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://fonts.google.com/specimen/Rubik?query=Hubert+and+Fischer",
    authorTextUrl: "Hubert and Fischer, Meir Sadan, Cyreal",
    color: "#45033A",
    fontSize: 21,
    letterSpacing: "normal",
    lineHeight: null,
},
{
    fontFormats: ["TTF"],
    image: images.butovo,
    name: "Butovo",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "Модульные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/OKUNKIR/projects",
    authorTextUrl: "Okunkir",
    color: "#1F2022",
    fontSize: 13,
    letterSpacing: "-0.1rem",
    lineHeight: 1.5,
},
{
    fontFormats: ["TTF", "OTF", "WOFF", "WOFF2"],
    image: images.furore,
    name: "Furore",
    variationsCount: "1 начертание",
    currency: "$ €",
    category: "Гротески",
    subCategory: "Модульные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/74660351/FURORE-FREE-BOLD-INDUSTRIAL-SANS-SERIF",
    authorTextUrl: "Daniel Vorobyov & Ivan Gladkikh",
    color: "#0F1829",
    fontSize: 18.5,
    letterSpacing: null,
    lineHeight: 1.3,
},
{
    fontFormats: ["TTF"],
    image: images.incopinsClusters,
    name: "IncopinsClusters",
    variationsCount: "2 начертания",
    currency: "$ € £ ¥",
    category: "Гротески",
    subCategory: "Модульные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.1001fonts.com/incopins-clusters-font.html",
    authorTextUrl: "Peter Wiegel",
    color: "#261329",
    fontSize: 20,
    letterSpacing: null,
    lineHeight: 1.3,
},
{
    fontFormats: ["TTF", "OTF"],
    image: images.lozungCaps,
    name: "LozungCaps",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "Модульные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/100035663/Lozung-Caps?tracking_source=project_owner_other_projects",
    authorTextUrl: "Artem Waves, Timur Gusaruk",
    color: "#261903",
    fontSize: 20,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.moscowMetro,
    name: "MoscowMetro",
    variationsCount: "2 начертания",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "Модульные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/100637233/Moscow-Metro-(Free-Font)",
    authorTextUrl: "Nadira Filatova",
    color: "#361109",
    fontSize: 18,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.sticks,
    name: "Sticks",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "Модульные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/102381235/Free-Font-Sticks-and-Builders-Day",
    authorTextUrl: "Alena Madyanova",
    color: "#002216",
    fontSize: 20,
    letterSpacing: null,
    lineHeight: 1.3,
},
{
    fontFormats: ["TTF"],
    image: images.tablon,
    name: "Tablon",
    variationsCount: "3 начертания",
    currency: "₽ $ € £ ¥",
    category: "Гротески",
    subCategory: "Модульные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "http://rostype.com/tablon/",
    authorTextUrl: "Cristian Tournier, Denis Ignatov",
    color: "#2D2108",
    fontSize: 17,
    letterSpacing: "0.03rem",
    lineHeight: 1.4,
},
      ];


    return cards.reverse()
}

export default useCards
