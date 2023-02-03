
// instructions  https://www.npmjs.com/package/react-search-autocomplete


const Universities = [
"A.T.Still University",	
"Abilene Christian University",
"Abraham Baldwin Agricultural College",
"Academy of Art University",
"Adams State University",
"Adelphi University",
"Adler Graduate School",
"Adler University",
"Adrian College",	
"AdventHealth University",	
"Agnes Scott College",	
"Air Force Institute of Technology",
"Alabama A & M University",
"Alabama State University",
"Alaska Bible College",
"Alaska Pacific University",
"Albany College of Pharmacy and Health Sciences",
"Albany Law School",
"Albany Medical College",
"Albany State University",
"Albertus Magnus College",
"Albion College",
"Albright College",
"Alcorn State University",
"Alderson Broaddus University",
"Alfred State College",
"Alfred University",
"Alice Lloyd College",
"Allegheny College",
"Allen College",
"Allen University",
"Alliant International University",
"Alma College",
"Alvernia University",
"Alverno College",
"Amberton University",
"American Baptist College",
"American Film Institute Conservatory",
"American International College",
"American Jewish University",
"American University",
"Amherst College",
"Anderson University",
"Andrews University",
"Angelo State University",
"Anna Maria College",
"Antioch University",
"Antioch University Los Angeles",
"Antioch University New England",
"Antioch University Santa Barbara"
]

