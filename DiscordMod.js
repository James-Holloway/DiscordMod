//discord mod hide reactbar
//get react container
var discordModClassReferElement = $("div[class|='message']>div[class|=buttonContainer]>div[class|='buttons'");
var discordModEmojiContainerClass = discordModClassReferElement.classList[0]; //.toString().replace(/ /g, ".");

//no more flashy background
var discordModMessageClass = discordModClassReferElement.parentElement.parentElement.classList[0];

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
}`).replace(/emojiContainerClass/gi, discordModEmojiContainerClass)
.replace(/messageClass/gi, discordModMessageClass)
.replace(/groupStartClass/gi, discordModGroupStartClass)
.replace(/dividerClass/gi, discordModDividerStartClass);

if ($("#discordModStyle") != null) {
	$("#discordModStyle").remove()
}
var discordModStyle = document.createElement("style");
discordModStyle.id = "discordModStyle";
discordModStyle.textContent = discordModStyleText;
document.head.appendChild(discordModStyle);