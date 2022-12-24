# MyAPP
Progetto Universitario di una webapp per il corso di Progettazione e Produzione Multimediale che consiste in una collezione artistica in cui si possono ricercare immagini tramite comandi vocali.
All'interno di questo sito troveremo una serie di quadri con le relative informazioni(titolo, autore, anno di realizzazione, breve descrizione) e in aggiunta delle label associate a quali oggetti sono presenti nelle immagini, che sono generate da un intelligenza artificiale(https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd).
La ricerca delle immagini con i comandi vocali viene si basa quindi su queste label ed è realizzata tramite Web Speech API(https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

### Demo for Linux Users

1. Se non installato scaricare ed installare XAMPP
2. Scaricare il file .zip del codice ed estrarlo nella directory /opt/lampp/htdocs 
3. Se nodeJS non è installato, installarlo con il comando sudo npm install
4. Entrare in phpMyAdmin, creare il database "myApp" e importare il database myApp.sql presente nella cartella database del codice
5. Aprire il terminale, accedere alla directory /opt/lampp/htdocs/PPM-master/scripts e scrivere il comando npm start
6. Aprire XAMPP, far partire i server con "start" e cercare nel browser localhost:8080/PPM-master/intro.html
7. Buona navigazione!

### Demo for MAC OS Users

1. Se non installato scaricare ed installare  MAMP
2. Scaricare il file .zip del codice ed estrarlo nella directory /Applications/MAMP/htdocs
3. Se nodeJS non è installato, installarlo con brew tramite comando su terminale brew install node oppure visitare https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac
4. Entrare in phpMyAdmin, creare il database "myApp" e importare il database myApp.sql presente nella cartella database del codice
5. Aprire il terminale, accedere alla directory /Applications/MAMP/htdocs/PPM-master/scripts e scrivere il comando npm start
6. Aprire MAMP, far partire i server con "start" e cercare nel browser localhost:8080/MAMP/PPM-master/intro.html
7. Buona navigazione!
