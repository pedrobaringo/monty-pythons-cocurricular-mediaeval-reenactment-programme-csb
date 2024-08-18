Hooks.once("init", function() {
    console.log("Initializing Monty Python Module")

    game.settings.register("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "firstTimeStart", {
        name: game.i18n.localize("MONTY.SETTINGS.name"),
        hint: game.i18n.localize("MONTY.SETTINGS.hint"),
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv="<h3>"+game.i18n.localize('MONTY.SETTINGS.welcome1')+"</h3>";
	let mensimpfirst="<p>"+game.i18n.localize('MONTY.SETTINGS.welcome2')+"</p><button id="+buttonId2+" >"+game.i18n.localize('MONTY.SETTINGS.importbutton')+"</button>";
	let mensimpact="<p>"+game.i18n.localize('MONTY.SETTINGS.welcome3')+"</p><button id="+buttonId2+" >"+game.i18n.localize('MONTY.SETTINGS.importbutton')+"</button>"
	let mensrecordtut="<p>"+game.i18n.localize('MONTY.SETTINGS.welcome4')+"</p><button id="+buttonId+" >"+game.i18n.localize('MONTY.SETTINGS.tutorialbutton')+"</button>";
	
	let forzarbienvenida=game.settings.get("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "firstTimeStart");
	let forzarmensaje;
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:game.i18n.localize("MONTY.SETTINGS.god")},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/monty-pythons-cocurricular-mediaeval-reenactment-programme-csb')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb.templates-objetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Obj_Templates")) {
							folderident=game.folders.getName("Obj_Templates").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Obj_Templates", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb.templates-actores");
							let folderident2=''
							if (game.folders.getName("Actor_Templates")) {
								folderident2=game.folders.getName("Actor_Templates").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor_Templates", keepId: true});
						}, 500);
						game.user.setFlag("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "welcomeMessage", true);
						game.user.setFlag("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "lastVersion", game.modules.get("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb").version);
					});
				}
				}, 100);
			});
			game.settings.set("custom-system-builder", "initFormula", "isnpc==1 ? initiative:initiative+0.01");
			game.settings.set("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:game.i18n.localize("MONTY.SETTINGS.god")},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/monty-pythons-cocurricular-mediaeval-reenactment-programme-csb')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb.itemtemplates");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Obj_Templates")) {
							folderident=game.folders.getName("Obj_Templates").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Obj_Templates", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb.actortemplates");
							let folderident2=''
							if (game.folders.getName("Actor_Templates")) {
								folderident2=game.folders.getName("Actor_Templates").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor_Templates", keepId: true});
						}, 500);
						game.user.setFlag("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "lastVersion", game.modules.get("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb").version);
					});
				}
				}, 500);
			});
      game.settings.set("custom-system-builder", "initFormula", "isnpc==1 ? initiative:initiative+0.01");
		}
	} else if (!game.user.getFlag("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:game.i18n.localize("MONTY.SETTINGS.god")},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/monty-pythons-cocurricular-mediaeval-reenactment-programme-csb');
				});
			}
			}, 100);
		});
		game.user.setFlag("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "welcomeMessage", true);
		game.settings.set("monty-pythons-cocurricular-mediaeval-reenactment-programme-csb", "firstTimeStart", false);
	}
})