
var ATTRIBUTES = {
	'primary' : [
		'FO', 'AG', 'RA', 'EN',
		'PR', 'PE', 'IN', 'BE',
	],
	'secondary' : [
		'SI', 'PV', 'PP', 'CH', 'PPE',
	],
	'skill' : {
		'ACR': ['AG', 'PR', "Acrobatie"],
		'COM': ['AG', 'FO', "Combat"],
		'CON': ['PR', 'RA', "Conduite"],
		'DEP': ['PR', 'PE', "Démolition (Pose)", false],
		'DET': ['IN', 'PR', "Démolition (Transp.)", false],
		'DRE': ['IN', 'PE', "Dessage", false],
		'DIS': ['AG', 'IN', "Discrétion"],
		'LAN': ['FO', 'PR', "Lancer"],
		'MAN': ['PR', 'RA', "Manipulation", false],
		'MAA': ['IN', 'RA', "Manuf. d'armes", false],
		'MAV': ['PR', 'IN', "Manuf. de vêtements", false],
		'MAR': ['BE', 'PE', "Marchandage"],
		'MEC': ['IN', 'RA', "Mécanique"],
		'NAG': ['AG', 'FO', "Nage", false],
		'POP': ['PR', 'IN', "Pose de pièges", false],
		'PRE': ['PE', 'RA', "Premiers soins"],
		'REP': ['IN', 'PE', "Repérage"],
		'RES': ['EN', 'FO', "Résistance"],
		'SED': ['BE', 'FO/AG', "Séduction"],
		'TIR': ['PE', 'PR', "Tir"],
		'TIN': ['IN', 'PE', "Tir indirect", false],
	},
}

var GENDER = {
	'female': { 
		'FO': -1, 
		'AG': +1, 
	},
	'male': { 
		'FO': +1, 
		'AG': -1, 
	},
};

var TRIBE = {
	'amazones': {
		'label': "Amazones",
		'RA': +1, 'BE': +1,
		'DIS': +10, 'MAR': -20, 'TIR': +20,
	},
	'confrerie du serpent': {
		'label': "Confrérie du serpent",
		'PE': +1, 'PR': +1,
		'CON': -50, 'DIS': +20, 'TIR': +10,
	},
	'enfants': {
		'label': "Enfants",
		'AG': +1, 'RA': +1,
		'DIS': +20, 'REP': +10, 'ACR': +20, 'MAR': -20,
	},
	'conservateurs': {
		'label': "Conservateurs",
		'IN': +1, 'FO': -1, 'EN': -1,
		'CON': -10, 'TIR': -20, 'COM': -30, 'RES': -40,
	},
	'fils du metal': {
		'label': "Fils du métal",
		'IN': -2, 'RA': +1,
		'CON': +20, 'TIR': +20, 'MAR': -20, 'PRE': -30,
	},
	'fermiers': {
		'label': "Fermiers",
		'BE': -1, 'EN': +1,
		'MAR': +10, 'CON': -20,
	},
	'guerisseurs': {
		'label': "Guérisseurs",
		'IN': +2, 'PE': +1, 'PR': +1,
		'PRE': +30, 'DIS': +10,
	},
	'garagistes': {
		'label': "Garagistes",
		'IN': +1, 'PR': +1,
		'CON': +10, 'MEC': +30,
	},
	'skinheads': {
		'label': "Skinheads",
		'FO': +1, 'PE': -1,
		'MAR': -10, 'COM': +10, 'TIR': +10, 'DIS': -10,
	},
	'punks': {
		'AG': +1, 'RA': +1, 'FO': -1,
		'label': "Punks",
		'COM': +10, 'DIS': +20, 'MAR': -20, 'ACR': +10, 'TIR': +10,
	},
	'yankees': {
		'label': "Yankees",
		'PR': +1, 'PE': +1,
		'DIS': +10, 'ACR': +10, 'TIR': +10, 'RES': -10, 'MAR': -20, 
	},
	'vikings': {
		'label': "Vikings",
		'FO': +1, 'EN': +1, 'RA': -1,
		'COM': +20,
	},
	'indiens': {
		'label': "Indiens",
		'AG': +1, 'RA': +1, 'PE': +1,
		'MAR': -20, 'REP': +10, 'DIS': +10, 'TIR': +10, 'REP': +20, 'CON': +5,
	},
	"hell's angels": {
		'label': "Hell's Angels",
		'FO': +1, 'EN': +1,
		'CON': +20, 'COM': +10,
	},
	'mercenaires': {
		'label': "Mercenaires",
		'RA': +1, 'PR': +1, 'PE': +1,
		'COM': +10, 'CON': +10, 'LAN': +5, 'TIR': +10,
	},
	'marchands': {
		'label': "Marchands",
		'IN': +2, 'EN': -1, 'PE': +1,
		'MAR': +30, 'REP': +10,
	},
	'justiciers': {
		'label': "Justiciers",
		'CON': +10, 'TIR': +10, 'COM': +10,
	},
	'cro-mags': {
		'label': "Cro-mags",
		'FO': +2, 'EN': +3, 'IN': -3,
		'CON': -70, 'COM': +30, 'DIS': +30, 'REP': +10, 'MEC': -50, 'MAR': -20,
	},
};

