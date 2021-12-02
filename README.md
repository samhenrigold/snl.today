# snl.today

## Data Sources
The most reliable way to find upcoming guests is through the [NBCUniversal Media Village press release portal](https://www.nbcumv.com/mediavillage#/home):
- [_Saturday Night Live_ on Media Village](https://www.nbcumv.com/mediavillage/interactive/2929fed4187b40648b79a9839e70e91fproduct169208/index.html#/show/e91b3cec-b121-41ae-ac5b-1725193c92dd/press-releases)
- [_Late Night with Seth Meyers_ on Media Village](https://www.nbcumv.com/mediavillage/interactive/2929fed4187b40648b79a9839e70e91fproduct169208/index.html#/show/1a72eb63-bc15-42a3-84d3-f108c3cd9d80/press-releases)
- [_The Tonight Show with Jimmy Fallon_ on Media Village](https://www.nbcumv.com/mediavillage/interactive/2929fed4187b40648b79a9839e70e91fproduct169208/index.html#/show/ef2b8417-a8f9-4d23-a3db-0616dd5eb096/press-releases)

As a backup, the episode table on the Wikipedia entry for the respective show's season can be used.
- [_Saturday Night Live_ (Season 47)](https://en.wikipedia.org/wiki/Saturday_Night_Live_(season_47)#Episodes)
- [List of _Late Night with Seth Meyers_ episodes (2021)](https://en.wikipedia.org/wiki/List_of_Late_Night_with_Seth_Meyers_episodes_(2021))
- [List of _The Tonight Show Starring Jimmy Fallon_ episodes (2021)](https://en.wikipedia.org/wiki/List_of_The_Tonight_Show_Starring_Jimmy_Fallon_episodes_(2021))

## Data Format

Data is stored for this site in JSON files. Use this example from the as a reference if you're unsure how to structure it:
```
[
    {
        "date": "20211206T003500-0500",
        "isNew": true,
        "guests": [
            {
                "name": "Michael J. Fox",
                "promo": "https://www.goodreads.com/book/show/50403451-no-time-like-the-future"
            }
        ],
        "musicalGuests": [
            {
                "name": "Wizkid",
                "promo": ""
            }
        ]
    },
    {
        "date": "20211207T003500-0500",
        "isNew": true,
        "guests": [
            {
                "name": "Halle Berry",
                "promo": "https://www.imdb.com/title/tt8310474/"
            },
            {
                "name": "Chris Kattan",
                "promo": "https://www.imdb.com/title/tt10054778/"
            },
            {
                "name": "Rutger Bregman",
                "promo": "https://www.goodreads.com/en/book/show/52879286"
            }
        ],
        "musicalGuests": []
    }
]
```

## Promo Links
To avoid favoring one provider over another (e.g. Amazon vs anything else, Apple Music vs Spotify), links are best commercially neutral. The preferred links for common mediums are:
| Medium                 | Link Provider                     | Example                                                       |
| -----------            | -----------                       | -----------                                                   |
| Books                  | https://www.goodreads.com         | https://www.goodreads.com/book/show/53487334-the-best-of-me   | 
| Music                  | https://en.wikipedia.org          | https://en.wikipedia.org/wiki/Crash_(Charli_XCX_album)        |
| Movies, TV Shows       | https://www.imdb.com              | https://www.imdb.com/title/tt3526078/                         |

## Technical Details
Dates are stored in ISO-8601 format in Eastern time (UTC−5). The commonly used formats for each program are:
- Saturday Night Live: `YYYYMMDDT233500-0500`
- Late Night with Seth Meyers: `YYYYMMDDT003500-0500`
- The Tonight Show Starring Jimmy Fallon: `YYYYMMDDT233500-0500`

The morning after an episode airs, at 9AM eastern, the episode is removed from the JSON.

