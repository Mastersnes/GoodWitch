'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Plateformes
		 */
		"bienvenue" : {
			fr : "Bienvenue",
			en : "Welcome"
		},
		"guest" : {
			fr : "Invité",
			en : "Guest"
		},
		"newGame" : {
			fr : "Nouvelle partie",
			en : "New Game"
		},
		"loadGame" : {
			fr : "Charger une partie",
			en : "Load game"
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
			fr : "…Ou…",
			en : "…Or…"
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
		"followUs" : {
            fr : "Suivez-nous sur <a target='_blank' alt='Facebook' href='https://www.facebook.com/lesjeuxdebebel/'>Facebook</a> ou <a target='_blank' alt='Twitter' href='http://twitter.com/lesjeuxdebebel'>Twitter</a>.",
            en : "Follow us on <a target='_blank' alt='Facebook' href='https://www.facebook.com/lesjeuxdebebel/'>Facebook</a> or <a target='_blank' alt='Twitter' href='http://twitter.com/lesjeuxdebebel'>Twitter</a>."
        },
        "followUs2" : {
            fr : "Soutenez-nous sur <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>.",
            en : "Support us on <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>."
        },
        "followUs3" : {
            fr : "Nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>.",
            en : "Our other games on <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>."
        },
        
        "clue" : {
            fr : "Indice",
            en : "Clue"
        },
        "mute" : {
            fr : "Mute",
            en : "Mute"
        },
        "quit" : {
            fr : "Quitter",
            en : "Exit"
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
			fr : "Je ne l’entends plus. Où l’ont-ils emmenée ? Et Moi, je reste toute seule ?",
			en : "I can't hear her any more. Where did they take her ? And Me, I'm alone?"
		},
		"coffre-text1" : {
			fr : "— Maman ?<br/>Non ! Non ! Sarah a dit de ne pas sortir d’ici. Sarah m’a demandé de ne pas bouger… Alors, Dorcas ne bougera pas.",
			en : "— Mom ?<br/>No ! No ! Sarah said not to get out of here. Sarah asked me not to move… So, Dorcas will not move."
		},
		"coffre-text2" : {
			fr : "Non. Je dois être sage, sinon ils vont me prendre moi aussi. Tu entends, Nori ? Maman a dit de ne pas bouger.",
			en : "No. I must be good, otherwise they will take me too. Do you hear, Nori? Mom said not to move."
		},
		/**
		 * Coffre Haut
		 */
		"coffre-bas-text1" : {
			fr : "— Chuuut !… Nori ? Il n’y a rien… Je crois que l’on va pouvoir sortir. Heureusement, c’est la pleine lune ce soir.",
			en : "— Chuuut !… Nori? There's nothing… I think we'll be able to get out. Fortunately, it's the full moon tonight."
		},
		"coffre-bas-text2" : {
			fr : "J’aime beaucoup les reflets de la pleine lune. Maman aussi. <br/>Nous mettons toujours quelques fleurs sur la petite table près de la cheminée quand c’est la pleine lune. Maman chante des chansons.",
			en : "I really like the full moon sparkle. Mother too. <br/>We always put some flowers on the small table close to the fireplace when it's full moon. Mother sings songs."
		},
		"coffre-bas-text3" : {
			fr : "Elle a une jolie voix maman. Peut-être reviendra-t- elle ? Si la dame vêtue de blanc est là, elle reviendra sûrement !",
			en : "She has a pretty voice mommy. Perhaps she will come back? If the lady dressed in white is there, she will surely come back !"
		},
        "coffre-bas-text4" : {
            fr : "Elle lui fait beaucoup confiance, et moi aussi.<br/>Mais Sarah a fermé le coffre et je ne peux pas sortir d’ici.",
            en : "She trusts her, and so do I.<br/>But Sarah closes the trunk and I can't get out of here."
        },
        "coffre-bas-text5" : {
            fr : "Ce qu’elle n’a jamais su, c’est que j’ai trouvé comment l’ouvrir de l’intérieur ! N’est-ce pas, Nori ?",
            en : "What she never knew was that I found how to open it from the inside ! isn't it, Nori?"
        },
        "coffre-bas-text6" : {
            fr : "Après tout, j’y suis tellement souvent et tellement longtemps, qu’il faut bien que je m’occupe.<br/>Heureusement que tu es là mon Nori à moi. Toi, qui garde tous mes secrets !",
            en : "After all, I am there so often and so long, that I have to take care of myself.<br/>Luckily you're here my little Nori. You who keep all my secrets !"
        },
        /**
         * Piece sombre
         */
        "piece-sombre-text1" : {
            fr : "J’ai peur… Et il fait sombre. Je devrais peut-être allumer la lampe à huile sur la grande table.",
            en : "I'm afraid… And it's dark. Maybe I should light the oil lamp on the big table."
        },
        "piece-sombre-text2" : {
            fr : "Mais, je n’ai pas de feu… Le vieux Ted a ramené des bougies hier soir.",
            en : "But, I don't have fire… Old Ted brought back a candle last night."
        },
        "piece-sombre-text3" : {
            fr : "Il a encore regardé ma maman d’un drôle d’air. Sarah n’aime pas ça. Elle dit que c’est un méchant pervers !",
            en : "He still looked at my mother with a stupid look. Sarah doesn't like it. She says it's a dangerous pervert !"
        },
        "piece-sombre-text4" : {
            fr : "Moi, il me fait peur… Surtout quand il me caresse les cheveux avec sa vieille main toute sale.",
            en : "He frightens me… Especially when he caresses my hair with his old dirty hand."
        },
        "piece-sombre-text5" : {
            fr : "— Je voudrais qu’il brûle en enfer comme un chien de Satan !<br/>Je me demande où sont les allumettes… Dans le tiroir de la cuisine ?",
            en : "— I wish he burned in hell like a dog of Satan!<br/>I wonder where are the matches… In the kitchen drawer ?"
        },
        
        /**
         * Piece
         */
        "piece-text1" : {
            fr : "Chut ! Un bruit ! Cachons-nous, Nori ! Non, non, pas là ! Sous la table !",
            en : "Shh! A noise ! Let's Hide, Nori! No, no, not there! Under the table !"
        },

        /**
         * Piece Ted
         */
        "piece-ted1" : {
        	fr : "C’est monsieur Ted… Il ne faut pas qu’il nous trouve ! Qu’est-ce qu’il fait ici ?… On dirait qu’il cherche quelque chose…",
        	en : "It's Mr. Ted… He must not find us! What is he doing here? Looks like he is looking for something…"
        },
        "piece-ted2" : {
        	fr : "— Baaarf, cette vieille sorcière l’avait bien cherché !<br/> Il est saoul, comme d’habitude…",
        	en : "— Baaarf, this old witch had looked for trouble! <br/> He is drunk, as usual…"
        },
        "piece-ted3" : {
        	fr : "— Allez, sors de là, p‘tit démon de l’enfer ! Je sais qu’ta mère t’a cachée ici… Ils vont vous faire griller comme des rôtis de porc ! Mouahahaha !",
        	en : "— Come on, get out of here, little demon of hell! I know your mother hide you here… They're going to grill you like roast pork! Mouahahaha!"
        },
        "piece-ted4" : {
        	fr : "Pfff, il ne tient même plus debout. Il faut qu’on trouve une solution, Nori. On pourrait peut-être l’assommer ? Il faudrait que j’atteigne la cheminée sans me faire remarquer…",
        	en : "Pff, He does not even stand up. We need a solution, Nori. Maybe we could knock him out? I would have to reach the fireplace without being noticed…"
        },
        "piece-ted5" : {
        	fr : "— Allez, montre-toi, suppôt de Satan ! Haa, où est cette sale petite morveuse… Tu vas voir si je t’attrape…",
        	en : "— Come on, show yourself, Devil worshipper ! Haa, where's that dirty little brat… You'll see if I catch you…"
        },
        
        /**
         * Piece2
         */
        "piece2-text1" : {
        	fr : "On l’a eu ! Et maintenant ? Que va-t-on faire de lui ? S’il se réveille, nous serons en danger.",
        	en : "We got it! And now ? What are we going to do with him? If he wakes up, we will be in danger."
        },
        "piece2-text2" : {
        	fr : "Je sais ! Faisons en sorte qu’il ne puisse plus bouger, Nori ! Ensuite, nous irons sauver maman avec le gros bouquin plein de jolies images !",
        	en : "I know ! Let's make sure he can't move, Nori! Then we will save Mom with the big book full of pretty pictures !"
        },
        /**
         * Fin
         */
        "cinematique-fin1" : {
        	fr : "Retournons dans le coffre ! Ici, personne ne pourra nous voir… Écoute…",
        	en : "Let's go back to the trunk! Here, nobody can see us… Listen…"
        },
        "cinematique-fin2" : {
        	fr : "— Dorcas ?! Dorcas ?! Où es-tu ! Monsieur Ted ? Mais, qu’est-ce que vous faites ici ? Et que vous est-il arrivé ?",
        	en : "— Dorcas ?! Dorcas? Where are you ! Mr. Ted? But, what are you doing here? And what happened to you?"
        },
        "cinematique-fin3" : {
        	fr : "Maman ?!",
        	en : "Mum ?!"
        },
        "cinematique-fin4" : {
        	fr : "— Hm hmm hm hmm hmmmm !<br/>— Attendez ! Cessez donc de gigoter enfin… Voilà.",
        	en : "— Hm hmm hm hmm hmmmm! <br/>— Wait! Stop wiggling will you… Here."
        },
        "cinematique-fin5" : {
        	fr : "On va avoir de gros ennuis, Nori…",
        	en : "We're going to have big trouble, Nori…"
        },
        "cinematique-fin6" : {
        	fr : "— Maudite sorcière ! Vous ne payerez rien pour attendre ! Vous allez voir ! Je vous brûlerai moi-même, vous et votre sale petite peste !",
        	en : "— Cursed sorceress! You will get what you deserve! You'll see ! I will burn you and your dirty little pest!"
        },
        "cinematique-fin7" : {
        	fr : "— Ho, je comprends ! C’est donc vous qui avez raconté ces mensonges. Sortez de mon auberge monsieur ! Vous êtes un monstre !",
        	en : "— Ho, I understand ! So it was you who told these lies. Get out of my inn sir! You are a monster!"
        },
        "cinematique-fin8" : {
        	fr : "— Maman !!!!<br/> — Dorcas ! Ma petite fille… J’ai eu si peur.",
        	en : "— Mother !!!! <br/> — Dorcas! My little girl… I was so scared."
        },
        "cinematique-fin9" : {
        	fr : "— Moi aussi, Sarah ! Moi aussi ! Je suis contente que tu sois revenue !",
        	en : "— Me too, Sarah! Me too ! I'm glad you came back!"
        },
        "cinematique-fin10" : {
        	fr : "— Oui, ma fille… Il n’y a un qu’un fou pour croire à de telles histoires… Viens, allons manger un bon repas bien chaud ! Prépare les bougies ! Ce soir, c’est la pleine lune…",
        	en : "— Yes, my daughter. There's only insane to believe in such stories. Come, let's eat a good hot meal! Prepare the candles ! Tonight is the full moon…"
        },
        "cinematique-fin11" : {
        	fr : "— Ouiii ! Vient Nori, allons-y !",
        	en : "— Yes! Come Nori, let's go!"
        },
        "cinematique-fin12" : {
            fr : "À suivre…",
            en : "To be continued…"
        },
        "fin" : {
            fr : "Félicitation, vous avez gagné ! <br/> Venez tester nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a> !<br/> Vous pouvez également nous soutenir sur <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>.<br/>À bientôt !",
            en : "Congratulation, you won ! <br/> Let's try our others games on <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a> !<br/> You can also support us on <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>.<br/>See you !"
        },
        
		/**
		 * Actions
		 */
		"regarder" : {
			fr : "Regarder",
			en : "Look At"
		},
		"gouter" : {
			fr : "Goûter",
			en : "Taste"
		},
		"ecouter" : {
			fr : "Écouter",
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
		"casser" : {
			fr : "Casser",
			en : "Break"
		},
		"cacher" : {
			fr : "Se cacher",
			en : "To hide"
		},
		"soulever" : {
			fr : "Soulever",
			en : "Raise"
		},
		"allumer" : {
			fr : "Allumer",
			en : "Light up"
		},
		
		/**
		 * Actions sur les elements
		 */
		/**
		 * Serrure
		 */
		"serrure-regarder" : {
			fr : "Non Nori, non ! Je n’ose pas regarder par le trou ! Et si les méchants sont encore là ?…",
			en : "No, Nori, no ! I don't dare to look in the hole ! Maybe the bad guys are still here ?…"
		},
		"serrure-gouter" : {
			fr : "Berk ! Ça pique la langue ! Il parait qu’un peu de rouille est bon pour la santé.",
			en : "Ugh! It stings the tongue! It seems that a little rust is good for your health."
		},
		"serrure-ecouter" : {
			fr : "Seul le bruit du vent parle…",
			en : "Only the sound of the wind speaks…"
		},
		"serrure-ouvrir" : {
			fr : "J’aimerais bien, mais Maman a pris la clé.",
			en : "I'd like, but Mom took the key."
		},
		"serrure-utiliser-tournevis" : {
			fr : "Hum… Le tournevis entre, mais le coffre ne s’ouvre pas. Il manque peut-être quelque chose ?",
			en : "Hmm… The screwdriver comes in, but the trunk doesn't open. Perhaps something is missing ?"
		},
		"serrure-utiliser-tige" : {
			fr : "Chouette, ça semble entrer !",
			en : "Yeah, it seems to be coming !"
		},
		"serrure-utiliser-nori" : {
			fr : "Non Nori, tu es bien trop gros ! Et ça va encore t’abîmer…",
			en : "No Nori, you're too big! And it'll ruin you…"
		},
		/**
		 * Serrure tige
		 */
		"serrure-tige-examiner" : {
			fr : "La tige est coincée… Il me faudrait quelque chose en plus. Une idée, Nori ?",
			en : "The rod is stuck… I need something more. Nori, any idea?"
		},
		"serrure-tige-prendre" : {
			fr : "Raa… C’est coincé !",
			en : "Raa … It's stuck !"
		},
		"serrure-tige-utiliser-tournevis" : {
			fr : "Ça marche, Nori ! Ça marche !",
			en : "It works, Nori ! It works !"
		},
		"serrure-tige-utiliser-nori" : {
			fr : "C’est gentil de vouloir m’aider, Nori, mais tu n’as pas assez de force.",
			en : "It's nice to want to help me, Nori, but you don't have enough strength."
		},
		/**
		 * Tige
		 */
		"tige-examiner" : {
			fr : "Ce sont les renforts du coffre…",
			en : "These are the trunk reinforcements…"
		},
		"tige-prendre" : {
			fr : "Impossible, c’est trop bien fixé !",
			en : "Impossible, it's fixed !"
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
			fr : "Ce renfort-ci a l’air d’être abîmé…",
			en : "This reinforcement looks damaged…"
		},
		"tige-abime-prendre" : {
			fr : "Ha ! Ça bouge, Nori ! Mais je n’arrive pas à le détacher…",
			en : "Ha ! It moves, Nori ! But I can't detach it…"
		},
		"tige-abime-utiliser-tournevis" : {
			fr : "Ça y est ! Je l’ai !",
			en : "That's it ! I got it !"
		},
		/**
		 * Nori
		 */
		"nori-regarder" : {
		    fr : "C’est Nori, ma peluche rien qu’à moi qui me suit partout.",
		    en : "It's Nori, my soft toy just at me who follows me everywhere."
		},
		"nori-prendre" : {
            fr : "Viens là mon Nori.",
            en : "Come here my Nori."
        },
        "nori-prendre-no" : {
            fr : "Je devrais peut-être prendre mon secret avant…",
            en : "Maybe I should take my secret before…"
        },
        "nori-tournevis-prendre-no" : {
            fr : "Les entrailles de Nori. Il a l’air en bonne santé !",
            en : "The guts of Nori. He looks healthy !"
        },
        "nori-tournevis-prendre" : {
            fr : "C’est mon tournevis secret ! Je l’ai volé à Ted la dernière fois.",
            en : "It's my secret screwdriver ! I stole it to Ted last time."
        },
        "nori-gouter" : {
            fr : "Hum… Ça a le goût d’algue…",
            en : "Hum… It taste like seaweed…"
        },
        "nori-utiliser-tige" : {
            fr : "Aïe ! Ça ne sert à rien…",
            en : "Ouch! It's useless…"
        },
        "nori-utiliser-tournevis" : {
            fr : "Je n’ai pas besoin de le cacher de nouveau.",
            en : "Doesn't need to hide it again."
        },
        /**
         * Boite
         */
        "boite-regarder" : {
            fr : "C’est le petit coffre à bijoux de maman.",
            en : "This is Mom's little jewelry trunk."
        },
        "boite-prendre-no" : {
            fr : "Je pense que je devrais plutôt le laisser ici.",
            en : "I think I should leave it here."
        },
        "boite-examiner" : {
            fr : "Il n’y a pas grand chose, mis à part quelques pierres de protection.",
            en : "There is nothing but a few stones of protection."
        },
        /**
         * Collier
         */
        "collier-regarder" : {
            fr : "C’est le collier de perles de maman. Elle déteste quand je le grignote.",
            en : "This is Mom's Pearls Necklace. She hates when I chew it."
        },
        "collier-gouter" : {
            fr : "J’aimerais bien ! Mais je dois sortir d’ici.",
            en : "I would like ! But I have to get out of here."
        },
        "collier-casser" : {
            fr : "Ho non ! Il paraît qu’il a beaucoup de valeur.",
            en : "Oh no ! He seems to have a lot of value."
        },
        /**
         * Athame
         */
        "athame-regarder" : {
            fr : "C’est la petite serpe de Sarah. On s’en sert pour cueillir les herbes.",
            en : "This is Sarah's little scepter. It is used to gather herbs."
        },
        "athame-prendre" : {
            fr : "Je n’ai pas d’herbes à couper.",
            en : "I don't have any grass to cut."
        },
        /**
         * Table
         */
        "table-regarder" : {
            fr : "Cette table a vue de nombreux repas !",
            en : "This table views many meal !"
        },
        "table-examiner" : {
        	fr : "Parfois, je me cache là-dessous pour écouter les gens.",
        	en : "Sometimes I hide underneath to listen peoples."
        },
        "table-gouter" : {
        	fr : "Un reste de goût d’ail…",
        	en : "A rest of garlic taste…"
        },
        "table-cacher" : {
        	fr : "Vite, Nori ! Sous la table !!!",
        	en : "Quickly, Nori ! Under the table !!!"
        },
        "table-cacher-no-sombre" : {
        	fr : "Je n'ai pas besoin de me cacher.",
        	en : "I don't need to hide."
        },
        "table-cacher-no-ted" : {
        	fr : "Je suis déjà cachée.",
        	en : "I'm already hidden."
        },
        "table-cacher-no-ted-assome" : {
        	fr : "Cette cachette n'est plus sûre.",
        	en : "This hiding place is no longer safe."
        },
        
        /**
         * Cheminée
         */
        "chemine-regarder" : {
        	fr : "Une bonne grande cheminée ! Idéal pour les longs mois d’hivers !",
        	en : "A good big fireplace! Ideal for long winters!"
        },
        "chemine-ecouter" : {
        	fr : "On entend le vent dans le conduit !",
        	en : "We hear the wind in the pipe!"
        },
        "chemine-examiner" : {
        	fr : "De la suie !",
        	en : "Soot !"
        },
        "chemine-gouter" : {
        	fr : "Ç'est râpeux !",
        	en : "It's rough !"
        },
        /**
         * Pot à charbon
         */
        "pot-charbon-regarder" : {
        	fr : "Un gros pot tout noir à l’intérieur.",
        	en : "A big pot, all is black inside."
        },
        "pot-charbon-ecouter" : {
        	fr : "Ça résonne !",
        	en : "It's ringing !"
        },
        "pot-charbon-examiner" : {
        	fr : "Il n’y a rien là-dedans…",
        	en : "There's nothing in there…"
        },
        /**
         * Casseroles
         */
        "casserole-regarder" : {
        	fr : "Ces casseroles sont jolies, mais c’est un vrai cauchemar à nettoyer !",
        	en : "These pans are pretty, but it's a real nightmare to clean !"
        },
        "casserole-gouter" : {
        	fr : "Berk ! Le lustrant a un goût amer !",
        	en : "Yuck ! The shine has a bitter taste !"
        },
        "casserole-ecouter" : {
        	fr : "Doooong !",
        	en : "Doooong !"
        },
        "casserole-prendre-no" : {
        	fr : "Hum, non, pas celle-ci !",
        	en : "Um, no, not this one !"
        },
        /**
         * Casserole OK
         */
        "casserole-ok-regarder" : {
        	fr : "Une jolie casserole en cuivre.",
        	en : "A pretty copper saucepan."
        },
        "casserole-ok-ecouter" : {
        	fr : "Diiiing !",
        	en : "Diiiing !"
        },
        "casserole-ok-prendre" : {
        	fr : "Ha ! Ma casserole préférée !",
        	en : "Ha ! My favorite pan !"
        },
        
        /**
         * Tonneau
         */
        "tonneau-regarder" : {
        	fr : "Un vieux tonneau qui nous sert de rangements.",
        	en : "An old barrel that serves as storage."
        },
        "tonneau-examiner" : {
        	fr : "Chouette ! Une corde ! Exactement ce qu’il me fallait, Nori !",
        	en : "Super ! A rope ! Exactly what I needed, Nori!"
        },
        "tonneau-vide" : {
        	fr : "Il n'y a plus rien d'intéressant…",
        	en : "There is nothing more interesting…"
        },
        "tonneau-ecouter" : {
        	fr : "Ça sonne creux…",
        	en : "It sounds hollow…"
        },
        /**
         * Meuble
         */
        "meuble-regarder" : {
        	fr : "Un grand meuble rempli de tout un tas de trucs…",
        	en : "A big piece of furniture filled with a lot of stuff…"
        },
        "meuble-examiner" : {
        	fr : "Chouette ! Mes dessins !",
        	en : "Yeah ! My draws !"
        },
        "meuble-examiner-vide" : {
        	fr : "Il n'y a plus que des vieux plats…",
        	en : "There are only old dishes…"
        },
        "meuble-gouter" : {
        	fr : "Bof… Un goût de vieux bois ciré.",
        	en : "Bof… A taste of old waxed wood."
        },
        /**
         * Tapis
         */
        "tapis-regarder" : {
        	fr : "C’est un vieux tapis tout sale et poussiéreux.",
        	en : "It's an old carpet all dirty and dusty."
        },
        "tapis-examiner" : {
        	fr : "Il y a quelque chose de caché en dessous ! Moi, je le sais !",
        	en : "There's something hidden underneath ! I know that !"
        },
        "tapis-gouter" : {
        	fr : "Non, ce ne doit pas être bon…",
        	en : "No, it doesn't have to be good…"
        },
        "tapis-soulever" : {
        	fr : "Voyons voir là-dessous…",
        	en : "Let's see below…"
        },
        /**
         * Planque
         */
        "planque-livre-regarder" : {
        	fr : "Cette latte à l’air d’être abîmée.",
        	en : "This slat looks to be damaged."
        },
        "planque-livre-examiner" : {
        	fr : "La cachette idéale !",
        	en : "The perfect hiding place !"
        },
        "planque-livre-ouvrir" : {
        	fr : "Aïe ! Je n’y arrive pas avec mes doigts…",
        	en : "Ouch! I can't do it with my fingers…"
        },
        "planque-livre-ecouter" : {
        	fr : "Ha !! Ça sonne creux ici !",
        	en : "Ha !! It sounds hollow here !"
        },
        "planque-livre-utiliser-nori" : {
        	fr : "Tu n’y arrivera pas non plus Nori.",
        	en : "You will not succeed either, Nori."
        },
        "planque-livre-utiliser-casserole" : {
        	fr : "Taper dessus n’a pas l’air de fonctionner…",
        	en : "Hit on it doesn't seem to work…"
        },
        "planque-livre-utiliser-dessin" : {
        	fr : "Non, je ne vais pas les ranger ici.",
        	en : "No, I will not put them in here."
        },
        "planque-livre-utiliser-tournevis" : {
        	fr : "Ce tournevis est bien trop gros…",
        	en : "This screwdriver is far too big…"
        },
        "planque-livre-utiliser-couteau" : {
        	fr : "Super ! Ça s’ouvre !",
        	en : "Yeah ! It's open !"
        },
        "planque-livre-no" : {
        	fr : "J'ai déjà le livre.",
        	en : "I already have the book."
        },
        /**
         * Lire livre
         */
        "livre-lire" : {
        	fr : "Voilà le livre, Nori ! Nous allons pouvoir sauver maman ! Il suffit de trouver la bonne page et de réciter l’incantation. Tu es prêt ?",
        	en : "This is the book, Nori ! We can save Mom ! Just find the right page and recite the incantation. You're ready ?"
        },
        "livre-lire1" : {
        	fr : "Dans le temps et l’espace,<br/> De la lune à la Terre,",
        	en : "In time and space,<br/> From the moon to the Earth,"
        },
        "livre-lire2" : {
        	fr : "Les astres jamais ne s’effacent<br/> Et contemplent le monde.",
        	en : "The stars never fade<br/> And contemplate the world."
        },
        "livre-lire3" : {
        	fr : "Que la colère d’Hecate gronde,<br/> Et rétablisse la vérité",
        	en : "Let Hecate's rage rumble,<br/> And restore the truth"
        },
        "livre-lire4" : {
        	fr : "Afin qu’ici soit retrouvé<br/> Le bien qui m’a été enlevé.",
        	en : "So that here is found<br/> The good that was taken away from me."
        },
        "livre-lire5" : {
        	fr : "Dans la lueur du clair de lune<br/> Que mes paroles soient entendues.",
        	en : "In the light of the moonlight<br/> Let my words be heard."
        },
        "livre-lire6" : {
        	fr : "Ainsi soit-il !",
        	en : "So be it !"
        },
        "livre-lire7" : {
        	fr : "…<br/> Nori ? Tu entends ? Vite, vite, quelqu’un arrive !! Cachons-nous !",
        	en : "…<br/> Nori ? You hear ? Quick, fast, someone arrives !! Let's hide !"
        },
        
        /**
         * Ted
         */
        "ted-regarder" : {
        	fr : "Berk, ce vieux Ted est une laideur ! Il me fait très peur !!",
        	en : "Berck, this old Ted is very ugly ! He really scare me !!"
        },
        "ted-ecouter" : {
        	fr : "Il dit des bêtises, comme toujours ! Je le déteste !",
        	en : "He says nonsense, as always! I hate him !"
        },
        "ted-utiliser-nori" : {
        	fr : "Certainement pas ! Ted serait capable de le brûler !",
        	en : "Certainly not ! Ted would be able to burn it !"
        },
        "ted-utiliser-tournevis" : {
        	fr : "Si je pouvais…",
        	en : "If I could…"
        },
        "ted-utiliser-casserole" : {
        	fr : "Et bim ! Prend ça, vieux monstre dégoûtant !",
        	en : "And boom ! Take that, old disgusting monster !"
        },
        /**
         * Ted assome
         */
        "ted-assome-regarder" : {
        	fr : "Un vieux Ted allongé comme un rat mort ! Bien fait pour lui !",
        	en : "An old Ted lying like a dead rat ! Well done for him !"
        },
        "ted-assome-examiner" : {
        	fr : "Ted se balade toujours avec son couteau de chasse. Je vais le prendre au cas où.",
        	en : "Ted always has his hunting knife with him. I'll take it just in case."
        },
        "ted-assome-examiner-no" : {
        	fr : "Rien de bien intéressant…",
        	en : "Nothing very interesting…"
        },
        "ted-assome-examiner-peur" : {
        	fr : "J'ai beaucoup trop peur qu'il se reveil !",
        	en : "I'm too afraid he'll wake up!"
        },
        "ted-assome-ouvrir" : {
        	fr : "Ce ne serait pas raisonnable…",
        	en : "It would not be reasonable…"
        },
        "ted-assome-utiliser-nori" : {
        	fr : "Non Nori, tu vas te salir !",
        	en : "No Nori, you're going to get dirty!"
        },
        "ted-assome-utiliser-tournevis" : {
        	fr : "Même démonté, il ne servirait à rien !",
        	en : "Even disassembled, He is good for nothing !"
        },
        "ted-assome-utiliser-couteau" : {
        	fr : "Si j’avais plus de temps… Peut-être…",
        	en : "If I had more time… Maybe…"
        },
        "ted-assome-utiliser-corde" : {
        	fr : "Voilà qui devrait l'empêcher de bouger ! Espèce de vieille saucisse de lard pourrie !",
        	en : "That should keep him from moving! You old rotten bacon sausage!"
        },
        /**
         * Echelle
         */
        "echelle-regarder" : {
        	fr : "Une échelle bien pratique ! Mais il faut bien faire attention de ne pas tomber !",
        	en : "A very useful ladder ! But be careful not to fall !"
        },
        "echelle-gouter" : {
        	fr : "Ça a un petit goût de terre…",
        	en : "It has a little taste of soil …"
        },
        "echelle-examiner" : {
        	fr : "Je ne dois aller nulle part…",
        	en : "I don't have to go anywhere…"
        },
        
        /**
         * Lampe
         */
        "lampe-regarder" : {
        	fr : "C’est une lampe à huile en cuivre. Elle est plus jolie quand elle est allumée.",
        	en : "It is a copper oil lamp. She's prettier when she's on."
        },
        "lampe-ouvrir" : {
        	fr : "Non ! Maman m’a dit de ne pas toucher !",
        	en : "No ! Mom told me not to touch !"
        },
        "lampe-utiliser-nori" : {
        	fr : "Nori, tu es encore trop petit pour jouer avec le feu…",
        	en : "Nori, you're still too small to play with fire…"
        },
        "lampe-utiliser-tournevis" : {
        	fr : "Hum… Non.",
        	en : "Hum… No."
        },
        "lampe-utiliser-casserole" : {
        	fr : "Si je vide la lampe, je ne pourrai pas l’allumer voyons…",
        	en : "If I empty the lamp, I will not be able to light it…"
        },
        "lampe-utiliser-dessin" : {
        	fr : "Je n’ai pas envie de le brûler !",
        	en : "I don't want to burn it !"
        },
        "lampe-utiliser-corde" : {
            fr : "Serait-ce vraiment raisonnable ?",
            en : "Would it be really reasonable ?"
        },
        "lampe-utiliser-allumette" : {
        	fr : "Super ! On va y voir un peu plus clair à présent !",
        	en : "Great ! We'll see a little lighter now!"
        },
        "lampe-utiliser-allumette-no" : {
        	fr : "Non Nori ! On va se faire repérer !",
        	en : "No Nori! We'll be spotted !"
        },
        "lampe-allumer" : {
        	fr : "Sans allumettes ? Je ne sais pas encore faire ce tour de magie.",
        	en : "Without matches ? I don't know how to do this magic trick yet."
        },
        "lampe-allumer-deja" : {
            fr : "Elle est déjà allumée.",
            en : "It's already on."
        },
        /**
         * Fenetre
         */
        "fenetre-regarder" : {
        	fr : "Le ciel est magnifique à cette heure-ci !",
        	en : "The sky is beautiful at this hour !"
        },
        "fenetre-examiner" : {
        	fr : "Je verrais bien de beaux rideaux ici…",
        	en : "I'll see nice curtains here…"
        },
        "fenetre-ouvrir" : {
        	fr : "Il fait un peu froid dehors ! Et ce ne serait pas très discret !",
        	en : "It's a little cold outside ! And it would not be very discreet !"
        },
        "fenetre-ecouter" : {
        	fr : "On n’entend pas grand chose. C’est calme dehors.",
        	en : "We don't hear much. It's quiet outside."
        },
        "fenetre-utiliser-nori" : {
        	fr : "Tu as vu comme la lune est belle, Nori ?",
        	en : "You saw how beautiful the moon is, Nori ?"
        },
        "fenetre-utiliser-tournevis" : {
        	fr : "Heu… Je n’ai pas envie de faire ça maintenant.",
        	en : "Uh… I don't want to do that now."
        },
        "fenetre-utiliser-casserole" : {
        	fr : "Je vais casser une fenêtre avec ça !",
        	en : "I'll break a window with that!"
        },
        "fenetre-utiliser-dessin" : {
        	fr : "C’est bien mieux comme ça ! On sera plus en sécurité maintenant.",
        	en : "It's much better this way ! We'll be safer now."
        },
        
        /**
         * Allumette
         */
        "allumette-gouter" : {
        	fr : "Un petit goût de souffre…",
        	en : "A little taste of sulfur…"
        },
        "allumette-regarder" : {
        	fr : "Ces allumettes servent à allumer beaucoup de choses dans l’auberge.",
        	en : "This matches serve to light a lot of things in the inn."
        },
        "allumette-prendre" : {
        	fr : "Je vais prendre ça au cas où !",
        	en : "I'll take that in case !"
        },
        "allumette-ecouter" : {
        	fr : "J’aime bien le bruit d’une boîte d’allumettes quand on la secoue !",
        	en : "I like the sound of a matchbox when you shake it !"
        },
        
		/**
		 * Non prevu
		 */
		"utiliser-non-prevu" : {
			fr : "Ça ne fonctionne pas…",
			en : "It doesn't work…"
		},
		"attention-ted-arrive" : {
			fr : "Pas le temps, je dois vite me cacher !",
			en : "No time, I must hide quickly !"
		},
		"no-sombre" : {
			fr : "Il fait beaucoup trop sombre, je n'y vois rien !",
			en : "It's far too dark, I do not see anything!"
		},
		"no-ted" : {
			fr : "Impossible avec Ted qui rode !",
			en : "Impossible with Ted who rode !"
		},
		"coffre-oublie-nori" : {
		    fr : "Je ne peux tout de même pas laisser Nori ici tout seul !",
            en : "I definitely can't let Nori alone here !"
		},
		
		/**
		 * Objets d'inventaire
		 */
		"tournevis" : {
			fr : "Un tournevis",
			en : "A screwdriver"
		},
		"nori" : {
			fr : "Mon Nori",
			en : "My Nori"
		},
		"tige" : {
			fr : "Un des renforts du coffre",
			en : "One of the trunk reinforcements"
		},
		"corde" : {
			fr : "Une corde bien solide",
			en : "A strong rope"
		},
		"casserole" : {
			fr : "Une casserole",
			en : "A saucepan"
		},
		"dessin" : {
			fr : "Ma plus belle oeuvre",
			en : "My most beautiful work"
		},
		"couteau" : {
			fr : "Le couteau de chasse de Ted",
			en : "Ted's hunting knife"
		},
		"allumette" : {
			fr : "Des allumettes",
			en : "Matches"
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
         * Indices
         */
        "indice-tournevis" : {
            fr : "Peut-être que je devrais prendre mon trésor, cela pourrait m'aider.<br/> Mais, où l'ai-je mis déjà ? Tu te souviens, Nori ?",
            en : "Maybe should i take my treasure, that could help me.<br/> But where is it again ? Do you remember Nori ?"
        },
        "indice-renfort" : {
            fr : "Ce coffre est très bien renforcé sur les côtés de la serrure. Peut-être que je pourrais arranger ça ?",
            en : "This trunk is very well reinforced on the sides of the lock. Maybe I could fix that ?"
        },
        "indice-crochetage" : {
            fr : "Voilà, Nori ! Nous avons tous les outils qu’il nous faut pour sortir d’ici ! Il n’y a plus qu’à se servir de tout ce que l’on a trouvé.",
            en : "There you go, Nori ! We have all the tools we need to get out of here ! There is nothing left but to use all that we found."
        },
        "indice-rideau" : {
            fr : "Il ne faut pas qu’on nous repère avec la lueur de la lampe…<br/> J’ai toujours trouvé que cette pièce serait plus jolie avec des rideaux ! Tu te souviens de mon joli dessin, Nori ?",
            en : "We must not be spotted with the light of the lamp… I always found that this room would be prettier with curtains ! Remember my pretty drawing, Nori ?"
        },
        "indice-lampe" : {
            fr : "On n’y voit pas grand chose. Ce serait mieux si la lampe était allumée.",
            en : "We don't see anything. It would be better if the lamp was on."
        },
        "indice-cacher" : {
            fr : "Quelqu’un arrive ! Cachons-nous sous quelque chose !",
            en : "Someone comes ! Let's hide under something !"
        },
        "indice-assomer" : {
            fr : "Ted est fort, mais un bon coup sur la tête devrait lui remettre les idées en place !<br/> D’autant qu’il a toujours apprécié nos jolies casseroles…",
            en : "Ted is strong, but a good blow on his head should set him straight !<br/> Especially as he has always appreciated our pretty pans…"
        },
        "indice-ligoter" : {
            fr : "Je ne serai pas tranquille tant qu’il pourra encore bouger…",
            en : "I will not be safe as long as he can still move…"
        },
        "indice-fouiller" : {
            fr : "Et si l’on découvrait les petits secrets de Ted ? Ce serait bien de s’assurer que nous ne risquons plus rien, Nori !",
            en : "What if we discovered Ted's little secrets ? It would be nice to make sure we don't risk anything, Nori !"
        },
        "indice-planque" : {
            fr : "Maman a caché son livre quelque part dans la pièce. Mais, moi, je sais où est cette cachette ! Il n’y a pas que les poussières que l’on peut cacher…",
            en : "Mother hid her book somewhere in the room. But I know where this hiding-place is ! It's not only the dust that can be hidden..."
        },
        "indice-planque-couteau" : {
            fr : "Je n’arrive pas à l’ouvrir à main nues. Je devrais peut-être utiliser un objets plus plat pour faire levier…<br/> Je sais ! Pour une fois, ce vieux Ted aura été utile !",
            en : "I can't open it with my bare hands. Maybe should i use a more flat object to leverage... I know! For once, this old Ted was useful !"
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
				if (this.local) {
					this.local = this.local.toLowerCase();
					if (this.local.indexOf("fr") > -1) this.local = "fr";
					else if (this.local.indexOf("en") > -1) this.local = "en";
				}else {
					this.local = "en";
				}
			}
			var text = $.extend(true, {}, data[key]);
			
			if (text[this.local]) return text[this.local]; 
			else if (text.en) return text.en;
			else return key;
		}
	};
});