var SPECIALS = {

		  //////////////////////
		 // TALENTS SPECIAUX //
		//////////////////////

	'agriculture et élevage': {
		'label': "Agriculture et élevage",
		'PPE': 10, 
		'modifs': [
				{'attribute': 'PP', 'modif': +15 },
			],
		},
	'amitie': {
		'label': "Amitié",
		'PPE': 50, 
		},
	'camouflage': {
		'label': "Camouflage",
		'PPE': 25, 
		},
	'celebrite': {
		'label': "Célébrité",
		'PPE': 10, 
		'modifs': [
				{'attribute': 'PP', 'modif': +30 },
			],
		},
	'chance': {
		'label': "Chance",
		'PPE': 40, 
		},
	'combat motorise': {
		'label': "Combat motorisé",
		'PPE': 40, 
		'modifs': [
				{'attribute': 'CON', 'modif': +20, 'if': "en combat motorisé" },
				{'attribute': 'REP', 'modif': +20, 'if': "en combat motorisé" },
				{'attribute': 'TIR', 'modif': +20, 'if': "en combat motorisé" },
			],
		},
	'combat nocturne': {
		'label': "Combat nocturne",
		'PPE': 40, 
		'modifs': [
				{'attribute': 'REP', 'modif': +10, 'if': "nocturne" },
				{'attribute': 'TIR', 'modif': +10, 'if': "nocturne" },
				{'attribute': 'ACR', 'modif': +10, 'if': "nocturne" },
				{'attribute': 'COM', 'modif': +10, 'if': "nocturne" },
				{'attribute': 'DIS', 'modif': +10, 'if': "nocturne" },
				{'attribute': 'LAN', 'modif': +10, 'if': "nocturne" },
			],
		},
	'combat rural': {
		'label': "Combat rural",
		'PPE': 40, 
		'modifs': [
				{'attribute': 'REP', 'modif': +20, 'if': "rural" },
				{'attribute': 'TIR', 'modif': +20, 'if': "rural" },
				{'attribute': 'ACR', 'modif': +20, 'if': "rural" },
				{'attribute': 'COM', 'modif': +20, 'if': "rural" },
				{'attribute': 'DIS', 'modif': +20, 'if': "rural" },
				{'attribute': 'LAN', 'modif': +20, 'if': "rural" },
			],
		},
	'combat sans arme': {
		'label': "Combat sans arme",
		'PPE': 20, 
		'modifs': [
				{'attribute': 'COM', 'modif': 'FOx4' /* TODO fonctor */, 'if': "sans arme" },
			],
		},
	'combat urbain': {
		'label': "Combat urbain",
		'PPE': 30, 
		'modifs': [
				{'attribute': 'REP', 'modif': +10, 'if': "urbain" },
				{'attribute': 'TIR', 'modif': +10, 'if': "urbain" },
				{'attribute': 'ACR', 'modif': +10, 'if': "urbain" },
				{'attribute': 'COM', 'modif': +10, 'if': "urbain" },
				{'attribute': 'DIS', 'modif': +10, 'if': "urbain" },
				{'attribute': 'LAN', 'modif': +10, 'if': "urbain" },
			],
		},
	'commandement': {
		'label': "Commandement",
		'PPE': 25, // INx5 PJ 
		'modifs': [
				{'attribute': 'PP', 'modif': +20 },
			],
		},
	'conduite specialisee': {
		'label': "Conduite spécialisée",
		'PPE': 10, 
		'modifs': [
				{'attribute': 'CON', 'modif': +20, 'if': "1 véhicule" },
			],
		},
	'conduite sportive': {
		'label': "Conduite sportive",
		'PPE': 10, 
		'modifs': [
				{'attribute': 'CON', 'modif': +20, 'if': "accélération/freinage" },
			],
		},
	'construction': {
		'label': "Construction",
		'PPE': 20, 
		'modifs': [
				{'attribute': 'PP', 'modif': +15 },
			],
		},
	'course': {
		'label': "Course",
		'PPE': 10, 
		},
	'dessin': {
		'label': "Dessin",
		'PPE': 10, 
		'modifs': [
				{'attribute': 'PP', 'modif': +10 },
			],
		},
	'deguisement': {
		'label': "Déguisement",
		'PPE': 35, 
		},
	'demolition': {
		'label': "Démolition",
		'PPE': 35, 
		'skills': ['DET', 'DEP'],
		},
	"dressage d'animaux": {
		'label': "Dressage d'animaux",
		'PPE': 30, 
		'skills': ['DRE'],
		},
	'escalade': {
		'label': "Escalade",
		'PPE': 15, 
		'modifs': [
				{'attribute': 'ACR', 'modif': +30, 'if': "escalade" },
			],
		},
	'esquive': {
		'label': "Esquive",
		'PPE': 20,
		},
	'flatterie': {
		'label': "Flatterie",
		'PPE': 20, 
		'modifs': [
				{'attribute': 'MAR', 'modif': 'INx3' }, //TODO fonctor
				{'attribute': 'SED', 'modif': 'INx5' }, //TODO fonctor
			],
		},
	'forgeron': {
		'label': "Forgeron",
		'PPE': 30, 
		'modifs': [
				{'attribute': 'PP', 'modif': +15 },
				{'attribute': 'MAA', 'modif': +30, 'if': "armes en métal" },
				{'attribute': 'MEC', 'modif': +20 },
			],
		},
	'heraldique': {
		'label': "Héraldique",
		'PPE': 10,
		'modifs': [
				{'attribute': 'REP', 'modif': +10, 'if': "héraldique" },
			],
		},
	'histoire': {
		'label': "Histoire",
		'PPE': 40, //TODO fonctor (30 if vieux)
		'modifs': [
				{'attribute': 'PP', 'modif': +20 },
			],
		},
	'lire et ecrire': {
		'label': "Lire et écrire",
		'PPE': 10, //TODO fonctor (5 if vieux, 0 if histoire)
		},
	"maitre d'arme": {  //TODO gear-linked
		'label': "Maître d'armes",
		'PPE': 40, 
		'modifs': [
				{'attribute': 'PP', 'modif': +15 },
				{'attribute': 'COM', 'modif': +30, 'if': "une épée" }, // or TIR for sniper
				{'attribute': 'COM', 'modif': -60, 'if': "viser" }, // or TIR for sniper
			],
		},
	'manipulation': {
		'label': "Manipulation",
		'PPE': 30, 
		'skills': ['MAN'],
		},
	"manufacture d'armes": {
		'label': "Manufacture d'armes",
		'PPE': 40, 
		'modifs': [
				{'attribute': 'PP', 'modif': +20 },
			],
		'skills': ['MAA'],
		},
	'manufacture de vetements': {
		'label': "Manufacture de vêtements",
		'PPE': 25, 
		'modifs': [
				{'attribute': 'PP', 'modif': +10 },
			],
		'skills': ['MAV'],
		},
	'maquillage': {  //TODO gear-linked
		'label': "Maquillage",
		'PPE': 5, 
		'modifs': [
				{'attribute': 'SED', 'modif': '5/15' }, //TODO fonctor
			],
		},
	'musicien': {
		'label': "Musicien",
		'PPE': 10, 
		'modifs': [
				{'attribute': 'PP', 'modif': +5 },
			],
		},
	'nage': {
		'label': "Nage",
		'PPE': 20, 
		'skills': ['NAG'],
		},
	'parade': {
		'label': "Parade",
		'PPE': 20, 
		},
	'peche': {
		'label': "Pêche",
		'PPE': 20, 
		},
	'pistage': {
		'label': "Pistage",
		'PPE': 15, 
		'modifs': [
				{'attribute': 'REP', 'modif': 'INx3' /* TODO fonctor */, 'if': "pistage" },
			],
		},
	'pose de piege': {
		'label': "Pose de pièges",
		'PPE': 25, 
		'skills': ['POP'],
		},
	"resistance a l'alcool": {
		'label': "Résistance à l'alcool",
		'PPE': 20, //TODO fonctor (10 if alcoolique)
		'modifs': [
				{'attribute': 'RES', 'modif': 'ENx4' /* TODO fonctor */, 'if': "alcool" },
			],
		},
	'resistant': {
		'label': "Résistant",
		'PPE': 15,
		'modifs': [
				{'attribute': 'SI', 'modif': +2 },
				{'attribute': 'PV', 'modif': +4 },
			],
		},
	'richesse': {  //TODO gear-linked (3 objects < 2000)
		'label': "Richesse",
		'PPE': 25,
		'modifs': [
				{'attribute': 'PP', 'modif': +5 },
			],
		},
	'specialisation en arme': {  //TODO gear-linked
		'label': "Spécialisation en arme",
		'PPE': 10,
		'modifs': [
				{'attribute': '?' /* TODO fonctor */, 'modif': +20, 'if': "une arme" },
			],
		},
	'tir indirect': {
		'label': "Tir indirect",
		'PPE': 20, 
		'skills': ['TIN'],
		},
	'tir rapide': {  //TODO gear-linked
		'label': "Tir rapide",
		'PPE': 15,
		'modifs': [
				{'attribute': '?' /* TODO fonctor */, 'modif': +5, 'if': "une arme" },
				{'attribute': 'RA', 'modif': 'RA' /* TODO fonctor */, 'if': "une arme" },
			],
		},
	'tricherie': {
		'label': "Tricherie",
		'PPE': 20,
		'modifs': [
				{'attribute': '?' /* TODO */, 'modif': 'INx8' /* TODO fonctor */, 'if': "triche au jeu" },
			],
		},

		  /////////////
		 // DEFAUTS //
		/////////////
	/* (+): gain +5PPE
	 * (-): gain PPE/2
	 * one can choose a given flaw only once
	 * no more than 30PPE (except with only one flaw > 30PPE)
	 */
		
	'alcoolique': {
		'label': "Alcoolique",
		'PPE': -20,
		'modif': [
				{'attribute': 'PP', 'modif': -5 },
			],
		},
	'avare': {
		'label': "Avare",
		'PPE': -15,
		'modif': [
				{'attribute': 'PP', 'modif': -15 },
				{'attribute': 'MAR', 'modif': -20 },
			],
		},
	'aversion envers les animaux': {
		'label': "Aversion envers les animaux",
		'PPE': -15, // TODO cannot have dressage
		},
	'borgne': {
		'label': "Borgne",
		'PPE': -10,
		'modif': [
				{'attribute': 'SED', 'modif': -30 },
				{'attribute': 'REP', 'modif': -20 },
			],
		},
	'boulimique': {
		'label': "Boulimique",
		'PPE': -10,
		},
	'bras en moins': {
		'label': "Bras en moins",
		'PPE': -40,
		'modif': [
				{'attribute': 'CON', 'modif': -40 },
				{'attribute': 'SED', 'modif': -30 },
				{'attribute': 'MEC', 'modif': -50 },
				{'attribute': 'PRE', 'modif': -30 },
			],
		},
	'cicatrice': {
		'label': "Cicatrice",
		'PPE': -5,
		'modif': [
				{'attribute': 'SED', 'modif': -20 },
			],
		},
	"code d'honneur": {
		'label': "Code d'honneur",
		'PPE': -5, // TODO -5-40
		},
	'dandy': {
		'label': "Dandy",
		'PPE': -10,
		'modif': [
				{'attribute': 'DIS', 'modif': -20 },
			],
		},
	'desagreable': {
		'label': "Désagrable",
		'PPE': -10,
		'modif': [
				{'attribute': 'MAR', 'modif': -90 },
				{'attribute': 'SED', 'modif': -50 },
			],
		},
	'fou': {
		'label': "Fou",
		'PPE': -15, // TODO -15-40 ; liste folies
		'modif': [
				{'attribute': 'PP', 'modif': -20 },
			],
		},
	'fugitif': {
		'label': "Fugitif",
		'PPE': -30,
		},
	'galant': {
		'label': "Galant",
		'PPE': -15,
		},
	'impuissant': {
		'label': "Impuissant",
		'PPE': -15,
		'modif': [
				{'attribute': 'PP', 'modif': -15 },
				{'attribute': 'SED', 'modif': -90, 'if': "connu" },
			],
		},
	'impulsif': {
		'label': "Impulsif",
		'PPE': -20,
		'modif': [
				{'attribute': 'PP', 'modif': -5 },
				{'attribute': 'MAR', 'modif': -30 },
				{'attribute': 'SED', 'modif': -15 },
			],
		},
	'jambe en moins': {
		'label': "Jambe en moins",
		'PPE': -40,
		'modif': [
				{'attribute': 'CON', 'modif': -40 },
				{'attribute': 'SED', 'modif': -30 },
				{'attribute': 'COM', 'modif': -50 },
				{'attribute': 'DIS', 'modif': -20 },
				{'attribute': 'ACR', 'modif': -50 },
			],
		},
	'jeune': {
		'label': "Jeune",
		'PPE': -10, // cannot have vieux flaw
		'modif': [
				{'attribute': 'FO', 'modif': -2 },
				{'attribute': 'EN', 'modif': -1 },
			],
		},
	'loyal': {
		'label': "Loyal",
		'PPE': -15,
		},
	'malchanceux': {
		'label': "Malchanceux",
		'PPE': -30,
		},
	'misogyne': {
		'label': "Misogyne",
		'PPE': -10,
		'modif': [
				{'attribute': 'SED', 'modif': -50, 'if': "femmes" },
				{'attribute': 'MAR', 'modif': -30, 'if': "femmes" },
			],
		},
	'misandre': {
		'label': "Misandre",
		'PPE': -10,
		'modif': [
				{'attribute': 'SED', 'modif': -50, 'if': "hommes" },
				{'attribute': 'MAR', 'modif': -30, 'if': "hommes" },
			],
		},
	'muet': {
		'label': "Muet",
		'PPE': -25,
		'modif': [
				{'attribute': 'SED', 'modif': -10 },
				{'attribute': 'MAR', 'modif': -40 },
			],
		},
	'naif': {
		'label': "Naïf",
		'PPE': -25,
		},
	'obsede sexuel': {
		'label': "Obsédé sexuel",
		'PPE': -25,
		'modif': [
				{'attribute': 'SED', 'modif': -80, 'if': "sexe préféré" },
				{'attribute': 'MAR', 'modif': -50, 'if': "sexe préféré" },
			],
		},
	'pensif': {
		'label': "Pensif",
		'PPE': -10,
		'modif': [
				{'attribute': 'RA', 'modif': 0 /* TODO fonctor -RA/2*/, 'if': "surpris" },
				{'attribute': 'talents'/*TODO*/, 'modif': -20, 'if': "surpris" },
			],
		},
	'phobie': {
		'label': "Phobie",
		'PPE': -5, // -5-40 liste phobies
		},
	'reserve': {
		'label': "Réservé",
		'PPE': -10,
		'modif': [
				{'attribute': 'MAR', 'modif': -20 },
			],
		},
	'sourd': {
		'label': "Sourd",
		'PPE': -20,
		'modif': [
				{'attribute': 'SED', 'modif': -10 },
				{'attribute': 'MAR', 'modif': -40 },
			],
		},
	'vieux': {
		'label': "Vieux",
		'PPE': -15, // cannot be jeune
		'modif': [
				{'attribute': 'FO', 'modif': -2 },
				{'attribute': 'EN', 'modif': -2 },
			],
		},
}

