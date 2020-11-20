I built a wallpaper switching script to help me be aware of the day outside my computer.

It uses a python package called `astral` to test whether the time is before or after local sunset (this changes with the seasons, of course). Then the script automatically downloads a photo from a live webcam on top of a local TV station, sets it to be the background, and switches my local color scheme to light or dark themes as appropriate.

This runs on a cronjob, every 15 minutes, so that I have a slowly-updating view of the sun passing over the city all day.

Recently upgraded to astral v2, but before I share the code I want to clean up the hacky shell-script parts of it. Message me if you want it sooner.	