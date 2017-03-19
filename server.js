var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    Biography: {
        title: 'SHAH RUKH KHAN | BIOGRAPHY',
        heading: 'SHAH RUKH KHAN',
        content: `
            <p>
                His first (and only) movie that I watched (this year, even if it was released in 2008) was My Name is Khan And not only was the movie excellent, but SRK deserved an Oscar if Hollywood was not manipulated"
                                                                                                             -PAULO COELHO
            </p>
            <p>
                Shah Rukh Khan (born Shahrukh Khan; 2 November 1965), also known as SRK, is an Indian film actor, producer and television personality. Referred to in the media as the "Baadshah of Bollywood", "King of Bollywood" or "King Khan", he has appeared in more than 80 Bollywood films, and earned numerous accolades, including 14 Filmfare Awards. Khan has a significant following in Asia and the Indian diaspora worldwide. In terms of audience size and income, he has been described as one of the most successful film stars in the world.
            </p>
            <p>
                Khan began his career with appearances in several television series in the late 1980s. He made his Bollywood debut in 1992 with Deewana. Early in his career, Khan was recognised for portraying villainous roles in the films Darr (1993), Baazigar (1993) and Anjaam (1994). He then rose to prominence after starring in a series of romantic films, including Dilwale Dulhania Le Jayenge (1995), Dil To Pagal Hai (1997), Kuch Kuch Hota Hai (1998), Mohabbatein (2000) and Kabhi Khushi Kabhie Gham... (2001). He earned critical acclaim for his portrayal of an alcoholic in Devdas (2002), a NASA scientist in Swades (2004), a hockey coach in Chak De! India (2007) and a man with Asperger syndrome in My Name Is Khan (2010). His highest-grossing films include the comedies Chennai Express (2013) and Happy New Year (2014). Many of his films display themes of Indian national identity and connections with diaspora communities, or gender, racial, social and religious differences and grievances. For his contributions to film, the Government of India honoured him with the Padma Shri, and the Government of France awarded him both the Ordre des Arts et des Lettres and the Légion d'honneur.
            </p>`
            
        },
    Movies : {
        title: 'MOVIES | SHAH RUKH KHAN',
        heading: 'SHAH RUKH KHAN MOVIES',
        content: `
            <p>
                Raees is a 2017 Indian action crime thriller film directed by Rahul Dholakia and produced by Gauri Khan, Ritesh Sidhwani and Farhan Akhtar under their banners Red Chillies Entertainment and Excel Entertainment
            </p>`
        },
    News : { 
        title: 'MOVIES | SHAH RUKH KHAN',
        heading: 'SHAH RUKH KHAN MOVIES',
        content: `
            <p>
                THIS IS PAGE IS UNDER CONSTRUCTION
            </p> `
        }
};
function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate = `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device -width,initial scale=1 "/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    Feb 16 2017
                </div>
                <div>
                    ${content}
                    </p>
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}    

app.get('/:articleName', function (req, res) {
    //articleName == Biography)
    //articles[articleName]=={} content object for Biography
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname,'ui','index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});


app.get('/Biography', function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'Biography.html'));
});

app.get('/Movies', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'Movies.html'));
});

app.get('/News', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'News.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi1.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