var MODIFS = {
	// primary
	FO:0, AG:0, RA:0, EN:0,
	PR:0, PE:0, IN:0, BE:0,
	// skills
	ACR:0, COM:0, CON:0, DIS:0,
	LAN:0, MAR:0, MEC:0, PRE:0,
	REP:0, RES:0, SED:0, TIR:0,
	// edge skills
	DEP:0, DET:0, DRE:0,
	MAN:0, MAA:0, MAV:0,
	NAG:0, POP:0, TIN:0,
}

var POINTS = {
	// primary
	FO:5, AG:5, RA:5, EN:5,
	PR:5, PE:5, IN:5, BE:5,
	// skills
	ACR:0, COM:0, CON:0, DIS:0,
	LAN:0, MAR:0, MEC:0, PRE:0,
	REP:0, RES:0, SED:0, TIR:0,
	// edge skills
	DEP:0, DET:0, DRE:0,
	MAN:0, MAA:0, MAV:0,
	NAG:0, POP:0, TIN:0,
}

var MAXIMUM_PRIMARY_POINTS = 40;
var MAXIMUM_PPE = 50;

var PC = {
	ppe: MAXIMUM_PPE,
};

function dumpPC() {
	console.log("----------------------------------------"
		+"\n--- FINAL PC ("+PC.gender+" "+PC.tribe+"):\n"
		+'FO:'+PC.FO+' AG:'+PC.AG+' RA:'+PC.RA+' EN:'+PC.EN+' '
		+'PR:'+PC.PR+' PE:'+PC.PE+' IN:'+PC.IN+' BE:'+PC.BE+'\n'
		+'ACR:'+PC.ACR+' COM:'+PC.COM+' CON:'+PC.CON+' DIS:'+PC.DIS+' '
		+'LAN:'+PC.LAN+' MAR:'+PC.MAR+' MEC:'+PC.MEC+' PRE:'+PC.PRE+' '
		+'REP:'+PC.REP+' RES:'+PC.RES+' SED:'+PC.SED+' TIR:'+PC.TIR+'\n'
		+'DEP:'+PC.DEP+' DET:'+PC.DET+' DRE:'+PC.DRE+' '
		+'MAN:'+PC.MAN+' MAA:'+PC.MAA+' MAV:'+PC.MAV+' '
		+'NAG:'+PC.NAG+' POP:'+PC.POP+' TIN:'+PC.TIN+' '
		+"\n--- POINTS:\n"
		+'FO:'+POINTS.FO+' AG:'+POINTS.AG+' RA:'+POINTS.RA+' EN:'+POINTS.EN+' '
		+'PR:'+POINTS.PR+' PE:'+POINTS.PE+' IN:'+POINTS.IN+' BE:'+POINTS.BE+'\n'
		+'ACR:'+POINTS.ACR+' COM:'+POINTS.COM+' CON:'+POINTS.CON+' DIS:'+POINTS.DIS+' '
		+'LAN:'+POINTS.LAN+' MAR:'+POINTS.MAR+' MEC:'+POINTS.MEC+' PRE:'+POINTS.PRE+' '
		+'REP:'+POINTS.REP+' RES:'+POINTS.RES+' SED:'+POINTS.SED+' TIR:'+POINTS.TIR+'\n'
		+'DEP:'+POINTS.DEP+' DET:'+POINTS.DET+' DRE:'+POINTS.DRE+' '
		+'MAN:'+POINTS.MAN+' MAA:'+POINTS.MAA+' MAV:'+POINTS.MAV+' '
		+'NAG:'+POINTS.NAG+' POP:'+POINTS.POP+' TIN:'+POINTS.TIN+'\n'
		+'Available PPE:'+PC.ppe
		+"\n--- MODIFS:\n"
		+'FO:'+MODIFS.FO+' AG:'+MODIFS.AG+' RA:'+MODIFS.RA+' EN:'+MODIFS.EN+' '
		+'PR:'+MODIFS.PR+' PE:'+MODIFS.PE+' IN:'+MODIFS.IN+' BE:'+MODIFS.BE+'\n'
		+'ACR:'+MODIFS.ACR+' COM:'+MODIFS.COM+' CON:'+MODIFS.CON+' DIS:'+MODIFS.DIS+' '
		+'LAN:'+MODIFS.LAN+' MAR:'+MODIFS.MAR+' MEC:'+MODIFS.MEC+' PRE:'+MODIFS.PRE+' '
		+'REP:'+MODIFS.REP+' RES:'+MODIFS.RES+' SED:'+MODIFS.SED+' TIR:'+MODIFS.TIR+'\n'
		+'DEP:'+MODIFS.DEP+' DET:'+MODIFS.DET+' DRE:'+MODIFS.DRE+' '
		+'MAN:'+MODIFS.MAN+' MAA:'+MODIFS.MAA+' MAV:'+MODIFS.MAV+' '
		+'NAG:'+MODIFS.NAG+' POP:'+MODIFS.POP+' TIN:'+MODIFS.TIN+' '
		+"\n----------------------------------------"
	);
}

