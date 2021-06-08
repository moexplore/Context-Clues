
//     for (var i = 0; i < 101; i++){
//     var h3 = document.createElement('h3')
//     h3.innerText = `Accusation ${i}`
//     document.body.append(h3)
//     h3.addEventListener('click', function(){
//         var friends = ['Isaac', 'Ruben', 'Jon', 'Chad', 'Matt']
//         var locations = ['San Diego', "LA", 'Bham', 'Cullman', 'Atlanta', 'Georgia', 'India', 'Malaysia', "Kazakhstan", 'Randomplace']
//         var weapons = ['knife', "Gun", 'sword', 'cord', 'mouse', 'AK', 'floss', 'eyebrow', "hair", 'toilet lid', 'bubble bath', "rod", 'macaroni', 'apple', 'housepaint', 'book', 'pecans', 'switchblade', "kookoo clock", 'paper']
//         var randomFriend = friends[Math.floor(Math.random() * friends.length)];
//         var randomLocation = locations[Math.floor(Math.random() * locations.length)];
//         var randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
//         alert(`I accuse ${randomFriend} with the ${randomWeapon} in ${randomLocation}!`)
//     })
// }

// It gets equal to 101 and then is hoisted so everywhere it's equal to 101.  Geez.  var is somethin else
// The above works around the var issue by just not using i.  It's what I first did and then I remembered I had to find a way to use i as part of the challenge.  I tried cutting and pasting the functions every which way but nothing worked.  Garrett then showed me about passing i through the displayAlert which served as the caboose to ferret the var i to the next part.  Never did that before so that's really cool.  One of my big realizations was that alerting needed to be it's own function inside displayAlert or else the page wouldn't display anything and just cycle through the alerts.  Why?  I tested it out and clicked OK on all the alerts and after the 100 times the page loaded. (And then it didn't alert when I clicked on the accusations)  So that alert once it was called must have been hoisted to the beginning.  So closure helped with it not being hoisted yet?  Maybe that's a feature of closure.
for (var i = 0; i < 100; i++){
    var h3 = document.createElement('h3')
    // So there wouldn't be an "Accusation 0" on the page
    h3.innerText = `Accusation ${i + 1}`
    document.body.append(h3)
    h3.addEventListener('click', displayAlert(i))
    function displayAlert (variable){
        var friends = ['Isaac', 'Ruben', 'Jon', 'Chad', 'Matt']
        var locations = ['San Diego', "LA", 'Bham', 'Cullman', 'Atlanta', 'Georgia', 'India', 'Malaysia', "Kazakhstan", 'Randomplace']
        var weapons = ['knife', "Gun", 'sword', 'cord', 'mouse', 'AK', 'floss', 'eyebrow', "hair", 'toilet lid', 'bubble bath', "rod", 'macaroni', 'apple', 'housepaint', 'book', 'pecans', 'switchblade', "kookoo clock", 'paper']
        function alerting() {
        alert(`I accuse ${friends[variable % 5]} with the ${weapons[variable % 20]} in ${locations[variable % 10]}!`)
        return
        }
        return alerting
        }
        
    
    
}


    
    
    