// "Antioch University Seattle",
// Appalachian Bible College	Mount Hope
// 7	Appalachian College of Pharmacy	Oakwood
// 	Appalachian State University	Boone
// 4	Aquinas College	Grand Rapids
// 1	Aquinas College, Tennessee	Nashville
// 	Arcadia University	Glenside
// 0	Arizona Christian University	Phoenix
// Arizona State University	Tempe ...
// 	Arkansas Baptist College	Little Rock
// Arkansas State University	Jonesboro
// Arkansas Tech University	Russellville
// 	Arlington Baptist University	Arlington
// 	Art Academy of Cincinnati	Cincinnati
// ArtCenter College of Design	Pasadena
// 	Asbury University	Wilmore
// Ashland University	Ashland
// Assumption College	Worcester
// 	Athens State University	Athens
// 	Atlanta Metropolitan State College	Atlanta
// Auburn University	Auburn
// 	Auburn University at Montgomery	Montgomery
// 	Augsburg University	Minneapolis
// 	Augusta University	Augusta
// 	Augustana College	Rock Island
// 	Augustana University	Sioux Falls
// 	Aurora University	Aurora ...
// 	Austin College	Sherman
// 	Austin Peay State University	Clarksville
// 1	Ave Maria University	Ave Maria
// 1	Averett University	Danville ...
// 9	Avila University	Kansas City
// 	Azusa Pacific University	Azusa
// 	Babson College	Babson Park
// 7	Bacone College	Muskogee
// 	Baker College	Flint ...
// 1	Baker University	Baldwin City
// 	Baldwin Wallace University	Berea
// 	Ball State University	Muncie
// 	Bank Street College of Education	New York City
// 4	Baptist Bible College	Springfield
// 3	Baptist Health Sciences University	Memphis
// 4	Baptist University of the Americas	San Antonio
// 6	Barclay College	Haviland
// 	Bard College	Annandale - on - Hudson
// 1	Bard College at Simon's Rock	Great Barrington
// 	Barnard College	New York City
// 	Barry University	Miami ...
// 8	Barton College	Wilson
// 	Baruch College, CUNY	New York City
// Bastyr University	Kenmore
// Bates College	Lewiston
// 	Bay Path University	Longmeadow
// 	Bay State College	Boston ...
// Baylor College of Medicine	Houston
// Baylor University	Waco
// 	Beacon College	Leesburg
// 	Becker College	Worcester ...
// 	Belhaven University	Jackson
// Bellarmine University	Louisville
// Bellevue College	Bellevue
// Bellevue University	Bellevue ...
// 	Bellin College	Green Bay
// 	Belmont Abbey College	Belmont
// Belmont University	Nashville
// Beloit College	Beloit
// Bemidji State University	Bemidji
// 	Benedict College	Columbia
// 	Benedictine College	Atchison
// Benedictine University	Lisle
// 	Benjamin Franklin Institute of Technology	Boston
// Bennett College	Greensboro
// Bennington College	Bennington
// Bentley University	Waltham
// Berea College	Berea
// 	Berkeley College	New York City ...
// Berklee College of Music	Boston
// Berry College	Mount Berry
// 	Bethany College	Bethany
// 	Bethany College, Kansas	Lindsborg
// 	Bethany Lutheran College	Mankato
// 	Bethel College	North Newton
// 	Bethel University	Mishawaka
// Bethel University	Saint Paul ...
// 3	Bethel University, Tennessee	McKenzie
// 5	Bethesda University	Anaheim
// 	Bethune - Cookman University	Daytona Beach
// 6	Beulah Heights University	Atlanta
// 	Binghamton University, State University of New York	Vestal
// 	Biola University	La Mirada
// 9	Birmingham - Southern College	Birmingham
// 9	Bismarck State College	Bismarck
// 	Black Hills State University	Spearfish
// 5	Blackburn College	Carlinville
// 6	Blessing - Rieman College of Nursing and Health Sciences	Quincy
// 4	Bloomfield College	Bloomfield
// 	Bloomsburg University of Pennsylvania	Bloomsburg
// 6	Blue Mountain College	Blue Mountain
// 0	Bluefield College	Bluefield
// 7	Bluefield State College	Bluefield
// 	Bluffton University	Bluffton
// 	Bob Jones University	Greenville
// 0	Boise Bible College	Boise ...
// 	Boise State University	Boise
// 3	Boricua College	New York City
// 4	Boston Architectural College	Boston
// Boston College	Chestnut Hill
// 2	Boston Graduate School of Psychoanalysis	Brookline ...
// Boston University	Boston ...
// 	Bowdoin College	Brunswick
// 	Bowie State University	Bowie
// 	Bowling Green State University	Bowling Green ...
// 	Bradley University	Peoria
// 	Brandeis University	Waltham
// 	Brazosport College	Lake Jackson
// 	Brenau University	Gainesville
// 	Brescia University	Owensboro
// 	Brevard College	Brevard
// 	Brewton - Parker College	Mount Vernon
// 1	Briar Cliff University	Sioux City
// 	Bridgewater College	Bridgewater
// 	Bridgewater State University	Bridgewater
// Brigham Young University	Provo
// 	Brigham Young University - Hawaii	Laie
// 	Brigham Young University - Idaho	Rexburg
// 1	Brooklyn College	Brooklyn
// 	Brooklyn Law School	Brooklyn
// 	Broward College	Fort Lauderdale
// Brown University	Providence
// 9	Bryan College	Dayton ...
// 5	Bryan College of Health Sciences	Lincoln
// 7	Bryant and Stratton College	Buffalo ...
// 	Bryant University	Smithfield
// 2	Bryn Athyn College	Bryn Athyn
// 	Bryn Mawr College	Bryn Mawr
// 	Bucknell University	Lewisburg
// 	Buena Vista University	Storm Lake
// 0	Buffalo State College	Buffalo
// 4	Bushnell University	Eugene
// 	Butler University	Indianapolis
// Cabarrus College of Health Sciences	Concord
// 8	Cabrini University	Radnor
// 3	Cairn University	Langhorne ...
// 0	Caldwell University	Caldwell
// 	California Baptist University	Riverside ...
// 	California College of the Arts	San Francisco ...
// 	California Institute of Integral Studies	San Francisco
// California Institute of Technology	Pasadena
// 	California Institute of the Arts	Valencia
// California Lutheran University	Thousand Oaks
// California Polytechnic State University, San Luis Obispo	San Luis Obispo
// California State Polytechnic University, Pomona	Pomona
// California State University Channel Islands	Camarillo
// California State University Maritime Academy	Vallejo
// 	California State University San Marcos	San Marcos ...
// 	California State University, Bakersfield	Bakersfield
// 	California State University, Chico	Chico
// 	California State University, Dominguez Hills	Carson ...
// 	California State University, East Bay	Hayward ...
// 	California State University, Fresno	Fresno
// 	California State University, Fullerton	Fullerton ...
// 	California State University, Long Beach	Long Beach
// 	California State University, Los Angeles	Los Angeles
// 	California State University, Monterey Bay	Seaside
// 	California State University, Northridge	Northridge
// 	California State University, Sacramento	Sacramento
// 	California State University, San Bernardino	San Bernardino ...
// 	California State University, Stanislaus	Turlock ...
// 	California University of Pennsylvania	California
// 	California Western School of Law	San Diego
// 	Calumet College of St.Joseph	Whiting
// 	Calvary University	Kansas City
// Calvin University	Grand Rapids
// 	Cambridge College	Boston ...
// Cameron University	Lawton ...
// Campbell University	Buies Creek
// 	Campbellsville University	Campbellsville
// Canisius College	Buffalo
// Capital University	Columbus
// Capitol Technology University	Laurel
// 	Cardinal Stritch University	Milwaukee
// Carleton College	Northfield
// 	Carlow University	Pittsburgh
// Carnegie Mellon University	Pittsburgh ...
// 	Carolina University	Winston Salem ...
// Carroll College	Helena
// Carroll University	Waukesha ...
// 	Carson - Newman University	Jefferson City
// 	Carthage College	Kenosha
// Case Western Reserve University	Cleveland
// 	Castleton University	Castleton
// 	Catawba College	Salisbury
// 	Cazenovia College	Cazenovia
// 	Cedar Crest College	Allentown
// Cedarville University	Cedarville
// Centenary College of Louisiana	Shreveport
// 	Centenary University	Hackettstown
// 	Central Baptist College	Conway
// 	Central Christian College of Kansas	McPherson
// 	Central Christian College of the Bible	Moberly ...
// Central College	Pella
// Central Connecticut State University	New Britain
// 	Central Methodist University	Fayette
// Central Michigan University	Mount Pleasant
// 	Central Penn College	Summerdale
// 	Central State University	Wilberforce
// Central Washington University	Ellensburg ...
// 	Centralia College	Centralia
// Centre College	Danville
// Chadron State College	Chadron
// 	Chamberlain University	Addison ...
// Chaminade University of Honolulu	Honolulu
// Champlain College	Burlington ...
// Chapman University	Orange
// 	Charles R.Drew University of Medicine and Science	Los Angeles
// Charleston Southern University	Charleston
// Chatham University	Pittsburgh
// Chestnut Hill College	Philadelphia
// 	Cheyney University of Pennsylvania	Cheyney
// Chicago State University	Chicago
// 	Chipola College	Marianna
// 	Chowan University	Murfreesboro
// Christian Brothers University	Memphis
// Christopher Newport University	Newport News
// 	City University of Seattle	Seattle ...
// 	Claflin University	Orangeburg
// Claremont Graduate University	Claremont ...
// Claremont McKenna College	Claremont
// Clarion University of Pennsylvania	Clarion
// Clark Atlanta University	Atlanta
// Clark University	Worcester
// 	Clarke University	Dubuque
// 	Clarks Summit University	Clarks Summit
// 	Clarkson College	Omaha
// Clarkson University	Potsdam ...
// Clayton State University	Morrow
// Clear Creek Baptist Bible College	Pineville
// 4Cleary University	Howell ...
// Clemson University	Clemson
// 	Cleveland Institute of Art	Cleveland
// 	Cleveland Institute of Music	Cleveland
// Cleveland State University	Cleveland
// 	Cleveland University - Kansas City	Overland Park
// Coastal Carolina University	Conway ...	Coe College	Cedar Rapids
// 	Coker University	Hartsville
// Colby College	Waterville
// 	Colby - Sawyer College	New London
// Colgate University	Hamilton
// 8College for Creative Studies	Detroit
// 	College of Biblical Studies	Houston ...
// 339College of Central Florida	Ocala
// 2	College of Charleston	Charleston
// 555College of Coastal Georgia	Brunswick
// 	College of Mount Saint Vincent	The Bronx
// 	College of Our Lady of the Elms	Chicopee
// College of Saint Benedict / Saint John's University	St. Joseph ...
// 8	College of Saint Mary	Omaha
// 	College of Southern Nevada	Las Vegas
// 1	College of Staten Island	Staten Island
// 7	College of the Atlantic	Bar Harbor
// 	College of the Holy Cross	Worcester
// 0	College of the Ozarks	Point Lookout
// 	College of William & Mary	Williamsburg
// 	Colorado Christian University	Lakewood
// 	Colorado College	Colorado Springs ...
// 	Colorado Mesa University	Grand Junction
// 	Colorado School of Mines	Golden
// Colorado State University	Fort Collins
// 	Colorado State University - Pueblo	Pueblo ...
// 1	Colorado Technical University	Colorado Springs ...
// 78	Columbia Basin College	Pasco
// 0	Columbia College	Columbia
// 5	Columbia College Chicago	Chicago
// 68	Columbia College Hollywood	Tarzana
// 02	Columbia College, South Carolina	Columbia
// 69	Columbia International University	Columbia
// Columbia University in the City of New York	New York City
// 	Columbus College of Art and Design	Columbus
// Columbus State University	Columbus
// 	Concord University	Athens
// Concordia College	Moorhead
// 	Concordia College - New York	Bronxville
// 	Concordia University Ann Arbor	Ann Arbor
// 	Concordia University Chicago	River Forest
// Concordia University Irvine	Irvine
// Concordia University Texas	Austin
// 3	Concordia University Wisconsin	Mequon
// 53	Concordia University, Nebraska	Seward
// 9	Concordia University, St.Paul	Saint Paul
// 7	Connecticut College	New London
// 87	Converse College	Spartanburg
// 78	Conway School of Landscape Design	Northampton
// 68	Coppin State University	Baltimore
// 04	Corban University	Salem
// 3	Cornell College	Mount Vernon
// Cornell University	Ithaca
// Cornerstone University	Grand Rapids
// 	Cornish College of the Arts	Seattle
// 	Cottey College	Nevada
// 	Covenant College	Lookout Mountain
// 	Cox College	Springfield
// 	Cranbrook Academy of Art	Bloomfield Hills
// Creighton University	Omaha
// 	Criswell College	Dallas
// 	Crowley's Ridge College	Paragould
// Crown College	St.Bonifacius ...
// Culver - Stockton College	Canton
// Cumberland University	Lebanon
// CUNY School of Law	Long Island City
// Curry College	Milton
// 	Curtis Institute of Music	Philadelphia
// 5	Daemen College	Amherst
// 	Dakota State University	Madison ...
// 2	Dakota Wesleyan University	Mitchell
// 	Dallas Baptist University	Dallas
// 8	Dallas Christian College	Dallas
// 4	Dalton State College	Dalton
// Dartmouth College	Hanover
// 	Davenport University	Grand Rapids ...
// Davidson College	Davidson
// 	Davis and Elkins College	Elkins
// 	Davis College	Johnson City ...
// 	Daytona State College	Daytona Beach
// 	Dean College	Franklin
// 	Defiance College	Defiance
// Delaware State University	Dover
// 	Delaware Valley University	Doylestown
// Delta State University	Cleveland
// Denison University	Granville
// 41	Denver College of Nursing	Denver
// 8	DePaul University	Chicago
// DePauw University	Greencastle
// Des Moines University	Des Moines
// DeSales University	Center Valley
// DeVry University	Chicago ...
// 	Dharma Realm Buddhist University	Ukiah
// Dickinson College	Carlisle
// 	Dickinson State University	Dickinson
// 	Dillard University	New Orleans
// 7	Doane University	Crete
// 1	Dominican College	Orangeburg
// 2	Dominican School of Philosophy & Theology	Berkeley
// 	Dominican University	River Forest
// 	Dominican University of California	San Rafael
// 5	Donnelly College	Kansas City
// 3	Dordt University	Sioux Center
// 	Drake University	Des Moines
// 	Drew University	Madison
// Drexel University	Philadelphia
// 	Drury University	Springfield ...
// Duke University	Durham
// Dunwoody College of Technology	Minneapolis
// Duquesne University	Pittsburgh
// 	D'Youville College	Buffalo
// Earlham College	Richmond
// East Carolina University	Greenville
// 	East Central University	Ada
// 	East Georgia State College	Swainsboro ...
// East Stroudsburg University	East Stroudsburg
// East Tennessee State University	Johnson City ...
// 	East Texas Baptist University	Marshall
// Eastern Connecticut State University	Willimantic
// Eastern Illinois University	Charleston
// Eastern Kentucky University	Richmond
// Eastern Mennonite University	Harrisonburg ...
// Eastern Michigan University	Ypsilanti ...
// 	Eastern Nazarene College	Quincy
// Eastern New Mexico University	Portales
// Eastern Oregon University	La Grande
// Eastern University	St.Davids
// Eastern Virginia Medical School	Norfolk
// Eastern Washington University	Cheney
// 	East - West University	Chicago
// 	Ecclesia College	Springdale
// Eckerd College	Saint Petersburg ...
// ECPI University	Virginia Beach
// 	Edgewood College	Madison
// Edinboro University of Pennsylvania	Edinboro
// 	Edward Waters University	Jacksonville
// 	Elizabeth City State University	Elizabeth City
// Elizabethtown College	Elizabethtown
// Elmhurst University	Elmhurst
// 	Elmira College	Elmira
// Elon University	Elon
// 	Embry - Riddle Aeronautical University	Daytona Beach ...
// 	Emerson College	Boston
// 3	Emmanuel College	Boston
// 8	Emmanuel College, Georgia	Franklin Springs
// 4	Emmaus Bible College	Dubuque
// 7	Emory & Henry College	Emory ...
// Emory University	Atlanta
// 	Emporia State University	Emporia
// 	Endicott College	Beverly
// 3	Erskine College	Due West
// Eureka College	Eureka ...
// Evangel University	Springfield
// Everglades University	Boca Raton ...
// 	Fairfield University	Fairfield
// 	Fairleigh Dickinson University	Teaneck ...
// 	Fairmont State University	Fairmont
// 	Faith Baptist Bible College and Theological Seminary	Ankeny
// Farmingdale State College	Farmingdale
// Fashion Institute of Technology	New York City
// 	Faulkner University	Montgomery
// Fayetteville State University	Fayetteville
// 	Felician University	Lodi ...
// Ferris State University	Big Rapids
// 	Ferrum College	Ferrum
// 	Fielding Graduate University	Santa Barbara
// 	Finlandia University	Hancock
// 	Fisher College	Boston ...
// Fisk University	Nashville
// 	Fitchburg State University	Fitchburg
// 	Five Towns College	Dix Hills
// Flagler College	St.Augustine ...
// Florida Agricultural and Mechanical University	Tallahassee
// Florida Atlantic University	Boca Raton ...
// 3	Florida College	Temple Terrace
// 6	Florida Gateway College	Lake City
// 	Florida Gulf Coast University	Fort Myers
// 	Florida Institute of Technology	Melbourne
// Florida International University	Miami
// 	Florida Memorial University	Miami Gardens
// 	Florida National University	Hialeah
// Florida Southern College	Lakeland
// 	Florida SouthWestern State College	Fort Myers
// Florida State College at Jacksonville	Jacksonville
// 	Florida State University	Tallahassee ...
// 5	Fontbonne University	St.Louis
// Fordham University	The Bronx ...
// 	Fort Hays State University	Hays
// Fort Lewis College	Durango
// 3	Fort Valley State University	Fort Valley
// 	Framingham State University	Framingham
// 	Francis Marion University	Florence
// 7	Franciscan Missionaries of Our Lady University	Baton Rouge
// 	Franciscan University of Steubenville	Steubenville
// 	Franklin and Marshall College	Lancaster
// 8	Franklin College	Franklin
// 1	Franklin Pierce University	Rindge ...
// 	Franklin University	Columbus ...
// 	Franklin W.Olin College of Engineering	Needham
// 2	Freed - Hardeman University	Henderson
// 	Fresno Pacific University	Fresno ...
// 6	Friends University	Wichita ...
// 	Frostburg State University	Frostburg ...
// 	Furman University	Greenville
// 	Gallaudet University	Washington
// 	Gannon University	Erie
// 1	Gardner - Webb University	Boiling Springs ...
// Geisinger Commonwealth School of Medicine	Scranton
// 	Geneva College	Beaver Falls
// 	George Fox University	Newberg
// George Mason University	Fairfax
// George Washington University	Washington ...
// 	Georgetown College	Georgetown
// Georgetown University	Washington
// 	Georgia College and State University	Milledgeville ...
// 0	Georgia Gwinnett College	Lawrenceville
// Georgia Institute of Technology	Atlanta
// 	Georgia Southern University	Statesboro ...
// 6	Georgia Southwestern State University	Americus
// Georgia State University	Atlanta
// Georgian Court University	Lakewood
// Gettysburg College	Gettysburg
// 	Glenville State College	Glenville
// 	Goddard College	Plainfield ...
// 	God's Bible School and College	Cincinnati
// Golden Gate University	San Francisco ...
// 	Goldey - Beacom College	Wilmington
// 	Goldfarb School of Nursing at Barnes - Jewish College	St.Louis
// Gonzaga University	Spokane
// 	Good Samaritan College of Nursing and Health Science	Cincinnati
// 	Goodwin University	East Hartford
// Gordon College	Wenham ...
// 	Gordon State College	Barnesville
// Goshen College	Goshen
// Goucher College	Towson
// Governors State University	University Park
// 	Grace Christian University	Wyoming
// 	Grace College	Winona Lake ...
// 	Graceland University	Lamoni
// Grambling State University	Grambling
// Grand Canyon University	Phoenix
// Grand Valley State University	Allendale ...
// Grand View University	Des Moines
// Granite State College	Concord
// Gratz College	Melrose Park
// 	Great Basin College	Elko ...
// 	Great Lakes Christian College	Lansing
// 	Greensboro College	Greensboro
// 	Greenville University	Greenville
// Grinnell College	Grinnell
// Grove City College	Grove City
// 	Guilford College	Greensboro
// Gulf Coast State College	Panama City
// 	Gustavus Adolphus College	St.Peter
// 	Gwynedd Mercy University	Gwynedd Valley
// 	Hamilton College	Clinton
// 	Hamline University	Saint Paul
// 	Hampden - Sydney College	Hampden - Sydney
// 	Hampshire College	Amherst
// 	Hampton University	Hampton
// 2	Hannibal - LaGrange University	Hannibal
// 	Hanover College	Hanover
// 	Harding University	Searcy ...
// 2	Hardin - Simmons University	Abilene
// 4	Harrisburg University of Science and Technology	Harrisburg
// 7	Harris - Stowe State University	St.Louis
// 	Hartwick College	Oneonta
// arvard University	Cambridge
// 	Harvey Mudd College	Claremont ...
// 6	Hastings College	Hastings
// 	Haverford College	Haverford
// Hawaii Pacific University	Honolulu
// 	Hebrew College	Newton Centre
// 	Heidelberg University	Tiffin
// 	Helene Fuld College of Nursing	New York City
// 1	Henderson State University	Arkadelphia
// 	Hendrix College	Conway
// 7	Heritage Christian University	Florence
// 9	Heritage University	Toppenish
// 	Herzing University	Madison
// 	High Point University	High Point
// 3	Hilbert College	Hamburg
// 	Hillsdale College	Hillsdale
// 3	Hiram College	Hiram
// 	Hobart and William Smith Colleges	Geneva
// 	Hodges University	Naples
// Hofstra University	Hempstead
// Hollins University	Roanoke
// 	Holy Apostles College and Seminary	Cromwell
// 	Holy Cross College	Notre Dame
// 	Holy Family University	Philadelphia
// 	Holy Names University	Oakland
// Hood College	Frederick
// Hope College	Holland
// 	Hope International University	Fullerton
// 	Houghton College	Houghton ...
// Houston Baptist University	Houston
// 	Howard Payne University	Brownwood
// Howard University	Washington
// Hult International Business School	Cambridge ...
// Humboldt State University	Arcata
// Humphreys University	Stockton
// Hunter College, CUNY	New York City
// Huntingdon College	Montgomery
// 	Huntington University	Huntington ...
// Husson University	Bangor
// 	Huston - Tillotson University	Austin
// Icahn School of Medicine at Mount Sinai	New York City
// Idaho State University	Pocatello ...
// 	Illinois College	Jacksonville
// 	Illinois College of Optometry	Chicago
// Illinois Institute of Technology	Chicago
// Illinois State University	Normal
// Illinois Wesleyan University	Bloomington
// 	Immaculata University	Immaculata ...
// 	Indian River State College	Fort Pierce ...
// 	Indiana Institute of Technology	Fort Wayne ...
// Indiana State University	Terre Haute
// 	Indiana University - Purdue University Indianapolis	Indianapolis
// Indiana University Bloomington	Bloomington
// 0	Indiana University East	Richmond
// 9	Indiana University Fort Wayne	Fort Wayne
// 9	Indiana University Kokomo	Kokomo
// 0	Indiana University Northwest	Gary
// 	Indiana University of Pennsylvania	Indiana
// 	Indiana University South Bend	South Bend ...
// 	Indiana University Southeast	New Albany
// 	Indiana Wesleyan University	Marion
// 	Iona College	New Rochelle
// Iowa State University	Ames
// 2	Iowa Wesleyan University	Mount Pleasant
// Irell and Manella Graduate School of Biological Sciences	Duarte
// Ithaca College	Ithaca
// Jackson State University	Jackson
// 	Jacksonville State University	Jacksonville
// 	Jacksonville University	Jacksonville
// 	James Madison University	Harrisonburg
// 1	Jamestown Business College	Jamestown
// 3	Jarvis Christian College	Hawkins
// 	John Brown University	Siloam Springs
// 	John Carroll University	University Heights
// 9	John F.Kennedy University	Pleasant Hill ...
// 1	John Jay College of Criminal Justice	New York City
// 6	John Paul the Great Catholic University	Escondido
// Johns Hopkins University	Baltimore ...
// Johnson and Wales University	Providence ...
// 	Johnson C.Smith University	Charlotte
// 	Johnson University	Knoxville ...
// 	Judson College	Marion
// 	Judson University	Elgin ...
// Juniata College	Huntingdon
// 8	Kalamazoo College	Kalamazoo
// 60	Kansas City Art Institute	Kansas City
// 62	Kansas City University	Kansas City
// 0	Kansas State University	Manhattan ...
// 49	Kansas Wesleyan University	Salina
// 6	Kean University	Union ...
// 8	Keck Graduate Institute	Claremont
// 2	Keene State College	Keene
// 2	Keiser University	Fort Lauderdale
// 1	Kennesaw State University	Kennesaw ...
// 1	Kent State University	Kent ...
// 23	Kentucky Christian University	Grayson
// 6	Kentucky State University	Frankfort
// 54	Kentucky Wesleyan College	Owensboro
// 82	Kenyon College	Gambier
// 643	Kettering College	Kettering
// 91	Kettering University	Flint
// 312	Keuka College	Keuka Park
// 441	Keystone College	La Plume
// 030	King University	Bristol
// 70	King's College	Wilkes-Barre
// 03	Knox College	Galesburg ...
// 58	Kutztown University of Pennsylvania	Kutztown
// 649	Kuyper College	Grand Rapids
// 408	La Roche University	Pittsburgh
// 88	La Salle University	Philadelphia
// 091	La Sierra University	Riverside
// 1712	Labouré College	Milton
// 422	Lafayette College	Easton
// 1409	LaGrange College	LaGrange
// 1639	Laguna College of Art and Design	Laguna Beach
// 1596	Lake Erie College	Painesville
// 827	Lake Forest College	Lake Forest
// 1706	Lake Forest Graduate School of Management	Lake Forest
// 570	Lake Superior State University	Sault Ste.Marie
// 1330	Lake Washington Institute of Technology	Kirkland
// 1256	Lakeland University	Plymouth
// 1721	Lakeview College of Nursing	Danville
// 310	Lamar University	Beaumont
// 1199	Lancaster Bible College	Lancaster
// 749	Lander University	Greenwood
// 1445	Landmark College	Putney
// 1495	Lane College	Jackson
// 1254	Langston University	Langston
// 1257	Lasell University	Newton
// 758	Lawrence Technological University	Southfield
// 513	Lawrence University	Appleton
// 602	Le Moyne College	Syracuse
// 939	Lebanon Valley College	Annville
// 1039	Lee University	Cleveland
// 1230	Lees - McRae College	Banner Elk
// 180	Lehigh University	Bethlehem
// 753	Lehman College, CUNY	The Bronx
// 1491	LeMoyne - Owen College	Memphis
// 1051	Lenoir - Rhyne University	Hickory
// 557	Lesley University	Cambridge ...
// 1049	LeTourneau University	Longview
// 360	Lewis & Clark College	Portland
// 764	Lewis University	Romeoville
// 914	Lewis - Clark State College	Lewiston ...
// 156	Liberty University	Lynchburg
// 1583	Life Pacific College	San Dimas ...
// 1069	Life University	Marietta
// 1352	LIM College	New York City
// 1309	Limestone College	Gaffney
// 1578	Lincoln Christian University	Lincoln
// 1508	Lincoln College	Lincoln
// 839	Lincoln Memorial University	Harrogate
// 921	Lincoln University	Lincoln University
// 1011	Lincoln University, Missouri	Jefferson City
// 818	Lindenwood University	St.Charles
// 997	Lindsey Wilson College	Columbia
// 808	Linfield University	McMinnville ...
// 721	Lipscomb University	Nashville
// 1516	Livingstone College	Salisbury
// 345	Lock Haven University	Lock Haven ...
// 1259	Logan University	Chesterfield
// 756	Loma Linda University	Loma Linda
// 370	Long Island University	Brooklyn ...
// 580	Longwood University	Farmville
// 1116	Loras College	Dubuque
// 1481	Louisiana College	Pineville
// 96	Louisiana State University	Baton Rouge
// 484	Louisiana State University Health Sciences Center	New Orleans ...
// 1207	Louisiana State University Health Sciences Center - Shreveport	Shreveport
// 935	Louisiana State University in Shreveport	Shreveport ...
// 1405	Louisiana State University of Alexandria	Alexandria
// 474	Louisiana Tech University	Ruston
// 1113	Lourdes University	Sylvania
// 259	Loyola Marymount University	Los Angeles
// 154	Loyola University Chicago	Chicago
// 397	Loyola University Maryland	Baltimore
// 352	Loyola University New Orleans	New Orleans
// 1342	Lubbock Christian University	Lubbock
// 656	Luther College	Decorah
// 849	Lycoming College	Williamsport
// 828	Lynn University	Boca Raton
// 1301	Lyon College	Batesville
// 393	Macalester College	Saint Paul
// 1586	MacMurray College	Jacksonville
// 1325	Madonna University	Livonia ...
// 1686	Magdalen College of the Liberal Arts	Warner
// 476	Maharishi International University	Fairfield
// 1072	Maine College of Art	Portland
// 1170	Maine Maritime Academy	Castine
// 1172	Malone University	Canton
// 984	Manchester University	North Manchester ...
// 1599	Manhattan Christian College	Manhattan
// 725	Manhattan College	Riverdale
// 900	Manhattan School of Music	New York City
// 922	Manhattanville College	Purchase
// 1107	Mansfield University of Pennsylvania	Mansfield
// 1353	Maranatha Baptist University	Watertown
// 1650	Maria College	Albany
// 906	Marian University	Indianapolis
// 1452	Marian University, Wisconsin	Fond du Lac
// 751	Marietta College	Marietta
// 226	Marist College	Poughkeepsie
// 143	Marquette University	Milwaukee
// 1366	Mars Hill University	Mars Hill
// 1601	Marshall B.Ketchum University	Fullerton ...
// 293	Marshall University	Huntington
// 1478	Martin Luther College	New Ulm
// 1691	Martin University	Indianapolis
// 1088	Mary Baldwin University	Staunton
// 617	Maryland Institute College of Art	Baltimore
// 1530	Maryland University of Integrative Health	Laurel
// 1620	Marymount California University	Rancho Palos Verdes
// 1407	Marymount Manhattan College	New York City
// 757	Marymount University	Arlington
// 1396	Maryville College	Maryville
// 326	Maryville University	St.Louis
// 975	Marywood University	Scranton
// 777	Massachusetts College of Art and Design	Boston
// 1110	Massachusetts College of Liberal Arts	North Adams
// 1	Massachusetts Institute of Technology	Cambridge
// 1223	Massachusetts Maritime Academy	Buzzards Bay
// 1630	Massachusetts School of Law	Andover
// 1000	Mayo Clinic College of Medicine and Science	Rochester
// 1567	Mayville State University	Mayville
// 772	McDaniel College	Westminster ...
// 1048	McKendree University	Lebanon
// 1201	McMurry University	Abilene
// 865	McNeese State University	Lake Charles
// 1360	McPherson College	McPherson
// 1033	MCPHS University	Boston ...
// 1327	Medaille College	Buffalo
// 1727	Medgar Evers College	Brooklyn
// 328	Medical College of Wisconsin	Milwaukee
// 231	Medical University of South Carolina	Charleston
// 915	Meharry Medical College	Nashville
// 1471	Menlo College	Atherton ...
// 453	Mercer University	Macon ...
// 685	Mercy College	Dobbs Ferry
// 1554	Mercy College of Health Sciences	Des Moines
// 1625	Mercy College of Ohio	Toledo
// 887	Mercyhurst University	Erie
// 847	Meredith College	Raleigh
// 774	Merrimack College	North Andover
// 565	Messiah University	Mechanicsburg
// 1725	Methodist College	Peoria
// 1176	Methodist University	Fayetteville
// 1479	Metropolitan College of New York	New York City
// 963	Metropolitan State University	Saint Paul
// 516	Metropolitan State University of Denver	Denver
// 1192	MGH Institute of Health Professions	Boston
// 409	Miami Dade College	Miami
// 236	Miami University	Oxford ...
// 1689	Michigan School of Psychology	Farmington Hills
// 26	Michigan State University	East Lansing
// 139	Michigan Technological University	Houghton
// 1546	Mid - America Christian University	Oklahoma City
// 1194	MidAmerica Nazarene University	Olathe
// 1710	Mid - Atlantic Christian University	Elizabeth City
// 998	Middle Georgia State University	Macon
// 1717	Middle Tennessee School of Anesthesia	Madison
// 177	Middle Tennessee State University	Murfreesboro
// 178	Middlebury College	Middlebury
// 1435	Midland College	Midland
// 1561	Midland University	Fremont
// 1344	Midway University	Midway
// 686	Midwestern State University	Wichita Falls
// 706	Midwestern University	Downers Grove ...
// 1431	Miles College	Fairfield
// 559	Millersville University of Pennsylvania	Millersville
// 1283	Milligan University	Elizabethton ...
// 860	Millikin University	Decatur
// 644	Mills College	Oakland
// 1115	Millsaps College	Jackson
// 1456	Milwaukee Institute of Art and Design	Milwaukee
// 556	Milwaukee School of Engineering	Milwaukee
// 845	Minneapolis College of Art and Design	Minneapolis
// 627	Minnesota State University Moorhead	Moorhead
// 323	Minnesota State University, Mankato	Mankato ...
// 1203	Minot State University	Minot
// 1130	Misericordia University	Dallas
// 759	Mississippi College	Clinton
// 134	Mississippi State University	Mississippi State ...
// 1052	Mississippi University for Women	Columbus
// 1239	Mississippi Valley State University	Itta Bena
// 1493	Missouri Baptist University	St.Louis
// 1150	Missouri Southern State University	Joplin
// 255	Missouri State University	Springfield ...
// 299	Missouri University of Science and Technology	Rolla
// 1505	Missouri Valley College	Marshall
// 1026	Missouri Western State University	St.Joseph
// 1528	Mitchell College	New London
// 907	Mitchell Hamline School of Law	Saint Paul
// 1015	Molloy College	Rockville Centre
// 1563	Monmouth College	Monmouth
// 261	Monmouth University	West Long Branch
// 1178	Monroe College	The Bronx ...
// 152	Montana State University	Bozeman
// 785	Montana State University Billings	Billings
// 1399	Montana State University - Northern	Havre ...
// 843	Montana Tech	Butte
// 262	Montclair State University	Montclair
// 1190	Montreat College	Montreat ...
// 1483	Montserrat College of Art	Beverly
// 1028	Moody Bible Institute	Chicago
// 1277	Moore College of Art and Design	Philadelphia
// 781	Moravian College	Bethlehem
// 817	Morehead State University	Morehead ...
// 483	Morehouse College	Atlanta
// 689	Morehouse School of Medicine	Atlanta
// 464	Morgan State University	Baltimore
// 1185	Morningside College	Sioux City
// 1587	Morris College	Sumter
// 995	Morrisville State College	Morrisville
// 1417	Mount Aloysius College	Cresson
// 1610	Mount Carmel College of Nursing	Columbus
// 212	Mount Holyoke College	South Hadley
// 1535	Mount Marty University	Yankton
// 1313	Mount Mary University	Milwaukee
// 1114	Mount Mercy University	Cedar Rapids
// 1117	Mount Saint Mary College	Newburgh
// 1414	Mount Saint Mary's University	Los Angeles
// 951	Mount St.Joseph University	Cincinnati
// 960	Mount St.Mary's University	Emmitsburg ...
// 1374	Mount Vernon Nazarene University	Mount Vernon ...
// 578	Muhlenberg College	Allentown
// 1421	Multnomah University	Portland ...
// 547	Murray State University	Murray ...
// 797	Muskingum University	New Concord
// 992	Naropa University	Boulder
// 1220	National American University	Rapid City ...
// 466	National Defense University	Fort Lesley J McNair
// 629	National Louis University	Chicago ...
// 544	National University	La Jolla
// 1213	National University of Health Sciences	Lombard ...
// 419	Naval Postgraduate School	Monterey
// 1459	Nazarene Bible College	Colorado Springs
// 888	Nazareth College	Rochester
// 1719	Nebraska Christian College	Papillion
// 1416	Nebraska Methodist College	Omaha
// 1070	Nebraska Wesleyan University	Lincoln ...
// 1197	Neumann University	Aston
// 1611	Nevada State College	Henderson
// 1027	New College of Florida	Sarasota
// 901	New England College	Henniker ...
// 1640	New England College of Optometry	Boston
// 912	New England Conservatory	Boston
// 1076	New England Institute of Technology	East Greenwich
// 1067	New England Law | Boston	Boston
// 1730	New Hope Christian College	Eugene
// 717	New Jersey City University	Jersey City
// 214	New Jersey Institute of Technology	Newark
// 974	New Mexico Highlands University	Las Vegas
// 335	New Mexico Institute of Mining and Technology	Socorro
// 147	New Mexico State University	Las Cruces
// 1465	New York Academy of Art	New York City
// 1659	New York City College of Technology, CUNY	Brooklyn
// 1575	New York College of Podiatric Medicine	New York City
// 459	New York Institute of Technology	Old Westbury ...
// 612	New York Law School	New York City
// 872	New York Medical College	Valhalla
// 1538	New York School of Interior Design	New York City
// 20	New York University	New York City ...
// 1334	Newberry College	Newberry
// 1326	Newman University	Wichita ...
// 1336	NewSchool of Architecture and Design	San Diego
// 739	Niagara University	Niagara University
// 989	Nicholls State University	Thibodaux
// 1077	Nichols College	Dudley
// 786	Norfolk State University	Norfolk
// 421	North Carolina Agricultural and Technical State University	Greensboro
// 576	North Carolina Central University	Durham
// 41	North Carolina State University	Raleigh
// 1092	North Carolina Wesleyan College	Rocky Mount ...
// 694	North Central College	Naperville ...
// 1419	North Central University	Minneapolis
// 223	North Dakota State University	Fargo
// 1279	North Greenville University	Tigerville
// 734	North Park University	Chicago
// 1280	Northeast Ohio Medical University	Rootstown
// 551	Northeastern Illinois University	Chicago
// 838	Northeastern State University	Tahlequah
// 93	Northeastern University	Boston ...
// 149	Northern Arizona University	Flagstaff ...
// 146	Northern Illinois University	DeKalb
// 401	Northern Kentucky University	Highland Heights ...
// 374	Northern Michigan University	Marquette
// 1594	Northern New Mexico College	Espanola ...
// 833	Northern State University	Aberdeen
// 1061	Northern Vermont University	Johnson ...
// 1177	Northland College	Ashland
// 1734	Northpoint Bible College	Haverhill
// 1467	Northwest Florida State College	Niceville
// 674	Northwest Missouri State University	Maryville ...
// 791	Northwest Nazarene University	Nampa
// 1255	Northwest University	Kirkland ...
// 1140	Northwestern College	Orange City
// 1248	Northwestern Health Sciences University	Bloomington
// 1430	Northwestern Oklahoma State University	Alva ...
// 761	Northwestern State University of Louisiana	Natchitoches
// 36	Northwestern University	Evanston ...
// 889	Northwood University	Midland ...
// 537	Norwich University	Northfield
// 1375	Notre Dame College	Cleveland
// 1444	Notre Dame de Namur University	Belmont
// 1065	Notre Dame of Maryland University	Baltimore
// 188	Nova Southeastern University	Fort Lauderdale ...
// 1383	Nyack College	Nyack
// 1670	Oak Hills Christian College	Bemidji
// 1699	Oak Point University	Chicago
// 1525	Oakland City University	Oakland City
// 280	Oakland University	Rochester
// 1252	Oakwood University	Huntsville
// 256	Oberlin College	Oberlin
// 418	Occidental College	Los Angeles
// 866	Oglethorpe University	Atlanta
// 1382	Ohio Christian University	Circleville
// 1305	Ohio Dominican University	Columbus
// 657	Ohio Northern University	Ada
// 186	Ohio University	Athens ...
// Un	Ohio University Southern	Ironton
// Un	Ohio University - Chillicothe	Chillicothe
// 1641	Ohio Valley University	Vienna
// 582	Ohio Wesleyan University	Delaware ...
// 1163	Oklahoma Baptist University	Shawnee
// 991	Oklahoma Christian University	Edmond ...
// 780	Oklahoma City University	Oklahoma City
// 1386	Oklahoma Panhandle State University	Goodwell
// 113	Oklahoma State University	Stillwater ...
// 1297	Oklahoma Wesleyan University	Bartlesville
// 182	Old Dominion University	Norfolk
// 1426	Olivet College	Olivet
// 730	Olivet Nazarene University	Bourbonnais
// 684	Oral Roberts University	Tulsa
// 155	Oregon Health & Science University	Portland ...
// 799	Oregon Institute of Technology	Klamath Falls
// 55	Oregon State University	Corvallis ...
// 740	Otis College of Art and Design	Los Angeles
// 1054	Ottawa University	Ottawa ...
// 807	Otterbein University	Westerville
// 1079	Ouachita Baptist University	Arkadelphia
// 1066	Our Lady of the Lake University	San Antonio
// 1579	Ozark Christian College	Joplin
// 207	Pace University	New York City ...
// 507	Pacific Lutheran University	Tacoma
// 1632	Pacific Oaks College	Pasadena
// 1008	Pacific Union College	Angwin
// 434	Pacific University	Forest Grove
// 1475	Pacifica Graduate Institute	Carpinteria ...
// 1440	Paine College	Augusta
// 994	Palm Beach Atlantic University	West Palm Beach ...
// 942	Palm Beach State College	Lake Worth
// 1351	Palo Alto University	Palo Alto
// 1609	Pardee RAND Graduate School	Santa Monica
// 815	Park University	Parkville ...
// 1463	Parker University	Dallas
// Un	Paul Quinn College	Dallas
// 1019	Paul Smith's College	Paul Smiths
// 1540	Peirce College	Philadelphia
// 1270	Penn State College of Medicine	Hershey
// 24	Penn State University	University Park ...
// 712	Pennsylvania Academy of the Fine Arts	Philadelphia
// 1618	Pennsylvania College of Art and Design	Lancaster
// 1694	Pennsylvania College of Health Sciences	Lancaster
// 766	Pennsylvania College of Technology	Williamsport
// 1502	Pensacola State College	Pensacola
// 205	Pepperdine University	Malibu ...
// 1299	Peru State College	Peru
// 1040	Pfeiffer University	Misenheimer
// 1585	Philander Smith College	Little Rock
// 1282	Piedmont College	Demorest
// 1731	Pillar College	Newark ...
// 1410	Pine Manor College	Chestnut Hill
// 608	Pittsburg State University	Pittsburg
// 423	Pitzer College	Claremont
// 1728	Plaza College	New York City
// 447	Plymouth State University	Plymouth
// 853	Point Loma Nazarene University	San Diego ...
// 909	Point Park University	Pittsburgh
// 1661	Point University	West Point
// 1129	Polk State College	Winter Haven
// 307	Pomona College	Claremont
// 1684	Pontifical Faculty of the Immaculate Conception	Washington
// 115	Portland State University	Portland
// 1155	Post University	Waterbury
// 735	Prairie View A & M University	Prairie View ...
// 367	Pratt Institute	Brooklyn
// 1034	Presbyterian College	Clinton
// 1152	Prescott College	Prescott
// 1665	Presentation College	Aberdeen
// 16	Princeton University	Princeton
// 1522	Principia College	Elsah
// 1744	Providence Christian College	Pasadena
// 555	Providence College	Providence
// 664	Purchase College, State University of New York	Purchase
// 18	Purdue University	West Lafayette
// 452	Purdue University Fort Wayne	Fort Wayne
// 940	Purdue University Northwest	Hammond
// 1571	Queens College, City University of New York	New York City
// 788	Queens University of Charlotte	Charlotte
// 1045	Quincy University	Quincy
// 150	Quinnipiac University	Hamden
// 348	Radford University	Radford
// 607	Ramapo College of New Jersey	Mahwah
// 1268	Randolph College	Lynchburg
// 1050	Randolph - Macon College	Ashland
// 305	Rasmussen College	St.Cloud ...
// 308	Reed College	Portland
// 446	Regent University	Virginia Beach
// 700	Regis College	Weston
// 558	Regis University	Denver
// 1384	Reinhardt University	Waleska
// 1354	Relay Graduate School of Education	New York City
// 108	Rensselaer Polytechnic Institute	Troy ...
// 1742	Research College of Nursing	Kansas City
// 472	Rhode Island College	Providence
// 334	Rhode Island School of Design	Providence
// 501	Rhodes College	Memphis
// 1743	Richmont Graduate University	Chattanooga
// 394	Rider University	Lawrenceville ...
// 876	Ringling College of Art and Design	Sarasota
// 1018	Ripon College	Ripon
// 1086	Rivier University	Nashua
// 675	Roanoke College	Salem
// 869	Robert Morris University	Moon Township ...
// 1081	Roberts Wesleyan College	Rochester
// 92	Rochester Institute of Technology	Rochester
// 1542	Rochester University	Rochester Hills
// 1466	Rockford University	Rockford ...
// 1082	Rockhurst University	Kansas City
// 1186	Rocky Mountain College	Billings
// 1229	Rocky Mountain College of Art and Design	Lakewood
// 1702	Rocky Mountain University of Health Professions	Provo
// 1645	Rocky Vista University	Parker
// 572	Roger Williams University	Bristol
// 964	Rogers State University	Claremore
// 491	Rollins College	Winter Park
// 579	Roosevelt University	Chicago ...
// 1146	Rosalind Franklin University of Medicine and Science	North Chicago
// 467	Rose - Hulman Institute of Technology	Terre Haute
// 1523	Roseman University of Health Sciences	Henderson
// 1193	Rosemont College	Rosemont
// 306	Rowan University	Glassboro ...
// 1629	Rush University	Chicago
// 1519	Rust College	Holly Springs
// 31	Rutgers, The State University of New Jersey	New Brunswick ...
// 571	Sacred Heart University	Fairfield ...
// 711	Saginaw Valley State University	University Center
// 566	Saint Anselm College	Manchester
// Un	Saint Anthony College of Nursing	Rockford
// 1713	Saint Augustine College	Chicago
// 1377	Saint Augustine's University	Raleigh
// 1411	Saint Elizabeth University	Morristown
// Un	Saint Francis Medical Center College of Nursing	Peoria
// 1056	Saint Francis University	Loretto
// 1400	Saint Joseph's College of Maine	Standish ...
// 389	Saint Joseph's University	Philadelphia
// 621	Saint Leo University	Saint Leo ...
// 181	Saint Louis University	St.Louis ...
// 962	Saint Martin's University	Lacey
// 1245	Saint Mary - of - the - Woods College	Saint Mary of the Woods
// 943	Saint Mary's College	Notre Dame ...
// 619	Saint Mary's College of California	Moraga
// 842	Saint Mary's University of Minnesota	Winona ...
// 590	Saint Michael's College	Colchester ...
// 926	Saint Peter's University	Jersey City
// 925	Saint Vincent College	Latrobe
// 954	Saint Xavier University	Chicago
// 1443	Salem College	Winston - Salem
// 614	Salem State University	Salem
// 1627	Salem University	Salem
// 510	Salisbury University	Salisbury
// 1432	Salus University	Elkins Park ...
// 762	Salve Regina University	Newport ...
// 300	Sam Houston State University	Huntsville
// 503	Samford University	Birmingham
// 1311	Samuel Merritt University	Oakland
// 1651	San Diego Christian College	Santee
// 101	San Diego State University	San Diego ...
// 919	San Francisco Art Institute	San Francisco
// 1121	San Francisco Conservatory of Music	San Francisco
// 122	San Francisco State University	San Francisco
// 1687	San Joaquin College of Law	Clovis
// 121	San José State University	San José
// 145	Santa Clara University	Santa Clara
// 773	Santa Fe College	Gainesville
// 524	Sarah Lawrence College	Bronxville
// 294	Savannah College of Art and Design	Savannah ...
// 1112	Savannah State University	Savannah
// 1448	Saybrook University	Pasadena
// 626	School of the Art Institute of Chicago	Chicago
// 340	School of Visual Arts	New York City
// 1468	Schreiner University	Kerrville
// 857	Scripps College	Claremont
// 819	Seattle Central College	Seattle
// 456	Seattle Pacific University	Seattle
// 304	Seattle University	Seattle
// 841	Seminole State College of Florida	Sanford
// 243	Seton Hall University	South Orange
// 550	Seton Hill University	Greensburg
// 504	Sewanee: The University of the South	Sewanee
// 1365	Shaw University	Raleigh
// 1032	Shawnee State University	Portsmouth
// 778	Shenandoah University	Winchester
// 968	Shepherd University	Shepherdstown
// 403	Shippensburg University of Pennsylvania	Shippensburg
// 1225	Shorter University	Rome
// 478	Siena College	Loudonville
// 1436	Siena Heights University	Adrian
// 1486	Sierra Nevada University	Incline Village
// 331	Simmons University	Boston
// 904	Simpson College	Indianola
// 1574	Simpson University	Redding
// 718	SIT Graduate Institute	Brattleboro
// 383	Skidmore College	Saratoga Springs
// 665	Slippery Rock University of Pennsylvania	Slippery Rock
// 202	Smith College	Northampton
// 1218	Snow College	Ephraim
// 1681	Sofia University	Palo Alto
// 1124	Soka University of America	Aliso Viejo
// 267	Sonoma State University	Rohnert Park
// 923	South Carolina State University	Orangeburg
// 1512	South College	Knoxville
// 708	South Dakota School of Mines and Technology	Rapid City
// 356	South Dakota State University	Brookings
// 1621	South Georgia State College	Douglas
// 1024	South Texas College	McAllen
// 1004	South Texas College of Law	Houston
// 738	South University	Savannah
// 567	Southeast Missouri State University	Cape Girardeau
// 1748	Southeastern Baptist College	Laurel
// 561	Southeastern Louisiana University	Hammond
// 982	Southeastern Oklahoma State University	Durant
// 913	Southeastern University	Lakeland
// 830	Southern Adventist University	Collegedale
// 1021	Southern Arkansas University	Magnolia
// 1103	Southern California Institute of Architecture	Los Angeles
// 1541	Southern College of Optometry	Memphis
// 620	Southern Connecticut State University	New Haven
// 195	Southern Illinois University Carbondale	Carbondale ...
// 291	Southern Illinois University Edwardsville	Edwardsville ...
// 119	Southern Methodist University	Dallas
// 973	Southern Nazarene University	Bethany ...
// 151	Southern New Hampshire University	Manchester
// 553	Southern Oregon University	Ashland ...
// 806	Southern University and A & M College	Baton Rouge
// 1337	Southern University at New Orleans	New Orleans
// 1521	Southern University Law Center	Baton Rouge
// 542	Southern Utah University	Cedar City
// 1439	Southern Virginia University	Buena Vista
// 1350	Southern Wesleyan University	Central
// 1332	Southwest Baptist University	Bolivar ...
// 822	Southwest Minnesota State University	Marshall
// 1231	Southwestern Adventist University	Keene
// 1415	Southwestern Assemblies of God University	Waxahachie
// 1709	Southwestern Christian University	Bethany ...
// 1035	Southwestern College	Winfield
// 1720	Southwestern College, Santa Fe	Santa Fe
// 971	Southwestern Law School	Los Angeles
// 1074	Southwestern Oklahoma State University	Weatherford ...
// 624	Southwestern University	Georgetown
// 1179	Spalding University	Louisville
// 543	Spelman College	Atlanta
// 957	Spring Arbor University	Spring Arbor
// 880	Spring Hill College	Mobile
// 752	Springfield College	Springfield
// 1517	St Andrews University	Laurinburg
// 969	St John's College	Annapolis ...
// 637	St Petersburg College	Clearwater
// 834	St.Ambrose University	Davenport
// 623	St.Bonaventure University	St.Bonaventure
// 545	St.Catherine University	Saint Paul
// 436	St.Cloud State University	St.Cloud
// 586	St.Edward's University	Austin
// 1240	St.Francis College	Brooklyn Heights
// 723	St.John Fisher University	Rochester
// 1577	St.Johns River State College	Palatka
// 329	St.John's University	Queens ...
// 1175	St.Joseph's College	Brooklyn ...
// 563	St.Lawrence University	Canton
// 1732	St.Louis Christian College	Florissant
// 719	St.Mary's College of Maryland	St. Mary's City
// 651	St.Mary's University	San Antonio
// 724	St.Norbert College	De Pere
// 375	St.Olaf College	Northfield
// 1489	St.Thomas Aquinas College	Sparkill
// 883	St.Thomas University	Miami Gardens
// 3	Stanford University	Stanford ...
// 1158	State College of Florida - Manatee - Sarasota	Bradenton
// 636	State University of New York at Fredonia	Fredonia
// 454	State University of New York at New Paltz	New Paltz
// 372	State University of New York at Oswego	Oswego
// 676	State University of New York College at Plattsburgh	Plattsburgh ...
// 424	Stephen F.Austin State University	Nacogdoches
// 1224	Stephens College	Columbia
// 1128	Sterling College	Sterling
// 1425	Sterling College, Vermont	Craftsbury Common
// 350	Stetson University	DeLand
// 353	Stevens Institute of Technology	Hoboken
// 1106	Stevenson University	Stevenson ...
// 1477	Stillman College	Tuscaloosa
// 469	Stockton University	Galloway ...
// 850	Stonehill College	Easton
// 127	Stony Brook University	Stony Brook
// 462	Strayer University	Washington ...
// 303	Suffolk University	Boston ...
// 1300	Sul Ross State University	Alpine
// 1401	Sullivan University	Louisville ...
// 1233	SUNY Canton	Canton
// 1139	SUNY Cobleskill	Cobleskill
// 1261	SUNY College at Old Westbury	Old Westbury
// 521	SUNY College at Oneonta	Oneonta
// 386	SUNY College of Environmental Science and Forestry	Syracuse
// 1438	SUNY College of Optometry	New York City
// 540	SUNY Cortland	Cortland
// 1266	SUNY Delhi	Delhi
// 562	SUNY Downstate Medical Center	Brooklyn
// 585	SUNY Empire State College	Saratoga Springs
// 438	SUNY Geneseo	Geneseo
// 1188	SUNY Maritime College	Throggs Neck
// 599	SUNY Polytechnic Institute	Utica
// 473	SUNY Upstate Medical University	Syracuse
// 840	Susquehanna University	Selinsgrove
// 165	Swarthmore College	Swarthmore
// 420	Sweet Briar College	Sweet Briar
// 77	Syracuse University	Syracuse
// 1348	Tabor College	Hillsboro
// 1244	Talladega College	Talladega
// 660	Tarleton State University	Stephenville ...
// 755	Taylor University	Upland ...
// 89	Temple University	Philadelphia ...
// 528	Tennessee State University	Nashville
// 439	Tennessee Tech University	Cookeville
// 1633	Tennessee Wesleyan University	Athens ...
// 769	Texas A & M International University	Laredo
// 37	Texas A & M University	College Station
// 765	Texas A & M University at Galveston	Galveston
// 631	Texas A & M University - Commerce	Commerce
// 427	Texas A & M University - Corpus Christi	Corpus Christi
// 698	Texas A & M University - Kingsville	Kingsville
// 1524	Texas A & M University - San Antonio	San Antonio
// 1371	Texas A & M University - Texarkana	Texarkana
// 271	Texas Christian University	Fort Worth
// 1557	Texas College	Tyler
// 1355	Texas Lutheran University	Seguin
// 635	Texas Southern University	Houston
// 191	Texas State University	San Marcos ...
// 128	Texas Tech University	Lubbock
// 450	Texas Tech University Health Sciences Center	Lubbock ...
// 1119	Texas Wesleyan University	Fort Worth
// 485	Texas Woman's University	Denton ...
// 896	The American College of Financial Services	Bryn Mawr
// 1685	The Baptist College of Florida	Graceville ...
// 237	The Catholic University of America	Washington
// 1235	The Chicago School of Professional Psychology	Los Angeles ...
// 594	The Citadel, The Military College of South Carolina	Charleston
// 1622	The City College of New York	New York City
// 589	The College at Brockport	Brockport
// 1361	The College of Idaho	Caldwell
// 399	The College of New Jersey	Ewing
// 1055	The College of Saint Rose	Albany
// 663	The College of St.Scholastica	Duluth ...
// 1652	The College of Westchester	White Plains
// 519	The College of Wooster	Wooster
// 482	The Cooper Union for the Advancement of Science and Art	New York City
// 406	The Culinary Institute of America	Hyde Park ...
// 325	The Evergreen State College	Olympia
// 1592	The Graduate Center, CUNY	New York City
// 1263	The Institute of World Politics	Washington
// 416	The Juilliard School	New York City
// 1424	The King's College	New York City
// 1723	The King's University	Southlake
// 1174	The Master's University	Santa Clarita
// 164	The New School	New York City
// 39	The Ohio State University	Columbus ...
// 283	The Rockefeller University	New York City
// 1002	The Sage Colleges	Troy ...
// 1626	The School of Architecture	Cosanti
// 527	The State University of New York at Potsdam	Potsdam
// 109	The University of Alabama	Tuscaloosa
// 309	The University of Alabama in Huntsville	Huntsville
// 34	The University of Arizona	Tucson
// 159	The University of Maine	Orono
// 213	The University of Memphis	Memphis ...
// 173	The University of Montana	Missoula
// 1403	The University of Montana Western	Dillon
// 104	The University of Oklahoma	Norman ...
// 535	The University of Oklahoma Health Sciences Center	Oklahoma City
// 609	The University of Tampa	Tampa
// 432	The University of Tennessee at Chattanooga	Chattanooga
// 112	The University of Tennessee at Martin	Martin ...
// 643	The University of Tennessee Health Science Center	Memphis
// 1552	The University of Tennessee Southern	Pulaski
// 88	The University of Tennessee, Knoxville	Knoxville ...
// 172	The University of Texas at Arlington	Arlington
// 14	The University of Texas at Austin	Austin
// 137	The University of Texas at Dallas	Richardson
// 233	The University of Texas at El Paso	El Paso
// 189	The University of Texas at San Antonio	San Antonio
// 687	The University of Texas at Tyler	Tyler ...
// 289	The University of Texas Health Science Center at Houston	Houston
// 288	The University of Texas Health Science Center at San Antonio	San Antonio
// 1402	The University of Texas Health Science Center at Tyler	Tyler
// 153	The University of Texas MD Anderson Cancer Center	Houston
// 270	The University of Texas Medical Branch at Galveston	Galveston
// 961	The University of Texas Permian Basin	Odessa
// 668	The University of the Arts	Philadelphia
// 347	The University of Tulsa	Tulsa
// 42	The University of Utah	Salt Lake City
// 1392	The University of Virginia's College at Wise	Wise
// 879	The University of West Alabama	Livingston
// 1740	The University of West Los Angeles	Inglewood
// 1688	The Wright Institute	Berkeley
// 1506	Thiel College	Greenville
// 1118	Thomas Aquinas College	Santa Paula
// 1356	Thomas College	Waterville
// 1217	Thomas Edison State University	Trenton
// 1289	Thomas Jefferson School of Law	San Diego
// 203	Thomas Jefferson University	Philadelphia
// 1635	Thomas More College of Liberal Arts	Merrimack
// 1219	Thomas More University	Crestview Hills
// 1664	Thomas University	Thomasville
// 1221	Tiffin University	Tiffin ...
// 1494	Toccoa Falls College	Toccoa Falls ...
// 767	Tougaloo College	Tougaloo ...
// 515	Touro College	New York City ...
// 1509	Touro University California	Vallejo
// 265	Towson University	Towson
// 937	Transylvania University	Lexington
// 1189	Trevecca Nazarene University	Nashville
// 1109	Trine University	Angola
// 1695	Trinity Bible College	Ellendale
// 1243	Trinity Christian College	Palos Heights
// 313	Trinity College	Hartford
// 1668	Trinity College of Florida	Trinity
// 1738	Trinity College of Nursing & Health Sciences	Rock Island
// 1007	Trinity International University	Deerfield ...
// 382	Trinity University	San Antonio
// 1022	Trinity Washington University	Washington
// 1739	Tri - State Bible College	South Point ...
// 1667	Trocaire College	Buffalo
// 502	Troy University	Troy ...
// 1534	Truett McConnell University	Cleveland
// 465	Truman State University	Kirksville
// 45	Tufts University	Medford
// 126	Tulane University	New Orleans
// 1265	Tusculum University	Greeneville
// 523	Tuskegee University	Tuskegee
// 597	Uniformed Services University of the Health Sciences	Bethesda
// 408	Union College	Schenectady
// 1458	Union College, Kentucky	Barbourville
// 1418	Union College, Nebraska	Lincoln
// 1499	Union Institute & University	Cincinnati
// 784	Union University	Jackson
// 471	United States Air Force Academy	Colorado Springs
// 934	United States Coast Guard Academy	New London
// 873	United States Merchant Marine Academy	Kings Point ...
// 174	United States Military Academy	West Point
// 327	United States Naval Academy	Annapolis
// 1318	United States Sports Academy	Daphne
// 1708	United States University	San Diego
// 1006	Unity College	Unity
// 130	University at Albany, State University of New York	Albany
// 68	University at Buffalo, State University of New York	Buffalo ...
// 1212	University of Advancing Technology	Tempe
// 220	University of Akron	Akron ...
// 117	University of Alabama at Birmingham	Birmingham
// 1642	University of Alaska Anchorage	Anchorage
// 167	University of Alaska Fairbanks	Fairbanks ...
// 1513	University of Alaska Southeast	Juneau ...
// 132	University of Arkansas	Fayetteville
// 1363	University of Arkansas - Fort Smith	Fort Smith
// 357	University of Arkansas at Little Rock	Little Rock
// 1226	University of Arkansas at Monticello	Monticello
// 1291	University of Arkansas at Pine Bluff	Pine Bluff
// 444	University of Arkansas for Medical Sciences	Little Rock
// 320	University of Baltimore	Baltimore
// 697	University of Bridgeport	Bridgeport ...
// 5	University of California, Berkeley	Berkeley ...
// 22	University of California, Davis	Davis ...
// 433	University of California, Hastings College of the Law	San Francisco
// 33	University of California, Irvine	Irvine ...
// 9	University of California, Los Angeles	Los Angeles ...
// 314	University of California, Merced	Merced ...
// 79	University of California, Riverside	Riverside ...
// 19	University of California, San Diego	San Diego ...
// 67	University of California, San Francisco	San Francisco ...
// 46	University of California, Santa Barbara	Santa Barbara ...
// 69	University of California, Santa Cruz	Santa Cruz ...
// 443	University of Central Arkansas	Conway
// 85	University of Central Florida	Orlando ...
// 642	University of Central Missouri	Warrensburg
// 805	University of Central Oklahoma	Edmond
// 1276	University of Charleston	Charleston
// 17	University of Chicago	Chicago
// 106	University of Cincinnati	Cincinnati
// 38	University of Colorado Boulder	Boulder
// 336	University of Colorado Colorado Springs	Colorado Springs
// 217	University of Colorado Denver	Denver
// 82	University of Connecticut	Storrs ...
// 736	University of Dallas	Irving
// 208	University of Dayton	Dayton
// 78	University of Delaware	Newark
// 133	University of Denver	Denver
// 560	University of Detroit Mercy	Detroit
// 1162	University of Dubuque	Dubuque
// 400	University of Evansville	Evansville
// 714	University of Findlay	Findlay
// 27	University of Florida	Gainesville
// 54	University of Georgia	Athens
// 457	University of Hartford	West Hartford
// 924	University of Hawaii at Hilo	Hilo
// 470	University of Hawaii at Manoa	Honolulu
// 1562	University of Hawaii - West Oahu	Kapolei
// 1529	University of Health Sciences and Pharmacy in St.Louis	St.Louis
// 1634	University of Holy Cross	New Orleans
// 81	University of Houston	Houston
// 745	University of Houston - Clear Lake	Houston ...
// 750	University of Houston - Downtown	Houston
// 1125	University of Houston - Victoria	Victoria
// 163	University of Idaho	Moscow
// 75	University of Illinois at Chicago	Chicago ...
// 412	University of Illinois at Springfield	Springfield ...
// 29	University of Illinois at Urbana - Champaign	Champaign ...
// 613	University of Indianapolis	Indianapolis
// 57	University of Iowa	Iowa City ...
// 1429	University of Jamestown	Jamestown
// 86	University of Kansas	Lawrence ...
// 76	University of Kentucky	Lexington
// 821	University of La Verne	La Verne ...
// 391	University of Louisiana at Lafayette	Lafayette
// 710	University of Louisiana at Monroe	Monroe
// 179	University of Louisville	Louisville ...
// 804	University of Lynchburg	Lynchburg
// 1228	University of Maine at Augusta	Augusta
// 1736	University of Maine at Farmington	Farmington
// 1514	University of Maine at Fort Kent	Fort Kent
// 1559	University of Maine at Machias	Machias
// 1464	University of Maine at Presque Isle	Presque Isle ...
// 993	University of Mary	Bismarck
// 953	University of Mary Hardin - Baylor	Belton
// 463	University of Mary Washington	Fredericksburg
// 32	University of Maryland	College Park
// 1001	University of Maryland Eastern Shore	Princess Anne
// 187	University of Maryland, Baltimore	Baltimore
// 125	University of Maryland, Baltimore County	Baltimore
// 61	University of Massachusetts Amherst	Amherst
// 200	University of Massachusetts Boston	Boston
// 316	University of Massachusetts Dartmouth	North Dartmouth
// 669	University of Massachusetts Global	Irvine
// 235	University of Massachusetts Lowell	Lowell
// 258	University of Massachusetts Medical School	Worcester
// 90	University of Miami	Coral Gables ...
// 6	University of Michigan	Ann Arbor ...
// 792	University of Michigan - Dearborn	Dearborn
// 726	University of Michigan - Flint	Flint ...
// 12	University of Minnesota - Twin Cities	Minneapolis ...
// 176	University of Mississippi	University
// 494	University of Mississippi Medical Center	Jackson
// 84	University of Missouri	Columbia
// 161	University of Missouri - Kansas City	Kansas City
// 273	University of Missouri - St.Louis	St.Louis
// 1310	University of Mobile	Mobile
// 1037	University of Montevallo	Montevallo
// 1447	University of Mount Olive	Mount Olive ...
// 1184	University of Mount Union	Alliance
// 616	University of Nebraska at Kearney	Kearney
// 257	University of Nebraska at Omaha	Omaha
// 337	University of Nebraska Medical Center	Omaha
// 49	University of Nebraska - Lincoln	Lincoln
// 162	University of Nevada, Las Vegas	Las Vegas
// 138	University of Nevada, Reno	Reno
// 495	University of New England	Biddeford ...
// 100	University of New Hampshire	Durham ...
// 604	University of New Haven	West Haven ...
// 87	University of New Mexico	Albuquerque ...
// 430	University of New Orleans	New Orleans
// 692	University of North Alabama	Florence
// 548	University of North Carolina at Asheville	Asheville
// 23	University of North Carolina at Chapel Hill	Chapel Hill
// 141	University of North Carolina at Charlotte	Charlotte
// 204	University of North Carolina at Greensboro	Greensboro
// 601	University of North Carolina at Pembroke	Pembroke
// 905	University of North Carolina School of the Arts	Winston - Salem
// 298	University of North Carolina Wilmington	Wilmington
// 239	University of North Dakota	Grand Forks
// 285	University of North Florida	Jacksonville
// 574	University of North Georgia	Dahlonega
// 98	University of North Texas	Denton ...
// 870	University of North Texas Health Science Center	Fort Worth
// 392	University of Northern Colorado	Greeley
// 252	University of Northern Iowa	Cedar Falls
// 952	University of Northwestern - St.Paul	Saint Paul ...
// 1381	University of Northwestern Ohio	Lima
// 73	University of Notre Dame	Notre Dame
// 74	University of Oregon	Eugene ...
// 11	University of Pennsylvania	Philadelphia
// 1358	University of Pikeville	Pikeville
// 44	University of Pittsburgh	Pittsburgh ...
// 606	University of Portland	Portland
// 1500	University of Providence	Great Falls
// 549	University of Puget Sound	Tacoma
// 634	University of Redlands	Redlands
// 144	University of Rhode Island	Kingston ...
// 185	University of Richmond	Richmond
// 1450	University of Rio Grande	Rio Grande
// 52	University of Rochester	Rochester
// 1372	University of Saint Francis	Fort Wayne ...
// 1323	University of Saint Joseph	West Hartford
// 1520	University of Saint Mary	Leavenworth ...
// 228	University of San Diego	San Diego
// 199	University of San Francisco	San Francisco
// 1317	University of Science and Arts of Oklahoma	Chickasha
// 500	University of Scranton	Scranton
// 1180	University of Silicon Valley	San Jose ...
// 1080	University of Sioux Falls	Sioux Falls
// 509	University of South Alabama	Mobile
// 97	University of South Carolina	Columbia ...
// 970	University of South Carolina - Aiken	Aiken
// 1303	University of South Carolina - Beaufort	Bluffton
// 990	University of South Carolina - Upstate	Spartanburg
// 332	University of South Dakota	Vermillion
// 59	University of South Florida	Tampa ...
// 21	University of Southern California	Los Angeles
// 520	University of Southern Indiana	Evansville
// 670	University of Southern Maine	Portland ...
// 250	University of Southern Mississippi	Hattiesburg
// 713	University of St.Augustine for Health Sciences	San Marcos ...
// 936	University of St.Francis	Joliet
// 296	University of St.Thomas	Saint Paul ...
// 987	University of St.Thomas	Houston
// 311	University of Texas Rio Grande Valley	Edinburg ...
// 251	University of Texas Southwestern Medical Center	Dallas
// 1183	University of the Cumberlands	Williamsburg
// 682	University of the District of Columbia	Washington
// 690	University of the Incarnate Word	San Antonio
// 1394	University of the Ozarks	Clarksville
// 377	University of the Pacific	Stockton ...
// 1395	University of the Potomac	Washington ...
// 1588	University of the Southwest	Hobbs
// 1605	University of the West	Rosemead
// 246	University of Toledo	Toledo
// 1636	University of Valley Forge	Phoenixville
// 103	University of Vermont	Burlington
// 35	University of Virginia	Charlottesville ...
// 7	University of Washington	Seattle ...
// 413	University of West Florida	Pensacola ...
// 458	University of West Georgia	Carrollton
// 1442	University of Western States	Portland
// 276	University of Wisconsin - Eau Claire	Eau Claire
// 366	University of Wisconsin - Green Bay	Green Bay
// 405	University of Wisconsin - La Crosse	La Crosse
// 13	University of Wisconsin - Madison	Madison
// 129	University of Wisconsin - Milwaukee	Milwaukee
// 426	University of Wisconsin - Oshkosh	Oshkosh
// 707	University of Wisconsin - Parkside	Kenosha
// 645	University of Wisconsin - Platteville	Platteville
// 705	University of Wisconsin - River Falls	River Falls
// 302	University of Wisconsin - Stevens Point	Stevens Point
// 477	University of Wisconsin - Stout	Menomonie
// 981	University of Wisconsin - Superior	Superior
// 460	University of Wisconsin - Whitewater	Whitewater
// 157	University of Wyoming	Laramie
// 1016	Upper Iowa University	Fayette ...
// 744	Ursinus College	Collegeville
// 1488	Ursuline College	Pepper Pike
// 110	Utah State University	Logan ...
// 824	Utah Tech University
// Utah Tech University	St.George
// 449	Utah Valley University	Orem ...
// 742	Utica College	Utica
// 489	Valdosta State University	Valdosta
// 499	Valencia College	Orlando
// 1391	Valley City State University	Valley City
// 410	Valparaiso University	Valparaíso
// 66	Vanderbilt University	Nashville
// 1647	VanderCook College of Music	Chicago
// 1131	Vanguard University of Southern California	Costa Mesa ...
// 209	Vassar College	Poughkeepsie
// 1482	Vaughn College of Aeronautics and Technology	Flushing
// 1590	Vermont College of Fine Arts	Montpelier
// 699	Vermont Law School	South Royalton
// 1296	Vermont Technical College	Randolph
// 1614	Villa Maria College	Buffalo
// 215	Villanova University	Villanova
// 980	Vincennes University	Vincennes
// 102	Virginia Commonwealth University	Richmond
// 581	Virginia Military Institute	Lexington
// 51	Virginia Polytechnic Institute and State University	Blacksburg
// 814	Virginia State University	Petersburg
// 1204	Virginia Union University	Richmond
// 1078	Virginia Wesleyan University	Virginia Beach
// 1100	Viterbo University	La Crosse
// 1165	Voorhees College	Denmark
// 525	Wabash College	Crawfordsville
// 1735	Wade College	Dallas
// 955	Wagner College	Staten Island
// 175	Wake Forest University	Winston - Salem
// 1341	Waldorf University	Forest City
// 1105	Walla Walla University	College Place
// 1370	Walsh College	Troy
// 920	Walsh University	North Canton
// 1364	Warner Pacific College	Portland
// 1537	Warner University	Lake Wales
// 947	Warren Wilson College	Swannanoa
// 890	Wartburg College	Waverly
// 716	Washburn University	Topeka
// 897	Washington & Jefferson College	Washington
// 1544	Washington Adventist University	Takoma Park
// 297	Washington and Lee University	Lexington
// 622	Washington College	Chestertown
// 64	Washington State University	Pullman
// 50	Washington University in St.Louis	St.Louis
// 1692	Watkins College of Art	Nashville
// 1222	Wayland Baptist University	Plainview ...
// 978	Wayne State College	Wayne
// 123	Wayne State University	Detroit
// 1298	Waynesburg University	Waynesburg
// 1532	Webb Institute	Glen Cove
// 1600	Webber International University	Babson Park
// 351	Weber State University	Ogden ...
// 346	Webster University	St.Louis
// 1683	Welch College	Gallatin
// 219	Wellesley College	Wellesley
// 1134	Wells College	Aurora
// 851	Wentworth Institute of Technology	Boston
// 1315	Wesleyan College	Macon ...
// 196	Wesleyan University	Middletown
// 402	West Chester University of Pennsylvania	West Chester
// 1036	West Coast University - Los Angeles	North Hollywood
// 1390	West Liberty University	West Liberty
// 461	West Texas A & M University	Canyon ...
// 1581	West Virginia School of Osteopathic Medicine	Lewisburg
// 1084	West Virginia State University	Institute
// 118	West Virginia University	Morgantown ...
// 1496	West Virginia University at Parkersburg	Parkersburg
// 1314	West Virginia Wesleyan College	Buckhannon
// 385	Western Carolina University	Cullowhee ...
// 918	Western Colorado University	Gunnison
// 649	Western Connecticut State University	Danbury
// 398	Western Illinois University	Macomb ...
// 247	Western Kentucky University	Bowling Green
// 158	Western Michigan University	Kalamazoo
// 1393	Western Nevada College	Carson City
// 801	Western New England University	Springfield ...
// 1053	Western New Mexico University	Silver City
// 526	Western Oregon University	Monmouth
// 809	Western University of Health Sciences	Pomona
// 194	Western Washington University	Bellingham
// 1675	Westfield State University	Westfield
// 779	Westminster College	Salt Lake City
// 1287	Westminster College, Missouri	Fulton
// 932	Westminster College, Pennsylvania	New Wilmington
// 802	Westmont College	Santa Barbara
// 322	Wheaton College	Wheaton
// 573	Wheaton College, Massachusetts	Norton
// 1151	Wheeling University	Wheeling
// 488	Whitman College	Walla Walla
// 775	Whittier College	Whittier
// 885	Whitworth University	Spokane
// 254	Wichita State University	Wichita
// 448	Widener University	Chester ...
// 1490	Wilberforce University	Wilberforce
// 1406	Wiley College	Marshall
// 693	Wilkes University	Wilkes - Barre
// 330	Willamette University	Salem
// 1095	William Carey University	Hattiesburg ...
// 1347	William James College	Newton
// 1457	William Jessup University	Rocklin ...
// 1232	William Jewell College	Liberty
// 71	William Marsh Rice University	Houston
// 534	William Paterson University	Wayne
// 1388	William Peace University	Raleigh
// 1511	William Penn University	Oskaloosa
// 1461	William Woods University	Fulton
// 1653	Williams Baptist University	Walnut Ridge
// 192	Williams College	Williamstown
// 1304	Wilmington College	Wilmington
// 825	Wilmington University	New Castle ...
// 1182	Wilson College	Chambersburg
// 1319	Wingate University	Wingate
// 673	Winona State University	Winona
// 852	Winston - Salem State University	Winston - Salem
// 536	Winthrop University	Rock Hill
// 1246	Wisconsin Lutheran College	Milwaukee
// 1750	Wisconsin School of Professional Psychology	Milwaukee
// 856	Wittenberg University	Springfield
// 679	Wofford College	Spartanburg
// 1747	WON Institute of Graduate Studies	Glenside
// 1127	Woodbury University	Burbank ...
// 184	Worcester Polytechnic Institute	Worcester
// 1044	Worcester State University	Worcester
// 248	Wright State University	Dayton ...
// 437	Xavier University	Cincinnati
// 746	Xavier University of Louisiana	New Orleans
// 10	Yale University	New Haven
// 249	Yeshiva University	New York City
// 1498	York College	York
// 820	York College of Pennsylvania	York
// 1660	York College, City University of New York	Jamaica
// 1551	Young Harris College	Young Harris
// 480	Youngstown State University	Youngstown
