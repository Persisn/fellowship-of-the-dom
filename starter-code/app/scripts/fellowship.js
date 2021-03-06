$(function () {
console.log("Document is ready");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var $body = $('body');


// Part 1


function makeMiddleEarth() {
  var $middleEarth = $('<section id = "middle-earth">')

  var landArr = lands.map(function(land) {
    console.log ('land', land)

  var landArticle = $(`
    <article>
      <h1> ${land} </h1>
    </article>
    `)

  return landArticle

})

//console.log(landArr)
$middleEarth.append(landArr)
$body.append($middleEarth)
}


  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body


makeMiddleEarth();


// Part 2

function makeHobbits() {

  var theShire = $('article:nth-child(1)')

//create ul
//var theShire = $('article').first()
var $hobbitList = $('<ul>')

  var hobbitsArr = hobbits.map(function(hobbit){
    //console.log('hobbit', hobbit)

    var $hobbitLi = $('<li>').text(hobbit)
    $hobbitLi.addClass('hobbit')
    return $hobbitLi
  })

  $hobbitList.append(hobbitsArr)
  theShire.append($hobbitList)
}

  makeHobbits()

  //or var theShire = $('article').first()
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit



// Part 3

function keepItSecretKeepItSafe() {

    var $theRing = $('<div id = "the-ring" class= "magic-imbued-jewelry">')

    $theRing.on('click', nazgulScreech)
    $('li').first().append($theRing)



  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe()


// Part 4


function makeBuddies() {
var rivendell = $('article:nth-child(2)')
  var $aside = $('<aside>')

  var $buddiesList = $('<ul>')

    var buddiesArr = buddies.map(function(buddy){
      //console.log('hobbit', hobbit)

      var $buddiesLi = $('<li>').text(buddy)
      //$hobbitLi.addClass('hobbit')
      return $buddiesLi

      })

      $buddiesList.append(buddiesArr)
      $aside.append($buddiesList)
      rivendell.append($aside)
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

}

makeBuddies()
// Part 5


function beautifulStranger() {
var $changeStride = $('aside').find('li').eq(3).text('Aragorn')

  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger()
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  $('aside').find('ul').append($('.hobbit'))
}

leaveTheShire()
// Part 7


function forgeTheFellowShip() {

  var Rivendell = $('aside').find('li')
    console.log(Rivendell[1])
    var div = $('<div id= "the-fellowship">')
    $('article').eq(1).append(div)
    for (i = 0; i <= Rivendell.length; i ++) {
    div.append(Rivendell[i])
    //alert(`${Rivendell.eq[i].text()} has joined my party`)
    }

  // var $fellowshipArr =
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip()
// Part 8


function theBalrog() {
  $Gandalf = $('article').find('li').eq(0)

  $Gandalf.text('Gandalf the White')
  $Gandalf.css('background','white')
  $Gandalf.css('border','1px solid grey')


  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog()

// Part 9

function hornOfGondor() {

  //alert(`the horn of gondor has been blown`)
  $boromir = $('article').find('li').eq(4)
  $boromir.css('textDecoration', 'line-through')
  $boromir.remove()
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

hornOfGondor()
// Part 10

function itsDangerousToGoAlone(){
  frodo = $('div').find('.hobbit').eq(0)
  sam = $('div').find('.hobbit').eq(1)

  var $mordo = $('article').eq(2).append(frodo,sam)
  var div = $('article').eq(2).append('<div id = "mount-doom">')



  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  var mordo = $('article').eq(2)
  mordo.append('<div id = "gollum">')
  $("#gollum").append($("#the-ring"))
  $("#mount-doom").append($("#gollum"))
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

weWantsIt()
// Part 12

function thereAndBackAgain() {
  $("#gollum").remove()
  $("#the-ring").remove()
  $('.hobbit').remove()
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain()
})
