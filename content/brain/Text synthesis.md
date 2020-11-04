*(On text synthesis and NLP, copied from where I posted it on Reddit)*

I guess I'm not new anymore... still feel like a hobbyist though. I've been trying to learn NLP for like five years, but teaching myself through exploration like this. And the terrain keeps changing, so it's hard to keep up.

If i could tell myself one thing to learn, it's prototyping quick and dirty models first. Do a markov chain before messing around with neural nets, knowing you can upgrade the language-modeling part of the program later. Often a markov chain will be good enough, especially for humorous tasks. Or at least it will give you a feel for the corpus and whether your project is worth putting a bunch of training hours into.

If I could tell myself two things, I would add that Google Colab is a great tool to use, even though they're limiting the free tier more these days.It connects you to a free GPU in the cloud which you can use remotely. Especially if your project is hobbyish, but your GPU or CPU isn't powerful enough, this is a good way to do the crunching part somewhere else and then download your model and use it on your machine.

If I could say three things, I would tell me that the hardest part of making "good" text generators -- fun, or interesting, or intelligent-seeming, take your pick -- is getting a good corpus. Large, clean text files with semantically useful punctuation are valuable. Save, organize and share them. And it doesn't matter how you acquire them. PDFs and Epubs are out there, all over the internet. Once you've got them, there are command line tools like Calibre and epub2txt that can turn them into text files. Once you have text files, I highly recommend using the spaCy library (and its partner, Textacy) to clean them and analyze them. Learning which Named Entities and topics are in a corpus can really give you a knowledge of its texture. Corpora are like sauces, in cooking: keep a close eye on them, because they'll make or break your meal. And every time you touch them, you should be making them a little better: organizing, labeling, combining and contrasting. 😙👌

I hope this helps any of you who are embarking on NLP projects. Text synthesis is fun and rather psychedelic. If you have questions or want to see my projects lmk, I'll answer as best I can. Let's put more text synthesis on this subreddit!