function isSkill(id) {
	var skills = Object.keys(ATTRIBUTES['skill']);
	for (var i = 0; i < skills.length; i++) {
		if (id == skills[i]) return true;
	}
	return false;
}

function getAttributeType(id) {
	if (id == 'FO' || id == 'AG' || id == 'RA' || id == 'EN'
	 || id == 'PR' || id == 'PE' || id == 'IN' || id == 'BE')
		return 'primary';
	if (isSkill(id)) return 'skill';
	throw "Unknown attribute \""+id+"\"";
}

function getCurrentPoints(type) {
	if (type == 'primary')
		return POINTS.FO + POINTS.AG + POINTS.RA + POINTS.EN
			 + POINTS.PR + POINTS.PE + POINTS.IN + POINTS.BE;
	if (type == 'skill')
		return POINTS.ACR + POINTS.COM + POINTS.CON + POINTS.DIS
			 + POINTS.LAN + POINTS.MAR + POINTS.MEC + POINTS.PRE
			 + POINTS.REP + POINTS.RES + POINTS.SED + POINTS.TIR
			 + POINTS.DEP + POINTS.DET + POINTS.DRE
			 + POINTS.MAN + POINTS.MAA + POINTS.MAV
			 + POINTS.NAG + POINTS.POP + POINTS.TIN;
}

