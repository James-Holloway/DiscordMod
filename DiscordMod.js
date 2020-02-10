	//TODO: Replace JQuery selectors to CSS selectors
	//discord mod hide reactbar
	//get react to message container
	var discordModClassReferElement = $("div[class|='message']>div[class|=buttonContainer]>div[class|='buttons'");
	var discordModEmojiContainerClass = discordModClassReferElement.classList[0]; //.toString().replace(/ /g, ".");

	//no more flashy background
	var discordModMessageClass = discordModClassReferElement.parentElement.parentElement.classList[0];

	//light theme all username slight outline
	var discordModUsernameClass = $("h2[class|='header']>span[class|='username']").classList[0];

	//adding dividers
	//want to avoid double dividers so we get the divider elements
	var discordModisCozy = $("div[class|='scrollerWrap']>div[class|='scroller']>div[class*='message'][class*='cozy']") != null;

	if (discordModisCozy) {
		var discordModGroupStartClass = $("div[class|='scrollerWrap']>div[class|='scroller']>div[class*='groupStart']").classList[2];
		var discordModDividerStartClass = $("div[class|='scrollerWrap']>div[class|='scroller']>div[class|='divider']").classList[0];
	}
	else {
		var discordModGroupStartClass = "discordIsNotCozySorry";
	}


	//Style to combine everything
	var discordModStyleText = (`div.emojiContainerClass {
		visibility: hidden !important;
	}

	div.messageClass { 
		background-color: transparent !important;
	}

	div.groupStartClass::before {
		content: '';
		margin: 0px .875rem 8px 1rem;
		z-index: 1;
		height: 0;
		border-top: thin solid var(--background-modifier-accent);
		display: block;
	}

	div.dividerClass+div.groupStartClass::before {
		border-top: 0;
		display: none;
	}

	.theme-light {
		--text-muted: #3a3a3a !important;
		--interactive-muted: #6f6f6f !important;
		--channels-default: #222 !important;
		--background-primary: #f2f3f5 !important;
		--background-secondary: #ddd !important;
		--background-tertiary: #a9a9a9 !important;
		--background-floating: #ccc !important;
	}
	
	.theme-light .usernameClass {
		-webkit-text-stroke: 0.5px rgba(0,0,0,0.5);
	}
	
	.theme-light div[class*='offline'][class*='member'] {
		opacity: .5 !important;
	}
	
	.theme-light div[class|='nameAndDecorators']>div[class|='name']>span[class|='roleColor'] {
		-webkit-text-stroke: 0.5px rgba(0,0,0,0.5);
	}
	`).replace(/emojiContainerClass/gi, discordModEmojiContainerClass)
	.replace(/messageClass/gi, discordModMessageClass)
	.replace(/groupStartClass/gi, discordModGroupStartClass)
	.replace(/dividerClass/gi, discordModDividerStartClass)
	.replace(/usernameClass/gi, discordModUsernameClass);

	if ($("#discordModStyle") != null) {
		$("#discordModStyle").remove()
	}
	var discordModStyle = document.createElement("style");
	discordModStyle.id = "discordModStyle";
	discordModStyle.textContent = discordModStyleText;
	document.head.appendChild(discordModStyle);