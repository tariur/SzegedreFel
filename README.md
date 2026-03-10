# Projekt Neve

Szegedre Fel!

## 🛠 Előfeltételek

Mielőtt elkezdenél dolgozni a projekten, győződj meg róla, hogy az alábbiak telepítve vannak a gépeden:
* [Node.js](https://nodejs.org/) (ajánlott az aktuális LTS verzió)
* Git

---

## 🚀 Első lépések (Onboarding)

Kérjük, kövesd az alábbi lépéseket a projekt lokális beüzemeléséhez:

### 1. A kódbázis letöltése
Klónozd le a projektet a GitLabról, majd lépj be a létrejött mappába:
```bash
git clone <git_projekt_url>
cd <projekt_mappa_neve>
```
Angular és npm csomagok letöltése és telepítése (package.json alapján tölti le):
```bash
npm install
```

### 2. Saját ág a fejlesztéshez
```bash
git checkout -b feature/<task-neve>
```

### 3. Lokális futtatás
`ng serve`
Alapesetben http://localhost:4200 -on lesz elérhető

### 4. Kód szinkronban tartása
Ha más pusholt a main-re miközben még a saját ágadon dolgozol (érdemes minden kódolás sessionöd előtt):
```bash
git fetch
git rebase origin/main
```

### 5. Kód beküldése
Miután kész vagy a feladattal:
```bash
git add (. ha minden módosított fájlodat akarod ha nem akkor egyesével a fájl nevek)
git commit -m "Pl. Implement css design for login page"
git push -u origin feature/<task-neve>
```
Ezután a GitLab felületén létre tudod hozni a Merge Request-et