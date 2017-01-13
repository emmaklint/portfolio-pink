var items = { automorning: { src: 'automorning',
                      active: false,
                      title: 'auto:morning',
                      color: 'url(img/am.png)',
                      pitch: 'A mobile application to help simplify the users mornings routine using external input from an API and Raspberry Pi.',
                      about: "auto:morning is a mobile application aiming to simplify the users morning routine by giving them just the right information at the right time. We made the application with stressful mornings when you want to go to work or school in the most efficient way in mind. We were four persons who worked on the project for three weeks.",
                      course: "DM2518 Mobile Development with Web Technologies",
                      year: "Spring 2016",
                      role: "Product owner, designer and front end-developer",
                      tools: "AngularJS, Firebase, Adobe Illustrator",
                      team: "Emma Klint, Viktor Gustafsson, Ariel Blomkvist Rova, Viktor Ceder",
                      github: 'https://github.com/arielrova/dm2518-morningroutine',
                      text: [{ headline: "Concept",
                              paragraph: "E-quality ipsum Female software engineers get paid twelve percent less. Female software engineers get paid twelve percent less. After all, one of the founders of computer programming was a woman, Ada Lovelace, back in the 1840s. Women’s acceptance rates dominate over men’s for every programming language in the top 10, to various degrees. It’s just unprofessional. Tech needs to grow up. Twenty percent of female web developers perceive gender bias has hurt them professionally vs one percent of male web developers. Nearly half of all female engineers are leaving the field.",
                              images: { image1: 'img/Artboard 5.png', 
                                      image2: 'img/Project4.png',
                                      image3: 'img/Project5.png',
                                      image4: 'img/Project6.png'},
                              gallery: true,
                              singleimage: false
                            },
                            { headline: "Concept",
                            paragraph: "E-quality ipsum Female software engineers get paid twelve percent less. Female software engineers get paid twelve percent less. After all, one of the founders of computer programming was a woman, Ada Lovelace, back in the 1840s. Women’s acceptance rates dominate over men’s for every programming language in the top 10, to various degrees. It’s just unprofessional. Tech needs to grow up. Twenty percent of female web developers perceive gender bias has hurt them professionally vs one percent of male web developers. Nearly half of all female engineers are leaving the field.",
                            image:  'img/Artboard 5.png',
                            gallery: false,
                            singleimage: true
                            }
                            ]},
              autumn: { src: 'autumn',
                      active: false,
                      title: 'Bilder från en höst!',
                      color: 'url(img/Project1.png)',
                      pitch: 'A project exploring the possibility to automate the analysis of x-rays using machine learning and computer vision as a tool for classification.',
                      about: "In this project we explored the possibility to automate the analysis of x-ray images using machine learning and computer vision as a tool for the classification. We did this by creating a scaleable platform for labeling of x-ray images, which is connected with crowdsourcing platforms. The classification of x-ray images of wrists is done using machine learning. The collected data is used to build a library of classified x-ray images which will help to improve the efficiency of analysis of bone fractures.",
                      course: "DH1245 Multimodala interaktioner och gränssnitt",
                      year: "Fall 2016",
                      role: "User Experience",
                      tools: "Sketch, JavaScript, Photoshop",
                      team: "Emma Klint, Caroline Lönn, Simone Stenis Perron",
                      text: [{ headline: "Concept",
                              paragraph: "E-quality ipsum Female software engineers get paid twelve percent less. Female software engineers get paid twelve percent less. After all, one of the founders of computer programming was a woman, Ada Lovelace, back in the 1840s. Women’s acceptance rates dominate over men’s for every programming language in the top 10, to various degrees. It’s just unprofessional. Tech needs to grow up. Twenty percent of female web developers perceive gender bias has hurt them professionally vs one percent of male web developers. Nearly half of all female engineers are leaving the field."
                            }],
                      image: 'img/Project1.png'},
              axel: { src: 'axel',
                      active: false,
                      title: 'Axels Student!',
                      color: 'url(img/Project2.png)',
                      pitch: 'A project exploring the possibility to automate the analysis of x-rays using machine learning and computer vision as a tool for classification.',
                      about: "In this project we explored the possibility to automate the analysis of x-ray images using machine learning and computer vision as a tool for the classification. We did this by creating a scaleable platform for labeling of x-ray images, which is connected with crowdsourcing platforms. The classification of x-ray images of wrists is done using machine learning. The collected data is used to build a library of classified x-ray images which will help to improve the efficiency of analysis of bone fractures.",
                      course: "DH1245 Multimodala interaktioner och gränssnitt",
                      year: "Fall 2016",
                      role: "User Experience",
                      tools: "Sketch, JavaScript, Photoshop",
                      team: "Emma Klint, Caroline Lönn, Simone Stenis Perron",
                      text: [{ headline: "Concept",
                              paragraph: "E-quality ipsum Female software engineers get paid twelve percent less. Female software engineers get paid twelve percent less. After all, one of the founders of computer programming was a woman, Ada Lovelace, back in the 1840s. Women’s acceptance rates dominate over men’s for every programming language in the top 10, to various degrees. It’s just unprofessional. Tech needs to grow up. Twenty percent of female web developers perceive gender bias has hurt them professionally vs one percent of male web developers. Nearly half of all female engineers are leaving the field."
                            }],
                      image: 'img/Project4.png'},
              bokeh: { src: 'bokeh',
                      active: false,
                      title: 'Bokeh!',
                      color: 'url(img/Project3.png)',
                      pitch: 'A project exploring the possibility to automate the analysis of x-rays using machine learning and computer vision as a tool for classification.',
                      about: "In this project we explored the possibility to automate the analysis of x-ray images using machine learning and computer vision as a tool for the classification. We did this by creating a scaleable platform for labeling of x-ray images, which is connected with crowdsourcing platforms. The classification of x-ray images of wrists is done using machine learning. The collected data is used to build a library of classified x-ray images which will help to improve the efficiency of analysis of bone fractures.",
                      course: "DH1245 Multimodala interaktioner och gränssnitt",
                      year: "Fall 2016",
                      role: "User Experience",
                      tools: "Sketch, JavaScript, Photoshop",
                      team: "Emma Klint, Caroline Lönn, Simone Stenis Perron",
                      text: [{ headline: "Concept",
                              paragraph: "E-quality ipsum Female software engineers get paid twelve percent less. Female software engineers get paid twelve percent less. After all, one of the founders of computer programming was a woman, Ada Lovelace, back in the 1840s. Women’s acceptance rates dominate over men’s for every programming language in the top 10, to various degrees. It’s just unprofessional. Tech needs to grow up. Twenty percent of female web developers perceive gender bias has hurt them professionally vs one percent of male web developers. Nearly half of all female engineers are leaving the field."
                            }],
                      image: 'img/Project4.png'},
            }

var vue = new Vue({
  el: '#app',
  data: {
  	selectedItem: { title: 'Placeholder' },
    items: items,
  },
   methods: {
        onHover: function (item) {
        	if (item.active == false) {
        		item.active = true;
        	}
        },
        mouseOut: function(item) {
        	if (item.active == true) {
        		item.active = false;
        	}
        }
  }
})

// window.onload = function () {
if (window.location.hash) {

  hash = window.location.hash.substring(1);
  vue.selectedItem = items[hash];

}


// external js: flickity.pkgd.js

