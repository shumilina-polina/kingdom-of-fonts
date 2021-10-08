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
            disketMono: file(relativePath: { eq: "previews/DisketMono.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            rubikMonoOne: file(relativePath: { eq: "previews/RubikMonoOne.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            inter: file(relativePath: { eq: "previews/Inter.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            neutralFace: file(relativePath: { eq: "previews/NeutralFace.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pTRootUI: file(relativePath: { eq: "previews/PTRootUI.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            airfool: file(relativePath: { eq: "previews/Airfool.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            comicCat: file(relativePath: { eq: "previews/ComicCat.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pomidor: file(relativePath: { eq: "previews/Pomidor.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shirota: file(relativePath: { eq: "previews/Shirota.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            abraxas: file(relativePath: { eq: "previews/Abraxas.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            misto: file(relativePath: { eq: "previews/Misto.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mutaborGrotesque: file(relativePath: { eq: "previews/MutaborGrotesque.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            practice: file(relativePath: { eq: "previews/Practice.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            soyuzGrotesk: file(relativePath: { eq: "previews/SoyuzGrotesk.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sportingGrotesque: file(relativePath: { eq: "previews/SportingGrotesque.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            stalinistOne: file(relativePath: { eq: "previews/StalinistOne.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            parabola: file(relativePath: { eq: "previews/Parabola.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pomidorko: file(relativePath: { eq: "previews/Pomidorko.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            riverhack: file(relativePath: { eq: "previews/Riverhack.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            allegroScript: file(relativePath: { eq: "previews/AllegroScript.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            dobroshrift2: file(relativePath: { eq: "previews/Dobroshrift2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            gangofThree: file(relativePath: { eq: "previews/GangofThree.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            juan: file(relativePath: { eq: "previews/Juan.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tangak: file(relativePath: { eq: "previews/Tangak.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            belozersk: file(relativePath: { eq: "previews/Belozersk.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            lavka: file(relativePath: { eq: "previews/Lavka.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            lutsk: file(relativePath: { eq: "previews/Lutsk.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pertsovType: file(relativePath: { eq: "previews/PertsovType.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tsarevich: file(relativePath: { eq: "previews/Tsarevich.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            keleti: file(relativePath: { eq: "previews/Keleti.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            monoBiletik: file(relativePath: { eq: "previews/MonoBiletik.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pressStart2P: file(relativePath: { eq: "previews/PressStart2P.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            upheavalPro: file(relativePath: { eq: "previews/UpheavalPro.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }


        }
    `)

    const images = {
        //где бебас???
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

        disketMono: data?.disketMono?.childImageSharp?.fluid,
        rubikMonoOne: data?.rubikMonoOne?.childImageSharp?.fluid,
        inter: data?.inter?.childImageSharp?.fluid,
        neutralFace: data?.neutralFace?.childImageSharp?.fluid,
        pTRootUI: data?.pTRootUI?.childImageSharp?.fluid,
        airfool: data?.airfool?.childImageSharp?.fluid,
        comicCat: data?.comicCat?.childImageSharp?.fluid,
        pomidor: data?.pomidor?.childImageSharp?.fluid,
        shirota: data?.shirota?.childImageSharp?.fluid,
        abraxas: data?.abraxas?.childImageSharp?.fluid,
        misto: data?.misto?.childImageSharp?.fluid,
        mutaborGrotesque: data?.mutaborGrotesque?.childImageSharp?.fluid,
        practice: data?.practice?.childImageSharp?.fluid,
        soyuzGrotesk: data?.soyuzGrotesk?.childImageSharp?.fluid,
        sportingGrotesque: data?.sportingGrotesque?.childImageSharp?.fluid,
        stalinistOne: data?.stalinistOne?.childImageSharp?.fluid,
        parabola: data?.parabola?.childImageSharp?.fluid,
        pomidorko: data?.pomidorko?.childImageSharp?.fluid,
        riverhack: data?.riverhack?.childImageSharp?.fluid,
        allegroScript: data?.allegroScript?.childImageSharp?.fluid,
        dobroshrift2: data?.dobroshrift2?.childImageSharp?.fluid,
        gangofThree: data?.gangofThree?.childImageSharp?.fluid,
        juan: data?.juan?.childImageSharp?.fluid,
        tangak: data?.tangak?.childImageSharp?.fluid,
        belozersk: data?.belozersk?.childImageSharp?.fluid,
        lavka: data?.lavka?.childImageSharp?.fluid,
        lutsk: data?.lutsk?.childImageSharp?.fluid,
        pertsovType: data?.pertsovType?.childImageSharp?.fluid,
        tsarevich: data?.tsarevich?.childImageSharp?.fluid,
        keleti: data?.keleti?.childImageSharp?.fluid,
        monoBiletik: data?.monoBiletik?.childImageSharp?.fluid,
        pressStart2P: data?.pressStart2P?.childImageSharp?.fluid,
        upheavalPro: data?.upheavalPro?.childImageSharp?.fluid,
    }

    // console.log("data", data)

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
            fontUrl: "https://disk.yandex.ru/d/0Bt2CbdUuEItQQ",
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
            fontUrl: "https://disk.yandex.ru/d/QCE3uXCf8qplpA",
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
          fontUrl: "https://disk.yandex.ru/d/RTrYlQjeCxs88Q",
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
        fontUrl: "https://disk.yandex.ru/d/hZj4w_AX-uR-Tw",
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
      fontUrl: "https://disk.yandex.ru/d/4elH8s-i0YcZ9Q",
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
    fontUrl: "https://disk.yandex.ru/d/In2rA0HWCD06HQ",
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
    fontUrl: "https://disk.yandex.ru/d/X6Pmdm1-SAyTIw",
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
    fontUrl: "https://disk.yandex.ru/d/IXlkPoEka3fhug",
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
    fontUrl: "https://disk.yandex.ru/d/24ljJtaS0xYVeQ",
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
    fontUrl: "https://disk.yandex.ru/d/OwvS4So1uRGmkQ",
    authorTextUrl: "Georg Duffner",
    color: "#322B20",
    fontSize: 25,
    letterSpacing: null,
    lineHeight: 0.9,
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
    fontUrl: "https://disk.yandex.ru/d/k5VFyxm55V0t3w",
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
    fontUrl: "https://disk.yandex.ru/d/o22fkaUgFRcW6A",
    authorTextUrl: "Ivailo Hristov",
    color: "#151F1B",
    fontSize: 19,
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
    fontUrl: "https://disk.yandex.ru/d/Y59sJLDeVia4Bw",
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
    fontUrl: "https://disk.yandex.ru/d/MuVP6peRl327gQ",
    authorTextUrl: "Bou Fonts",
    color: "#222934",
    fontSize: 39,
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
    fontUrl: "https://disk.yandex.ru/d/XowMTpOMpUreig",
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
    fontUrl: "https://disk.yandex.ru/d/cDjCFFO-R29Mqw",
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
    fontUrl: "https://disk.yandex.ru/d/2NVV-yXPiupjiA",
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
    fontUrl: "https://disk.yandex.ru/d/uzlfVcChOp1MPA",
    authorTextUrl: "Vika Usmanova",
    color: "#272707",
    fontSize: 24,
    letterSpacing: "0.04rem",
    lineHeight: 1,
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
    fontUrl: "https://disk.yandex.ru/d/caCMCgOcIJS3QA",
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
    fontUrl: "https://disk.yandex.ru/d/IqHQDQBI72BYlQ",
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
    fontUrl: "https://disk.yandex.ru/d/7OUAqi32JUiDRw",
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
    fontUrl: "https://disk.yandex.ru/d/3Lci7YeQY-uFUw",
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
    fontUrl: "https://disk.yandex.ru/d/kMMWJTkDox9KMA",
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
    fontUrl: "https://disk.yandex.ru/d/qhBKib3BDksvvg",
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
    fontUrl: "https://disk.yandex.ru/d/z0pxM7qbHxsz_Q",
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
    fontUrl: "https://disk.yandex.ru/d/hw8B6X92Vwk3bQ",
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
    fontUrl: "https://disk.yandex.ru/d/9ZxeyQLmew-aig",
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
    fontUrl: "https://disk.yandex.ru/d/fN9nOMyCXcZekw",
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
    fontUrl: "https://disk.yandex.ru/d/O_fmTqC_Uu-ToQ",
    authorTextUrl: "Artem Waves, Timur Gusaruk",
    color: "#261903",
    fontSize: 17,
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
    fontUrl: "https://disk.yandex.ru/d/PwUGeM-xI8-cFQ",
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
    fontUrl: "https://disk.yandex.ru/d/Uxoxd9tSVi015A",
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
    fontUrl: "https://disk.yandex.ru/d/TRcOGfwCCmZtrQ",
    authorTextUrl: "Cristian Tournier, Denis Ignatov",
    color: "#2D2108",
    fontSize: 18,
    letterSpacing: "0.03rem",
    lineHeight: 1.4,
},
{
    fontFormats: ["TTF"],
    image: images.disketMono,
    name: "DisketMono",
    variationsCount: "2 начертания",
    currency: "₽ $ € £ ¥",
    category: "Гротески",
    subCategory: "Моноширинные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/86075963/Disket-Mono-Free-font",
    fontUrl: "https://disk.yandex.ru/d/HpXeE3qDlt8SvA",
    authorTextUrl: "Mariano Diez",
    color: "#021839",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "EOT", "WOFF", "WOFF2"],
    image: images.rubikMonoOne,
    name: "RubikMonoOne",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Гротески",
    subCategory: "Моноширинные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://fonts.google.com/specimen/Rubik+Mono+One#standard-styles",
    fontUrl: "https://disk.yandex.ru/d/DxHVJX4KGrzIUw",
    authorTextUrl: "Philipp Hubert and Sebastian Fischer",
    color: "#352D29",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "WOFF", "WOFF2"],
    image: images.inter,
    name: "Inter",
    variationsCount: "19 начертаний",
    currency: "₽ $ € £ ¥ ₸ ₴",
    category: "Гротески",
    subCategory: "Нейтральные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://rsms.me/inter/",
    fontUrl: "https://disk.yandex.ru/d/IC6ESJrEMgP_WA",
    authorTextUrl: "Rasmus Andersson",
    color: "#252527",
    fontSize: 22,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.neutralFace,
    name: "NeutralFace",
    variationsCount: "2 начертания",
    currency: "₽ $ € £ ¥",
    category: "Гротески",
    subCategory: "Нейтральные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/104641293/NEUTRAL-FACE-FREE-FONT",
    fontUrl: "https://disk.yandex.ru/d/w-JAuxDQ0pNSZA",
    authorTextUrl: "Vadym Aksieiev",
    color: "#2C2200",
    fontSize: 18,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "WOFF", "WOFF2"],
    image: images.pTRootUI,
    name: "PTRootUI",
    variationsCount: "4 начертания",
    currency: "₽ $ € £ ¥ ₴",
    category: "Гротески",
    subCategory: "Нейтральные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.paratype.ru/fonts/pt/pt-root-ui",
    fontUrl: "https://disk.yandex.ru/d/WjmOHmj4dWGJug",
    authorTextUrl: "Paratype, Vitaly Kuzmin",
    color: "#0F1131",
    fontSize: 22,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.airfool,
    name: "Airfool",
    variationsCount: "1 начертание",
    currency: "$",
    category: "Гротески",
    subCategory: "Плюшевые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://pro-catalog.ru/font/font-airfool-cyrillic",
    fontUrl: "https://disk.yandex.ru/d/X7eL2_tLlAtSdA",
    authorTextUrl: "TIMXEZ",
    color: "#002237",
    fontSize: 21.5,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.comicCat,
    name: "ComicCat",
    variationsCount: "1 начертание",
    currency: "₽ $ ¥",
    category: "Гротески",
    subCategory: "Плюшевые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/119157709/Comic-CAT-Free-Font-Cyrillic-and-Latin",
    fontUrl: "https://disk.yandex.ru/d/dGZZXXlafJZs-A",
    authorTextUrl: "Vitaly Lazarenko",
    color: "#0E1747",
    fontSize: 24,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.pomidor,
    name: "Pomidor",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "Плюшевые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/94904251/POMIDOR-FREE-DISPLAY-FONT?tracking_source=search_projects_recommended",
    fontUrl: "https://disk.yandex.ru/d/Sg8mdWi4tBCI9A",
    authorTextUrl: "Ilya Zakharov",
    color: "#340F0C",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: 1.3,
},
{
    fontFormats: ["OTF"],
    image: images.shirota,
    name: "Shirota",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "Плюшевые",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/29810287/Free-SHIROTA-typeface",
    fontUrl: "https://disk.yandex.ru/d/wKo4DHIFl8CXdA",
    authorTextUrl: "Anton Chernogorov",
    color: "#243A3E",
    fontSize: 18,
    letterSpacing: null,
    lineHeight: 1.3,
    textTransform: "uppercase",
},
{
    fontFormats: ["OTF"],
    image: images.abraxas,
    name: "Abraxas",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://pro-catalog.ru/font/font-abraxas/",
    fontUrl: "https://disk.yandex.ru/d/ILM7_N581SQc2Q",
    authorTextUrl: "Anna Drozd",
    color: "#031F04",
    fontSize: 18,
    letterSpacing: null,
    lineHeight: 1.3,
},
{
    fontFormats: ["OTF", "TTF", "EOT", "WOFF", "WOFF2"],
    image: images.misto,
    name: "Misto",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/84911751/Misto-Font-Free-(Cyrillic-and-Latin)",
    fontUrl: "https://disk.yandex.ru/d/60CfZOq7ZZWuCg",
    authorTextUrl: "Katerina Korolevtseva",
    color: "#291619",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: 1.2,
},
{
    fontFormats: ["OTF"],
    image: images.mutaborGrotesque,
    name: "MutaborGrotesque",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Гротески",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://pro-catalog.ru/font/font-mutabor-cyrillic/",
    fontUrl: "https://disk.yandex.ru/d/Qn0TNtRGL5ohkQ",
    authorTextUrl: "Anna Drozd",
    color: "#2C0719",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: 1.2,
},
{
    fontFormats: ["OTF"],
    image: images.practice,
    name: "Practice",
    variationsCount: "2 начертания",
    currency: "₽ $ € ¥",
    category: "Гротески",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/96472071/PRACTICE-FREE-FONT?tracking_source=search_projects_recommended%7C%20Free%20Fonts%20cyrillic",
    fontUrl: "https://disk.yandex.ru/d/vggsnkpgyywq2w",
    authorTextUrl: "Alexey Atapin",
    color: "#282008",
    fontSize: 18,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF", "WOFF"],
    image: images.soyuzGrotesk,
    name: "SoyuzGrotesk",
    variationsCount: "1 начертание",
    currency: "$ € ¥",
    category: "Гротески",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://typefaces.temporarystate.net/preview/SoyuzGrotesk",
    fontUrl: "https://disk.yandex.ru/d/t5elVlQfSGSAYw",
    authorTextUrl: "Roman Gornitsky",
    color: "#382B32",
    fontSize: 22,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.sportingGrotesque,
    name: "SportingGrotesque",
    variationsCount: "2 начертания",
    currency: "$ € £ ¥",
    category: "Гротески",
    subCategory: "С придурью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://velvetyne.fr/fonts/sporting-grotesque/",
    fontUrl: "https://disk.yandex.ru/d/iBs1zgSW1X57NQ",
    authorTextUrl: "Cop",
    color: "#311E08",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "EOT", "WOFF", "WOFF2"],
    image: images.stalinistOne,
    name: "StalinistOne",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Гротески",
    subCategory: "Широкие",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://webfonts.pro/decorative-fonts/ussr-fonts/153-stalinist-one.html",
    fontUrl: "https://disk.yandex.ru/d/F4xij4LT4yUPjA",
    authorTextUrl: "Alexey Maslov",
    color: "#2D0104",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "EOT", "WOFF", "WOFF2"],
    image: images.parabola,
    name: "Parabola",
    variationsCount: "1 начертание",
    currency: "$ €",
    category: "Рукописные",
    subCategory: "Кистью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/28974279/PARABOLA-FREE-FONT",
    fontUrl: "https://disk.yandex.ru/d/irIWqvJvO_7gGQ",
    authorTextUrl: "Marcelo Reis Melo",
    color: "#30232E",
    fontSize: 25,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF"],
    image: images.pomidorko,
    name: "Pomidorko",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Рукописные",
    subCategory: "Кистью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/77343531/Cyrillic-free-font?tracking_source=search_projects_recommended%7C%20Free%20Fonts%20cyrillic",
    fontUrl: "https://disk.yandex.ru/d/a-Q0W1Pt0ZJzYw",
    authorTextUrl: "Tony Sidachova",
    color: "#3B0006",
    fontSize: 26.5,
    letterSpacing: null,
    lineHeight: 0.9,
},
{
    fontFormats: ["OTF"],
    image: images.riverhack,
    name: "Riverhack",
    variationsCount: "1 начертание",
    currency: "$",
    category: "Рукописные",
    subCategory: "Кистью",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://nomail.com.ua/font/RIVERHACK",
    fontUrl: "https://disk.yandex.ru/d/ihaenzp3aQwRpA",
    authorTextUrl: "Spread",
    color: "#333333",
    fontSize: 18,
    letterSpacing: null,
    lineHeight: 1.5,
},
{
    fontFormats: ["TTF", "OTF"],
    image: images.allegroScript,
    name: "AllegroScript",
    variationsCount: "1 начертание",
    currency: "$ €",
    category: "Рукописные",
    subCategory: "Пером",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.nomail.com.ua/font/AllegroScript",
    fontUrl: "https://disk.yandex.ru/d/1t1NL8-KKed49Q",
    authorTextUrl: "A.Babaljan",
    color: "#20051D",
    fontSize: 30,
    letterSpacing: null,
    lineHeight: 0.8,
},
{
    fontFormats: ["OTF"],
    image: images.dobroshrift2,
    name: "Dobroshrift",
    variationsCount: "2 начертания",
    currency: "₽ $ €",
    category: "Рукописные",
    subCategory: "Ручкой/маркером",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.artlebedev.ru/type/font-of-kindness/",
    fontUrl: "https://disk.yandex.ru/d/SU70S6j-ON0tAg",
    authorTextUrl: "Lebedev Studio",
    color: "#273000",
    fontSize: 21,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF"],
    image: images.gangofThree,
    name: "GangofThree",
    variationsCount: "1 начертание",
    currency: "$ €",
    category: "Стилизованные",
    subCategory: "Азиатские",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://fontstore.ru/fonts/shrift-gang-of-threerus-by-daymarius/",
    fontUrl: "https://disk.yandex.ru/d/JJVdikMMjA6x5A",
    authorTextUrl: "Daymarius",
    color: "#150F0F",
    fontSize: 21.5,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "EOT", "WOFF", "WOFF2"],
    image: images.juan,
    name: "Juan",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Стилизованные",
    subCategory: "Азиатские",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://bestfonts.pro/font/juan",
    fontUrl: "https://disk.yandex.ru/d/p8FIkquaTB10JA",
    authorTextUrl: "Igor Mustaev",
    color: "#260102",
    fontSize: 18,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "EOT", "WOFF", "WOFF2"],
    image: images.tangak,
    name: "Tangak",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Стилизованные",
    subCategory: "Восточные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/46541749/Tangak-free-font-(cyrillic)",
    fontUrl: "https://disk.yandex.ru/d/vviDHiHw9t8uzg",
    authorTextUrl: "Dastan Miraj",
    color: "#1D2C2D",
    fontSize: 23,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "EOT", "WOFF", "WOFF2"],
    image: images.belozersk,
    name: "Belozersk",
    variationsCount: "1 начертание",
    currency: "₽ $ € £",
    category: "Стилизованные",
    subCategory: "Отечественные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/107142323/Belozersk-Font-Free-(Cyrillic-and-Latin)",
    fontUrl: "https://disk.yandex.ru/d/kDKZVtEq3wAMuQ",
    authorTextUrl: "Mark Dubonosov",
    color: "#3D060B",
    fontSize: 18,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.lavka,
    name: "Lavka",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Стилизованные",
    subCategory: "Отечественные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://tektovdmitry.ru/shrifty",
    fontUrl: "https://disk.yandex.ru/d/_CbCFZAUOzDfvg",
    authorTextUrl: "Tektov Dmitry",
    color: "#2A1B0F",
    fontSize: 23,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "EOT", "WOFF", "WOFF2"],
    image: images.lutsk,
    name: "Lutsk",
    variationsCount: "1 начертание",
    currency: "$ €",
    category: "Стилизованные",
    subCategory: "Отечественные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://wonderfont.ru/lutsk/",
    fontUrl: "https://disk.yandex.ru/d/Z_tBKe4ziEkV5g",
    authorTextUrl: "Kirill Tkachov",
    color: "#062D32",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["OTF"],
    image: images.pertsovType,
    name: "PertsovType",
    variationsCount: "1 начертание",
    currency: "Валют нет :(",
    category: "Стилизованные",
    subCategory: "Отечественные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/99539435/Pertsov-type",
    fontUrl: "https://disk.yandex.ru/d/OUd1x1t5EdJIlg",
    authorTextUrl: "Kate Zavolokina",
    color: "#310C04",
    fontSize: 14,
    letterSpacing: null,
    lineHeight: 1.7,
},
{
    fontFormats: ["TTF", "EOT", "WOFF"],
    image: images.tsarevich,
    name: "Tsarevich",
    variationsCount: "3 начертания",
    currency: "₽ $ € £ ¥ ₴",
    category: "Стилизованные",
    subCategory: "Отечественные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "http://mishapanfilov.ru/font_tsarevich.html",
    fontUrl: "https://disk.yandex.ru/d/WS40Jj9QLZIX3A",
    authorTextUrl: "Misha Panfilov",
    color: "#141A2B",
    fontSize: 23,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF"],
    image: images.keleti,
    name: "Keleti",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Стилизованные",
    subCategory: "Пиксельные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/64168335/Keletifree-font-(download-link)",
    fontUrl: "https://disk.yandex.ru/d/7YpkfSi8brzTVA",
    authorTextUrl: "Kitya Toropowski",
    color: "#2D1500",
    fontSize: 24,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "EOT", "WOFF", "WOFF2"],
    image: images.monoBiletik,
    name: "MonoBiletik",
    variationsCount: "1 начертание",
    currency: "₽ $ € £ ¥ ₴",
    category: "Стилизованные",
    subCategory: "Пиксельные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://www.behance.net/gallery/103150871/Monobiletik-font-free-Cyrillic-Latin",
    fontUrl: "https://disk.yandex.ru/d/NfqOELi97aqygQ",
    authorTextUrl: "Olga Butyrska",
    color: "#1C1333",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: null,
},

{
    fontFormats: ["TTF", "EOT", "WOFF", "WOFF2"],
    image: images.pressStart2P,
    name: "PressStart2P",
    variationsCount: "1 начертание",
    currency: "₽ $ € £ ¥ ₸ ₴",
    category: "Стилизованные",
    subCategory: "Пиксельные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://fonts.google.com/specimen/Press+Start+2P",
    fontUrl: "https://disk.yandex.ru/d/QQnexvTd4WnW9w",
    authorTextUrl: "CodeMan38",
    color: "#0B002E",
    fontSize: 17,
    letterSpacing: null,
    lineHeight: null,
},
{
    fontFormats: ["TTF", "OTF", "EOT", "WOFF", "WOFF2"],
    image: images.upheavalPro,
    name: "UpheavalPro",
    variationsCount: "1 начертание",
    currency: "$ € £ ¥",
    category: "Стилизованные",
    subCategory: "Пиксельные",
    authorsTextBeforeUrl: "Free by",
    authorUrl: "https://bestfonts.pro/font/upheaval-pro",
    fontUrl: "https://disk.yandex.ru/d/mW-RWiWL7NHqDQ",
    authorTextUrl: "Brian Kent & Aleksandr Savenkov",
    color: "#2C3211",
    fontSize: 21.5,
    letterSpacing: null,
    lineHeight: null,
},
      ];


    return cards.reverse()
}

export default useCards
