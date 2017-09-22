'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Plateformes
		 */
		"newGame" : {
			fr : "Nouvelle partie",
			en : "New Game"
		},
		"loadGame" : {
			fr : "Charger une partie",
			en : "Load a game"
		},
		"fromCode" : {
			fr : "Veuillez entrer votre code de sauvegarde :",
			en : "Please enter your save code :"
		},
		"codeHolder" : {
			fr : "Code de sauvegarde",
			en : "Save code"
		},
		"codeError" : {
			fr : "Code de sauvegarde invalide",
			en : "Invalide save code"
		},
		"load" : {
			fr : "Charger",
			en : "Load"
		},
		"or" : {
			fr : "...Ou...",
			en : "...Or..."
		},
		"fromNavigateur" : {
			fr : "Charger depuis la sauvegarde navigateur",
			en : "Load from browser save"
		},
		"options" : {
			fr : "Options",
			en : "Options"
		},
		"langage" : {
			fr : "Langage :",
			en : "Language :"
		},
		"fullscreen" : {
			fr : "Plein &eacutecran (appuyez sur echap pour revenir)",
			en : "Fullscreen (press escape for return)"
		},
		"credits" : {
			fr : "Credits",
			en : "Credits"
		},
		"illustration" : {
			fr : "Illustrations",
			en : "Illustrations"
		},
		"developpement" : {
			fr : "D&eacuteveloppement",
			en : "Development"
		},
		"musique" : {
			fr : "Musiques",
			en : "Musics"
		},
		"textes" : {
			fr : "Textes",
			en : "Texts"
		},
		"partenaires" : {
			fr : "Partenaires",
			en : "Partners"
		},
		"copyright-licence" : {
			fr : "Cette oeuvre est sous license ",
			en : "This work is licensed by "
		},
		"copyright-donot" : {
			fr : "Merci de ne pas la modifier ou la partager de fa&ccedil;on commerciale sans notre accord.",
			en : "Please don't modify and share it commercially without our consent."
		},
		
		/**
		 * Cinematique
		 */
		/**
		 * Coffre
		 */
		"cinematique-coffre1" : {
			fr : "— Maman ? … Maman ?",
			en : "— Mom ? … Mom ?"
		},
		"cinematique-coffre2" : {
			fr : "Je ne l’entends plus. Où l’ont-ils emmené ? Et Moi, je reste toute seule ?",
			en : "I can not hear him any more. Where did he take her? And Me, I'm left alone?"
		},
		"coffre-text1" : {
			fr : "— Maman ?<br/>Non ! Non ! Sarah a dit de ne pas sortir d’ici. Sarah m’a demandée de ne pas bouger... Alors, Dorcas ne bougera pas.",
			en : "— Mom ?<br/>No ! No ! Sarah said not to get out of here. Sarah asked me not to move ... So, Dorcas will not budge."
		},
		"coffre-text2" : {
			fr : "Non. Je dois être sage, sinon ils vont me prendre, moi aussi. Tu entends Nori ? Maman a dit de ne pas bouger.",
			en : "No. I must be wise, otherwise they will take me, too. Do you hear Nori? Mom said not to move."
		},
		/**
		 * Coffre Haut
		 */
		"coffre-bas-text1" : {
			fr : "— Chuuut ! … Nori ? Il n’y a rien… Je crois que l’on va pouvoir sortir. Heureusement, c’est la pleine lune ce soir.",
			en : "— Chuuut! … Nori? There's nothing… I think we'll be able to get out. Fortunately, it's the full moon tonight."
		},
		"coffre-bas-text2" : {
			fr : "J’aime beaucoup les reflets de la pleine lune. Maman aussi. <br/>Nous mettons toujours quelques fleurs sur la petite table prêt de la cheminée quand c’est la pleine lune. Maman chante des chansons.",
			en : "I really like the reflections of the full moon. Mother too. <br/>We always put some flowers on the small table ready from the fireplace when it's full moon. Mother sings songs."
		},
		"coffre-bas-text3" : {
			fr : "Elle a une jolie voix maman. Peut-être reviendra-t- elle ? Si la dame vêtue de blanc est là, elle reviendra surement !",
			en : "She has a pretty voice mommy. Perhaps she will come back? If the lady dressed in white is there, she will surely come back !"
		},
        "coffre-bas-text4" : {
            fr : "Maman lui fait beaucoup confiance, et moi aussi.<br/>Mais maman à fermer le coffre et je ne peux pas sortir d’ici.",
            en : "Mother trusts him, and so do I.<br/>But mom closes the chest and I can't get out of here."
        },
        "coffre-bas-text5" : {
            fr : "Ce qu’elle n’a jamais su, c’est que j’ai trouvé comment l’ouvrir de l’intérieur ! N’est-ce pas Nori ?",
            en : "What she never knew was that I found how to open it from the inside ! isn't it Nori?"
        },
        "coffre-bas-text6" : {
            fr : "Après tout, j’y suis tellement souvent et tellement longtemps, qu’il faut bien que je m’occupe.<br/>Heureusement que tu es la mon Nori à moi. Toi, qui garde tous mes secrets !",
            en : "After all, I am there so often and so long, that I have to take care of myself.<br/>Luckily you're here my little Nori. You who keep all my secrets !"
        },
		/**
		 * Actions
		 */
		"regarder" : {
			fr : "Regarder",
			en : "Look At"
		},
		"gouter" : {
			fr : "Gouter",
			en : "Taste"
		},
		"ecouter" : {
			fr : "Ecouter",
			en : "Listen"
		},
		"ouvrir" : {
			fr : "Ouvrir",
			en : "Open"
		},
		"utiliser" : {
			fr : "Utiliser",
			en : "Use"
		},
		"examiner" : {
			fr : "Examiner",
			en : "Examine"
		},
		"prendre" : {
			fr : "Prendre",
			en : "Take"
		},
		
		/**
		 * Actions sur les elements
		 */
		/**
		 * Serrure
		 */
		"serrure-regarder" : {
			fr : "Non Nori, non ! Je n’ose pas regarder par le trou ! Et si les méchants sont encore là ?...",
			en : "No, Nori, no ! I don't dare to look in the hole ! Maybe the bad guys are still here ?..."
		},
		"serrure-gouter" : {
			fr : "Berk ! Ça pique la langue ! Il parait qu’un peu de rouille est bon pour la santé.",
			en : "Yuck! It stings the tongue! It seems that a little rust is good for your health."
		},
		"serrure-ecouter" : {
			fr : "Seul le bruit du vent parle...",
			en : "Only the sound of the wind speaks..."
		},
		"serrure-ouvrir" : {
			fr : "J’aimerais bien, mais Maman a prit la clé.",
			en : "I'd like, but Mom took the key."
		},
		"serrure-utiliser-tournevis" : {
			fr : "Hum… Le tournevis entre, mais le coffre s’ouvre pas. Il manque peut-être quelque chose?",
			en : "Hmm ... The screwdriver comes in, but the trunk does not open. Perhaps something is missing?"
		},
		"serrure-utiliser-tige" : {
			fr : "Chouette, ça semble entrée !",
			en : "Yeah, it seems to be coming!"
		},
		"serrure-utiliser-nori" : {
			fr : "Non Nori, tu es bien trop gros ! Et ça vas encore t’abimer…",
			en : "No Nori, you're way too big! And it'll still ruin you ..."
		},
		/**
		 * Serrure tige
		 */
		"serrure-tige-examiner" : {
			fr : "La tige est coincée… Il me faudrait quelque chose en plus. Une idée Nori ?",
			en : "The stem is stuck ... I need something more. Nori, any idea?"
		},
		"serrure-tige-prendre" : {
			fr : "Raa… C’est coincé !",
			en : "Raa ... It's stuck!"
		},
		"serrure-tige-utiliser-tournevis" : {
			fr : "Ça marche Nori ! Ça marche !",
			en : "It works Nori! It works !"
		},
		"serrure-tige-utiliser-nori" : {
			fr : "C’est gentil de vouloir m’aider Nori, mais tu n’as pas assez de force.",
			en : "It's nice to want to help Nori, but you do not have enough strength."
		},
		/**
		 * Tige
		 */
		"tige-examiner" : {
			fr : "Ce sont les renfort du coffre...",
			en : "These are the trunk reinforcements ..."
		},
		"tige-prendre" : {
			fr : "Impossible, c’est trop bien fixé !",
			en : "Impossible, it is too well fixed !"
		},
		"tige-utiliser-tournevis" : {
			fr : "Hum, ça ne semble pas bouger…",
			en : "Hmm, it does not seem to move…"
		},
		"tige-utiliser-nori" : {
			fr : "Nori…Tu vas te faire mal…",
			en : "Nori… You're gonna hurt yourself…"
		},
		"tige-utiliser-tige" : {
			fr : "Aïe ! Ça ne sert à rien…",
			en : "Ouch! It's no use…"
		},
		/**
		 * Tige abimée
		 */
		"tige-abime-examiner" : {
			fr : "Ce renfort-ci à l’air d’être abîmé…",
			en : "This reinforcement looks to be damaged…"
		},
		"tige-abime-prendre" : {
			fr : "Ha! Ça bouge Nori ! Mais je n’arrive pas à le détacher.",
			en : "Ha! It moves Nori! But I can not detach it."
		},
		"tige-abime-utiliser-tournevis" : {
			fr : "Ça y est ! Je l’ai !",
			en : "That's it ! I got it !"
		},
		/**
		 * Nori
		 */
		"nori-regarder" : {
		    fr : "C’est Nori ma peluche rien qu’à moi qui me suit partout.",
		    en : "It's Nori my stuff just at me who follows me everywhere."
		},
		"nori-prendre" : {
            fr : "Viens là mon Nori.",
            en : "Come here my Nori."
        },
        "nori-prendre-no" : {
            fr : "Je devrais peut-être prendre mon secret avant...",
            en : "Maybe I should take my secret before..."
        },
        "nori-tournevis-prendre-no" : {
            fr : "Les entrailles de Nori. Il a l’air en bonne santé !",
            en : "The guts of Nori. He looks healthy !"
        },
        "nori-tournevis-prendre" : {
            fr : "C’est mon tournevis secret ! Je l’ai volé à Ted la dernière fois.",
            en : "It's my secret screwdriver! I flew it to Ted last time."
        },
        "nori-utiliser-tige" : {
            fr : "Aïe ! Ça ne sert à rien...",
            en : "Ouch! It's useless..."
        },
        /**
         * Collier
         */
        "collier-regarder" : {
            fr : "C’est le petite coffre à bijoux de maman.",
            en : "This is Mom's little jewelry chest."
        },
        "collier-prendre-no" : {
            fr : "Je pense que je devrais plutôt le laisser ici.",
            en : "I think I should rather leave it here."
        },
        "collier-examiner" : {
            fr : "Il n’y a pas grand chose mise à part quelques pierres de protections.",
            en : "There is not much besides a few stones of protection."
        },
		
		/**
		 * Non prevu
		 */
		"utiliser-non-prevu" : {
			fr : "Ça ne fonctionne pas...",
			en : "It doesn't work..."
		},
		
		/**
		 * Objets d'inventaire
		 */
		"tournevis" : {
			fr : "Un tournevis.",
			en : "A screwdriver."
		},
		"nori" : {
			fr : "Mon Nori.",
			en : "My Nori."
		},
		"tige" : {
			fr : "Un des renforts du coffre.",
			en : "One of the trunk reinforcements."
		},
		
		/**
		 * Tableaux
		 */
		"tableau-coffre" : {
            fr : "Haut du coffre",
            en : "Top of trunk"
        },
        "tableau-coffre-bas" : {
            fr : "Bas du coffre",
            en : "Bottom of trunk"
        },
		
		
		/**
		 * Fin
		 */
		"end0" : {
			fr : "F&eacute;licitation, vous avez termin&eacute; le jeu !",
			en : "Congratulations, you won !"
		},
		"end1" : {
			fr : "N&apos;h&eacute;sitez pas &agrave; donner votre avis sur notre page <a target='_blank' alt='Les jeux de Bebel' href='https://www.facebook.com/lesjeuxdebebel/'>Les jeux de Bebel</a>.",
			en : "Give us your opinion about the game on our page : <a target='_blank' alt='Les jeux de Bebel' href='https://www.facebook.com/lesjeuxdebebel/'>Les jeux de Bebel</a>."
		},
		"end2" : {
			fr : "Ou bien sur <a target='_blank' alt='Diaspora' href='https://framasphere.org/tags/bebel'>Diaspora</a>.",
			en : "Or on <a target='_blank' alt='Diaspora' href='https://framasphere.org/tags/bebel'>Diaspora</a>."
		},
		"end3" : {
			fr : "Vous pouvez aussi retenter votre chance en lancant une nouvelle partie.",
			en : "You can also retry by launching a new game."
		},
		"end4" : {
			fr : "D&eacute;couvrez nos autres jeux sur notre <a target='_blank' alt='Site internet' href='http://lesjeuxdebebel.fr.nf/Bebel'>Site internet</a>.",
			en : "Discover our other games on our <a target='_blank' alt='Website' href='http://lesjeuxdebebel.fr.nf/Bebel'>Website</a>."
		}
	};
	
	return {
		local : null,
		
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			if (!this.local) {
				this.local = navigator.language || navigator.userLanguage;
			}
			var text = $.extend(true, {}, data[key]);
			if (!text[this.local]) return text.en;
			return text[this.local];
		}
	};
});