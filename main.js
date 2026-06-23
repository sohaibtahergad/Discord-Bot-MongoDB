require('dotenv').config()
const { Client, Collection } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_BANS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_WEBHOOKS',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_PRESENCES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING',
    ],
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

(async() => {
 try{
	 mongoose.set('strictQuery' , false)
	 await mongoose.connect(process.env.STRING);
	 console.log('connected to DB.')
	 client.login(process.env.TOKEN)
 }catch (error){
	 console.log(`Eroor : ${error}`);
 }
})();
const varSchema = require('./models/vars.js');
client.on('ready', () => 
{	
    console.log(`${client.user.tag} online`);
	const Guilds = client.guilds.cache;
})
firsttime = [];
player1=[];
player2=[];
pl1id=[];
pl2id=[];
p1spin=[];
p2spin=[];
gameon=[];
randomslot=[];
ingame=[];
gamestart=[];
turn = [];
shot = [];
dng = false;
async function main(message){ 
	 res = await varSchema.findOne({guildId : message.guild.id})
	if(!res)
	{
		res = new varSchema({
		guildId : message.guild.id,
		gamecounter : 1,
		channel : " ",
		 prefix : "!",
		 setdead : "",
		 classes : [
		],
		})
		res.save().catch(console.error);
		console.log("schimmy",res);
	}
	id = (message.author.id).toString()
	guild = client.guilds.cache.get(message.guild.id);
	if(!firsttime[message.guild.id])
	{
		firsttime[message.guild.id] = true;
		ingame[id] = 0;
	}
	//reset
	{
		if (message.content.toLowerCase() === "!reset" && message.member.permissions.has("BAN_MEMBERS")) 
		{
			embed = new MessageEmbed().setDescription(`variables reset`).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			res.gamecounter = 1;
			res.channel= " ";
			res.prefix = "!";
			res.setdead = "",
		    res.classes = [
			]
			await res.save()
			return;
		}
		else if (message.content.toLowerCase() === "reset")
		{
			embed = new MessageEmbed().setDescription(`you dont have permission to use this commands`).setColor('GREEN')
			message.channel.send({embeds : [embed]});
		}
	}
	if(message.author.bot|| !message.content.startsWith(res.prefix))
	{
		return;
	}
	message.content = message.content.substr(res.prefix.length)
	let splitMessage = message.content.split(" ");
	//rshelp
	{
		if (splitMessage[0].toLowerCase() === "rshelp") 
		{
			embed = new MessageEmbed().setTitle("rshelp").addField(`\`${res.prefix}rs\`` , `to start the game`).addField(`\`${res.prefix}shoot [GAME ID]\``,`to shoot at your self \n`).addField(`\`${res.prefix}spin [GAME ID]\`` ,`spins the barrel\n`).addField(`\`${res.prefix}join [GAME ID]\``,`to join a game\n`).addField(`\`${res.prefix}leave [GAME ID]\``,`to leave a game\n`).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			return;
		}
	}
	//dndhelp
	{
		if (splitMessage[0].toLowerCase() === "dndhelp") 
		{
			embed = new MessageEmbed().setTitle("dndhelp").addField(`\`${res.prefix}addclass (classname)\`` , `to add a class to the class function , replace (classname) with the classname`).addField(`\`${res.prefix}setdead (deadrole)\`` , `this sets up the deadrole , replace (deadrole) with the name of the role u assigned for dead players`).addField(`\`${res.prefix}remclass (classname)\`` , `to remove a class to the class function, replace (classname) with the classname`).addField(`\`${res.prefix}roll (number)d(number)\`` , `to roll , you can also add a +(number) or -(number) to add roll bonus,to roll replace (number) with a number `).addField(`\`${res.prefix}class (classname)\`` , `to set class role , replace (classname) with your classname or leave it empty and get all classes available`).addField(`\`${res.prefix}revive @(name)\``,`to revive a person , replace (name) with the users nickname \n`).addField(`\`${res.prefix}kill @(name)\`` ,`to kill a person , replace (name) with the users nickname\n`).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			return;
		}
	}
	//test
	{
			if (splitMessage[0].toLowerCase() === "test") 
			{
				embed = new MessageEmbed().setDescription(`huh.....am awake`).setColor('GREEN');
				message.channel.send({embeds : [embed]});
				return;
			}
	}
	//dng
	{
			if (splitMessage[0].toLowerCase() === "dng") 
			{
				dng = !dng;
				embed = new MessageEmbed().setDescription(`OH SHIT`).setColor('GREEN');
				message.channel.send({embeds : [embed]});
				return;
			}
	}
	//inv
	{
			if (splitMessage[0].toLowerCase() === "inv") 
			{
				embed = new MessageEmbed().setDescription(`https://discord.com/oauth2/authorize?client_id=876785413518409749&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B876785413518409749%5D%26scope%3Dbot&integration_type=0&scope=identify+guilds+gdm.join+rpc.notifications.read+rpc.screenshare.write+rpc.video.read+messages.read+activities.read+applications.commands+relationships.write+role_connections.write+openid+gateway.connect+applications.commands.permissions.update+email+guilds.join+bot+rpc.voice.read+rpc.video.write+rpc.activities.write+applications.builds.upload+applications.store.update+activities.write+voice+presences.read+dm_res.channels.messages.read+connections+guilds.members.read+rpc+rpc.voice.write+rpc.screenshare.read+applications.builds.read+applications.entitlements+relationships.read+dm_res.channels.read+presences.write+dm_res.channels.messages.write+payment_sources.country_code`).setColor('GREEN');
				message.channel.send({embeds : [embed]});
				return;
			}
	}
	//here
	{
			if (splitMessage[0].toLowerCase() == "here" && message.member.permissions.has("BAN_MEMBERS")) 
			{
			res.channel = message.channel
			embed = new MessageEmbed().setDescription(`this res.channel has been now is the res.channel to reply to commands in`).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			await res.save()
			return;
			}
			else if (splitMessage[0].toLowerCase() == "here")
			{
				embed = new MessageEmbed().setDescription(`you dont have permission to use this commands`).setColor('RED')
				message.channel.send({embeds : [embed]});
			}
	}

	//for gasser (for future me this is a joke i should remove this)
	{
		if(splitMessage[0].toLowerCase() == "gasser")
		{
			   role = message.member.guild.roles.cache.find(role => role.name === splitMessage[1]);
			   member = message.member
			  if (!role) {
				embed = new MessageEmbed().setDescription(`your role doesnt exist`).setColor('RED')
				message.channel.send({embeds : [embed]});
				return
			  }
				embed = new MessageEmbed().setDescription(`added class ${role} to viable classes`).setColor('GREEN')
				message.channel.send({embeds : [embed]});
				res.classes.push(splitMessage[1])
				await res.save();
				return
			
		}
	}
	//prefix
	{
		if (splitMessage[0].toLowerCase() == "prefix") 
		{
		if(splitMessage[1] != undefined && splitMessage[1] != "")
		{
			if(!message.member.permissions.has("BAN_MEMBERS"))
			{
				embed = new MessageEmbed().setDescription(`the prefix is \`${res.prefix}\``).setColor('GREEN')
				message.channel.send({embeds : [embed]});
				return;
			}
			res.prefix = splitMessage[1][0];
			embed = new MessageEmbed().setDescription(`the prefix is now \`${res.prefix}\``).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			await res.save()
		}
		else
		{
			embed = new MessageEmbed().setDescription(`the prefix is \`${res.prefix}\``).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			return;
		}
		}
	}
    //addclass
	{
		if (splitMessage[0].toLowerCase() == "addclass") 
		{
		if(splitMessage[1] != undefined && splitMessage[1] != "")
		{
			if(message.member.permissions.has("BAN_MEMBERS") && !res.classes.includes(splitMessage[1]))
			{
						   role = message.member.guild.roles.cache.find(role => role.name === splitMessage[1]);
						   member = message.member
						  if (!role) {
							embed = new MessageEmbed().setDescription(`your role doesnt exist`).setColor('RED')
							message.channel.send({embeds : [embed]});
							return
						  }
							embed = new MessageEmbed().setDescription(`added class ${role} to viable classes`).setColor('GREEN')
							message.channel.send({embeds : [embed]});
							res.classes.push(splitMessage[1])
							await res.save();
							return
			}
			if(message.member.permissions.has("BAN_MEMBERS"))
			{
			res.prefix = splitMessage[1][0];
			embed = new MessageEmbed().setDescription(`class already assigned`).setColor('RED')
			message.channel.send({embeds : [embed]});
			return
			}
			res.prefix = splitMessage[1][0];
			embed = new MessageEmbed().setDescription(`you dont have permission to use this command`).setColor('RED')
			message.channel.send({embeds : [embed]});
			return
		}
		else
		{
			embed = new MessageEmbed().setDescription(`the prefix is \`${res.prefix}\``).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			return;
		}
		}
	}
	//remclass
	{
		if (splitMessage[0].toLowerCase() == "remclass") 
		{
		if(splitMessage[1] != undefined && splitMessage[1] != "")
		{
			if(message.member.permissions.has("BAN_MEMBERS") && res.classes.includes(splitMessage[1]))
			{
						   role = message.member.guild.roles.cache.find(role => role.name === splitMessage[1]);
						   member = message.member
						  if (!role) {
							embed = new MessageEmbed().setDescription(`your role doesnt exist`).setColor('RED')
							message.channel.send({embeds : [embed]});
							return
						  }
							embed = new MessageEmbed().setDescription(`removed class ${role} from classes`).setColor('GREEN')
							message.channel.send({embeds : [embed]});
							res.classes = res.classes.filter(v => v !== splitMessage[1]); 
							console.log(res.classes)
							await res.save();
							return
			}
			if(message.member.permissions.has("BAN_MEMBERS"))
			{
			res.prefix = splitMessage[1][0];
			embed = new MessageEmbed().setDescription(`class doesnt exist`).setColor('RED')
			message.channel.send({embeds : [embed]});
			return
			}
			res.prefix = splitMessage[1][0];
			embed = new MessageEmbed().setDescription(`you dont have permission to use this command`).setColor('RED')
			message.channel.send({embeds : [embed]});
			return
		}
		else
		{
			embed = new MessageEmbed().setDescription(`the prefix is \`${res.prefix}\``).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			return;
		}
		}
	}
	//help
	{
		if (splitMessage[0].toLowerCase() == "help") 
		{
			embed = new MessageEmbed().setTitle("help")
			.addField(`\`${res.prefix}inv\`` , `to invite the bot`)
			.addField(`\`${res.prefix}test\`` , `to test the bot`)
			.addField(`\`${res.prefix}rps\`` , `to play rock, paper, scissors with the bot`)
			.addField(`\`${res.prefix}prefix\``,`to change prefix or check what it is\n`)
			.addField(`\`${res.prefix}here\`` ,`to make the commands server this res.channel\n`)
			.addField(`\`${res.prefix}rshelp\``,`for russian roulette help\n`)
			.addField(`\`${res.prefix}dndhelp\``,`for dnd help\n`)
			.addField(`\`!reset\``,`to reset the prefix , bot channel , classes and setdead\n`).setColor('GREEN')
			message.channel.send({embeds : [embed]});
			return;
		}
	}
	
	//roll d(number)
	{
	if (splitMessage[0].toLowerCase() === "roll") 
		{	
			if(!dng || !(message.author.username == "adamssb69"))
			{
			number1 = ""
			number2 = ""
			number3 = 0
			num = 0;
			if(splitMessage[1] != undefined && splitMessage[1] != "")
			{
				fr = false;
				if(splitMessage[2] != undefined && splitMessage[2] != "")
				{	
					 if(!(splitMessage[2].match("[0-9]+")))
					 {
						 embed = new MessageEmbed().setDescription(`sorry I couldnt understand check ${res.prefix}help to know how to use this command`).setColor('RED');
						 message.channel.send({embeds : [embed]});
						 return;
					 }
					if(splitMessage[2][0] == '+')
					{
						splitMessage[2] = splitMessage[2]
					}
					number3 = parseInt(splitMessage[2]);
					console.log(number3 , splitMessage[2])
				}
				for(i = 0 ;i < splitMessage[1].length; i++)
				{
					if(fr == false && ! (splitMessage[1][i] >= 'a' && splitMessage[1][i] <= 'z'))
					{
						number1 += splitMessage[1][i];
						console.log("num1",number1)
					}
					if(splitMessage[1][i] >= 'a' && splitMessage[1][i] <= 'z')
					{
						fr = true;
					}
					if(fr == true && ! (splitMessage[1][i] >= 'a' && splitMessage[1][i] <= 'z'))
					{
						number2 += splitMessage[1][i];
						console.log("num2",number2)
					}
				}
				if(number1 > 90){
					embed = new MessageEmbed().setDescription(`sorry but due to discord's message limit the number of dice is max 90`).setColor('WHITE');
					message.channel.send({embeds : [embed]});
					return;
				}
				if(number1 == undefined || number1 == "" || number2 == "" || number2 == undefined || (!(number1.match("[0-9]+"))) || (!(number2.match("[0-9]+"))))
				{
					embed = new MessageEmbed().setDescription(`sorry I couldnt understand check ${res.prefix}help to know how to use this command`).setColor('RED');
					message.channel.send({embeds : [embed]});
					return;
				}
				txt = ""
				arr = []
				for(i = 0 ;i < number1; i++)
				{
				answer = Math.floor(Math.random()*number2)+1;
				num+=answer;
				arr.push(answer)
				if(answer == 1)
				txt += `Dice No. **${i+1}** rolled a **${answer}** :red_circle:\n `
				else if(answer == number2)
				txt += `Dice No. **${i+1}** rolled a **${answer}** :green_circle:\n `
				else
				txt += `Dice No. **${i+1}** rolled a **${answer}** \n`
				}
				if(number1 > 1)
				{
					if(number3 == undefined || number3 == 0)
					{
					txt += `Dice sum is **${num}** \n`
					}
					else
					{
					txt += `Dice sum is **${num}** with bonus ${splitMessage[2]} is **${num+number3}**\n`
					}
				}
				else
				{
					if(number3 != undefined && number3 != 0)
					{
					if(number3 + num >= number2){
					txt += `Dice with bonus ${splitMessage[2]} is **${num+number3}** :green_circle:\n`
					}
					else if(number3 + num <= 1){
					txt += `Dice with bonus ${splitMessage[2]} is **${num+number3}** :red_circle:\n`
					}
					else
					{
					txt += `Dice with bonus ${splitMessage[2]} is **${num+number3}**\n`
					}
					}
				}
				embed = new MessageEmbed().setDescription(`${txt}`).setColor('WHITE');
				message.channel.send({embeds : [embed]});
				return;
			}
			}
			else
			{
				embed = new MessageEmbed().setDescription(`no fuck u no using command`).setColor('WHITE');
				message.channel.send({embeds : [embed]});
				return;
			
			}
		}
	}
	//rps
	{
	if (splitMessage[0].toLowerCase() === "rps") 
		{	
			if(splitMessage[1] != undefined && splitMessage[1] != "")
			{
				turn = splitMessage[1].toLowerCase();
				if(turn == "scissors" || turn == "rock" || turn == "paper")
				{
					answer = Math.floor(Math.random()*3);
					botans = ""
					console.log(answer);
					if(answer == 0)
						botans = "scissors"
					if(answer == 1)
						botans = "rock"
					if(answer == 2)
						botans = "paper"
					embed = new MessageEmbed().setDescription(`u used ${turn} , bot used ${botans}`).setColor('WHITE');
					message.channel.send({embeds : [embed]});
					if(turn == botans)
					{
					embed = new MessageEmbed().setDescription(`its a draw`).setColor('WHITE');
					message.channel.send({embeds : [embed]});
					}
					else if((turn == "scissors" && botans == "paper") || (turn == "rock" && botans == "scissors") || (turn == "paper" && botans == "rock"))
					{
					embed = new MessageEmbed().setDescription(`u won`).setColor('GREEN');
					message.channel.send({embeds : [embed]});
					}
					else
					{
					embed = new MessageEmbed().setDescription(`u lost`).setColor('RED');
					message.channel.send({embeds : [embed]});
					}
					return;
				}
				else
				{
					embed = new MessageEmbed().setDescription(`please use ${res.prefix}rps rock or paper or scissors`).setColor('RED');
					message.channel.send({embeds : [embed]});
					return;
				}
				
			}
			else
			{
				embed = new MessageEmbed().setDescription(`please use ${res.prefix}rps rock or paper or scissors`).setColor('RED');
				message.channel.send({embeds : [embed]});
				return;
			}
		}
		
	}
	//setdead
	{
	if (splitMessage[0].toLowerCase() == "setdead" && message.member.permissions.has("BAN_MEMBERS")) 
			{
				if(splitMessage[1] != undefined || splitMessage[1] != "")
				{
				res.setdead = splitMessage[1];
				embed = new MessageEmbed().setDescription(`${splitMessage[1]} has been set to the role of dead`).setColor('BLACK')
				message.channel.send({embeds : [embed]});
				await res.save()
				return;
				}
			}
			else if (splitMessage[0].toLowerCase() == "setdead")
			{
				embed = new MessageEmbed().setDescription(`you dont have permission to use this commands`).setColor('RED')
				message.channel.send({embeds : [embed]});
			}
	}
	//class
	{
			if (splitMessage[0].toLowerCase() == "class") 
			{
				let member = message.member
				if((splitMessage[1] != undefined && splitMessage[1] != ""))
				{
						classfound = false;
						splitMessage[1]
						rem = "";
					 for(let i = 0 ; i < res.classes.length ; i++)
					{
						    
							role = message.member.roles.cache.find(role => role.name === res.classes[i])
							console.log(role)
							if(role != undefined)
							{
								rem = role
								member.roles.remove(role)
							}
							if(res.classes[i] == splitMessage[1])
							{
								role2 = message.member.guild.roles.cache.find(role => role.name === res.classes[i])
								if(role2 != undefined){
								classfound = true;
								member.roles.add(role2);
								embed = new MessageEmbed().setDescription(`successfully set ${member.user.username}'s calss to be ${splitMessage[1]}`).setColor('YELLOW')
								message.channel.send({embeds : [embed]});
								}
							}
					}
					if(!classfound)
					{
						member.roles.add(rem);
						embed = new MessageEmbed().setDescription(`please select a viable class and make sure you spell it right`).setColor('RED')
							message.channel.send({embeds : [embed]});
							return
					}
					
					
				}
				else
				{
					ans = ""
					 for(let i = 0 ; i < res.classes.length ; i++)
					{
						ans += `**${res.classes[i]}** \n`;
					}
					embed = new MessageEmbed().setDescription(`the classes are \n ${ans}`).setColor('BLUE')
					message.channel.send({embeds : [embed]});
					return
				}
			}
	}
	//kill
	{
			if (splitMessage[0].toLowerCase() == "kill" && message.member.permissions.has("BAN_MEMBERS")) 
			{
				console.log(splitMessage[1])
				if((splitMessage[1] != undefined && splitMessage[1] != ""))
				{ 
						  splitMessage[1] = splitMessage[1].substr(2)
						  splitMessage[1] = splitMessage[1].slice(0,-1)
						  console.log(splitMessage[1])
						  let role = message.member.guild.roles.cache.find(role => role.name === res.setdead);
						  let member = message.member.guild.members.cache.get(splitMessage[1])
						  console.log(role)
						  console.log(member)
						  if (!role) {
							embed = new MessageEmbed().setDescription(`your role doesnt exist`).setColor('RED')
							message.channel.send({embeds : [embed]});
							return
						  }

						  if (!member) {
							embed = new MessageEmbed().setDescription(`member doesnt exist`).setColor('RED')
							message.channel.send({embeds : [embed]});
							return
						  }
						  member.roles.add(role);
						  embed = new MessageEmbed().setDescription(`successfully killed ${member.user.username} :skull:`).setColor('RED')
							message.channel.send({embeds : [embed]});
							return
				}
			}
			else if (splitMessage[0].toLowerCase() == "kill")
			{
				embed = new MessageEmbed().setDescription(`you dont have permission to use this commands`).setColor('RED')
				message.channel.send({embeds : [embed]});
			}
	}
	//revive
	{
			if (splitMessage[0].toLowerCase() == "revive" && message.member.permissions.has("BAN_MEMBERS")) 
			{
				if((splitMessage[1] != undefined && splitMessage[1] != ""))
				{
					
						  splitMessage[1] = splitMessage[1].substr(2)
						  splitMessage[1] = splitMessage[1].slice(0,-1)
						  let role = message.member.guild.roles.cache.find(role => role.name === res.setdead);
						  let member = message.member.guild.members.cache.get(splitMessage[1])
						  console.log(role)
						  console.log(member)
						  if (!role) {
							embed = new MessageEmbed().setDescription(`your role doesnt exist`).setColor('RED')
							message.channel.send({embeds : [embed]});
							return
						  }

						  if (!member) {
							embed = new MessageEmbed().setDescription(`member doesnt exist`).setColor('RED')
							message.channel.send({embeds : [embed]});
							return
						  }
						  member.roles.remove(role);
						  embed = new MessageEmbed().setDescription(`successfully revived ${member.user.username}:angel:`).setColor('WHITE')
							message.channel.send({embeds : [embed]});
							return
					
				}
			}
			else if (splitMessage[0].toLowerCase() == "revive")
			{
				embed = new MessageEmbed().setDescription(`you dont have permission to use this commands`).setColor('RED')
				message.channel.send({embeds : [embed]});
			}
	}
    //rsrlts
	{
		if(message.channel == res.channel || res.channel == " ")
		{
		//rs
		{
			game = splitMessage[1] - '0';
			if (splitMessage[0].toLowerCase() == "rs") 
			{
				while(true)
				{
					console.log(`count ${res.gamecounter} : ${gameon[res.gamecounter]}`)
					if(gameon[res.gamecounter] == 1)
					{
						res.gamecounter++;
					}
					else
					{
						break;
					}
				}
				player1[res.gamecounter] = " ";
				player2[res.gamecounter] = " ";
				p1spin[res.gamecounter] = 1;
				p2spin[res.gamecounter] = 1;
				pl1id[res.gamecounter] = "";
				pl2id[res.gamecounter] = "";
				turn[res.gamecounter] = 1;
				shot[res.gamecounter] = 0;
				gamestart[res.gamecounter] = 0;
				randomslot[res.gamecounter] = Math.floor(Math.random()*8);
				embed = new MessageEmbed().setDescription(`use ${res.prefix}join ${res.gamecounter}`).setColor('GREEN')
				message.channel.send({embeds : [embed]});
				gameon[res.gamecounter] = 1;
				res.gamecounter+=1;
			}
			//else if(splitMessage[0].toLowerCase() == "rs" && gameon == 1 && player2)
			//leave
				{
					games = ingame[id]
					if(splitMessage[0].toLowerCase() == "leave" && games > 0)
					{
						embed = new MessageEmbed().setDescription(`a player left\nthe game resets`).setColor('GREEN');
						message.channel.send({embeds : [embed]});
						player1[games] = " ";
						player2[games] = " ";
						p1spin[games] = 1;
						p2spin[games] = 1;
						gameon[games] = 0;
						randomslot[games] = Math.floor(Math.random()*8);
						gamestart[games] = 0;
						ingame[pl1id[games]] = 0;
						ingame[pl2id[games]] = 0;
						pl1id[games] = "";
						pl2id[games] = "";
						res.gamecounter = 1;
					}
				}
			if(gameon[game] == 1)
			{
				//join
				{
					if (splitMessage[0].toLowerCase() == "join")
					{
						if(ingame[id] == 0 || ingame[id] == undefined)
						{
							if(player1[game] == " ")
							{
								player1[game] = message.author;
								pl1id[game] = id;
								ingame[id] = game;
								embed = new MessageEmbed().setDescription(`${player1[game]} is now player 1`).setColor('GREEN');
								message.channel.send({embeds : [embed]});
							}
							else if(player2[game] == " " && player1[game] != message.author)
							{
								player2[game] = message.author;
								pl2id[game] = id
								ingame[id] = game;
								embed = new MessageEmbed().setDescription(`${player2[game]} is now player 2`).setColor('GREEN');
								message.channel.send({embeds : [embed]});
								embed = new MessageEmbed().setDescription(`${player2[game]} and ${player1[game]} game has started`).setColor('GREEN');
								message.channel.send({embeds : [embed]});
								embed = new MessageEmbed().setDescription(`${player1[game]}'s turn`).setColor('GREEN');
								message.channel.send({embeds : [embed]});
								gamestart[game] = 1;
								turn[game] = 1;
								randomslot[game] = Math.floor(Math.random()*8);
								
							}
						}
						else
						{		
								
								embed = new MessageEmbed().setDescription(`You are already a player ${message.author} in game ${ingame[id]}`).setColor('GREEN');
								message.channel.send({embeds : [embed]});
						}
					} 
				}
			}
			if(gamestart[ingame[id]] == 1)
			{
				games = ingame[id];
				console.log(`turn ${turn[games]}`)
				if((turn[games] == 1 && message.author == player1[games] )||( turn[games] == 2 && message.author == player2[games]))
				{
					console.log(`shots ${shot[games]} bullet ${randomslot[games]}`)
					//shoot
						{
						if (splitMessage[0].toLowerCase() == "shoot") 
						{
							//reset(death)
								if(shot[games] == randomslot[games])
								{					
									player1[games] = " ";
									player2[games] = " ";
									p1spin[games] = 1;
									p2spin[games] = 1;
									gameon[games] = 0;
									randomslot[games] = Math.floor(Math.random()*8);
									gamestart[games] = 0;
									ingame[pl1id[games]] = 0;
									ingame[pl2id[games]] = 0;
									pl1id[games] = "";
									pl2id[games] = "";
									res.gamecounter = 1;
									embed = new MessageEmbed().setDescription(`you **DIED** ${message.author}`).setColor('GREEN');
									message.channel.send({embeds : [embed]});
								}
							//go on(live)
								else
								{
									shot[games]+= 1;
									if(turn[games] == 2)
									{
										turn[games] = 1;
									}
									else if(turn[games] == 1)
									{
										turn[games] = 2;
									}
									embed = new MessageEmbed().setDescription(`you lived ${message.author}`).setColor('GREEN');
									message.channel.send({embeds : [embed]});
									embed = new MessageEmbed().setDescription(`${shot[games]} shots shot ,${player2[games]}'s turn`).setColor('GREEN');
									message.channel.send({embeds : [embed]});
									
								}
						}
						}
					//spin
						{
						games = ingame[id];
						if (splitMessage[0].toLowerCase() == "spin" && ((turn[games] == 1 && p1spin[games] > 0) || (turn[games] == 2 && p2spin[games] > 0))) 
							{
								console.log(turn[games],p1spin[games],p2spin[games])
								randomslot[games] = Math.floor(Math.random()*8);
								shot[games] = 0;
								embed = new MessageEmbed().setDescription(`spinned`).setColor('GREEN');
								message.channel.send({embeds : [embed]});
								if(turn[games] == 1)
								{
									p1spin[games]--;
								}
								else if(turn[games] == 2)
								{
									p2spin[games]--;
								}
							}
						else if(((turn[games] == 1 && p1spin[games] <= 0) || (turn[games] == 2 && p2spin[games] <= 0)))
							{
								embed = new MessageEmbed().setDescription(`spin already used`).setColor('GREEN');
								message.channel.send({embeds : [embed]});
							}
						}
					//spin
						{
						games = ingame[id];
						if (splitMessage[0].toLowerCase() == "inv" && ((turn[games] == 1 && p1spin[games] > 0) || (turn[games] == 2 && p2spin[games] > 0))) 
							{
								console.log(turn[games],p1spin[games],p2spin[games])
								embed = new MessageEmbed().setDescription(`inv`).setColor('GREEN');
							}
						else if(((turn[games] == 1 && p1spin[games] <= 0) || (turn[games] == 2 && p2spin[games] <= 0)))
							{
								embed = new MessageEmbed().setDescription(`spin already used`).setColor('GREEN');
								message.channel.send({embeds : [embed]});
							}
						}
				}
			}
				
			}
			
			}
			else if(message.channel)
			{
					embed = new MessageEmbed().setDescription(`make this the command res.channel using \`${res.prefix} ${com}\``).setColor('GREEN');
					message.channel.send({embeds : [embed]});
					message.channel.send
			}
				
		
	}
	}
client.on("messageCreate", (message) => 
{
	main(message)
})
