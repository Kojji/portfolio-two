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
      CallToActionResume: "Resume",
      Profession: "Web Developer",
      // Text: "Welcome to my online portfolio. In this page, there are a considerable amount of information about me, my skills and professional experiences. " +
      //   "Anyways, you can email me with the button below. On the footer, I've left some links, that could help you to either, get in touch with me or get to know more things about me."
    },
    InfoCards: {
      Animation: {
        PageTitle: "My Animations",
        NavMessage: "Press or keep the mouse over the image",
        TextOne: "This section is a galery of my CSS/JS animations, which I've been developing mostly as a hobby. You can either press the animation, or put the mouse over it to play its preview. But, by clicking on its name you can see it fully on my codepen. 😉",
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
                title: "ECAC",
                valueMenu: "2024 - [Diploma] ECAC",
                valueLabel: "2023 ~ 2024 - [Information Technology] ECA College",
                valueDescription: "Currently doing the Vocational Course 'Diploma in Information Technology' on ECA College Brisbane, with expected conclusion in 2024.",
              },
              {
                title: "ufgd",
                valueMenu: "2021 - [Diploma] UFGD",
                valueLabel: "2021 - [Computer Engineering] UFGD",
                valueDescription: "Degree obtained by concluding the Computer Engineering course at <i>Universidade Federal da Grande Dourados</i> (UFGD). As course conclusion critereas, I've done an intership at Dourasoft, and for the final paper, I've developed a system to collect data from the soil, which is based on networking multiple wireless sensor nodes, named Agriv with another student.",
              },
              {
                title: "ifsp",
                valueMenu: "2013 - [Diploma] IFSP-SP",
                valueLabel: "2013 - [Electronics Technician] IFSP-SP",
                valueDescription: "Degree obtained by concluding the Electonics Technician integrated with High School course at <i>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus São Paulo</i> (IFSP-SP). As course conclusion critereas, I've done an intership at Aureon, and with other students, we developed a digital door lock system for the final paper.",
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
                valueDescription: "Amazon Web Services (AWS) certification regarding passing grade at Certified Cloud Practitioner (CCP) examination.",
              },
              {
                title: "cae",
                valueMenu: "2018 - [CAE] Cambrigde",
                valueLabel: "2018 - [Certificate in Advanced English (CAE)] Cambrigde English",
                valueDescription: "Certification regarding the score of 193 at Cambridge's Certificate in Advanced English (CAE) examination, equivalent to CEFR's C1 Level.",
              },
              {
                title: "fce",
                valueMenu: "2017 - [FCE] Cambrigde",
                valueLabel: "2017 - [First Certificate in English (FCE)] Cambrigde English",
                valueDescription: "Certification regarding the score of 183 at Cambridge's First Certificate in English (FCE) examination, equivalent to CEFR's C1 Level.",
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
                valueLabel: "May. 2022 ~ Sep. 2022 - [Junior Development Analyst] Mutant - Vivo",
                valueDescription: "Employed by Mutant, I was allocated to work for Vivo. The job consisted of the <b>development and maintenance of use case dialogs</b> for Aura, the company's AI, in the context of customer service via WhatsApp. I deepened my <b>knowledge of Agile Methodologies, typescript, use of javascript classes and npm packages development</b>."
              },
              {
                title: "rifaisso",
                valueMenu: "2022 - Rifaisso",
                valueLabel: "Mar. 2022 ~ May. 2022 - [Freelance] Rifaisso",
                valueDescription: "I fully <b>developed an API</b> for Rifaisso, from its beginning to the first commercial version. It was <b>developed using Typescript with AdonisJs and docker</b>. During the development, I <b>integrated the <i>Mercado Pago</i> API, made CRON routines, and learned AdonisJs and Docker implementation</b>, which I was not familiar with.",
              },
              {
                title: "teachlearn",
                valueMenu: "2021 - TeachLearn",
                valueLabel: "Jan. 2021 ~ Jul. 2021 - [Freelance] TeachLearn",
                valueDescription: "I took part into the development of TeachLearn's first versions, made in <b>Vue.js with Quasar and Node.js with Express.js</b>. My tasks involved both, front end and back end development, but most of them were on the <b>development of endpoints</b>. " +
                  "One of my most notorious activities at this service, was the <b>development and implementation of a chat system with socket.io</b>.",
              },
              {
                title: "dourasoftFree",
                valueMenu: "2020 - DouraSoft",
                valueLabel: "Nov. 2019 ~ Apr. 2020 - [Freelance] DouraSoft",
                valueDescription: "After my Computer Engineering mandatory internship, I did some services as a Freelancer at Dourasoft. I <b>developed and integrated a Whatsapp bot made with Java and selenium</b> into the company's commercialized system. I also created a <b>SQL script for the database migration</b> from their desktop legacy system to their current web app system.",
              },
              {
                title: "dourasoftIntern",
                valueMenu: "2019 - DouraSoft",
                valueLabel: "Feb. 2019 ~ Jun. 2019 - [Internship] DouraSoft",
                valueDescription: "To conclude my Computer Engineering course, I did my mandatory internship at Dourasoft, where I developed an OCR functionality to be integrated into company's developed and commercialized system. It was done with <b>Amazon Textract (OCR)</b>. " + 
                  "During the internship, <b>Vue.js with Quasar, PHP with CakePHP, PostgreSQL, Google Cloud Services and Firebase skills</b> were also learned.",
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
                valueDescription: "<a href=\"https://github.com/Kojji/portfolio-two\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">[Project available on GitHub]</span></a> This project regards the development of this version of my professional portfolio, made in <b>Vue.js with tailwind, hosted on AWS, and animations made with Green Sock (GSAP)</b>.",
              },
              {
                title: "myCrurriculum",
                valueMenu: "2022 - MyCurriculum",
                valueLabel: "2022 - MyCurriculum",
                valueDescription: "<a href=\"https://github.com/Kojji/my-curriculum\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">[Project available on GitHub]</span></a> Preview available at <a href=\"https://portfolio-231.web.app\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">portfolio-231.web.app</span></a>, this project was the first version of this portfolio. At that time, I had set some extras challenges for me, like using <b>Vue.js with bootstrap</b>, which I haven't used previously, and the <b>development of a CSS animation</b> exclusively for the page.",
              },
              {
                title: "cadastrare",
                valueMenu: "2021 - Cadastrare",
                valueLabel: "2021 - Cadastrare",
                valueDescription: "<a href=\"https://github.com/Kojji/sistema-cadastro-consultorio\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">[Project available on GitHub]</span></a> In this project I developed a web app to manage the agenda and pacient's files of a dental clinic. Developed with <b>Vue.js with Quasar and Express.js</b>. In terms of experience, this project was important for introducing me to the procedures on how to <b>acquire domains and hosting servers on Ubuntu command line</b>.",
              },
              {
                title: "agriv",
                valueMenu: "2021 - Agriv",
                valueLabel: "2020 ~ 2021 - Agriv",
                valueDescription: "Agriv is a system to collect soil data through a Wireless Sensor Network, developed for the final paper of my Computer Engineering course. Made with another student, my role was to <b>develop the network and put together all the hardware</b>. " +
                  "<b>ESPs 32</b> were used as gateways and nodes connected to soil sensors to send data to the system's server. This system is composed of the sensor network and a web app to manage it and view the collected data.",
              },
              {
                title: "passremind",
                valueMenu: "2020 - PassRemind",
                valueLabel: "2020 - PassRemind",
                valueDescription: "<a href=\"https://github.com/Kojji/pass-remind-web-app\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">[Project available on GitHub]</span></a> PassRemind is a password manager web app for personal use, it was developed using <b>Vue.js with Vuetify and firebase</b>, plus, a <b>browser plugin was developed</b> as well. Although, it is not a complex system, this project had its importance for introducing me to the development of browser plugins and the use of <b>Firebase Functions and Firebase Hosting</b>.",
              },
              {
                title: "comandas",
                valueMenu: "2020 - ComandasApp",
                valueLabel: "2020 - ComandasApp",
                valueDescription: "I've been involved in the <b>front end and back end development</b> of some of the system's functionalities. Which was made to manage restaurant checks. It was developed in <b>Vue.js and Node.js with Express.js</b>. Unfortunately, although its first commercial version was fully developed, the project came to an end before being publicly available due to market research.",
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
                valueDescription: "During college, I've done an extracurricular internship at COIN - <i>Coordenadoria de Informática da UFGD</i> (UFGD's IT department), in <b>helpdesk</b>, where most activities envolved assisting faculty and staff with internet and intranet connection problems and computer problems.",
              },
              {
                title: "aureon",
                valueMenu: "2013 - Aureon",
                valueLabel: "Apr. 2013 ~ Aug. 2013 - [Internship] Aureon",
                valueDescription: "To conclude my Electronics Technician course, I did an internship at Aureon, a company that, at the time, commercialized and manufactured analog emergency lightning systems. There, I've calibrated and fixed products on the production line.",
              },
            ]
          }
        ]
      },
      Personal: {
        PageTitle: "About Me",
        ParagraphFirst: "Hi, I'm Fernando. Graduated in Computer Engineering, I'm a web developer. Working mostly as a back end developer. " + 
          "I've already worked as a full stack web developer and, in some other projects, either in front end or back end development, which can be seen on the <b>\"Experience\"</b> tab. " + 
          "My main development stack is composed of Vue.js, Node.js and Typescript, but I've acquired knowledge in other concepts and technologies. To read a more detailed description of what I know, you can go straight to the <b>\"Skills\"</b> tab.",
        ParagraphSecond: "In terms of web development, my biggest interests are <b>API development and CSS/JS animations</b>. Sadly, I still don't have the skillset to completely make the animations I envision. But one day I'll get there. " +
          "Spite the fact that I've acquired some API development experience, I know there is a lot of room for improvement, mainly at this profession, which requires constant growth. Although, I do believe I have the more than enough potencial and persistance to learn whatever is needed.",
        ParagraphThird: "A bunch of information about my capabilities and previous expeciences can be found in this page. Anyhow, there are <b>links in the footer</b>, which you can use to either get to know me better, or to get in touch with me. Hope you enjoy this personal page. 😁",
      },
      Skills: {
        PageTitle: "Skills",
        TextOne: "The card on the left is there to provide a more straight display of my main skills, the reading of the beneath parts and the <b>\"Experience\"</b> tab are complementary to each other, giving a little more understanding of my capabilities and current knowledge.",
        TextTwo: "In terms of API development, I've had professional experience using PHP with Cake PHP, but ever since that, I've been using <b>Node.js with Express.js or AdonisJs, and typescript</b>. Unfortunately, I'm not very familiar to automated testing on a professional environment, but I've started studying about unit testing and Ent-to-End testing. Besides that, I've acquired some other skills, for example, <b>usage of sockets; conteiners; cloud services like firebase, GCP and AWS; and creation of linux based web servers</b> from previous experiences.",
        TextThree:  "About front end development, I'm more knowledgeable about <b>Vue.js with some component frameworks such as Quasar, Vuetify, Bootstrap and Tailwind</b>. Due to previous expereiences, I've also learned <b>vanilla HTML, Javascript and CSS</b>.",
        TextFour: "At the moment, mainly due to my current job, I'm enhancing my skills in back end development. But in my spare time, for the long run, <b>I'm aiming to acquire more knowledge on CSS and JS animations, creation and manipulation of SVGs, automated testing and AWS cloud architecturing</b>.",
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
      CallToActionResume: "Curriculo",
      Profession: "Desenvolvedor Web",
      // Text: "Bem vindo(a) ao meu portfolio online. Acredito que nesta página tenha uma boa quantidade de informações sobre mim, minhas competências e experiências. " + 
      //   "Mas, qualquer coisa, é possível me enviar um email pelo botão abaixo. No rodapé da página há outros meios de comunicação e links externos que possam lhe interessar."
    },
    InfoCards: {
      Animation: {
        PageTitle: "Minhas Animações",
        NavMessage: "Pressione ou deixe o mouse na imagem",
        TextOne: "Esta seção é uma galeria das animações em CSS/JS que venho fazendo como hobby. Ao colocar o mouse sobre as imagens, ou pressioná-las, é possível visualizar um vídeo da animação. Mas se quiser vê-las sendo executadas, é só clicar no nome de cada uma para ir ao meu Codepen. 😉",
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
                title: "ECAC",
                valueMenu: "2024 - [Diploma] ECAC",
                valueLabel: "2023 ~ 2024 - [Tecnologis da Informação] ECA College",
                valueDescription: "Atualmente fazendo o curso vocacional 'Diploma in Information Technology' no ECA College Brisbane, com conclusão esperada em 2024.",
              },
              {
                id: 1,
                title: "ufgd",
                valueMenu: "2021 - [Diploma] UFGD",
                valueLabel: "2021 - [Engenheiro de Computação] UFGD",
                valueDescription: "Conclusão do curso de Engenharia de Computação na Universidade Federal da Grande Dourados (UFGD). Como critério de formação, realizei um estágio na empresa Dourasoft, e desenvolvi, com outro acadêmico, um sistema de coleta de dados do solo, composto de multiplos equipamentos de comunicação sem fio, denominado Agriv, como TCC.",
              },
              {
                id: 2,
                title: "ifsp",
                valueMenu: "2013 - [Diploma] IFSP-SP",
                valueLabel: "2013 - [Técnico em Eletrônica] IFSP-SP",
                valueDescription: "Conclusão do curso de Técnico em Eletrônica e Ensino Médio no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus São Paulo (IFSP-SP). Como critérios de formação, realizei um estágio na empresa Aureon, e desenvolvi, junto com outros acadêmicos, um sistema de trava eletrônica por senha como TCC.",
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
                valueDescription: "Certificado referente à aprovação no exame <i>Certified Cloud Practitioner</i> (CCP) da AWS.",
              },
              {
                id: 2,
                title: "cae",
                valueMenu: "2018 - [CAE] Cambrigde",
                valueLabel: "2018 - [Certificate in Advanced English (CAE)] Cambridge English",
                valueDescription: "Certificado de pontuação 193 no exame <i>Certificate in Advanced English</i> (CAE) de Cambridge, equivalente ao nível C1 do <i>CEFR</i>.",
              },
              {
                id: 3,
                title: "fce",
                valueMenu: "2017 - [FCE] Cambrigde",
                valueLabel: "2017 - [First Certificate in English (FCE)] Cambrigde English",
                valueDescription: "Certificado de pontuação 183 no exame <i>First Certificate in English</i> (FCE) de Cambridge, equivalente ao nível C1 do <i>CEFR</i>.",
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
                valueLabel: "Mai. 2022 ~ Set. 2022 - [Analista de Desenvolvimento Jr.] Mutant - Vivo",
                valueDescription: "Empregado pela Mutant, fui alocado para trabalhar na Vivo. O serviço prestado, consistiu principalmente do <b>desenvolvimento e manutenção de diálogos de casos de uso</b> para a Inteligência Artificial Aura, da Vivo, para atendimento via WhatsApp. <b>Foram aprofundados conhecimentos de uso de classes no javascript, metodologias ágeis, typescript e criação de pacotes npm</b>."
              },
              {
                title: "rifaisso",
                valueMenu: "2022 - Rifaisso",
                valueLabel: "Mar. 2022 ~ Mai. 2022 - [Freelance] Rifaisso",
                valueDescription: "Fui responsável pelo <b>desenvolvimento da API</b> do sistema Rifaisso, que foi desenvolvido do zero até sua primeira versão comercial, feito <b>em Typescript com AdonisJs e docker</b>. Durante o processo, foi necessário realizar <b>integração com a API do Mercado Pago, criação de rotinas CRON, além do aprendizado do AdonisJs e docker</b>, que não eu tinha tido contato antes deste trabalho.",
              },
              {
                title: "teachlearn",
                valueMenu: "2021 - TeachLearn",
                valueLabel: "Jan. 2021 ~ Jul. 2021 - [Freelance] TeachLearn",
                valueDescription: "Participei no desenvolvimento das primeiras versões do sistema TeachLearn, desenvolvido em <b>Vue.js com Quasar e Node.js com Express.js</b>. Realizei atividades tanto no front end quanto no back end, porém a maioria delas foram focadas no <b>desenvolvimento de endpoints da API</b> do sistema. " +
                  "Uma atividade notória em minha atuação foi o <b>desenvolvimento do chat do sistema, utilizando socket.io</b>.",
              },
              {
                title: "dourasoftFree",
                valueMenu: "2020 - DouraSoft",
                valueLabel: "Nov. 2019 ~ Abr. 2020 - [Freelance] DouraSoft",
                valueDescription: "Após a finalização do estágio obrigatório, realizei uns serviços como Freelancer para a Dourasoft, onde <b>desenvolvi e integrei um bot de Whatsapp em Java usando Selenium</b> no sistema comercializado pela empresa. Um outro serviço realizado também foi a <b>criação do script de migração do banco de dados</b> do sistema legado de desktop da empresa, para o novo esquema de banco de dados do sistema web atual.",
              },
              {
                title: "dourasoftIntern",
                valueMenu: "2019 - DouraSoft",
                valueLabel: "Fev. 2019 ~ Jun. 2019 - [Estágio] DouraSoft",
                valueDescription: "Como critério de conclusão do curso de Engenharia de Computação, realizei o estágio na DouraSoft, desenvolvendo uma funcionalidade de OCR para ser integrado ao sistema web desenvolvido e comercializado pela empresa. O desenvolvimento da nova funcionalidade foi bem sucedida, e realizada com <b>Amazon Textract (OCR)</b>. " +
                  "Durante o estágio, também houve o <b>aprendizado de Vue.js com Quasar, PHP com CakePHP, PostgreQL, Google Cloud Services e Firebase</b>.",
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
                valueDescription: "<a href=\"https://github.com/Kojji/portfolio-two\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">[Projeto presente no GitHub]</span></a> Este projeto é referente ao desenvolvimento desta última versão deste meu portfolio profissional, feito com <b>Vue.js e tailwind, hospedado no AWS e com animações feitas em Green Sock (GSAP)</b>.",
              },
              {
                title: "myCrurriculum",
                valueMenu: "2022 - MyCurriculum",
                valueLabel: "2022 - MyCurriculum",
                valueDescription: "<a href=\"https://github.com/Kojji/my-curriculum\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">[Projeto presente no GitHub]</span></a> Visão disponível em <a href=\"https://portfolio-231.web.app\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">portfolio-231.web.app</span></a>, este projeto é referente à primeira versão deste portfolio. Na época, eu propus alguns desafios extras para mim mesmo, ao usar pela primeira vez o <b>Vue.js com Bootstrap</b> para o desenvolvimento da página, além do <b>desenvolvimento de uma animação CSS</b> exclusivamente para esta página.",
              },
              {
                title: "cadastrare",
                valueMenu: "2021 - Cadastrare",
                valueLabel: "2021 - Cadastrare",
                valueDescription: "<a href=\"https://github.com/Kojji/sistema-cadastro-consultorio\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">[Projeto presente no GitHub]</span></a> Este projeto envolveu o desenvolvimento de um sistema de gerenciamento de fichas de pacientes e agenda de um consultório de dentista, desenvolvido com <b>Vue.js com Quasar e Express.js</b>. A maior contribuição deste projeto para minha experiência, foi o levantamento do <b>servidor web em ubuntu por linha de comando e compra de domínios</b>.",
              },
              {
                title: "agriv",
                valueMenu: "2021 - Agriv",
                valueLabel: "2020 ~ 2021 - Agriv",
                valueDescription: "O Agriv é um sistema de coleta de dados do solo através de uma Rede de Sensores sem Fio, desenvolvido como o trabalho de conclusão de curso para o curso de Engenharia de Computação. Este projeto foi feito com mais um acadêmico, eu fiquei responsável principalmente pela <b>criação da rede e seu hardware</b>, " + 
                "onde utilizamos de <b>ESPs 32</b> como nodos para a coleta de dados através de sensores, e como <i>gateways</i> para intermediar a comunicação com o servidor. O sistema é composto da rede de sensores e de um web app para a leitura de dados e interação com a rede.",
              },
              {
                title: "passremind",
                valueMenu: "2020 - PassRemind",
                valueLabel: "2020 - PassRemind",
                valueDescription: "<a href=\"https://github.com/Kojji/pass-remind-web-app\" target=\"_blank\"><span style=\"color:blue;font-weight:bold\">[Projeto presente no GitHub]</span></a> O PassRemind é um aplicativo de gerenciamento de senhas para uso pessoal, desenvolvido em <b>Vue.js com Vuetify e firebase</b>, além de um <b>plugin de navegador</b>. Apesar de não ser tão complexo, esse projeto foi importante por me introduzir à desenvolvimento de plugins e a utilização de serviços cloud do firebase, no caso, <b>Firestore, Firebase Functions e Firebase Hosting</b>.",
              },
              {
                title: "comandas",
                valueMenu: "2020 - ComandasApp",
                valueLabel: "2020 - ComandasApp",
                valueDescription: "Estive envolvido no <b>desenvolvimento de back end e front end</b> de algumas funcionalidades deste sistema de gerenciamento de comandas para restaurantes. Ele foi feito em <b>Vue.js e Node.js com ExpressJs</b>. Infelizmente, apesar de ter sua primeira versão finalizada, devido à pesquisas de mercado, o projeto foi interrompido antes de ser comercializado.",
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
                valueDescription: "Durante a faculdade, realizei um estágio extracurricular na COIN - Coordenadoria de Informática da UFGD - Universidade Federal da Grande Dourados, no suporte ao usuário, que envolviam <b>trabalhos de suporte aos usuários</b> (discentes e técnicos da instituição), referentes à <b>computadores e conexão de rede e internet</b>.",
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
        ParagraphFirst: "Olá, sou o Fernando. Formado em Engenharia de Computação, sou um desenvolvedor web. Atuando principalmente com back end. " + 
          "Já tive atuações como desenvolvedor full stack e desenvolvi alguns outros projetos só no front end ou só no back end, que podem ser vistos na aba <b>\"Experiência\"</b>. " +
          "Meu stack de desenvolvimento principal é composto de Vue.js, Node.js e Typescript, mas tenho conhecimento em outros conceitos e tecnologias. Para ter uma descrição mais detalhada do que eu sei, pode ir direto na aba <b>\"Habilidades\"</b>.",
        ParagraphSecond: "Dentro do desenvolvimento web, meus maiores interesses são, o <b>desenvolvimento de APIs e animações CSS/JS</b>. Infelizmente ainda não tenho as habilidades necessárias para ser capaz de desenvolver plenamente as animações que imagino. Mas acredito que um dia chegarei lá. " +
          "Apesar de já ter um pouco de experiência no desenvolvimento de APIs, reconheço que há muito espaço para crescimento, ainda mais nessa área que demanda evolução constante, mas acredito ter o potêncial e a persistência necessária para o aprendizado.",
        ParagraphThird: "Acredito que nesta página tenha uma boa quantidade de informações sobre mim, minhas competências e experiências. Se desejar, há <b>links no rodapé</b> desta página que podem ser úteis para ver mais coisas sobre mim, ou entrar em contato. Espero que você goste deste meu portfolio. 😁"
      },
      Skills: {
        PageTitle: "Minhas Habilidades",
        TextOne: "O cartão ao lado tem o objetivo de gerar uma visão mais resumida e direta de meus conhecimentos principais, a leitura dos trechos abaixo e da aba de <b>\"Experiência\"</b> servem como um complemento, aprofundando um pouco mais sobre o nível de conhecimento e habilidades atuais que tenho.",
        TextTwo: "Para o desenvolvimento de APIs, tive uma experiência profissional usando PHP com Cake PHP, porém, desde então venho usando <b>Node.js com Express.js ou AdonisJs, além de typescrypt</b>. Infelizmente não tive muito contato profissional com testes automatizados, mas já iniciei meus estudos, tanto sobre testes unitários quanto testes <i>End-to-End</i>. Fora isso, adquiri conhecimentos de <b>integração de sockets; uso de contêineres; uso de serviços cloud como firebase, google Cloud Platform e AWS; e levantamento de servidores web linux</b> em experiências prévias.",
        TextThree:  "No front end, tenho mais conhecimentos de <b>Vue.js, com diversos frameworks de componentização, como Vuetify, Bootstrap, Quasar e Tailwind</b>. Com as minhas experiências anteriores no desenvolvimento front end também foram adquiridos conhecimentos de <b>HTML, Javascript e CSS</b>.",
        TextFour: "No momento, estou adquirindo mais conhecimentos de desenvolvimento back end, principalmente devido ao meu emprego atual, mas em meu tempo livre, e a médio prazo, <b>estou visando adquirir mais conhecimento de animações CSS e JS, criação e manipulação de imagens svg, testes automatizados e arquitetura Cloud no AWS</b>.",
        CardOne: "Principal",
      }
    }
  }
}
