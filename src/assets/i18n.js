export default {
  'en': {
    HorizontalMenu: [
      {
        id: "menuAbout",
        title: "about",
        route: "/",
        value: "About Me"
      },
      {
        id: "menuEducation",
        title: "education",
        route: "/education",
        value: "Education"
      },
      {
        id: "menuExperience",
        title: "experience",
        route: "/experience",
        value: "Experience"
      },
      {
        id: "menuSkill",
        title: "skill",
        route: "/skill",
        value: "Skills"
      },
      {
        id: "menuAnimation",
        title: "animation",
        route: "/animation",
        value: "Animations"
      },
    ],
    HomeBanner: {
      CallToAction: "Contact Me",
      Profession: "Web Developer",
      Text: "Welcome to my online portfolio. In this page, there are a considerable amount of information about me, my skills and professional experiences. " +
        "Anyways, you can email me with the button below. On the footer, I've left some links, that could help you to either, get in touch with me or get to know more things about me."
    },
    InfoCards: {
      AnimationCard: {
        Title: "My Animations",
        NavMessage: "Press or keep the mouse over the image",
        TextOne: "",
        TextTwo: "",
      },
      Education: {
        PageTitle: "Education",
        Sections: [
          {
            title: "education",
            value: "Education Background",
            items: [
              {
                title: "ufgd",
                valueMenu: "2021 - [Diploma] UFGD",
                valueLabel: "2021 - [Computer Engineering] UFGD",
                valueDescription: "Degree obtained by concluding the Computer Engineering course at \"Universidade Federal da Grande Dourados (UFGD)\". As course conclusion critereas, I've done an intership at \"Dourasoft\", and for the final paper, with another student, we developed a system to collect data from the soil, which is based on networking multiple wireless sensor nodes, named \"Agriv\".",
              },
              {
                title: "ifsp",
                valueMenu: "2013 - [Diploma] IFSP",
                valueLabel: "2013 - [Electronics Technician] IFSP-SP",
                valueDescription: "Degree obtained by concluding the Electonics Technician integrated with High School course at \"Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus São Paulo (IFSP-SP)\". As course conclusion critereas, I've done an intership at \"Aureon\", and developed, with other students, a digital door lock system for the final paper.",
              }
            ]
          },
          {
            title: "certification",
            value: "Certifications",
            items: [
              {
                title: "ccp",
                valueMenu: "2022 - [CCP] AWS",
                valueLabel: "2022 - [Certified Cloud Practitioner (CCP)] AWS",
                valueDescription: "Certification regarding passing grade at AWS CCP examination.",
              },
              {
                title: "cae",
                valueMenu: "2018 - [CAE] Cambrigde",
                valueLabel: "2018 - [Certificate in Advanced English (CAE)] Cambrigde English",
                valueDescription: "Certification regarding the score of 183 at Cambridge's CAE examination, equivalent to CEFR's C1 Level.",
              },
              {
                title: "fce",
                valueMenu: "2017 - [FCE] Cambrigde",
                valueLabel: "2017 - [First Certificate in English (FCE)] Cambrigde English",
                valueDescription: "Certification regarding the score of 193 at Cambridge's FCE examination, equivalent to CEFR's C1 Level.",
              }
            ]
          }
        ]
      },
      Experience: {
        PageTitle: "Professional Experience",
        Sections: [
          {
            title: "paid",
            value: "Programming Services",
            items: [
              {
                title: "mutant",
                valueMenu: "2022 - Mutant & Vivo",
                valueLabel: "May. 2022 ~ Now - [Junior Development Analyst] Mutant - Vivo",
                valueDescription: "Employed by \"Mutant\", I was allocated to work for \"Vivo\". The job consists of the development and maintenance of the use case dialogs for the company's AI, \"Aura\", in the context of customer service via WhatsApp. In this job, I'm deepening my knowledge of Agile Methodologies, typescript, use of javascript classes and npm packages development."
              },
              {
                title: "rifaisso",
                valueMenu: "2022 - Rifaisso",
                valueLabel: "Mar. 2022 ~ May. 2022 - [Freelance] Rifaisso",
                valueDescription: "I fully developed an API for \"Rifaisso\", from its beginning to the first commercial version. It was developed using Typescript with AdonisJs and docker. During the development, I integrated the \"mercado pago\" API, made CRON routines, and learned AdonisJs and Docker implementation, which was my first time implementing them.",
              },
              {
                title: "teachlearn",
                valueMenu: "2021 - TeachLearn",
                valueLabel: "Jan. 2021 ~ Jul. 2021 - [Freelance] TeachLearn",
                valueDescription: "I took part into the development of the first versions of \"TeachLearn\", developed in Vue.js with Quasar and Node.js with Express.js. My tasks involved front-end and back-end development, but my tasks were mainly on the API's endpoints development. " +
                  "One of my most notorius activities at this service, was the development and implementation of a system's chat made with socket.io.",
              },
              {
                title: "dourasoftFree",
                valueMenu: "2020 - DouraSoft",
                valueLabel: "Nov. 2019 ~ Apr. 2020 - [Freelance] DouraSoft",
                valueDescription: "After my Computer Engineering mandatory internship, I did some services at \"Dourasoft\" as a Freelancer. I developed a Whatsapp bot with Java and selenium and integrated it into their commercialized system. I also created a SQL script for the database migration from their desktop legacy system to their current web app system.",
              },
              {
                title: "dourasoftIntern",
                valueMenu: "2019 - DouraSoft",
                valueLabel: "Feb. 2019 ~ Jun. 2019 - [Internship] DouraSoft",
                valueDescription: "To conclude my Computer Engineering course, I did an internship at \"Dourasoft\", where I developed an OCR functionality to be integrated into company's developed and commercialized system. It was done with Amazon Textract (OCR). " + 
                  "During the internship, Vue.js with Quasar, PHP with CakePHP, PostgreSQL, Google Cloud Services and Firebase skills were also learned.",
              },
            ]
          },
          {
            title: "other",
            value: "Other Projects",
            items: [
              {
                title: "protfolio-two",
                valueMenu: "2022 - portfolio-two",
                valueLabel: "2022 - portfolio-two (this page)",
                valueDescription: "[Project available on GitHub] This project regards the development of this version of my professional portfolio, made in Vue.js with tailwind, and hosted on AWS.",
              },
              {
                title: "myCrurriculum",
                valueMenu: "2022 - MyCurriculum",
                valueLabel: "2022 - MyCurriculum",
                valueDescription: "[Project available on GitHub] Preview available at https://portfolio-231.web.app/, this project was the first version of this portfolio, I had set extras challenges for me at that time, using Vue.js with bootstrap, which I haven't done previously, and the development of a CSS animation exclusively for the page.",
              },
              {
                title: "cadastrare",
                valueMenu: "2021 - Cadastrare",
                valueLabel: "2021 - Cadastrare",
                valueDescription: "[Project available on GitHub] In this project I developed a web app to manage the agenda and pacient's files of a dental clinic. Developed with Vue.js with Quasar and Express.js. In terms of experience, this project was important for introducing me to the procedures on how to acquire domains and hosting servers on Ubuntu command line.",
              },
              {
                title: "agriv",
                valueMenu: "2021 - Agriv",
                valueLabel: "2020 ~ 2021 - Agriv",
                valueDescription: "\"Agriv\" is a system to collect soil data through a Wireless Sensor Network, developed for the Computer Engineering course final paper, with another student, my role was to develop the network and put together all the hardware. " +
                  "ESPs 32 were used as gateways and nodes connected to soil sensors to send data to the system's server. This system is composed of the sensor network and a web app to manage and read the collected data.",
              },
              {
                title: "passremind",
                valueMenu: "2020 - PassRemind",
                valueLabel: "2020 - PassRemind",
                valueDescription: "[Project available on GitHub] \"PassRemind\" is a password manager web app for personal use, it was developed using Vue.js with Vuetify and firebase, more than that, a browser plugin was developed as well. Although, it is not a complex system, this project had its importance for introducing me to the development of browser plugins and the use of Firebase Functions and Firebase Hosting.",
              },
              {
                title: "comandas",
                valueMenu: "2020 - ComandasApp",
                valueLabel: "2020 - ComandasApp",
                valueDescription: "I've been involved in the front end and back end development of some of the system's functionalities. Which was made to manage restaurant checks. It was developed in Vue.js and Node.js with Express.js. Unfortunately, although its first commercial version was fully developed, the project came to an end before being publicly available due to market research.",
              },
            ]
          },
          {
            title: "misc",
            value: "Miscellanious",
            items: [
              {
                title: "coin",
                valueMenu: "2016 - UFGD-COIN",
                valueLabel: "Mar. 2016 ~ Jul. 2016 - [Internship] UFGD-COIN",
                valueDescription: "During college, I've done an extracurricular internship at UFGD's \"COIN - Coordenadoria de Informática\", in customer support, where most activities envolved assisting university staff with computer problems and internet and intranet connection problems.",
              },
              {
                title: "aureon",
                valueMenu: "2013 - Aureon",
                valueLabel: "Apr. 2013 ~ Aug. 2013 - [Internship] Aureon",
                valueDescription: "To conclude my Electronics Technician course, I did an internship at \"Aureon\", a company that, at the time, commercialized and manufactured analog emergency lightning systems. There, I've calibrated and fixed products on the production line.",
              },
            ]
          }
        ]
      },
      Personal: {
        PageTitle: "About Me",
        ParagraphFirst: "Hi, I'm Fernando. Graduated in Computer Engeneering, I'm a web developer. Working mostly as a back end developer. " + 
          "I've already worked as a full stack web developer and, in some other projects, either in front end or back end development, which can be seen on the <b>\"Experience\"</b> tab. " + 
          "My main development stack is composed of Vue.js and Node.js, but I've acquired knowledge in other concepts and technologies. To read a more detailed description of what I know, you can go straight to the <b>\"Skills\"</b> tab.",
        ParagraphSecond: "In terms of web development, my biggest interests are API development and CSS/JS animations. Sadly, I still don't have the skillset to completely make the animations I envision. But one day I'll get there. " +
          "Spite the fact that I've acquired some API development experience, I know there is a lot of room for improvement, mainly at this profession, which requires constant growth.",
        ParagraphThird: "At the moment, this is the very first version of my online portfolio, while I plan on how to improve it, you're more than welcome to navigate through this page. Anyhow, with the links presented in the footer, you can either get to know me better or get in touch with me. 😁",
      },
      Skills: {
        PageTitle: "Skills",
        TextOne: "The objective of the card, on the left, is be a more straight display of my main skills, the reading of the beneath parts and the \"Experience\" section are complementary to each other, giving a little more understanding of my skill levels.",
        TextTwo: "In terms of API development, I've had professional experience using PHP with Cake PHP, but ever since that, I've been using Node.js with Express.js and AdonisJs, and sometimes typescript. Unfortunately, I'm not very familiar to automated testing, but I've acquired some other experiences, like using sockets; conteiners; cloud services like firebase, GCP and AWS; and creation of linux based web servers;",
        TextThree:  "For front end development, I'm more knowledgeable about Vue.js with Quasar and Vuetify. For this portfolio, I've learned the basic implementation of Bootstrap. As a result of my previous experiences, I've also learned vanilla HTML, Javascript and CSS.",
        TextFour: "At the moment, mainly due to my current job, I'm enhancing my skills in back end development. But in my spare time, for the long run, I'm aiming to acquire more knowledge on CSS and JS animations, creation and manipulation of SVGs, and automated testing.",
        CardOne: "Main"
      }
    }
  },
  'pt': {
    HorizontalMenu: [
      {
        id: "menuAbout",
        title: "about",
        route: "/",
        value: "Sobre Mim"
      },
      {
        id: "menuEducation",
        title: "education",
        route: "/education",
        value: "Formacão"
      },
      {
        id: "menuExperience",
        title: "experience",
        route: "/experience",
        value: "Experiência"
      },
      {
        id: "menuSkill",
        title: "skill",
        route: "/skill",
        value: "Habilidades"
      },
      {
        id: "menuAnimation",
        title: "animation",
        route: "/animation",
        value: "Animações"
      },
    ],
    HomeBanner: {
      CallToAction: "Contate me",
      Profession: "Desenvolvedor Web",
      Text: "Bem vindo(a) ao meu portfolio online. Acredito que nesta página tenha uma boa quantidade de informações sobre mim, minhas competências e experiências. " + 
        "Mas, qualquer coisa, é possível me enviar um email pelo botão abaixo. No rodapé da página há outros meios de comunicação e links externos que possam lhe interessar."
    },
    InfoCards: {
      AnimationCard: {
        Title: "Minhas Animações",
        NavMessage: "Pressione ou deixe o mouse na imagem",
        TextOne: "",
        TextTwo: "",
      },
      Education: {
        PageTitle: "Formação",
        Sections: [
          {
            id: 1,
            title: "education",
            value: "Formação Acadêmica",
            items: [
              {
                id: 1,
                title: "ufgd",
                valueMenu: "2021 - [Diploma] UFGD",
                valueLabel: "2021 - [Engenheiro de Computação] UFGD",
                valueDescription: "Conclusão do curso de Engenharia de Computação na Universidade Federal da Grande Dourados (UFGD). Como critério de formação, realizei um estágio na \"Dourasoft\", e desenvolvi, com outro acadêmico, um sistema de coleta de dados do solo, composto de multiplos equipamentos de comunicação sem fio, denominado Agriv, como TCC.",
              },
              {
                id: 2,
                title: "ifsp",
                valueMenu: "2013 - [Diploma] IFSP",
                valueLabel: "2013 - [Técnico em Eletrônica] IFSP-SP",
                valueDescription: "Conclusão do curso de Técnico em Eletrônica e Ensino Médio no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus São Paulo (IFSP-SP). Como critérios de formação, realizei um estágio na \"Aureon\", e desenvolvi, junto com outros acadêmicos, um sistema de trava eletrônica por senha como TCC.",
              }
            ]
          },
          {
            id: 2,
            title: "certification",
            value: "Certificações",
            items: [
              {
                id: 1,
                title: "ccp",
                valueMenu: "2022 - [CCP] AWS",
                valueLabel: "2022 - [Certified Cloud Practitioner (CCP)] AWS",
                valueDescription: "Certificado referente à aprovação no exame CCP da AWS.",
              },
              {
                id: 2,
                title: "cae",
                valueMenu: "2018 - [CAE] Cambrigde",
                valueLabel: "2018 - [Certificate in Advanced English (CAE)] Cambridge English",
                valueDescription: "Certificado de pontuação 183 no exame CAE de Cambridge, equivalente ao nível C1 do \"CEFR\".",
              },
              {
                id: 3,
                title: "fce",
                valueMenu: "2017 - [FCE] Cambrigde",
                valueLabel: "2017 - [First Certificate in English (FCE)] Cambrigde English",
                valueDescription: "Certificado de pontuação 193 no exame FCE de Cambridge, equivalente ao nível C1 do \"CEFR\".",
              },
            ]
          }
        ]
      },
      Experience: {
        PageTitle: "Experiência Profissional",
        Sections: [
          {
            title: "paid",
            value: "Serviços de Programação",
            items: [
              {
                title: "mutant",
                valueMenu: "2022 - Mutant & Vivo",
                valueLabel: "Mai. 2022 ~ Atual - [Analista de Desenvolvimento Jr.] Mutant - Vivo",
                valueDescription: "Empregado pela Mutant, fui alocado para trabalhar na Vivo. O serviço prestado, consiste principalmente do desenvolvimento e manutenção de diálogos de casos de uso para a Inteligência Artificial \"Aura\", da Vivo, para atendimento via \"WhatsApp\". No momento, estão sendo aprofundados conhecimentos de uso de classes no javascript, metodologias ágeis, typescript e criação de pacotes npm."
              },
              {
                title: "rifaisso",
                valueMenu: "2022 - Rifaisso",
                valueLabel: "Mar. 2022 ~ Mai. 2022 - [Freelance] Rifaisso",
                valueDescription: "Fui responsável pelo desenvolvimento da API do sistema Rifaisso, que foi desenvolvido do zero até sua primeira versão comercial, feito em Typescript com AdonisJs e docker. Durante o processo, foi necessário realizar integração com a API do mercado pago, criação de rotinas CRON, além do aprendizado do AdonisJs e docker, que não eu tinha tido contato antes deste trabalho.",
              },
              {
                title: "teachlearn",
                valueMenu: "2021 - TeachLearn",
                valueLabel: "Jan. 2021 ~ Jul. 2021 - [Freelance] TeachLearn",
                valueDescription: "Participei no desenvolvimento das primeiras versões do sistema \"TeachLearn\", desenvolvido em Vue.js com Quasar e Node.js com Express.js. Realizei atividades tanto no front-end quanto no back-end, porém a maioria delas foram focadas no desenvolvimento de endpoints da API do sistema. " +
                  "Uma atividade notória em minha atuação foi o desenvolvimento do chat do sistema, utilizando socket.io.",
              },
              {
                title: "dourasoftFree",
                valueMenu: "2020 - DouraSoft",
                valueLabel: "Nov. 2019 ~ Abr. 2020 - [Freelance] DouraSoft",
                valueDescription: "Após a finalização do estágio obrigatório nesta empresa, realizei uns serviços como Freelancer, onde desenvolvi e integrei um bot de Whatsapp em Java usando Selenium no sistema comercializado pela empresa. Um outro serviço realizado também foi a criação do script de migração do banco de dados do sistema legado de desktop da empresa, para o novo esquema de banco de dados do sistema web atual.",
              },
              {
                title: "dourasoftIntern",
                valueMenu: "2019 - DouraSoft",
                valueLabel: "Fev. 2019 ~ Jun. 2019 - [Estágio] DouraSoft",
                valueDescription: "Como critério de conclusão do curso de Engenharia de Computação, realizei o estágio na \"DouraSoft\", desenvolvendo uma funcionalidade de OCR para ser integrado ao sistema web desenvolvido e comercializado pela empresa. O desenvolvimento da nova funcionalidade foi bem sucedida, e realizada com Amazon Textract (OCR). " +
                  "Durante o estágio, também houve o aprendizado de Vue.js com Quasar, PHP com CakePHP, PostgreQL, Google Cloud Services e Firebase.",
              },
            ]
          },
          {
            title: "other",
            value: "Outros Projetos",
            items: [
              {
                title: "protfolio-two",
                valueMenu: "2022 - portfolio-two",
                valueLabel: "2022 - portfolio-two (esta página)",
                valueDescription: "[Projeto presente no GitHub] Este projeto é referente ao desenvolvimento da última versão deste meu portfolio profissional, feito com Vue.js e tailwind, hospedado no AWS.",
              },
              {
                title: "myCrurriculum",
                valueMenu: "2022 - MyCurriculum",
                valueLabel: "2022 - MyCurriculum",
                valueDescription: "[Projeto presente no GitHub] Visão disponível em https://portfolio-231.web.app/, este projeto é referente à primeira versão deste portfolio. Na época, eu propus alguns desafios extras para mim mesmo, ao usar pela primeira vez o Vue.js com Bootstrap para o desenvolvimento da página, além do desenvolvimento de uma animação CSS exclusivamente para esta página.",
              },
              {
                title: "cadastrare",
                valueMenu: "2021 - Cadastrare",
                valueLabel: "2021 - Cadastrare",
                valueDescription: "[Projeto presente no GitHub] Este projeto envolveu o desenvolvimento de um sistema de gerenciamento de fichas de pacientes e agenda de um consultório de dentista, desenvolvido com Vue.js com Quasar e Express.js. A maior contribuição deste projeto para minha experiência, foi o levantamento do servidor web em ubuntu por linha de comando e compra de domínio.",
              },
              {
                title: "agriv",
                valueMenu: "2021 - Agriv",
                valueLabel: "2020 ~ 2021 - Agriv",
                valueDescription: "O \"Agriv\" é um sistema de coleta de dados do solo através de uma Rede de Sensores sem Fio, desenvolvido como o trabalho de conclusão de curso para o curso de Engenharia de Computação. Este projeto foi feito com mais um acadêmico, eu fiquei responsável principalmente pela criação da rede e seu hardware, " + 
                "onde utilizamos de ESPs 32 como nodos para a coleta de dados através de sensores, e como gateways para intermediar a comunicação com o servidor. O sistema é composto da rede de sensores e de um web app para a leitura de dados e interação com a rede.",
              },
              {
                title: "passremind",
                valueMenu: "2020 - PassRemind",
                valueLabel: "2020 - PassRemind",
                valueDescription: "[Projeto presente no GitHub] O \"PassRemind\" é um aplicativo de gerenciamento de senhas para uso pessoal, desenvolvido em Vue.js com Vuetify e firebase, além de um plugin de navegador. Apesar de não ser tão complexo, esse projeto foi importante por me introduzir à desenvolvimento de plugins e a utilização de serviços cloud do firebase, no caso, Firestore, Firebase Functions e Firebase Hosting.",
              },
              {
                title: "comandas",
                valueMenu: "2020 - ComandasApp",
                valueLabel: "2020 - ComandasApp",
                valueDescription: "Estive envolvido no desenvolvimento de back-end e front-end de algumas funcionalidades deste sistema de gerenciamento de comandas para restaurantes. Ele foi feito em Vue.js e Node.js com ExpressJs. Infelizmente, apesar de ter sua primeira versão finalizada, devido à pesquisas de mercado, o projeto foi interrompido antes de ser comercializado.",
              },
            ]
          },
          {
            title: "misc",
            value: "Geral",
            items: [
              {
                title: "coin",
                valueMenu: "2016 - UFGD-COIN",
                valueLabel: "Mar. 2016 ~ Jul. 2016 - [Estágio] UFGD-COIN",
                valueDescription: "Durante a faculdade, realizei um estágio extracurricular na COIN - Coordenadoria de Informática da UFGD - Universidade Federal da Grande Dourados, no suporte ao usuário, que envolviam trabalhos de suporte aos usuários (discentes e técnicos da instituição), referentes à computadores e conexão de rede e internet.",
              },
              {
                title: "aureon",
                valueMenu: "2013 - Aureon",
                valueLabel: "Abr. 2013 ~ Ago. 2013 - [Estágio] Aureon",
                valueDescription: "Como critério de conclusão do meu curso Técnico em Eletronica, realizei um estágio na Aureon, empresa de comércio e fabricação de equipamentos de iluminação de emergência. O trabalho consistia em realizar a calibragem e manutenção dos equipamentos na linha de produção, exclusivamente produtos eletrônicos analógicos.",
              },
            ]
          }
        ]
      },
      Personal: {
        PageTitle: "Sobre Mim",
        ParagraphFirst: "Olá, sou o Fernando. Formado em Engenharia de Computação, sou um desenvolvedor web. Atuando principalmente no back end. " + 
          "Já tive atuações como desenvolvedor web full stack e desenvolvi alguns outros projetos só no front end ou só no back end, que podem ser vistos na aba <b>\"Experiência\"</b>. " +
          "Meu stack de desenvolvimento principal é composto de Vue.js e Node.js, mas tenho conhecimento em outros conceitos e tecnologias. Para ter uma descrição mais detalhada do que eu sei, pode ir direto na aba <b>\"Habilidades\"</b>.",
        ParagraphSecond: "Dentro do desenvolvimento web, meus maiores interesses são, o desenvolvimento de APIs e animações CSS/JS, porém ainda não tenho as habilidades necessárias para ser capaz de desenvolver plenamente as animações que visualizo. Mas acredito que um dia chegarei lá. " +
          "Apesar de já ter um pouco de experiência no desenvolvimento de APIs, reconheço que há muito espaço para crescimento, ainda mais nessa área que demanda evolução constante, mas acredito ter o potêncial e a persistência necessária para o aprendizado.",
        ParagraphThird: "Esta é uma primeira versão do meu portfolio virtual, enquanto planejo como melhorá-lo você é bem vindo(a) para visualizá-lo a vontade. De qualquer maneira, há links no rodapé desta página que podem ser úteis para ver mais coisas sobre mim, ou entrar em contato. 😁"
      },
      Skills: {
        PageTitle: "Minhas Habilidades",
        TextOne: "O cartão ao lado tem o objetivo de gerar uma visão mais resumida e direta de meus conhecimentos principais, a leitura dos trechos abaixo e da seção de \"Experiência\" servem como um complemento, aprofundando um pouco mais sobre o nível de conhecimento e habilidades que tenho.",
        TextTwo: "Para o desenvolvimento de APIs, tive uma experiência profissional usando PHP com Cake PHP, porém, desde então venho usando Node.js com Express.js e AdonisJs, e também typescrypt. Infelizmente não tive muito contato com testes automatizados, mas adquiri conhecimentos de integração de sockets; uso de contêineres; uso de serviços cloud como firebase, google Cloud Platform e AWS; e levantamento de servidores web linux;",
        TextThree:  "No front end, meus conhecimentos rodam ao redor do Vue.js principalmente com Quasar e Vuetify, para este portfolio, adquiri um conhecimento básico de Bootstrap. Com a experiência no desenvolvimento front end também foram adquiridos conhecimentos de HTML, Javascript e CSS.",
        TextFour: "No momento, estou adquirindo mais conhecimentos de desenvolvimento back end, principalmente devido ao meu emprego atual, mas em meu tempo livre, e a médio prazo, estou visando adquirir mais conhecimento de animações CSS e JS, criação e manipulação de imagens svg, e testes automatizados.",
        CardOne: "Principal",
      }
    }
  }
}
