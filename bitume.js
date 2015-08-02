
var ATTRIBUTES = {
	'primary' : [
		'FO', 'AG', 'RA', 'EN',
		'PR', 'PE', 'IN', 'BE',
	],
	'secondary' : [
		'SI', 'PV', 'PP', 'CH',
	],
	'skill' : {
		'ACR': ['AG', 'PR', "Acrobatie"],
		'COM': ['AG', 'FO', "Combat"],
		'CON': ['PR', 'RA', "Conduite"],
		'DET': ['IN', 'PR', "Démolition (Transp.)", false],
		'DEP': ['PR', 'PE', "Démolition (Pose)", false],
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

var XX = {

		  //////////////////////
		 // TALENTS SPECIAUX //
		//////////////////////

	'agriculture et élevage': {
		'PPE': 10, 
		'modifs': [
				{'attribute': 'PP', 'modif': +15 },
			],
		},
	'amitie': {
		'PPE': 50, 
		},
	'camouflage': {
		'PPE': 25, 
		},
	'celebrite': {
		'PPE': 10, 
		'modifs': [
				{'attribute': 'PP', 'modif': +30 },
			],
		},
	'chance': {
		'PPE': 40, 
		},
	'combat motorise': {
		'PPE': 40, 
		'modifs': [
				{'attribute': 'CON', 'modif': +20, 'if': "en combat motorisé" },
				{'attribute': 'REP', 'modif': +20, 'if': "en combat motorisé" },
				{'attribute': 'TIR', 'modif': +20, 'if': "en combat motorisé" },
			],
		},
	'combat nocturne': {
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
		'PPE': 20, 
		'modifs': [
				{'attribute': 'COM', 'modif': 'FOx4' /* TODO fonctor */, 'if': "sans arme" },
			],
		},
	'combat urbain': {
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
		'PPE': 25, // INx5 PJ 
		'modifs': [
				{'attribute': 'PP', 'modif': +20 },
			],
		},
	'conduite specialisee': {
		'PPE': 10, 
		'modifs': [
				{'attribute': 'CON', 'modif': +20, 'if': "1 véhicule" },
			],
		},
	'conduite sportive': {
		'PPE': 10, 
		'modifs': [
				{'attribute': 'CON', 'modif': +20, 'if': "accélération/freinage" },
			],
		},
	'construction': {
		'PPE': 20, 
		'modifs': [
				{'attribute': 'PP', 'modif': +15 },
			],
		},
	'dessin': {
		'PPE': 10, 
		'modifs': [
				{'attribute': 'PP', 'modif': +10 },
			],
		},
	'deguisement': {
		'PPE': 35, 
		},
	'demolition': {
		'PPE': 35, 
		'special': [
				{'attribute': 'DET'},
				{'attribute': 'DEP'},
			],
		},
	"dressage d'animaux": {
		'PPE': 30, 
		'special': [
				{'attribute': 'DRE'},
			],
		},
	'escalade': {
		'PPE': 15, 
		'modifs': [
				{'attribute': 'ACR', 'modif': +30, 'if': "escalade" },
			],
		},
	'esquive': {
		'PPE': 20,
		},
	'flatterie': {
		'PPE': 20, 
		'modifs': [
				{'attribute': 'MAR', 'modif': 'INx3' }, //TODO fonctor
				{'attribute': 'SED', 'modif': 'INx5' }, //TODO fonctor
			],
		},
	'forgeron': {
		'PPE': 30, 
		'modifs': [
				{'attribute': 'PP', 'modif': +15 },
				{'attribute': 'MAA', 'modif': +30, 'if': "armes en métal" },
				{'attribute': 'MEC', 'modif': +20 },
			],
		},
	'heraldique': {
		'PPE': 10,
		'special': [
				{'attribute': 'REP', 'modif': +10, 'if': "héraldique" },
			],
		},
	'histoire': {
		'PPE': 40, //TODO fonctor (30 if vieux)
		'modifs': [
				{'attribute': 'PP', 'modif': +20 },
			],
		},
	'lire et ecrire': {
		'PPE': 10, //TODO fonctor (5 if vieux, 0 if histoire)
		},
	"maitre d'arme": {  //TODO gear-linked
		'PPE': 40, 
		'modifs': [
				{'attribute': 'PP', 'modif': +15 },
				{'attribute': 'COM', 'modif': +30, 'if': "une épée" }, // or TIR for sniper
				{'attribute': 'COM', 'modif': -60, 'if': "viser" }, // or TIR for sniper
			],
		},
	'manipulation': {
		'PPE': 30, 
		'special': [
				{'attribute': 'MAN'},
			],
		},
	"manufacture d'armes": {
		'PPE': 40, 
		'modifs': [
				{'attribute': 'PP', 'modif': +20 },
			],
		'special': [
				{'attribute': 'MAA'},
			],
		},
	'manufacture de vetements': {
		'PPE': 25, 
		'modifs': [
				{'attribute': 'PP', 'modif': +10 },
			],
		'special': [
				{'attribute': 'MAV'},
			],
		},
	'maquillage': {  //TODO gear-linked
		'PPE': 5, 
		'modifs': [
				{'attribute': 'SED', 'modif': '5/15' }, //TODO fonctor
			],
		},
	'musicien': {
		'PPE': 10, 
		'modifs': [
				{'attribute': 'PP', 'modif': +5 },
			],
		},
	'nage': {
		'PPE': 20, 
		'special': [
				{'attribute': 'NAG'},
			],
		},
	'parade': {
		'PPE': 20, 
		},
	'peche': {
		'PPE': 20, 
		},
	'pistage': {
		'PPE': 15, 
		'modifs': [
				{'attribute': 'REP', 'modif': 'INx3' /* TODO fonctor */, 'if': "pistage" },
			],
		},
	'pose de piege': {
		'PPE': 25, 
		'special': [
				{'attribute': 'POP'},
			],
		},
	"resistance a l'alcool": {
		'PPE': 20, //TODO fonctor (10 if alcoolique)
		'modifs': [
				{'attribute': 'RES', 'modif': 'ENx4' /* TODO fonctor */, 'if': "alcool" },
			],
		},
	'resistant': {
		'PPE': 15,
		'modifs': [
				{'attribute': 'SI', 'modif': +2 },
				{'attribute': 'PV', 'modif': +4 },
			],
		},
	'richesse': {  //TODO gear-linked (3 objects < 2000)
		'PPE': 25,
		'modifs': [
				{'attribute': 'PP', 'modif': +5 },
			],
		},
	'specialisation en arme': {  //TODO gear-linked
		'PPE': 10,
		'modifs': [
				{'attribute': '?' /* TODO fonctor */, 'modif': +20, 'if': "une arme" },
			],
		},
	'tir indirect': {
		'PPE': 20, 
		'special': [
				{'attribute': 'TIN'},
			],
		},
	'tir rapide': {  //TODO gear-linked
		'PPE': 15,
		'modifs': [
				{'attribute': '?' /* TODO fonctor */, 'modif': +5, 'if': "une arme" },
				{'attribute': 'RA', 'modif': 'RA' /* TODO fonctor */, 'if': "une arme" },
			],
		},
	'tricherie': {
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
		'PPE': -20,
		'modif': [
				{'attribute': 'PP', 'modif': -5 },
			],
		},
	'avare': {
		'PPE': -15,
		'modif': [
				{'attribute': 'PP', 'modif': -15 },
				{'attribute': 'MAR', 'modif': -20 },
			],
		},
	'aversion envers les animaux': {
		'PPE': -15, // TODO cannot have dressage
		},
	'borgne': {
		'PPE': -10,
		'modif': [
				{'attribute': 'SED', 'modif': -30 },
				{'attribute': 'REP', 'modif': -20 },
			],
		},
	'boulimique': {
		'PPE': -10,
		},
	'bras en moins': {
		'PPE': -40,
		'modif': [
				{'attribute': 'CON', 'modif': -40 },
				{'attribute': 'SED', 'modif': -30 },
				{'attribute': 'MEC', 'modif': -50 },
				{'attribute': 'PRE', 'modif': -30 },
			],
		},
	'cicatrice': {
		'PPE': -5,
		'modif': [
				{'attribute': 'SED', 'modif': -20 },
			],
		},
	'borgne': {
		'PPE': -10,
		'modif': [
				{'attribute': 'SED', 'modif': -30 },
				{'attribute': 'REP', 'modif': -20 },
			],
		},
	"code d'honneur": {
		'PPE': -5, // TODO -5-40
		},
	'dandy': {
		'PPE': -10,
		'modif': [
				{'attribute': 'DIS', 'modif': -20 },
			],
		},
	'desagreable': {
		'PPE': -10,
		'modif': [
				{'attribute': 'MAR', 'modif': -90 },
				{'attribute': 'SED', 'modif': -50 },
			],
		},
	'fou': {
		'PPE': -15, // TODO -15-40 ; liste folies
		'modif': [
				{'attribute': 'PP', 'modif': -20 },
			],
		},
	'fugitif': {
		'PPE': -30,
		},
	'galant': {
		'PPE': -15,
		},
	'impuissant': {
		'PPE': -15,
		'modif': [
				{'attribute': 'PP', 'modif': -15 },
				{'attribute': 'SED', 'modif': -90, 'if': "connu" },
			],
		},
	'impulsif': {
		'PPE': -20,
		'modif': [
				{'attribute': 'PP', 'modif': -5 },
				{'attribute': 'MAR', 'modif': -30 },
				{'attribute': 'SED', 'modif': -15 },
			],
		},
	'jambe en moins': {
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
		'PPE': -10, // cannot have vieux flaw
		'modif': [
				{'attribute': 'FO', 'modif': -2 },
				{'attribute': 'EN', 'modif': -1 },
			],
		},
	'loyal': {
		'PPE': -15,
		},
	'malchanceux': {
		'PPE': -30,
		},
	'misogyne': {
		'PPE': -10,
		'modif': [
				{'attribute': 'SED', 'modif': -50, 'if': "femmes" },
				{'attribute': 'MAR', 'modif': -30, 'if': "femmes" },
			],
		},
	'misandre': {
		'PPE': -10,
		'modif': [
				{'attribute': 'SED', 'modif': -50, 'if': "hommes" },
				{'attribute': 'MAR', 'modif': -30, 'if': "hommes" },
			],
		},
	'muet': {
		'PPE': -25,
		'modif': [
				{'attribute': 'SED', 'modif': -10 },
				{'attribute': 'MAR', 'modif': -40 },
			],
		},
	'naif': {
		'PPE': -25,
		},
	'obsede sexuel': {
		'PPE': -25,
		'modif': [
				{'attribute': 'SED', 'modif': -80, 'if': "sexe préféré" },
				{'attribute': 'MAR', 'modif': -50, 'if': "sexe préféré" },
			],
		},
	'pensif': {
		'PPE': -10,
		'modif': [
				{'attribute': 'RA', 'modif': 0 /* TODO fonctor -RA/2*/, 'if': "surpris" },
				{'attribute': 'talents'/*TODO*/, 'modif': -20, 'if': "surpris" },
			],
		},
	'phobie': {
		'PPE': -5, // -5-40 liste phobies
		},
	'reserve': {
		'PPE': -10,
		'modif': [
				{'attribute': 'MAR', 'modif': -20 },
			],
		},
	'sourd': {
		'PPE': -20,
		'modif': [
				{'attribute': 'SED', 'modif': -10 },
				{'attribute': 'MAR', 'modif': -40 },
			],
		},
	'vieux': {
		'PPE': -15, // cannot be jeune
		'modif': [
				{'attribute': 'FO', 'modif': -2 },
				{'attribute': 'EN', 'modif': -2 },
			],
		},
}

var MODIFS = {
	FO:0, AG:0, RA:0, EN:0,
	PR:0, PE:0, IN:0, BE:0,
	ACR:0, COM:0, CON:0, DIS:0,
	LAN:0, MAR:0, MEC:0, PRE:0,
	REP:0, RES:0, SED:0, TIR:0,
}

var POINTS = {
	FO:5, AG:5, RA:5, EN:5,
	PR:5, PE:5, IN:5, BE:5,
	ACR:0, COM:0, CON:0, DIS:0,
	LAN:0, MAR:0, MEC:0, PRE:0,
	REP:0, RES:0, SED:0, TIR:0,
}

var PC = { };

var MAXIMUM_PRIMARY_POINTS = 40;
var MAXIMUM_PPE = 50;

function dumpPC() {
	console.log("----------------------------------------"
		+"\n--- FINAL PC ("+PC.gender+" "+PC.tribe+"):\n"
		+'FO:'+PC.FO+' AG:'+PC.AG+' RA:'+PC.RA+' EN:'+PC.EN+' '
		+'PR:'+PC.PR+' PE:'+PC.PE+' IN:'+PC.IN+' BE:'+PC.BE+'\n'
		+'ACR:'+PC.ACR+' COM:'+PC.COM+' CON:'+PC.CON+' DIS:'+PC.DIS+' '
		+'LAN:'+PC.LAN+' MAR:'+PC.MAR+' MEC:'+PC.MEC+' PRE:'+PC.PRE+' '
		+'REP:'+PC.REP+' RES:'+PC.RES+' SED:'+PC.SED+' TIR:'+PC.TIR+' '
		+"\n--- POINTS:\n"
		+'FO:'+POINTS.FO+' AG:'+POINTS.AG+' RA:'+POINTS.RA+' EN:'+POINTS.EN+' '
		+'PR:'+POINTS.PR+' PE:'+POINTS.PE+' IN:'+POINTS.IN+' BE:'+POINTS.BE+'\n'
		+'ACR:'+POINTS.ACR+' COM:'+POINTS.COM+' CON:'+POINTS.CON+' DIS:'+POINTS.DIS+' '
		+'LAN:'+POINTS.LAN+' MAR:'+POINTS.MAR+' MEC:'+POINTS.MEC+' PRE:'+POINTS.PRE+' '
		+'REP:'+POINTS.REP+' RES:'+POINTS.RES+' SED:'+POINTS.SED+' TIR:'+POINTS.TIR+' '
		+"\n--- MODIFS:\n"
		+'FO:'+MODIFS.FO+' AG:'+MODIFS.AG+' RA:'+MODIFS.RA+' EN:'+MODIFS.EN+' '
		+'PR:'+MODIFS.PR+' PE:'+MODIFS.PE+' IN:'+MODIFS.IN+' BE:'+MODIFS.BE+'\n'
		+'ACR:'+MODIFS.ACR+' COM:'+MODIFS.COM+' CON:'+MODIFS.CON+' DIS:'+MODIFS.DIS+' '
		+'LAN:'+MODIFS.LAN+' MAR:'+MODIFS.MAR+' MEC:'+MODIFS.MEC+' PRE:'+MODIFS.PRE+' '
		+'REP:'+MODIFS.REP+' RES:'+MODIFS.RES+' SED:'+MODIFS.SED+' TIR:'+MODIFS.TIR+' '
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
			 + POINTS.REP + POINTS.RES + POINTS.SED + POINTS.TIR;
}

function getAvailablePoints(type) {
	if (type == 'primary')
		return MAXIMUM_PRIMARY_POINTS - getCurrentPoints(type);
	if (type == 'skill')
		return MAXIMUM_PPE - getCurrentPoints(type);
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
	POINTS[id] += (selector.valueAsNumber - PC[id]);
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
		var visibility = "";
		if (l[3] == false) visibility = " style='display: none;'";
		container.innerHTML += "\n"
+"		<div class='attribute'"+visibility+">\n"
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

function initializeSections() {
	initializeSkillsSection();
	initializeTribeOptions();
}

initializeSections();
loadPC();
