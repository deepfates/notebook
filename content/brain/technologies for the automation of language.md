---
title: "Technologies for the automation of language"
---

I have been developing an aesthetic and a toolkit around the technological manipulation of information. Keeping track of the tools for this will make it easier to combine them.

The point of this aesthetic is to activate the uncanny valley. It relies on the hack of the human brain of the perception of the Other and the dialectic of observation. The brain that processes the language is changed in some way by the instructions therein. 

By creating machinic assemblages of language and compiling them on our human minds, we create the opening for new, alien types of thought to occur. And the frisson of experiencing alien thought makes us aware of what it is to be a thinking __human__, rather than some sort of generic sentient being.
 
## Types of technologies for the automation of language
### Text
**Extraction**
	
-	[[ebook-convert]] from Calibre - convert ebooks and pdfs to text 
-	[[spaCy]] - get structured information from natural language
		Part of speech, grammatical dependencies, entity recognition (proper nouns etc), word and document vectors, coreference resolution
		
**Analysis**
	
-	[[textacy]] - organize and analyze large corpora in spaCy form
		Keyword analysis, text classification, sentiment analysis, topic modeling 
-	[[sumy]] summarize a text by extracting the important sentences through various metrics
-	[[Annoy]] approximate nearest neighbors, find similar objects in high-dimensional space
		Useful, for instance, to compare sentences with vectors from spaCy as in [[Deleuze Explainer]] 
		
**Generation**
	
-	[[markovify]] - simple statistical generation of text. humorous quality
-	[[char-RNN]] - lightweight neural-net generation of text. poor quality
-	[[GPT-2]] - heavyweight neural-net generation of text. high quality
		GPT-2 can be finetuned to create domain-specific text, or work on its own knowledge

### Audio

-	[[youtube-dl]] - scrape video and audio from YouTube
-	[[audiogrep]] - search, transcribe and supercut audio files, poor quality
-	[[autosub]] BingLingGroup fork, transcribe audio files, poss. high quality?
-	[[rubberband]] - stretch time and/or pitch in a soundfile
-	[[beatmachine]] - swap and chop a song with beat detection
-	[[spleeter]] - stems songs into 2, 4 or 5 instrumental and vocal tracks, also separates background foley from voices
-	[[Real Time Voice Cloning]] - synthesize voices from short sound clips
-	[[lmms]] - audio sequencer for making beats and collating samples

### Image

-	[[img-encode]] - encode an image in audio as a spectrogram
-	[[pywal]] extract main colors from an image
-	[[facemorpher]] - combine faces and find different states between them
-	[[DeepDream]] - create feedback-based hallucination effects with neural nets

### Video
-	[[ffmpeg]] - encoding and decoding all audio, image and video tracks
-	[[videogrep]] - search and supercut videos through subtitles
-	[[videodigest]] - summarize a video by running sumy over its subtitle track
-	[[scenescoop]] - find similar scenes in videos by semantic analysis of the objects in them 
-	[[do the mosh]] - datamosh video in python. from happyhorseskull https://github.com/happyhorseskull/you-can-datamosh-on-linux

### Web
-	[[Mycroft]] - the messagebus and built-in voice capabilities make it an appealing platform for human simulation
-	[[GatsbyJS]] - generate static websites from markdown files and templates 
		**Twitter**
-	[[tweepy]] - automate Twitter accounts: tweet, follow, retweet, favorite, reply
-	[[twitter-scraper]] - acquire large amounts of twitter data fast and easy
-	[[twurl]] - authenticate an app as a particular twitter user, to get auth keys
-	[[nucoll]] - download twitter communities through friend-of-a-friend relationships
-	[[Gephi]] - for graphing relationship maps
