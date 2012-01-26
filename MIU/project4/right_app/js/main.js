// John Jack
// Project 4 JavaScript- main.js
// MIU Term 1201
// January 26, 2012

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
            selectLi = $('list'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "genres");
        for(var i=0, j=genreList.length; i<j; i++) {
           var makeOption = document.createElement('option');
           var optText = genreList[i];
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
            favoirteArtistValue = "No";
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
        }
        return false;
    }
    
    function storeData(key) {
        // If there is no key, this means that it is a brand new item and we need a new key.
        if(!key) {
            var id                     = Math.floor(Math.random()*100000001);
        } else {
            // Set the id to the existing key we're editing so it will save over the data.
            // The key is the same key that's been passed along from the editSubmit event handler.
            // to the validate function, and then passed here, into the storeData function.
            id = key;
        }
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
        alert("Song Saved!");
    }   
    
    function getData(){
        toggleControls("on");
         /*
        if(localStorage.length === 0) {
            autoFillData();
            //alert("There is no data in Local Storage so default data was added.");
        }
      */

        // Write Data from Local Storage to the browser.
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len;i++) {
            var makeli = document.createElement('li');
            linksLi = document.createElement('li');
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            // Convert string from local storage back into an object by using JSON.parse().
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            getImage(obj.genre[1], makeSubList);
            for(var n in obj) {
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi); // Create our edit and delete buttons/link for each item in local storage.
        }
    }
    
    // Get the image for the correct category.
    function getImage(catName, makeSubList) {
        var imageLi = document.createElement('li');
        makeSubList.appendChild(imageLi);
        var newImg = document.createElement('img');
        var setSrc = newImg.setAttribute("src", "images/" + catName + ".png");
        imageLi.appendChild(newImg);
    };
    
    /* JSON Object which will auto populate local storage.
    function autoFillData() {
        var json = {
            "song1": {
              "genre": ["Genre:", "Hip_Hop"],
              "artist": ["Artist:", "Eminem"],
              "song": ["Song:", "Mockingbird"],
              "format": ["Format:", "iTunes"],
              "favoriteArtist": ["Favorite Artist:", "Yes"],
              "starRating": ["Star Rating:", "8"],
              "dateSaved": ["Date Saved:", "2011-12-10"],
              "notes": ["Notes:", "This is my favorite song from Eminem."]
            },
            "song2": {
              "genre": ["Genre:", "Rock"],
              "artist": ["Artist:", "AC/DC"],
              "song": ["Song:", "Back In Black"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "6"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "This is my favorite song from AC/DC."]
            }
        };

        // Store the JSON Object into Local Storage.
        for(var n in json) {
            var id                     = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    }
        */
    
    //Make Item Links which creates the edit and delete links for each stored item when displayed.
    function makeItemLinks(key, LinksLi) {
        // Add edit single item link
        var editLink = document.createElement('a');
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Song";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);
        
        // Add line break between links
        var breakTag = document.createElement('br');
        linksLi.appendChild(breakTag);
        
        // Add delete single item link.
        var deleteLink = document.createElement('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Song";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
    }
    
    function editItem() {
        // Grab the data from our item from local storage.
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        
        // Show the form so we can edit the item.
        toggleControls("off");
        
        // Populate the form fields with current localStorage values.
        $('genres').value = item.genre[1];
        $('artist').value = item.artist[1];
        $('song').value = item.song[1];
        $('format').value = item.format[1];
        if (item.favoriteArtist[1] == "Yes") {
            $('favoriteArtist').setAttribute("checked", "checked");
        }
        $('starRating').value = item.starRating[1];
        $('dateSaved').value = item.dateSaved[1];
        $('notes').value = item.notes[1];
    
        // Remove the initial listener from the input 'save contact' button.
        save.removeEventListener("click", storeData);
        // Change the Submit Button Value to Edit Button.
        $('submit').value = "Edit Song";
        var editSubmit = $('submit');
        // Save the key value established in this function as property of editSubmit event so can use that value when we save the data we edited.
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
    }
    
    function deleteItem() {
        var ask = confirm("Are you sure you want to delete this song?");
        if(ask) {
            localStorage.removeItem(this.key);
            alert("Song was deleted!");
            window.location.reload();
        } else {
            alert("Song was NOT deleted!");
        }
    }
    
    function clearLocal() {
        if(localStorage.length === 0) {
            alert("There is no data to clear.");
        } else {
            localStorage.clear();
            alert("All contents have been deleted!");
            window.location.reload();
        }
        return false;
    }
    
    function validate(e) {
       // Define the elements we want to check
       var getGenre = $('genres');
       var getArtist = $('artist');
       var getSong = $('song');
       
       // Reset Error Messages
       errMsg.innerHTML = "";
       getGenre.style.border = "1px solid black";
       getArtist.style.border = "1px solid black";
       getSong.style.border = "1px solid black";
       
       // Get Error Messages
       var messageAry = [];
       // Group Validation
       if(getGenre.value === "Select Genre") {
        var genreError = "Please choose a genre.";
        getGenre.style.border = "1px solid red";
        messageAry.push(genreError);
       }
       
       // Artist Validation
       if(getArtist.value === "") {
        var artistError = "Please enter an artist's name.";
        getArtist.style.border = "1px solid red";
        messageAry.push(artistError);
       }
       
       // Song Validation
       if(getSong.value === "") {
        var songError = "Please enter a song title.";
        getSong.style.border = "1px solid red";
        messageAry.push(songError);
       }
       
       // If there were errors, display them on the screen.
       if(messageAry.length >= 1) {
            for(var i=0, j=messageAry.length; i < j; i++) {
                var txt = document.createElement('li');
                txt.innerHTML = messageAry[i];
                errMsg.appendChild(txt);
            }
            e.preventDefault();
            return false;
        } else {
            // If everything is OK, the data will save. Send the key value (came from editData function).
            // Remember this key value was passed thru the editSubmit event listener as a property.
            sx
        }
    };
    
    // Variable defaults
    var genreList = ["Select Genre", "Rock", "Hip_Hop", "R_&_B", "Classical", "Jazz", "Oldies", "Alternative", "Gospel"],
        //format = ["Select Format", "MP3", "iTunes", "CD"],
        favoriteArtistValue = "Yes",
        errMsg = $('errors');
        
    makeCats();
    
    // Set Link & Submit Click Events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", validate);

});

