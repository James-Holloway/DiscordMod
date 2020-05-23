# DiscordMod

A simple JavaScript-run modification that will make the 0.0.305 Discord experience a bit more like the previous update's experience that many people are used to and prefer

### Big note

**I am no longer developing this and it no longer fully works as intended, so I am archiving it. However when I last tested it, it still did lessen light mode's brutality. Feel free to build off this**

### What does it do?

- Adds back in the spacers/horizontal lines between large gaps of time or different people.
- Removed the much darker background you get when you hover over a message. 
- Hides the reaction bar with the emoji

### How do I run it?

I suggest you read the rest of this README to ensure you know what you are doing first

- You will first need to open copy the script from the `DiscordMod.min.js` file
- Open your Discord App
- Open the developer tools with CTRL+SHIFT+I
- Open the console tab of the developer tools
- Paste in the script and run it by pressing ENTER
- If it shows an error in red, you might want to go into a chat you have messages with and scroll up a bit and run the script again
- The script will unload every time the app updates, closes or refreshes. When this happens, you will need to rerun the script every time. I am working on a way around this but I don't suggest getting your hopes up

### How can I trust you?

I hope you don't trust me at this point because I am asking you to execute a script in a developer console that tells you not to paste and execute things in it. However I can assure you I have not put anything nefarious in this code and you can check so yourself. 

If you are a developer, you can dispell any worries by having a look at the source code and reading through each part. As a brief, it finds the class names then puts them into a stylesheet which then appended to the head tag.

If you don't want to trust this script at all, that is fine and quite wise. It's your choice and I'll see if I can assure you otherwise

### Notes

Not much support is added for the Compact IRC mode and it won't enable the dividers if you load the script in the compact mode.

I made this for myself and only tested on Discord 0.0.305 on Windows 10 and Firefox 73. I cannot guarantee that it will work for all browsers or OSes but really, it should (unless you use IE). 

I am not taking any resposibility for any edits of this script that are run. This is supposed to be an innocent modification to add a couple of old features and remove the ones I personally don't like. 

