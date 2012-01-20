// John Jack
// Mobile Interface & Usability Term 1201
// Project 3 JSON data
// January 19, 2012

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
            },
            "song3": {
              "genre": ["Genre:", "Hip_Hop"],
              "artist": ["Artist:", "Snoop Dogg"],
              "song": ["Song:", "Gin & Juice"],
              "format": ["Format:", "iTunes"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "8"],
              "dateSaved": ["Date Saved:", "2012-01-05"],
              "notes": ["Notes:", "One of Snoop Dogg classics."]
            },
            "song4": {
              "genre": ["Genre:", "Hip_Hop"],
              "artist": ["Artist:", "Jay-Z"],
              "song": ["Song:", "Watch the Throne"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "Yes"],
              "starRating": ["Star Rating:", "7"],
              "dateSaved": ["Date Saved:", "2011-10-01"],
              "notes": ["Notes:", "New Jay-Z song."]
            },
            "song5": {
              "genre": ["Genre:", "Rock"],
              "artist": ["Artist:", "AC/DC"],
              "song": ["Song:", "Thunderstruck"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "Yes"],
              "starRating": ["Star Rating:", "6"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "This is another favorite song from AC/DC."]
            },
            "song6": {
              "genre": ["Genre:", "Rock"],
              "artist": ["Artist:", "AC/DC"],
              "song": ["Song:", "TNT"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "Yes"],
              "starRating": ["Star Rating:", "5"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "This is my first song I heard from AC/DC."]
            },
            "song7": {
              "genre": ["Genre:", "Rock"],
              "artist": ["Artist:", "AC/DC"],
              "song": ["Song:", "Highway To Hell"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "Yes"],
              "starRating": ["Star Rating:", "8"],
              "dateSaved": ["Date Saved:", "2012-01-012"],
              "notes": ["Notes:", "Another song from AC/DC."]
            },
            "song8": {
              "genre": ["Genre:", "R&B"],
              "artist": ["Artist:", "R. Kelly"],
              "song": ["Song:", "Ignition"],
              "format": ["Format:", "iTunes"],
              "favoriteArtist": ["Favorite Artist:", "Yes"],
              "starRating": ["Star Rating:", "8"],
              "dateSaved": ["Date Saved:", "2012-04-01"],
              "notes": ["Notes:", "This is my favorite song from R. Kelly."]
            },
            "song9": {
              "genre": ["Genre:", "Classical"],
              "artist": ["Artist:", "Johann Sebastian Bach"],
              "song": ["Song:", "Canta No. 143"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "4"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "This is a really old song."]
            },
            "song10": {
              "genre": ["Genre:", "Classical"],
              "artist": ["Artist:", "Ludwig van Beethoven"],
              "song": ["Song:", "Leonore"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "4"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "This song was produced in 1806."]
            },
            "song11": {
              "genre": ["Genre:", "Classical"],
              "artist": ["Artist:", "Frederic Chopin"],
              "song": ["Song:", "Enchantment"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "3"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "This song was made in 1830."]
            },
            "song12": {
              "genre": ["Genre:", "Classical"],
              "artist": ["Artist:", "George Gershwin"],
              "song": ["Song:", "They Can't Take That Away From Me"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "3"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "This song was created two months before Gershwin's death."]
            },
            "song13": {
              "genre": ["Genre:", "Classical"],
              "artist": ["Artist:", "Wolfgang Mozart"],
              "song": ["Song:", "Requiem"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "3"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "Mozart is a very famous Classical composer."]
            },
            "song14": {
              "genre": ["Genre:", "Jazz"],
              "artist": ["Artist:", "Frank Sinatra"],
              "song": ["Song:", "Come Fly with Me"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "3"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "Frank Sinatra was the godfather of Jazz."]
            },
            "song15": {
              "genre": ["Genre:", "Jazz"],
              "artist": ["Artist:", "Nat King Cole"],
              "song": ["Song:", "The Christmas Song"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "6"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "King Cole was instrumental in pushing Jazz to a whole new level."]
            },
            "song16": {
              "genre": ["Genre:", "Jazz"],
              "artist": ["Artist:", "Louis Armstrong"],
              "song": ["Song:", "Hello Dolly"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "3"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "Another important influence in Jazz music was Louis Armstrong."]
            },
            "song17": {
              "genre": ["Genre:", "Oldies"],
              "artist": ["Artist:", "Chuck Berry"],
              "song": ["Song:", "Johnny B Goode"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "4"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "A old song I always heard time and time again."]
            },
            "song18": {
              "genre": ["Genre:", "Oldies"],
              "artist": ["Artist:", "Gladys Knight & The Pips"],
              "song": ["Song:", "Midnight Train to Georgia"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "No"],
              "starRating": ["Star Rating:", "4"],
              "dateSaved": ["Date Saved:", "2012-04-01"],
              "notes": ["Notes:", "A favorite song from my Oldies collection."]
            },
            "song19": {
              "genre": ["Genre:", "Oldies"],
              "artist": ["Artist:", "James Brown"],
              "song": ["Song:", "Try Me"],
              "format": ["Format:", "MP3"],
              "favoriteArtist": ["Favorite Artist:", "Yes"],
              "starRating": ["Star Rating:", "8"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "James Brown is the man!"]
            },
            "song20": {
              "genre": ["Genre:", "Gospel"],
              "artist": ["Artist:", "Kirk Franklin"],
              "song": ["Song:", "Hello Fear"],
              "format": ["Format:", "iTunes"],
              "favoriteArtist": ["Favorite Artist:", "Yes"],
              "starRating": ["Star Rating:", "8"],
              "dateSaved": ["Date Saved:", "2011-10-12"],
              "notes": ["Notes:", "A very uplifting song."]
            }
    };
        // Store the JSON Object into Local Storage.
        for(var n in json) {
            var id                     = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
 };
 
 autoFillData();
        