function getAvailablePoints(type) {
	if (type == 'primary')
		return MAXIMUM_PRIMARY_POINTS - getCurrentPoints(type);
	if (type == 'skill')
		return PC.ppe;
}

function getBaseSkill(id) {
	var l = ATTRIBUTES['skill'][id];
	var res = (PC[l[0]] + PC[l[1]])*5;
	return res;
}

function updatePCAttribute(id) {
	switch (id) {
		case 'FO':
		case 'AG':
		case 'RA':
		case 'EN':
		case 'PR':
		case 'PE':
		case 'IN':
		case 'BE':
			PC[id] = MODIFS[id] + POINTS[id];
			break;
		case 'SI':
			PC[id] = PC['EN'];
			break;
		case 'PV':
			PC[id] = 4 * PC['EN'];
			break;
		case 'PP':
			PC[id] = PC['IN'] + PC['BE'];
			break;
		case 'PPE':
			PC[id] = PC.ppe;
			break;
		case 'CH':
			PC[id] = (PC['FO'] + PC['EN']) *1.5;
			break;
		default:
			PC[id] = getBaseSkill(id) + MODIFS[id] + POINTS[id];
			break;
	}
}

function getDefaultMaximum(type) {
	if (type == 'primary') return 10;
	if (type == 'skill') return 100;
}

