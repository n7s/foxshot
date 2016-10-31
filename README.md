# Foxshot
Foxshot is a small shell script and javascript template to snapshot local webpages using @font-face. The snapshots will be in the PDF and PNG formats.
It uses Firefox, slimerjs and xvfb on Ubuntu.
This is designed to be used as part of a CI (Continuous Integration) approach and help you catch regressions in how your webpage renders.


## Install

* spin up an Ubuntu 16.04 (xenial) VM or CT:

``...``

* install the dependencies:

``sudo apt install xvfb unzip firefox``

* install slimerjs:

``wget http://download.slimerjs.org/releases/0.10.1/slimerjs-0.10.1.zip``

``sudo mkdir -p /usr/local/lib/slimerjs/``

``sudo unzip slimerjs*.zip -d /usr/local/lib/slimerjs/``

* install the foxshot shell script:

``sudo cp foxshot /usr/local/bin/``

* set up your personalized snapshot script:

You will need to have a little javascript program for slimerjs to know what to do in your working directory. Having it part of your project directory will allow you to tweak the parameters and point foxshot (the shell script installed at the system-level) to the desired webpage. The template to adjust is called foxshot.js. It should provide useful initial defaults.

Copy this file into your project directory, I suggest to it put under web/ file along with the html and corresponding CSS/font files you want to snapshot.

``cp foxshot.js ~/projects/foo-project/web/``

``cp testpage.html style.css Foo-R.ttf Foo-B.ttf Foo-BI.ttf ~/projects/foo-project/web/``

## generate your snapshots
``cd ~/projects/foo-project/web/``

``foxshot foxshot.js``

The generated pdfs and pngs will show up in that directory and be time-stamped.

## put the whole thing into your CI
over to you.

Enjoy!
