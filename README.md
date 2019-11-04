![header img](https://github.com/Wiebsonice/frontend-applications/blob/master/wiki-assets/readme-header.gif)
# Buddha experience

Dit project is een concept uitwerking van een webapplicatie gemaakt in VueJs in opdracht voor het Tropenmuseum van uit het HvA.

* [Het Concept](https://github.com/Wiebsonice/frontend-applications/blob/master/README.md#het-concept)
* [Getting started](https://github.com/Wiebsonice/frontend-applications/blob/master/README.md#getting-started)
* [Wiki](https://github.com/Wiebsonice/frontend-applications/wiki)

# Het concept
Het concept is gemaakt voor jonge kinderen. Toen ik door het tropen museum liep viel het me op dat ze veel interactieve dingen hadden bij elke tentoonstelling. Dit zette me aan het denken, hoe bedenk ik een leuk concept, wat sowel digitaal, als analoog gelijk inzetbaar is en te snappen is voor kinderen.  
  
Er zijn veel dingen aan een boeddha die een speciale betekenis hebben, maar voor kinderen is dit alleen relevant als het simpel en kort word uitgelegd. Daarom laat ik de kinderen zichzelf vergelijken met de boeddha's. Dit doe ik met de lengte, het idee is dat mensen op de website met hun eigen lengte zichzelf kunnen vergelijken met de boeddha's. En in musea dit kunnen doen met hun eigen lengte. Daarmee trek je de aandacht van het kind, en kun je langzaam weetjes geven over wat een boeddha betekent, en wat zijn karaterestieken betekenen.  

De uitgebreide uitleg is te vinden op deze pagina [Buddha experience](https://github.com/Wiebsonice/frontend-applications/wiki/Buddha-Experience-concept)


## Getting Started
  
Volg deze instructies om het project op je locale machine draaiend te krijgen, voor develoment of test doeleinde.
Bekijk het kopje **deployment** om te lezen hoe je het project kunt deployen op een live systeem.


### Instaleren

Volg deze stappen om het project draaiend te krijgen

1. Open je terminal
2. Clone de repo

```
git clone https://github.com/Wiebsonice/frontend-applications.git
```

3. Instaleer de benodigde node medules

```
npm install
```

4. Start de node server

```
npm run serve
```

5. Navigate to the localhost via your browser

```
  - Local:   http://localhost:8080/
  - Network: http://<IP ADRES HERE>:8080/
```

Als alles goed is gegeaan zul je in de terminal het volgende bericht te zien krijgen:

```
 DONE  Compiled successfully in 167ms                                                                                                  10:03:23 AM


  App running at:
  - Local:   http://localhost:8080/
  - Network: http://172.16.1.175:8080/

```
En ten slotte zul je gegroet worden door de homepagina van het project


## Deployment
Soon meer uitleg

## Gebouwd met

* [VueJs](https://vuejs.org/) - Js Framework gebruikt
* [Node](https://nodejs.org/en/) - Dependency Management
* [Webpack](https://webpack.js.org/) - Pagebuilder
* [NMVW API](https://collectie.wereldculturen.nl/) - API voor data
* [SparQl](https://www.w3.org/TR/rdf-sparql-query/) - SpaQl taal van de database
  
## Features

* [Routing](https://github.com/Wiebsonice/frontend-applications/wiki/Documentatie-%7C-Routing)
* [Data uit API](https://github.com/Wiebsonice/frontend-applications/wiki/Documentatie-%7C-Data-ophalen-en-gebruiken)
* [Data manipulatie](https://github.com/Wiebsonice/frontend-applications/wiki/Documentatie-%7C-Data-bewerken-clientside)
* [SparQl Query](https://github.com/Wiebsonice/frontend-applications/wiki/Documentatie-%7C-SparQl-Query)

  
## API Data

De Data die ik gebruik in de app komt van het endpoint van de NMVW collectie. Hoe ik deze data binnenhaal is te lezen op de pagina [](), dit is met SparQl gedaan. De data die ik terug krijg als object ziet er alsvolgd uit:

```
0: {
   cho: {
      type: "uri",
      value: "https://hdl.handle.net/20.500.11840/1098099"
   },
   extent: {
      type: "literal",
      value: "3.7"
   },
   img: {
      type: "literal",
      value: "https://collectie.wereldculturen.nl/cc/imageproxy.ashx?server=localhost&port=17581&filename=images/Images/WM//050038.jpg"
   },
   title: {
      type: "literal",
      value: "Godenbeeld",
      xml:lang: "ned"
   },
   type: {
      type: "literal",
      value: "Boeddhabeeld"
   }
},
1: {...},
2: {...},


```

De data die je hierboven ziet is binnengehaald door mij en is informatie over boeddha beelden. De `Cho` is het object nummer, de `Extent` geeft de afmeetingen, de `img` bevat de link naar de image, de `title` spreekt voor zichzelf, en ten slotte `type` geeft het type voorbeeld weer.

### DataBewerking
Een aantal waarden die ik binnen krijg heb ik clientside opgelost. Zo heb ik de verschillende formateringen van de lengtes van de beelden gelijk getrokken, Heb ik van de image links de `http://` links omgezet naar `https://`. En ten slotte heb ik de objecten gesorteert op de lengte. Dit valt allemaal te lezen op [Data bewerken clientside](https://github.com/Wiebsonice/frontend-applications/wiki/Documentatie-%7C-Data-bewerken-clientside)
  
## Author

* **Wiebe Kremer** - *Initial work* - [Wiebsonice](https://github.com/Wiebsonice)
  
## Acknowledgements

* Scss implementatie met hulp van [Coenmathijssen](https://github.com/Coenmathijssen/) 
* Clientside datamanipulatie `http` to `https` fix met hulp van [Razpudding](https://github.com/razpudding)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