function getMaximum(id) {
	var malus = 0
	if(MODIFS[id] < 0) malus = -MODIFS[id];
	var type = getAttributeType(id);
	return getDefaultMaximum(type) - malus;
}

function getDefaultMinimum(id) {
	var type = getAttributeType(id);
	if (type == 'primary') return 1;
	if (type == 'skill') return getBaseSkill(id);
}

function getMinimum(id, type) {
	var default_minimum = getDefaultMinimum(id);
	if (type == 'skill') return default_minimum + MODIFS[id];
	var bonus = 0;
	if (MODIFS[id] > 0) bonus = MODIFS[id];
	return default_minimum + bonus;
}

function updateMinMaxAndValue(id) {
	var e = document.getElementById(id);
	e.value = PC[id];
	var type = getAttributeType(id);
	var max = e.valueAsNumber + getAvailablePoints(type);
	e.max = Math.min(getMaximum(id), max);
	e.min = getMinimum(id, type);
}

function updateModifier(op, modifiers, id, key) {
	if(!modifiers[key]) return; //DO nothing
	if(op == '-') {
		MODIFS[id] -= modifiers[key][id];
	} else
	if(op == '+') {
		MODIFS[id] += modifiers[key][id];
	} else throw "Unknown operator \""+op+"\"";
	updatePCAttribute(id);
	updateMinMaxAndValue(id);
}

