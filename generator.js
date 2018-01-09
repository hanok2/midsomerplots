const MersenneTwister = require('mersenne-twister');

module.exports.generate = (seed) => {

  mt = new MersenneTwister(seed);

  var murdered_person = [
    "A local bee keeper",
    "A socially-inept Twitter bot developer",
    "A visiting Toby Jug provenance evaluator",
    "The town's cantankerous children's party planner",
    "A local archaeologist",
    "A chilled out yoga instructor",
    "A seditious Marxist",
    "A digital content person",
    "A retired American woman",
    "An overworked psychologist",
    "A lonely librarian",
    "An underappreciated archivist",
    "A meteorologist, who'd been feeling a bit under the weather of late,",
    "A local historian",
    "A local cider maker",
    "A local linguist",
    "The local time-poor bespoke clockmaker",
    "The village's easily-enraged psychologist",
    "An aspiring novelist",
    "A local unpopular businessman",
    "A local sculptor",
    "A local forest ranger",
    "A geeky soprano singer",
    "A cynophobic postman",
    "A model airplane hobbyist",
    "The village bovine inseminator",
    "A local arsonist",
    "A harmless kook",
    "A local homeopath",
    "The village's intemperate Buddhist",
    "The village rascal",
    "A local eccentric Shakespearian actor",
    "A local owl breeder",
    "A local hermit with a dark secret",
    "A local miller",
    "A local bell ringer",
    "A local critic of contemporary architecture",
    "A local poacher",
    "A local uncompromising environmentalist",
    "A local inexplicably celebrated poet",
    "A René Artois lookalike",
    "A local mayor",
    "An embattled councillor",
    "A local spinster",
    "A high flying airline pilot",
    "A local mushroom hunter",
    "A popular marine biologist",
    "A local pigeon enthusiast",
    "The local magistrate",
    "A local rose hybrid creator",
    "A local antiquarian book dealer",
    "A local badger whisperer",
    "A local fencing instructor",
    "A roller skiing fanatic",
    "A local violin maestro",
    "A celebrated cellist",
    "A local jam magnate",
    "A local candle maker",
    "A local barber (who's a cut above the rest)",
    "A local hedgehog rescue activist",
    "A local travel writer",
    "A local busybody",
    "A local bagpiper",
    "A local thatcher",
    "The local piano tuner, who'd been feeling a bit flat lately,",
    "An Ethereum cat fancier",
    "The master of the local Freemasons lodge",
    "A former journalist",
    "A local undertaker",
    "A local philosopher",
    "An unexpected visitor",
    "A local narrator",
    "The local viscount",
    "A local astronomer",
    "A local computer programmer"];

  var cause_of_death = [
    "entombed in a statue",
    "bowl'd to death with turnips",
    "brutally cut down by Britain's most dangerous lawnmower",
    "murdered in the downstairs hall",
    "sliced up by a machine that uses a hydraulic press to split large logs into perfect firewood with ease",
    "dead with a can of cheap lager inserted into the rectum",
    "driven to suicide by loudly whispered passive aggressive comments regarding the state of their garden",
    "destroyed by a deathwatch beetle (Xestobium rufovillosum)",
    "dead at a medieval pulpit that's carved from a single oak",
    "sliced up with secateurs following a garden wall disagreement",
    "inflated on a pair of late 19th century industrial blacksmiths bellows",
    "dead with their privates inexplicably lodged in the vicarage donations box",
    "quite armless erected as the Venus de Milo",
    "dead in the miniature village",
    "pummelled by cricket balls",
    "dead despite the best efforts of an overworked chakra healer",
    "dead after several internal organs were partially sucked out while sitting on an excessively powerful swimming pool drain",
    "with the body at the bottom of the elevator shaft while the upper portion of the head, severed just above the lower jaw, was found in the elevator",
    "after being 'exercised' to death in a public swimming pool",
    "as the victim of the pure sporting capability of an Aston Martin V12 Vantage S",
    "with rubber balls placed expertly in the eye sockets",
    "untimely murdered, with the words from Ecclesiastes 12:8 (NIV) printed on a piece of paper found in the underpants",
    "gently extracted by a cold press juicer",
    "quite lifeless in the Living Museum",
    "par-boiled in brine",
    "with metabolic processes now just history",
    "more bereft of life than an ex-parrot",
    "killed in a model village and tied down like Gulliver in Lilliput",
    "staked out with croquet hoops",
    "painted over by a cricket pitch line painting machine",
    "dead from having a rare wine collection hurled at the head by a replica medieval catapult",
    "as the life of the party despite being dead several days",
    "with a crushed skull from an empty coke bottle dropped from a light plane",
    "by local police investigating trouble at the mill",
    "murdered at the suggestion of a singing elevator voice",
    "imprisoned in a vast wicker figure with goats and burned alive",
    "flattened in a medieval bookpress",
    "crushed under an unreasonably large pile of books",
    "chained up in a niche in an insufferably damp vault",
    "dead from nicotine poisoning",
    "dead in a puddle of black ooze",
    "dead in a manner inspired by macabre images on a medieval fresco",
    "crushed to death in a builder's yard",
    "hunted down then torn to shreds by a pack of robotic docs",
    "badly ravaged by mower blades",
    "in a pit filled with concrete, with a tin box resting on the top",
    "knocked over by a herd of sheep into a deep quarry",
    "greatly decayed and clotted with gore, standing erect before the eyes of the spectators",
    "in a tank with an octopus named Fred wrapped around the body",
    "crushed to death by apples",
    "drowned at the bottom of the mill pond",
    "shot in the heart at the stroke of midnight",
    "beaten to death with an oak staff",
    "with brains extruding from a head wound",
    "eviscerated into an offal cart (US patent 3863985)",
    "dead at the hands of a pineapple-slicer-wielding ophthalmologist",
    "dead clutching a stuffed Pekinese called MiMi",
    "strapped to an enormous cheese wheel",
    "stung to death by deliberately enraged bees",
    "bitten to death by a big white cat",
    "drowned in cider",
    "murdered following the annual tic tac toe competition",
    "run down by a car then placed face down in a local lake",
    "strangled and stuffed inside a church bell",
    "decoupaged to a 1950s walnut veneer sideboard",
    "strangled with a scarf",
    "obliterated by a North Korean mini-nuke",
    "drowned in a TV monitor filled with red wine",
    "dropped from an aeroplane",
    "stewed in a vat of his own juices",
    "nibbled to death by trained dormice",
    "smothered to death by a shower of gifts of cloaks and hats",
    "smeared with cow manure and eaten by dogs",
    "covered in milk and honey then devoured by insects",
    "murdered with a poisoned toothpick",
    "in pieces in barrels of acid",
    "sawn clean in two",
    "with a knitting needle placed expertly through the carotid artery",
    "cut into pieces with a 14th Century samurai sword",
    "rolled up in a rug and then trampled by horses",
    "tightly sewn into a linen sheet soaked in spirits then set alight",
    "lightly roasted with lemon and thyme stuffing",
    "covered with truffle oil and mauled to death by a boar",
    "in the river, weighted down with a tombstone from a local graveyard",
    "pecked to death by owls",
    "impaled on a centuries-old maypole",
    "drowned in a manner eerily reminiscent of an event in local folklore",
    "electrocuted with a sabotaged Theremin",
    "slumped over a historically significant sundial",
    "strangled with the cord of his own metal detector",
    "exsanguinated on an heirloom variety rose bush",
    "in a church vault being opened by local archaeologists",
    "crushed under a fallen piece of stage equipment on the opening night of Macbeth",
    "garroted with a very distinctive set of lute strings",
    "under a tractor that is not his usual tractor",
    "baked into an oversized sponge cake",
    "poisoned with a local variety of toadstool",
    "buried neck-deep in pudding and eaten by Pudding Ants",
    "stuffed inside an 18th century cor anglais",
    "entombed in a large croquembouche",
    "encased in a giant candle",
    "crushed in a dark satanic mill",
    "bored to death by formulaic TV series",
    "dressed like a bride and dead in a bath",
    "stuffed full of nuts by squirrels",
    "with intestines smeared over the local stone circle",
    "with a golden arrow through the heart",
    "smothered in potpourri",
    "set up like a scarecrow",
    "crushed under the world's biggest scone",
    "dead clutching a book about witchcraft",
    "torn apart by hedgehogs",
    "stuffed full of battenberg",
    "desiccated by magnesium perchlorate",
    "suffocated in a vat of fairy floss",
    "eaten by Cromer crabs",
    "bludgeoned with a croquet mallet",
    "paved into the village thoroughfare",
    "quilted to death" ];

  var village_group = [
    "medieval reenactment society",
    "choir",
    "patron saint",
    "army base",
    "chess club",
    "Floral Society",
    "obsessive history buffs",
    "vicar's son newly returned from university and full of reformist ideas",
    "company of morris dancers",
    "immigrant",
    "cult leader",
    "prodigal son",
    "gourami appreciation society",
    "classic and modified car club",
    "chamber of commerce",
    "amateur drama group",
    "shuttlecock appreciation society",
    "circus troupe",
    "black death re-enactment society",
    "ennui society",
    "Communist Party chapter",
    "tweeters who prefer tweets in 140 characters",
    "Brexiteers",
    "chapter of the Ayn Rand society",
    "infosec community",
    "teenagers wearing hoodies",
    "church community",
    "twins",
    "audiologist, One-Eared Brian",
    "nerd",
    "florist",
    "baker",
    "pastor",
    "misunderstood mailman",
    "real ale appreciation society",
    "brass band",
    "madrigal enthusiasts",
    "ghost hunters society",
    "ghost",
    "financially-embarrassed aristocrat",
    "UFO buff",
    "poacher",
    "witch",
    "New Age commune",
    "teen computer hacker",
    "impetuous young heir",
    "scout troop",
    "cosplay society",
    "suspicious out-of-towners",
    "society of Venus watchers",
    "short-wave radio club" ];

  var angry_at = [
    "parking restrictions",
    "researchers who don't understand how much this all means to the village",
    "a proposed zoo",
    "the opening of a McDonald's store",
    "the decline of the red squirrel population from squirrel pox",
    "modernity itself",
    "a big movie shoot taking place in the town",
    "late capitalism",
    "a proposed change to the local custard recipe",
    "redevelopment on the land of a down-on-his-luck aristocrat",
    "new beekeeping methods",
    "the theft of a Burmese bell",
    "multiculturalism",
    "a charismatic out-of-towner",
    "Daily Mail readers",
    "someone who doesn't yet know they're actually the killer's daughter",
    "musical innovation",
    "the new deer sanctuary",
    "doggers",
    "the decline in newspaper reading",
    "poor quality tea",
    "the metric system",
    "the decline in furniture manufacture",
    "a violent sub-culture",
    "meddling ornithologists",
    "equestrian tourism",
    "badger culling",
    "the end of local tobacco production",
    "local witchcraft practices",
    "the ghost walk",
    "the closure of the arts and crafts gallery",
    "a museum dedicated to an obscure local poet",
    "owls",
    "a vicar’s choir banquet",
    "redevelopment and/or radical Islam",
    "a plan to sell off the mansion",
    "a forthcoming eclipse",
    "a controversial judging decision in the Midsomer Pig Show",
    "climate change",
    "a new wind farm",
    "pig farm effluent",
    "the rise of artificial intelligence",
    "all-encompassing whiteness",
    "the cultural and economic hegemony of Causton",
    "Dutch Elm Disease",
    "the sale of dogs online",
    "the arrival of a touring pantomime",
    "a planned biography of a deceased local identity" ];

    var threatened = [
      "the annual cheese festival",
      "rambling rights",
      "the Midsomer Luxury Villas",
      "the closure of the Auburn Echo Village",
      "to expose the church's historical manuscript as a forgery",
      "to overshadow the sheepdog trials",
      "the town's largely potpourri-based economy",
      "centuries of ultimately pointless tradition",
      "the closure of the miniature village",
      "what little sexual tension the town has left",
      "a legendary Anglo-Saxon treasure hoard",
      "the village's unbroken winning streak at the county honey fair",
      "to dredge up events from twenty-five years ago",
      "lace doily production levels",
      "the local deer sanctuary",
      "to ruin the pub",
      "gin production",
      "badgers",
      "to make the sun set on the British Empire",
      "England’s green and pleasant land",
      "the future of Morris Dancing",
      "the very survival of England",
      "the village fabric",
      "the old inn",
      "the cow farm",
      "to awaken the giant baby that came before good and evil, being and non-being",
      "to reveal Amethyst Realm’s 20 ghost lovers to her husband",
      "near-lethal levels of tweeness",
      "the Barnabys' marriage",
      "an annual cricket match that everyone really cares about for some reason",
      "crop circles",
      "the trout pond",
      "to destroy the boarding school’s secret society",
      "otters",
      "a huge annual event in Midsomer that we’re nonetheless only hearing about for the first time",
      "a nearby grotto associated with a medieval saint",
      "to set off unexploded bombs from WWII",
      "caravaning",
      "to ruin their sleepy town",
      "to close the 160-year-old mustard factory",
      "pizza deliveries",
      "local hedge maze bylaws",
      "the great bake off",
      "to reveal the secret affairs of the local vicar",
      "to call Chthulu from the depths",
      "the end of the Internet's most popular bot",
      "the winery",
      "the rabbit show",
      "to expose a web of sex, blackmail and lies",
      "duffle coat production",
      "drone deliveries",
      "the closure of the local discotheque",
      "the biggest and most beautiful wisteria in the country",
      "the local co-op",
      "the planned civic centre",
      "to unleash the four horsemen of the apocalypse",
      "to turn a slightly neurotic Sykes into a savage killer terrier",
      "a rare plant found on the cricket pitch",
      "Geoff, the last surviving resident of Midsomer",
      "to make history repeat itself",
      "unravel a sinister web of lies from past and present",
      "a dystopian police state",
      "to bring forward the date of the coming goat apocalypse",
      "the collapse of the local stone circle",
      "to reveal the name of Dr Who",
      "to publish spoilers for an upcoming episode of Eastenders",
      "to make all the clocks in the city begin to whirr and chime",
      "to make the village do the time warp again",
      "Europe's most radical meat-based marketing board",
      "to interrupt the Miss Potato and Lamb judging",
      "to tell the vicar who his parents really are",
      "burn every catalogue of London's inter-dimensional gateways",
      "the closure of a celebrity-run surgery",
      "to expose a conservative councillor's ownership of a brothel",
      "a further nine seasons of this nonsense" ];

  var rands = [Math.floor ( mt.random() * murdered_person.length ), Math.floor ( mt.random() * cause_of_death.length ), Math.floor ( mt.random() * village_group.length ), Math.floor ( mt.random() * angry_at.length ), Math.floor ( mt.random() * threatened.length )];

  return murdered_person[rands[0]] + " is found " + cause_of_death[rands[1]] +". Suspicion falls on the village "+ village_group[rands[2]] + ", angry that " + angry_at[rands[3]] + " might threaten " + threatened[rands[4]]+".";
};
