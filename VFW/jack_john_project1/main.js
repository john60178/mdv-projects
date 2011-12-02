// John Jack
// Project 2 JavaScript
// November 30, 2011
// VFW Term 1211

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {

    // getElementById Function
    function $(x) {
    var theElement = document.getElementById(x);
    return theElement;
    }
    
    // Create select field element and populate with options.
    function makeCats() {
        var formTag = document.getElementsByTagName("form"),   //FormTag is an array of all the form tags.
            selectLi = $('genres'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "genres");
        for(var i=0, j=genre.length; i<j; i++) {
           var makeOption = document.createElement('option');
           var optText = genre[i];
           makeOption.setAttribute("value", optText);
           makeOption.innerHTML = optText;
           makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    // Find value of selected check box.
    function getCheckboxValue() {
       if($('favoriteArtist').checked) {
            favoirteArtistValue = $('favoriteArtist').value;
       } else {
            favoirteArtistValue = "No"
       }
    }
    
    function toggleControls(n) {
        switch(n) {
            case "on":
                $('contactForm').style.display = "none";
                $('clear').style.display = "inline";
                $('displayLink').style.display = "none";
                $('addNew').style.display = "inline";
                break;
            case "off":
                $('contactForm').style.display = "block";
                $('clear').style.display = "inline";
                $('displayLink').style.display = "inline";
                $('addNew').style.display = "none";
                $('items').style.display = "none";
                break;
            default:
                return false;
        }
    }
    function storeData() {
        var id                     = Math.floor(Math.random()*100000001);
        // Gather up all our form field values and store in an object.
        // Object properties contain array with the form label and input value.
        getCheckboxValue();
        var item = {};
            item.genre              = ["Genre:", $('genres').value];
            item.artist             = ["Artist:", $('artist').value];
            item.song               = ["Song:", $('song').value];
            item.format             = ["Format:", $('format').value];
            item.favoriteArtist     = ["Favorite Artist:", favoriteArtistValue];
            item.starRating         = ["Star Rating:", $('starRating').value];
            item.dateSaved          = ["Date Saved:", $('dateSaved').value];
            item.notes              = ["Notes:", $('notes').value];
    
        // Save data into Local Storage: Use Stringify to convert our objects to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Contact Saved!");
    }   
    
    function getData(){
        toggleControls("on");
        // Write Data from Local Storage to the browser.
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len;i++) {
            var makeli = document.createElement('li');
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            // Convert string from local storage back into an object by using JSON.parse().
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            for(var n in obj) {
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubli.innerHTML = optSubText;
            }
        }
    }
    
    function clearLocal() {
        if(localStorage.length === 0) {
            alert("There is no data to clear.")
        } else {
            localStorage.clear();
            alert("All contents have been deleted!");
            window.location.reload();
            return false;
        }
    }
    
    // Variable defaults
    var genre = ["Select Genre", "Rock", "Hip Hop", "R&B", "Classical", "Jazz", "Oldies", "Alternative", "Gospel"],
        //format = ["Select Format", "MP3", "iTunes", "CD"],
        favoriteArtistValue = "No";
        
    makeCats();
    
    // Set Link & Submit Click Events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", storeData);

});