function letsTalkAboutSED() {
	var SED_attribute = 'FO';
	if (PC.gender == 'female') SED_attribute = 'AG';
	ATTRIBUTES['skill']['SED'][1] = SED_attribute;
	document.getElementById('SEDformula').innerHTML = "SED = (BE + "+SED_attribute+") × 5";
}

function onGender(selector) {
	var new_gender = selector.value;
	if(!new_gender) throw "Unkown gender \""+new_gender+"\"";
	if(new_gender == PC.gender) return; //DO nothing
	var attributes = ['FO', 'AG'];
	for (var i = 0; i < attributes.length; i++) {
		var id = attributes[i];
		updateModifier('-', GENDER, id, PC.gender);
		updateModifier('+', GENDER, id, new_gender);
	}
	PC.gender = new_gender;
	letsTalkAboutSED();
	updatePC();
}

function updateTribe(op, tribe) {
	var attributes = Object.keys(TRIBE[tribe]);
	for (var i = 0; i < attributes.length; i++) {
		var id = attributes[i];
		if (id != 'label' && id != '+' && id != '-')
			updateModifier(op, TRIBE, id, tribe);
	}
}

function onTribe(selector) {
	var new_tribe = selector.value;
	if(!new_tribe) throw "Unkown tribe \""+new_tribe+"\"";
	if(new_tribe == PC.tribe) return; //DO nothing
	if(PC.tribe) updateTribe('-', PC.tribe);
	updateTribe('+', new_tribe);
	PC.tribe = new_tribe;
	updatePC();
}

function updateSecondaryValue(id) {
	var e = document.getElementById(id);
	e.innerHTML = PC[id];
}


function updatePC() {
	for (var i = 0; i < ATTRIBUTES['primary'].length; i++) {
		var id = ATTRIBUTES['primary'][i];
		updatePCAttribute(id);
		updateMinMaxAndValue(id);
	}
	for (var i = 0; i < ATTRIBUTES['secondary'].length; i++) {
		var id = ATTRIBUTES['secondary'][i];
		updatePCAttribute(id);
		updateSecondaryValue(id);
	}
	var skills = Object.keys(ATTRIBUTES['skill']);
	for (var i = 0; i < skills.length; i++) {
		var id = skills[i];
		updatePCAttribute(id);
		updateMinMaxAndValue(id);
	}
	dumpPC();
}

function onAttribute(selector) {
	var id = selector.id;
	var points = (selector.valueAsNumber - PC[id]);
	POINTS[id] += points;
	if (getAttributeType(id) == 'skill') PC.ppe -= points;
	updatePCAttribute(id);
	updatePC();
}

