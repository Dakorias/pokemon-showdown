// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
	},
	{
		name: "[Gen 3] Ubers",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Deoxys Camouflage Clause', 'One Baton Pass Clause'],
		banlist: ['Wobbuffet + Leftovers', 'Wynaut + Leftovers', 'Baton Pass'],
	},
	{
		name: "[Gen 3] RU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'Glalie', 'Smeargle + Ingrain', 'Arena Trap', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 3] UU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'Smeargle + Ingrain', 'Arena Trap', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 3] NU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] PU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'NU', 'PUBL', 'Baton Pass + Substitute'],
	},
	{
		name: "[Gen 3] LC",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause', 'Accuracy Moves Clause'],
		banlist: ['Chansey', 'Meditite', 'Omanyte', 'Porygon', 'Scyther', 'Wynaut', 'Zigzagoon', 'Deep Sea Tooth', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger', 'Thunder Wave'],
	},
	{
		name: "[Gen 3] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen3',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: [
			'Clefable', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Groudon', 'Ho-Oh', 'Kyogre', 'Latias', 'Latios',
			'Lugia', 'Mew', 'Mewtwo', 'Rayquaza', 'Slaking', 'Snorlax', 'Suicune', 'Zapdos', 'Destiny Bond', 'Explosion', 'Perish Song',
			'Self-Destruct', 'Focus Band', 'King\'s Rock', 'Quick Claw',
		],
	},
	{
		name: "[Gen 3] UUBL",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['[Gen 3] OU', '!Accuracy Trap Clause'],
		banlist: [
			'OU', 'Smeargle + Ingrain', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Flail', 'Reversal',
			'Baton Pass + Speed Boost', 'Baton Pass + Agility', 'Baton Pass + Dragon Dance', 'Baton Pass + Salac Berry',
		],
		unbanlist: ['Soundproof', 'Sand Veil'],
	},
	{
		name: "[Gen 3] ZU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', 'Baton Pass Stat Trap Clause', 'Swagger Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'NU', 'PUBL', 'PU', 'ZUBL', 'Baton Pass + Substitute'],
	},
	{
		name: "[Gen 3] ADV 200",
		mod: 'gen3rs',
		searchShow: false,
		ruleset: ['Standard', 'One Boost Passer Clause'],
		banlist: ['Uber', 'Swagger'],
	},
	{
		name: "[Gen 3] Orre Colosseum",
		mod: 'gen3colosseum',
		searchShow: false,
		gameType: 'doubles',
		ruleset: [
			'Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', 'VGC Timer',
			'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Picked Team Size = 4', 'Exact HP Mod', 'Item Clause = 1', 'Open Team Sheets',
		],
		banlist: ['Soul Dew', 'Deoxys-Defense', 'Deoxys-Attack', 'Deoxys-Speed', 'Restricted Legendary', 'Mythical'],
		unbanlist: ['Latios', 'Latias', 'Wobbuffet', 'Wynaut'],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Self-KO Clause: If your last Pok\u00e9mon faints to a self-KO move or effect, you will lose the battle');
		},
	},
	{
		name: "[Gen 3] Custom Game",
		mod: 'gen3',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",
		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 2] Ubers",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 2] UU",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] OU'],
		banlist: ['OU', 'UUBL', 'Agility + Baton Pass'],
		unbanlist: ['Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 2] NU",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] UU'],
		banlist: ['UU', 'NUBL', 'Swagger'],
		unbanlist: ['Agility + Baton Pass'],
	},
	{
		name: "[Gen 2] PU",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] NU'],
		banlist: ['NU', 'PUBL', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web'],
		unbanlist: ['Swagger'],
	},
	{
		name: "[Gen 2] 1v1",
		mod: 'gen2',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: [
			'Alakazam', 'Celebi', 'Clefable', 'Ho-Oh', 'Lugia', 'Mew', 'Mewtwo', 'Snorlax', 'Zapdos',
			'Berserk Gene', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Attract', 'Destiny Bond',
			'Explosion', 'Perish Song', 'Present', 'Self-Destruct', 'Confuse Ray', 'Supersonic', 'Swagger',
			'Sweet Kiss',
		],
	},
	{
		name: "[Gen 2] ZU",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 2] NC 2000",
		mod: 'gen2stadium2',
		bestOfDefault: true,
		searchShow: false,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155',
			'Obtainable', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Species Clause', 'Item Clause = 1', 'Endless Battle Clause', 'Cancel Mod', 'Event Moves Clause', 'Nickname Clause', 'Team Preview',
		],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] Stadium OU",
		mod: 'gen2stadium2',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] Custom Game",
		mod: 'gen2',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 1] Ubers",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] UU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU'],
		banlist: ['OU', 'UUBL', 'Bind', 'Clamp', 'Confuse Ray', 'Fire Spin', 'Supersonic', 'Wrap'],
	},
	{
		name: "[Gen 1] NU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] UU'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 1] PU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 1] ZU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 1] LC",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', '!Max Level', 'Adjust Level = 5'],
		banlist: ['Dragon Rage', 'Fire Spin', 'Sonic Boom', 'Wrap'],
	},
	{
		name: "[Gen 1] 1v1",
		mod: 'gen1',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: ['Mew', 'Mewtwo', 'Bind', 'Clamp', 'Explosion', 'Fire Spin', 'Self-Destruct', 'Wrap'],
	},
	{
		name: "[Gen 1] Japanese OU",
		desc: `Generation 1 with Japanese battle mechanics.`,
		mod: 'gen1jpn',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Stadium OU",
		mod: 'gen1stadium',
		searchShow: false,
		ruleset: ['Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Tradebacks OU",
		desc: `RBY OU with movepool additions from the Time Capsule.`,
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU', 'Allow Tradeback'],
	},
	{
		name: "[Gen 1] NC 1997",
		mod: 'gen1jpn',
		bestOfDefault: true,
		searchShow: false,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod', 'NC 1997 Move Legality',
		],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Custom Game",
		mod: 'gen1',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
];