function loadPC() {
	onGender(document.getElementById('gender'));
	onTribe(document.getElementById('tribe'));
	updatePC();
}

function initializeSkillsSection() {
	var container = document.getElementById('skills');
	var skills = Object.keys(ATTRIBUTES['skill']);
	for (var i = 0; i < skills.length; i++) {
		var id = skills[i];
		var l = ATTRIBUTES['skill'][id];
		var description = l[2].toUpperCase();
		var display = "";
		if (l[3] == false) display = " style='display: none;'";
		container.innerHTML += "\n"
+"		<div class='attribute'"+display+">\n"
+"			<div class='column'>\n"
+"				<label for'"+id+"'>"+description+" ("+id+")</label>\n"
+"				<span id='"+id+"formula'>"+id+" = ("+l[0]+" + "+l[1]+") × 5</span>\n"
+"			</div>\n"
+"			<input id='"+id+"' type='number' step=5 class='changer' onchange='onAttribute(this)'>\n"
+"		</div>";
	}
}

function initializeTribeOptions() {
	var container = document.getElementById('tribe');
	var tribes = Object.keys(TRIBE);
	for (var i = 0; i < tribes.length; i++) {
		var id = tribes[i];
		var label = TRIBE[id]['label'];
		container.innerHTML += "\n				<option value='"+id+"'>"+label+"</option>";
	}
}

function getSpecialCost(id) {
	var cost = SPECIALS[id]['PPE'];
	//TODO put PC.tribe in da mix
	return cost;
}

function hideSkill(id, hidden) {
	var display = '';
	if (hidden) display = 'display: none;';
	document.getElementById(id).parentElement.style = display;
}

function updateSpecialSkills(skills, removed) {
	if (!skills) return;
	for (var i = 0; i < skills.length; i++) {
		var skill_id = skills[i];
		hideSkill(skill_id, removed);
		if (removed) {
			PC.ppe += POINTS[skill_id];
			POINTS[skill_id] = 0;
		}
	}
}
function updateSpecialCost(id, removed) {
	var cost = getSpecialCost(id);
	if (removed) PC.ppe += cost;
	else PC.ppe -= cost;
}

function updateSpecial(id, removed) {
	updateSpecialSkills(SPECIALS[id]['skills'], removed);
	updateSpecialCost(id, removed);
	updatePC();
}

function onSpecial(old_id, new_id) {
	console.log('onSpecial('+old_id+', '+new_id+')');
	if (old_id != '') {
		updateSpecial(old_id, true);
	}
	if (new_id != '') {
		console.log('add: '+new_id);
		updateSpecial(new_id, false);
	}
}

var gEdgeBoxes = 0;

function createSpecialSelector(index, isEdge) {
	var element = document.createElement('div');
	element.className = 'attribute';
	var select = document.createElement('select');
	select.id = 'special'+index;
	select.className = 'combobox';
	select.onfocus = function () { this.oldvalue = this.value; };
	select.onchange = function () { onSpecial(this.oldvalue, this.value); this.oldvalue = this.value; };
	// create empty default value
	var option = document.createElement('option');
	option.value = '';
	option.innerHTML = "---";
	select.appendChild(option);
	// create an option for each edge or flaw, depending of type
	var specials = Object.keys(SPECIALS);
	for (var i = 0; i < specials.length; i++) {
		var id = specials[i];
		var cost = SPECIALS[id]['PPE'];
		var label = SPECIALS[id]['label'];
		if (!isSpecialValidAsOption(id, label, cost, isEdge)) continue;
		option = document.createElement('option');
		option.value = id;
		option.innerHTML = label;
		select.appendChild(option);
	}
	element.appendChild(select);
	return element;
}
function isSpecialValidAsOption(id, label, cost, isEdge) {
	var validity = true;
	if(!label) {
		console.warn("option \""+id+"\" has no label ; skip");
		validity = false;
	}
	if(!cost) {
		console.warn("option \""+id+"\" has no PPE cost ; skip");
		validity = false;
	}
	if ( isEdge && cost < 0) validity = false;//don't put flaws in edge selector
	if (!isEdge && cost >= 0) validity = false;//don't put edges in flaw selector
	return validity;
}

function initializeEdgesComboboxes() {
	var section = document.getElementById('edges');
	section.appendChild(createSpecialSelector(gEdgeBoxes, true));
	gEdgeBoxes++;
}

function initializeSections() {
	initializeSkillsSection();
	initializeTribeOptions();
	initializeEdgesComboboxes();
}

initializeSections();
loadPC();
