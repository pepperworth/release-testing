# 📋 Releasetest: Board/Räume - Niedersächsische Bildungscloud

> **Umfassende Testdokumentation für das Board/Räume-Feature**  
> Version 1.0 | Stand: November 2024

---

## 📖 Inhaltsverzeichnis

### [I. ÜBERSICHT](#i-übersicht-1)
- [Testumfang](#testumfang)
- [Accounts und Vorbereitung](#accounts-und-vorbereitung)
- [Zusammenfassung aller Tests](#zusammenfassung-aller-tests)

### [II. BASIS-FUNKTIONEN (Tests 1-15)](#ii-basis-funktionen-tests-1-15-1)
- Raum & Bereiche erstellen
- Dateien hochladen
- Dokumente erstellen
- Interaktive Elemente
- Links und Text
- Mitgliederverwaltung

### [III. ELEMENT-MANAGEMENT (Test 16)](#iii-element-management-test-16-1)
- Element duplizieren

### [IV. KOLLABORATIVE TESTS (Tests 17-28)](#iv-kollaborative-tests-tests-17-28-1)
- Mitglieder einladen
- Berechtigungen testen (Rolle "Lesen")
- Bettermarks-Kollaboration

### [V. ERWEITERTE BERECHTIGUNGEN (Tests 29-37)](#v-erweiterte-berechtigungen-tests-29-37-1)
- Rollenvergleiche
- Collabora-Dokumente
- Videokonferenz
- Rolle "Bearbeiten"

### [VI. SCHULÜBERGREIFENDE KOLLABORATION (Test 38)](#vi-schulübergreifende-kollaboration-test-38-1)
- Externe Lehrkraft einladen
- Schüler anderer Schulen

### [VII. RAUM-MANAGEMENT (Tests 39-43)](#vii-raum-management-tests-39-43-1)
- Raum duplizieren
- Raum teilen
- Raum übertragen
- Mitglieder entfernen
- Raum löschen

### [VIII. TESTDURCHFÜHRUNG](#viii-testdurchführung-1)
- Reihenfolge der Tests
- Besondere Hinweise
- Wichtige Erkenntnisse

---

## I. ÜBERSICHT

### Testumfang

**Gesamtanzahl:** 53 Testfälle

| Kategorie | Anzahl | Tests |
|-----------|--------|-------|
| **Basis-Funktionen** | 26 | 1-15 |
| **Element-Management** | 1 | 16 |
| **Kollaborative Tests** | 12 | 17-28 |
| **Erweiterte Berechtigungen** | 9 | 29-37 |
| **Schulübergreifend** | 1 | 38 |
| **Raum-Management** | 5 | 39-43 |

---

### Accounts und Vorbereitung

#### Benötigte Test-Accounts (5)

| Account | Rolle | Schule | Schulrolle | Raum-Rolle |
|---------|-------|---------|------------|------------|
| **Account A** | Raum-Ersteller | Schule 1 | Lernbegleitend | Besitzen |
| **Account B** | Lehrkraft | Schule 1 | Lernbegleitend | Lesen → Bearbeiten |
| **Account C** | Schüler | Schule 1 | Lernend | Lesen |
| **Account D** | Externe Lehrkraft | Schule 2 | Lernbegleitend | Verwalten |
| **Account E** | Externer Schüler | Schule 2 | Lernend | Lesen |

#### Technische Voraussetzungen

- ✅ Beide Schulen im System registriert
- ✅ Collabora für beide Schulen aktiviert
- ✅ BigBlueButton für beide Schulen aktiviert
- ✅ Bettermarks für beide Schulen aktiviert (optional)
- ✅ Testdateien vorbereitet (Bilder, Audio, Video, PDF, etc.)

---

### Zusammenfassung aller Tests

<details>
<summary><strong>📊 Vollständige Testübersicht (klicken zum Ausklappen)</strong></summary>

| Nr. | Kategorie | Test | Status |
|-----|-----------|------|--------|
| **BASIS-FUNKTIONEN** ||||
| 1 | Raum | Raum erstellen | ☐ |
| 2 | Raum | Bereich erstellen | ☐ |
| 3.1 | Datei | Bild hochladen (mit Vorschau) | ☐ |
| 3.2 | Datei | Audio hochladen (abspielbar) | ☐ |
| 3.3 | Datei | Video hochladen (abspielbar) | ☐ |
| 4 | Dateiordner | ZIP-Download vollständig | ☐ |
| 5 | Dokument | Textdokument erstellen | ☐ |
| 6 | Dokument | Tabelle erstellen | ☐ |
| 7 | Dokument | Präsentation erstellen | ☐ |
| 8 | Etherpad | Etherpad erstellen | ☐ |
| 9 | Bettermarks | Mit Aufgaben | ☐ |
| 10.1 | H5P | Multiple Choice | ☐ |
| 10.2 | H5P | Lückentext | ☐ |
| 10.3 | H5P | Drag and Drop | ☐ |
| 10.4 | H5P | Interaktives Video | ☐ |
| 10.5 | H5P | Course Presentation | ☐ |
| 11.1 | Link | YouTube-Video | ☐ |
| 11.2 | Link | Vimeo-Video | ☐ |
| 11.3 | Link | Zeit Online Artikel | ☐ |
| 12.1 | Text | Fett | ☐ |
| 12.2 | Text | Kursiv | ☐ |
| 12.3 | Text | Durchgestrichen | ☐ |
| 12.4 | Text | Farbig | ☐ |
| 13 | Videokonferenz | BBB einrichten | ☐ |
| 14 | Whiteboard | Whiteboard erstellen | ☐ |
| 15 | Mitglieder | Einladungslink erstellen | ☐ |
| **ELEMENT-MANAGEMENT** ||||
| 16 | Duplizieren | Element/Karte duplizieren | ☐ |
| **KOLLABORATION & BERECHTIGUNGEN** ||||
| 17 | Einladen | Lernenden einladen (Lesen) | ☐ |
| 18 | Einladen | Lehrende/n einladen (Lesen) | ☐ |
| 19 | Berechtigung | Lernender: Inhalte anzeigen | ☐ |
| 20 | Berechtigung | Lernender: Keine Bearbeitung | ☐ |
| 21 | Berechtigung | Lernender: Etherpad bearbeiten | ☐ |
| 22 | Berechtigung | Lernender: Whiteboard nutzen | ☐ |
| 23 | Berechtigung | Lehrkraft: Inhalte anzeigen | ☐ |
| 24 | Berechtigung | Lehrkraft: Keine Bearbeitung | ☐ |
| 25 | Einladungslink | Lernender mit Rolle Lesen | ☐ |
| 26 | Einladungslink | Lehrkraft mit Rolle Lesen | ☐ |
| 27 | Sichtbarkeit | Raum-Sichtbarkeit prüfen | ☐ |
| 28 | Bettermarks | Aufgaben erstellen & bearbeiten | ☐ |
| **ERWEITERTE BERECHTIGUNGEN** ||||
| 29 | Vergleich | Rollen: Lesen vs. Besitzen | ☐ |
| 30 | Collabora | Text nur lesen (Lernender) | ☐ |
| 31 | Collabora | Tabelle nur lesen (Lernender) | ☐ |
| 32 | Collabora | Präsentation nur lesen (Lernender) | ☐ |
| 33 | Collabora | Alle Dokumente nur lesen (Lehrkraft) | ☐ |
| 34 | BBB | Videokonferenz: Alle Rollen | ☐ |
| 35 | Rollenwechsel | Von "Lesen" auf "Bearbeiten" | ☐ |
| 36 | Berechtigung | "Bearbeiten": Erweiterte Rechte | ☐ |
| 37 | Vergleich | Alle Rollen: Lesen/Bearbeiten/Besitzen | ☐ |
| **SCHULÜBERGREIFEND** ||||
| 38 | Kollaboration | Externe Lehrkraft + Schüler | ☐ |
| **RAUM-MANAGEMENT** ||||
| 39 | Duplizieren | Raum duplizieren (Datenschutz) | ☐ |
| 40 | Teilen | Raum teilen (Datenschutz) | ☐ |
| 41 | Übertragen | Besitz-Rolle transferieren | ☐ |
| 42 | Entfernen | Mitglieder entfernen | ☐ |
| 43 | Löschen | Raum löschen | ☐ |

</details>

---

## II. BASIS-FUNKTIONEN (Tests 1-15)

> **Ziel:** Grundlegende Raum-Funktionen und Element-Erstellung testen  
> **Account:** Hauptsächlich Account A (Raum-Ersteller)

### Vorbedingung
- Nutzer ist in der Niedersächsischen Bildungscloud angemeldet
- Nutzer befindet sich im Bereich "Räume"

---

### Test 1: Raum erstellen

**Als** Lehrkraft  
**möchte ich** einen neuen Raum erstellen,  
**damit** ich Inhalte für meinen Unterricht strukturieren kann.

**Testschritte:**
1. Auf "+ Erstellen" klicken
2. Raumnamen eingeben (z.B. "Releasetest-Raum")
3. Raum speichern

**✅ Erwartetes Ergebnis:** Raum erscheint in der Raumübersicht

**Status:** ☐

---

### Test 2: Bereich im Raum erstellen

**Als** Lehrkraft  
**möchte ich** einen Bereich innerhalb eines Raumes erstellen,  
**damit** ich meine Inhalte thematisch gliedern kann.

**Testschritte:**
1. Erstellten Raum öffnen
2. Neuen Bereich anlegen
3. Bereichsnamen vergeben (z.B. "Testbereich")

**✅ Erwartetes Ergebnis:** Bereich wird im Raum angezeigt

**Status:** ☐

---

### Tests 3.1-3.3: Dateien hochladen

#### Test 3.1: Bilddatei hochladen

**Als** Lehrkraft  
**möchte ich** eine Bilddatei hochladen,  
**damit** visuelle Inhalte direkt angezeigt werden.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Datei" auswählen
3. Bilddatei hochladen (z.B. .jpg, .png, .gif)

**✅ Erwartetes Ergebnis:** Bildvorschau wird direkt im Bereich angezeigt

**Status:** ☐

---

#### Test 3.2: Audiodatei hochladen

**Als** Lehrkraft  
**möchte ich** eine Audiodatei hochladen,  
**damit** Schüler diese direkt abspielen können.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Datei" auswählen
3. Audiodatei hochladen (z.B. .mp3, .wav)

**✅ Erwartetes Ergebnis:** Audioplayer wird angezeigt und Datei ist abspielbar

**Status:** ☐

---

#### Test 3.3: Videodatei hochladen

**Als** Lehrkraft  
**möchte ich** eine Videodatei hochladen,  
**damit** Schüler diese direkt abspielen können.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Datei" auswählen
3. Videodatei hochladen (z.B. .mp4, .webm)

**✅ Erwartetes Ergebnis:** Videoplayer wird angezeigt und Video ist abspielbar

**Status:** ☐

---

### Test 4: Dateiordner mit ZIP-Download

**Als** Lehrkraft  
**möchte ich** einen Dateiordner mit verschiedenen Dateitypen erstellen und als ZIP herunterladen,  
**damit** Schüler alle Materialien gebündelt erhalten können.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Dateiordner" auswählen
3. Ordnernamen vergeben (z.B. "Materialsammlung")
4. Verschiedene Dateitypen hochladen:
   - ☐ PDF-Dokument
   - ☐ Bilddatei (.jpg/.png)
   - ☐ Audiodatei (.mp3)
   - ☐ Videodatei (.mp4)
   - ☐ Textdokument (.docx/.odt)
5. "Alle als ZIP herunterladen" auswählen
6. ZIP-Archiv öffnen und Inhalt prüfen

**✅ Erwartetes Ergebnis:**
- Dateiordner wird im Bereich angezeigt
- ZIP-Download enthält alle hochgeladenen Dateien vollständig
- Alle Dateien im ZIP sind intakt und öffenbar

**Status:** ☐

---

### Tests 5-7: Collabora-Dokumente erstellen

#### Test 5: Textdokument erstellen

**Als** Lehrkraft  
**möchte ich** ein Textdokument erstellen,  
**damit** ich schriftliche Inhalte bereitstellen kann.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Dokument erstellen" auswählen
3. "Text" wählen
4. Dokumentnamen vergeben und Text eingeben
5. Dokument speichern

**✅ Erwartetes Ergebnis:** Textdokument wird im Bereich angezeigt

**Status:** ☐

---

#### Test 6: Tabelle erstellen

**Als** Lehrkraft  
**möchte ich** eine Tabelle erstellen,  
**damit** ich Daten strukturiert darstellen kann.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Dokument erstellen" auswählen
3. "Tabelle" wählen
4. Dokumentnamen vergeben und Tabelle bearbeiten
5. Dokument speichern

**✅ Erwartetes Ergebnis:** Tabellendokument wird im Bereich angezeigt

**Status:** ☐

---

#### Test 7: Präsentation erstellen

**Als** Lehrkraft  
**möchte ich** eine Präsentation erstellen,  
**damit** ich Unterrichtsinhalte visuell aufbereiten kann.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Dokument erstellen" auswählen
3. "Präsentation" wählen
4. Dokumentnamen vergeben und Folien erstellen
5. Dokument speichern

**✅ Erwartetes Ergebnis:** Präsentation wird im Bereich angezeigt

**Status:** ☐

---

### Test 8: Etherpad erstellen

**Als** Lehrkraft  
**möchte ich** ein Etherpad erstellen,  
**damit** Schüler kollaborativ an einem Text arbeiten können.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Etherpad" auswählen
3. Namen für das Etherpad vergeben

**✅ Erwartetes Ergebnis:** Etherpad wird im Bereich angezeigt und ist editierbar

**Status:** ☐

---

### Test 9: Bettermarks mit Aufgaben

**Als** Lehrkraft  
**möchte ich** Bettermarks einbinden und Aufgaben erstellen,  
**damit** Schüler interaktive Matheaufgaben bearbeiten können.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Externe Tools" auswählen
3. "Bettermarks" auswählen
4. Bettermarks öffnet sich / Konfiguration startet
5. Aufgabenset auswählen oder neue Aufgaben erstellen
6. Aufgaben dem Element zuweisen
7. Speichern

**✅ Erwartetes Ergebnis:** Bettermarks-Element mit Aufgaben wird im Bereich angezeigt und ist für Schüler nutzbar

**Status:** ☐

---

### Tests 10.1-10.5: H5P-Inhaltstypen

> **H5P** ermöglicht interaktive Lerninhalte direkt im Raum zu erstellen

#### Test 10.1: Multiple Choice

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Interaktives Lernen" (H5P) auswählen
3. Inhaltstyp "Multiple Choice" wählen
4. Frage und Antwortoptionen eingeben
5. Speichern

**✅ Erwartetes Ergebnis:** Multiple-Choice-Quiz ist funktional und auswertbar

**Status:** ☐

---

#### Test 10.2: Lückentext (Fill in the Blanks)

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Interaktives Lernen" (H5P) auswählen
3. Inhaltstyp "Fill in the Blanks" wählen
4. Text mit Lücken erstellen
5. Speichern

**✅ Erwartetes Ergebnis:** Lückentext ist ausfüllbar und wird korrekt ausgewertet

**Status:** ☐

---

#### Test 10.3: Drag and Drop

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Interaktives Lernen" (H5P) auswählen
3. Inhaltstyp "Drag and Drop" wählen
4. Elemente und Zielzonen definieren
5. Speichern

**✅ Erwartetes Ergebnis:** Drag-and-Drop funktioniert und wird korrekt ausgewertet

**Status:** ☐

---

#### Test 10.4: Interaktives Video

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Interaktives Lernen" (H5P) auswählen
3. Inhaltstyp "Interactive Video" wählen
4. Video hochladen/verlinken und Interaktionen hinzufügen
5. Speichern

**✅ Erwartetes Ergebnis:** Video spielt ab, Interaktionen funktionieren an den definierten Stellen

**Status:** ☐

---

#### Test 10.5: Präsentation (Course Presentation)

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Interaktives Lernen" (H5P) auswählen
3. Inhaltstyp "Course Presentation" wählen
4. Mehrere Folien mit verschiedenen Elementen erstellen
5. Speichern

**✅ Erwartetes Ergebnis:** Präsentation ist navigierbar, alle eingebetteten Elemente funktionieren

**Status:** ☐

---

### Tests 11.1-11.3: Links hinzufügen

> **Links** ermöglichen den Zugriff auf externe Ressourcen

#### Test 11.1: YouTube-Video

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Link" auswählen
3. YouTube-URL eingeben (z.B. https://www.youtube.com/watch?v=XXXXX)
4. Optional: Titel vergeben
5. Speichern

**✅ Erwartetes Ergebnis:**
- Link wird im Bereich angezeigt
- Videovorschau/Thumbnail wird angezeigt (falls unterstützt)
- Video ist über den Link aufrufbar und abspielbar

**Status:** ☐

---

#### Test 11.2: Vimeo-Video

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Link" auswählen
3. Vimeo-URL eingeben (z.B. https://vimeo.com/XXXXX)
4. Optional: Titel vergeben
5. Speichern

**✅ Erwartetes Ergebnis:**
- Link wird im Bereich angezeigt
- Videovorschau/Thumbnail wird angezeigt (falls unterstützt)
- Video ist über den Link aufrufbar und abspielbar

**Status:** ☐

---

#### Test 11.3: Nachrichtenartikel (Zeit Online)

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Link" auswählen
3. Zeit Online-URL eingeben (z.B. https://www.zeit.de/beispielartikel)
4. Optional: Titel vergeben
5. Speichern

**✅ Erwartetes Ergebnis:**
- Link wird im Bereich angezeigt
- Linkvorschau mit Titel/Beschreibung/Bild wird angezeigt (falls unterstützt)
- Artikel ist über den Link aufrufbar

**Status:** ☐

---

### Test 12: Text mit Formatierungen

**Als** Lehrkraft  
**möchte ich** einen formatierten Textblock hinzufügen,  
**damit** ich Hinweise optisch hervorheben kann.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Text" auswählen
3. Text eingeben und verschiedene Formatierungen anwenden:

| Formatierung | Test | Status |
|--------------|------|--------|
| **Fett** | Text markieren → Fett-Button klicken | ☐ |
| *Kursiv* | Text markieren → Kursiv-Button klicken | ☐ |
| ~~Durchgestrichen~~ | Text markieren → Durchgestrichen-Button klicken | ☐ |
| Farbig | Text markieren → Textfarbe ändern | ☐ |

4. Speichern

**✅ Erwartetes Ergebnis:**
- Alle Formatierungen werden korrekt angezeigt
- Formatierungen bleiben nach Speichern erhalten
- Formatierungen sind auch für andere Nutzer sichtbar

**Status:** ☐

---

### Test 13: Videokonferenz einrichten

**Als** Lehrkraft  
**möchte ich** eine Videokonferenz einrichten,  
**damit** ich virtuellen Unterricht durchführen kann.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Videokonferenz" auswählen
3. Konferenznamen vergeben

**✅ Erwartetes Ergebnis:** Videokonferenz-Element wird im Bereich angezeigt und kann gestartet werden

**Status:** ☐

---

### Test 14: Whiteboard erstellen

**Als** Lehrkraft  
**möchte ich** ein Whiteboard erstellen,  
**damit** ich visuell mit Schülern arbeiten kann.

**Testschritte:**
1. Im Bereich auf "Element hinzufügen" klicken
2. "Whiteboard" auswählen
3. Namen vergeben

**✅ Erwartetes Ergebnis:** Whiteboard wird im Bereich angezeigt und ist nutzbar

**Status:** ☐

---

### Test 15: Einladungslink erstellen

**Als** Lehrkraft  
**möchte ich** einen schulinternen Einladungslink erstellen,  
**damit** Lehrende und Lernende einfach dem Raum beitreten können.

**Testschritte:**
1. Raum öffnen
2. Mitgliederverwaltung / Einstellungen aufrufen
3. Option "Einladungslink erstellen" wählen
4. Link generieren
5. Link kopieren
6. Mit einem Lehrer-Account (nicht Raum-Ersteller) den Link öffnen und beitreten
7. Mit einem Lernenden-Account den Link öffnen und beitreten
8. Als Raum-Ersteller die Mitgliederliste prüfen

**✅ Erwartetes Ergebnis:**
- Einladungslink wird erstellt und kann kopiert werden
- Lehrkraft kann dem Raum erfolgreich beitreten
- Lernender kann dem Raum erfolgreich beitreten
- Alle Mitglieder werden in der Mitgliederliste angezeigt
- Rollen sind korrekt zugewiesen (Lehrende / Lernende)
- Berechtigungen entsprechen der jeweiligen Rolle

**Status:** ☐

---

## III. ELEMENT-MANAGEMENT (Test 16)

> **Ziel:** Element-Duplizierung testen  
> **Account:** Account A (Raum-Ersteller)

---

### Test 16: Element duplizieren

**Als** Lehrkraft  
**möchte ich** ein Element (Karte) duplizieren können,  
**damit** ich ähnliche Inhalte schnell erstellen kann, ohne alles neu anzulegen.

**Testschritte:**
1. Als Account A (Raum-Ersteller) anmelden
2. Raum öffnen
3. Ein Element im Bereich auswählen (z.B. Text-Element mit Formatierungen aus Test 12)
4. Auf das Menü/Optionen des Elements klicken (z.B. Drei-Punkte-Menü)
5. Option "Duplizieren" oder "Kopieren" auswählen
6. Prüfen, ob das duplizierte Element erscheint
7. Dupliziertes Element öffnen und Inhalt prüfen
8. Mit verschiedenen Element-Typen testen:

| Element-Typ | Original vorhanden? | Duplizieren möglich? | Inhalt korrekt kopiert? | Status |
|-------------|-------------------|---------------------|------------------------|--------|
| Text mit Formatierungen | ✓ | Ja / Nein | Ja / Nein | ☐ |
| Datei (Bild) | ✓ | Ja / Nein | Ja / Nein | ☐ |
| Datei (PDF) | ✓ | Ja / Nein | Ja / Nein | ☐ |
| Link (YouTube) | ✓ | Ja / Nein | Ja / Nein | ☐ |
| H5P (Multiple Choice) | ✓ | Ja / Nein | Ja / Nein | ☐ |
| Collabora-Dokument (Text) | ✓ | Ja / Nein | Ja / Nein | ☐ |
| Etherpad | ✓ | Ja / Nein | Ja / Nein | ☐ |
| Whiteboard | ✓ | Ja / Nein | Ja / Nein | ☐ |

9. Bei Etherpad und Whiteboard besonders prüfen:
   - Wird der Inhalt mitkopiert?
   - Oder wird ein neues, leeres Etherpad/Whiteboard erstellt?

**✅ Erwartetes Ergebnis:**
- Duplizieren-Funktion ist für Elemente verfügbar
- Dupliziertes Element erscheint im gleichen Bereich (oder darunter)
- Bei statischen Inhalten (Text, Dateien, Links, H5P): Inhalt wird vollständig kopiert
- Bei Collabora-Dokumenten: Inhalt wird kopiert
- **Bei Etherpad/Whiteboard:** Vermutlich wird ein neues, leeres Element erstellt (aus Datenschutzgründen)
- Element kann nach dem Duplizieren unabhängig bearbeitet werden
- Änderungen am Duplikat beeinflussen das Original nicht

**Status:** ☐

---

## IV. KOLLABORATIVE TESTS (Tests 17-28)

> **Ziel:** Mitgliederverwaltung und Berechtigungen mit Rolle "Lesen" testen  
> **Accounts:** Account A, B (Lehrkraft), C (Lernender) - alle Schule 1

### Vorbedingung für kollaborative Tests
- ✅ Raum ist erstellt (siehe Test 1)
- ✅ Raum enthält verschiedene Elemente (siehe Tests 3-14)
- ✅ Mindestens 3 Accounts verfügbar (A, B, C von Schule 1)
- ✅ Einladungslink wurde erstellt (siehe Test 15)

---

### Test 17: Lernenden einladen (Rolle: Lesen)

**Als** Lehrkraft  
**möchte ich** einen Lernenden mit Leseberechtigung zum Raum hinzufügen,  
**damit** dieser die Inhalte betrachten, aber nicht bearbeiten kann.

**Testschritte:**
1. Als Account A (Raum-Ersteller) anmelden
2. Raum öffnen
3. Zur Mitgliederverwaltung navigieren
4. "Mitglieder hinzufügen" wählen
5. Schule auswählen (muss dieselbe Schule sein)
6. Schulrolle "Lernend" wählen
7. Account C (Lernenden-Account) aus der Liste auswählen oder suchen
8. Rolle im Raum "Lesen" zuweisen
9. Hinzufügen bestätigen
10. Mitgliederliste prüfen

**✅ Erwartetes Ergebnis:**
- Lernender erscheint in der Mitgliederliste
- Rolle ist korrekt angezeigt: "Lesen"
- Schulrolle ist korrekt angezeigt: "Lernend"

**Status:** ☐

---

### Test 18: Lehrende/n einladen (Rolle: Lesen)

**Als** Lehrkraft  
**möchte ich** eine/n Lehrende/n mit Leseberechtigung zum Raum hinzufügen,  
**damit** diese/r die Inhalte betrachten, aber nicht bearbeiten kann.

**Testschritte:**
1. Als Account A (Raum-Ersteller) anmelden
2. Raum öffnen
3. Zur Mitgliederverwaltung navigieren
4. "Mitglieder hinzufügen" wählen
5. Schule auswählen (muss dieselbe Schule sein)
6. Schulrolle "Lernbegleitend" wählen
7. Account B (Lehrenden-Account) aus der Liste auswählen oder suchen
8. Rolle im Raum "Lesen" zuweisen
9. Hinzufügen bestätigen
10. Mitgliederliste prüfen

**✅ Erwartetes Ergebnis:**
- Lehrende/r erscheint in der Mitgliederliste
- Rolle ist korrekt angezeigt: "Lesen"
- Schulrolle ist korrekt angezeigt: "Lernbegleitend"

**Status:** ☐

---

### Tests 19-24: Berechtigungen mit Rolle "Lesen"

> Diese Tests prüfen systematisch, was Nutzer mit Rolle "Lesen" dürfen und was nicht

#### Test 19: Lernender - Inhalte anzeigen ✅

**Testschritte:**
1. Als Account C (Lernender mit Rolle "Lesen") anmelden
2. Raum öffnen
3. Alle Bereiche durchgehen
4. Folgende Elemente prüfen:

| Element | Sichtbar? | Interaktiv nutzbar? | Status |
|---------|-----------|---------------------|--------|
| Bilddatei | Ja / Nein | Anzeige möglich | ☐ |
| Audiodatei | Ja / Nein | Abspielen möglich | ☐ |
| Videodatei | Ja / Nein | Abspielen möglich | ☐ |
| Dateiordner | Ja / Nein | Download möglich | ☐ |
| Textdokument | Ja / Nein | Lesen möglich | ☐ |
| Tabelle | Ja / Nein | Ansicht möglich | ☐ |
| Präsentation | Ja / Nein | Ansicht möglich | ☐ |
| Etherpad | Ja / Nein | Kollaborativ editieren möglich | ☐ |
| Bettermarks | Ja / Nein | Aufgaben bearbeiten möglich | ☐ |
| H5P: Multiple Choice | Ja / Nein | Quiz absolvieren möglich | ☐ |
| H5P: Lückentext | Ja / Nein | Übung absolvieren möglich | ☐ |
| H5P: Drag and Drop | Ja / Nein | Übung absolvieren möglich | ☐ |
| H5P: Interaktives Video | Ja / Nein | Video + Interaktionen möglich | ☐ |
| H5P: Präsentation | Ja / Nein | Durchklicken möglich | ☐ |
| Link (YouTube) | Ja / Nein | Öffnen möglich | ☐ |
| Link (Vimeo) | Ja / Nein | Öffnen möglich | ☐ |
| Link (Zeit Online) | Ja / Nein | Öffnen möglich | ☐ |
| Text mit Formatierungen | Ja / Nein | Ansicht möglich | ☐ |
| Videokonferenz | Ja / Nein | Teilnahme möglich | ☐ |
| Whiteboard | Ja / Nein | Kollaborativ zeichnen möglich | ☐ |

**✅ Erwartetes Ergebnis:**
- Alle Elemente sind sichtbar
- Alle Medien können konsumiert werden (Ansehen, Abspielen, Lesen)
- Interaktive Übungen (H5P, Bettermarks) können bearbeitet werden
- Keine Bearbeitungsoptionen werden angezeigt

**Status:** ☐

---

#### Test 20: Lernender - Keine Bearbeitungsrechte ❌

**Testschritte:**
1. Als Account C (Lernender mit Rolle "Lesen") anmelden
2. Raum öffnen
3. Folgende Aktionen versuchen:

| Aktion | Verfügbar? | Erwartetes Verhalten | Status |
|--------|------------|----------------------|--------|
| Neues Element hinzufügen | Nein | Button nicht sichtbar / deaktiviert | ☐ |
| Element löschen | Nein | Option nicht sichtbar / deaktiviert | ☐ |
| Element bearbeiten | Nein | Option nicht sichtbar / deaktiviert | ☐ |
| Element verschieben | Nein | Drag & Drop nicht möglich | ☐ |
| Bereich erstellen | Nein | Button nicht sichtbar / deaktiviert | ☐ |
| Bereich löschen | Nein | Option nicht sichtbar / deaktiviert | ☐ |
| Bereich umbenennen | Nein | Option nicht sichtbar / deaktiviert | ☐ |
| Raum-Einstellungen ändern | Nein | Menü nicht sichtbar / deaktiviert | ☐ |
| Mitglieder einladen | Nein | Funktion nicht verfügbar | ☐ |
| Mitglieder entfernen | Nein | Funktion nicht verfügbar | ☐ |
| Rollen ändern | Nein | Funktion nicht verfügbar | ☐ |

**✅ Erwartetes Ergebnis:**
- Keine der genannten Bearbeitungsaktionen ist verfügbar
- Interface zeigt nur Leseoptionen an
- Bei versuchter Bearbeitung (falls möglich) erscheint Fehlermeldung mit Hinweis auf fehlende Berechtigung

**Status:** ☐

---

#### Test 21: Lernender - Etherpad kollaborativ bearbeiten ✅

**Testschritte:**
1. Als Account C (Lernender mit Rolle "Lesen") anmelden
2. Raum öffnen
3. Bereich mit Etherpad öffnen
4. Etherpad öffnen
5. Text eingeben
6. Bestehenden Text markieren und bearbeiten
7. Formatierungen anwenden
8. Als Account A (Raum-Ersteller) parallel das Etherpad öffnen und Änderungen von Account C sehen

**✅ Erwartetes Ergebnis:**
- Etherpad öffnet sich
- Inhalt ist sichtbar und editierbar
- Text kann eingegeben und bearbeitet werden
- Änderungen werden in Echtzeit für alle Teilnehmer synchronisiert
- Formatierungen können angewendet werden

**Status:** ☐

---

#### Test 22: Lernender - Whiteboard kollaborativ nutzen ✅

**Testschritte:**
1. Als Account C (Lernender mit Rolle "Lesen") anmelden
2. Raum öffnen
3. Bereich mit Whiteboard öffnen
4. Whiteboard öffnen
5. Mit verschiedenen Werkzeugen zeichnen (Stift, Formen, Text)
6. Elemente verschieben
7. Elemente löschen
8. Als Account A (Raum-Ersteller) parallel das Whiteboard öffnen und Änderungen von Account C sehen

**✅ Erwartetes Ergebnis:**
- Whiteboard öffnet sich
- Alle Werkzeuge sind verfügbar
- Zeichnungen und Änderungen sind möglich
- Änderungen werden in Echtzeit für alle Teilnehmer synchronisiert
- Volle Funktionalität ist gegeben

**Status:** ☐

---

#### Test 23: Lehrkraft - Inhalte anzeigen ✅

**Testschritte:**
1. Als Account B (Lehrkraft mit Rolle "Lesen") anmelden
2. Raum öffnen
3. Alle Bereiche durchgehen
4. Dieselben Elemente wie in Test 19 prüfen

**✅ Erwartetes Ergebnis:**
- Alle Elemente sind sichtbar
- Alle Medien können konsumiert werden
- Interaktive Übungen können angesehen/getestet werden
- Keine Bearbeitungsoptionen werden angezeigt

**Status:** ☐

---

#### Test 24: Lehrkraft - Keine Bearbeitungsrechte ❌

**Testschritte:**
1. Als Account B (Lehrkraft mit Rolle "Lesen") anmelden
2. Raum öffnen
3. Dieselben Aktionen wie in Test 20 versuchen

**✅ Erwartetes Ergebnis:**
- Keine der genannten Bearbeitungsaktionen ist verfügbar
- Interface zeigt nur Leseoptionen an
- Bei versuchter Bearbeitung (falls möglich) erscheint Fehlermeldung

**Status:** ☐

---

### Tests 25-27: Einladungslinks und Sichtbarkeit

#### Test 25: Einladungslink - Lernender mit Rolle "Lesen"

**Testschritte:**
1. Als Account A (Raum-Ersteller) anmelden
2. Raum öffnen
3. Einladungslink erstellen:
   - Tab "Einladungslinks" öffnen
   - "+ Einladungslink erstellen" klicken
   - Beschreibung eingeben (z.B. "Link für Lernende - Nur Lesen")
   - Option "Nur für Nutzende der folgenden Schule gültig" aktivieren und Schule auswählen
   - Optional: "Betreten des Raums nur nach Bestätigung möglich" aktivieren
   - "Weiter" klicken
   - Link kopieren
4. Ausloggen
5. Als Account C (neuer Lernender-Account derselben Schule) anmelden
6. Einladungslink in Browser öffnen
7. Raum beitreten
8. Prüfen, welche Rolle automatisch zugewiesen wurde
9. Als Account A prüfen, ob Account C in der Mitgliederliste erscheint

**✅ Erwartetes Ergebnis:**
- Link führt zur Beitritts-Seite
- Nach Bestätigung ist Account C Mitglied des Raums
- Rolle "Lesen" wurde automatisch zugewiesen (oder muss manuell gesetzt werden)
- Account C erscheint in der Mitgliederliste

**Status:** ☐

---

#### Test 26: Einladungslink - Lehrkraft mit Rolle "Lesen"

**Testschritte:**
1. Als Account A (Raum-Ersteller) anmelden
2. Raum öffnen
3. Neuen Einladungslink erstellen (siehe Test 25, Schritte 1-3)
4. Ausloggen
5. Als Account B (neuer Lehrenden-Account derselben Schule) anmelden
6. Einladungslink in Browser öffnen
7. Raum beitreten
8. Prüfen, welche Rolle automatisch zugewiesen wurde
9. Als Account A prüfen, ob Account B in der Mitgliederliste erscheint

**✅ Erwartetes Ergebnis:**
- Link führt zur Beitritts-Seite
- Nach Bestätigung ist Account B Mitglied des Raums
- Rolle "Lesen" wurde automatisch zugewiesen (oder muss manuell gesetzt werden)
- Account B erscheint in der Mitgliederliste

**Status:** ☐

---

#### Test 27: Raum-Sichtbarkeit für Mitglieder

**Testschritte:**
1. Als Account C (Lernender mit Rolle "Lesen") anmelden
2. Zur Raumübersicht navigieren
3. Prüfen, ob der Raum in der Liste erscheint
4. Ausloggen
5. Als Account B (Lehrkraft mit Rolle "Lesen") anmelden
6. Zur Raumübersicht navigieren
7. Prüfen, ob der Raum in der Liste erscheint

**✅ Erwartetes Ergebnis:**
- Raum ist für beide Accounts in der Raumübersicht sichtbar
- Rolle "Lesen" ist beim Raum angezeigt (falls UI dies unterstützt)
- Raum kann durch Klick geöffnet werden

**Status:** ☐

---

### Test 28: Bettermarks - Kollaborative Aufgabenerstellung

> **Besonderheit:** Bettermarks-Berechtigungen werden durch die **schulische Rolle** (Lernbegleitend/Lernend) bestimmt, nicht durch die Raum-Rolle!

**Vorbedingung:**
- Bettermarks-Element wurde bereits im Raum erstellt (siehe Test 9)
- Account B = Lehrkraft (Schulrolle "Lernbegleitend")
- Account C = Schüler (Schulrolle "Lernend")

---

#### Teil A: Lehrkraft erstellt Aufgaben

**Testschritte:**
1. Als Account B (Lehrkraft) anmelden
2. Raum öffnen
3. Bettermarks-Element öffnen
4. Bettermarks öffnet sich (in neuem Tab/Fenster oder eingebettet)
5. In Bettermarks navigieren zu "Aufgaben erstellen" oder "To-Dos erstellen"
6. Neue Aufgabe/To-Do erstellen:
   - Aufgabentitel vergeben (z.B. "Releasetest Bruchrechnung")
   - Thema/Kapitel auswählen (z.B. Bruchrechnung, Addition)
   - Übungen/Aufgaben auswählen
   - Optional: Frist setzen
   - Optional: Punkte/Bewertung festlegen
7. Aufgabe speichern und zuweisen
8. Prüfen, ob Aufgabe in der Aufgabenliste erscheint

**✅ Erwartetes Ergebnis:**
- Bettermarks öffnet sich korrekt
- Lehrkraft hat Zugriff auf Aufgabenerstellung
- Aufgabe kann erstellt und zugewiesen werden
- Aufgabe erscheint in der Übersicht

**Status Teil A:** ☐

---

#### Teil B: Schüler bearbeitet Aufgaben

**Testschritte:**
10. Als Account C (Schüler) anmelden
11. Raum öffnen
12. Dasselbe Bettermarks-Element öffnen
13. Prüfen, ob die von der Lehrkraft erstellte Aufgabe sichtbar ist
14. Aufgabe öffnen
15. Mindestens eine Übung bearbeiten:
    - Aufgabe lösen
    - Antwort eingeben
    - Lösung überprüfen
16. Prüfen, ob Feedback/Korrektur angezeigt wird
17. Prüfen, ob Fortschritt gespeichert wird
18. Bettermarks verlassen und erneut öffnen
19. Prüfen, ob Fortschritt erhalten geblieben ist

**✅ Erwartetes Ergebnis:**
- Schüler kann Bettermarks öffnen
- Zugewiesene Aufgabe ist sichtbar
- Aufgabe kann bearbeitet werden
- Feedback wird angezeigt (richtig/falsch)
- Fortschritt wird gespeichert

**Status Teil B:** ☐

---

#### Teil C: Lehrkraft sieht Schülerfortschritt

**Testschritte:**
20. Als Account B (Lehrkraft) wieder anmelden
21. Raum öffnen
22. Bettermarks-Element öffnen
23. Zur Aufgabenübersicht navigieren
24. Die erstellte Aufgabe auswählen
25. Prüfen, ob Schülerfortschritt/-ergebnisse sichtbar sind

**✅ Erwartetes Ergebnis:**
- Lehrkraft kann Aufgabe aufrufen
- Schülerfortschritt ist einsehbar
- Bearbeitungsstatus ist erkennbar
- Ergebnisse/Punkte werden angezeigt

**Status Teil C:** ☐

---

## V. ERWEITERTE BERECHTIGUNGEN (Tests 29-37)

> **Ziel:** Rollenvergleiche, Collabora-Dokumente im Nur-Lesen-Modus, Videokonferenz und Rolle "Bearbeiten" testen  
> **Accounts:** Account A, B, C

---

### Test 29: Rollenvergleich - "Lesen" vs. "Besitzen"

**Testschritte:**
1. Dokumentiere Aktionen, die mit Rolle "Besitzen" möglich sind (Account A)
2. Dokumentiere Aktionen, die mit Rolle "Lesen" NICHT möglich sind (Account B/C)
3. Erstelle eine Vergleichstabelle:

| Funktion | Rolle: Besitzen | Rolle: Lesen |
|----------|----------------|--------------|
| Raum ansehen | ✓ | ✓ |
| Bereiche ansehen | ✓ | ✓ |
| Elemente ansehen | ✓ | ✓ |
| Medien konsumieren | ✓ | ✓ |
| H5P-Übungen absolvieren | ✓ | ✓ |
| Etherpad editieren | ✓ | ✓ |
| Whiteboard zeichnen | ✓ | ✓ |
| Videokonferenz beitreten | ✓ | ✓ |
| Bettermarks: Aufgaben bearbeiten (Lernend) | ✓ | ✓ |
| Bettermarks: Aufgaben erstellen (Lernbegleitend) | ✓ | ✓ |
| Element hinzufügen | ✓ | ✗ |
| Element bearbeiten | ✓ | ✗ |
| Element löschen | ✓ | ✗ |
| Bereich erstellen | ✓ | ✗ |
| Bereich bearbeiten | ✓ | ✗ |
| Bereich löschen | ✓ | ✗ |
| Collabora-Dokumente bearbeiten | ✓ | ✗ |
| Mitglieder verwalten | ✓ | ✗ |
| Einladungslinks erstellen | ✓ | ✗ |
| Raum-Einstellungen ändern | ✓ | ✗ |
| Raum löschen | ✓ | ✗ |

**Hinweis zu Bettermarks:** Die Berechtigungen in Bettermarks werden durch die **schulische Rolle** (Lernbegleitend/Lernend) bestimmt, nicht durch die Raum-Rolle.

**✅ Erwartetes Ergebnis:**
- Tabelle zeigt klare Unterscheidung zwischen Rollen
- Alle Beschränkungen sind dokumentiert
- Keine unerwarteten Berechtigungen für Rolle "Lesen"

**Status:** ☐

---

### Tests 30-33: Collabora-Dokumente im Nur-Lesen-Modus

> **Wichtig:** Nutzer mit Rolle "Lesen" können Collabora-Dokumente nur **anzeigen**, nicht bearbeiten

#### Test 30: Textdokument nur lesen (Lernender)

**Testschritte:**
1. Als Account A (Raum-Ersteller) sicherstellen, dass ein Textdokument (erstellt mit "Dokument erstellen → Text") vorhanden ist
2. Als Account C (Lernender mit Rolle "Lesen") anmelden
3. Raum öffnen
4. Textdokument anklicken
5. Prüfen, ob Collabora sich öffnet
6. Prüfen, ob Dokument lesbar ist
7. Versuchen, Text einzugeben
8. Versuchen, bestehenden Text zu markieren und zu ändern
9. Versuchen, Formatierungen zu ändern

**✅ Erwartetes Ergebnis:**
- Collabora öffnet sich mit dem Dokument
- Inhalt ist vollständig lesbar
- Dokument wird im Nur-Lesen-Modus angezeigt
- Text kann nicht eingegeben werden
- Bestehender Text kann nicht geändert werden
- Formatierungen können nicht geändert werden
- Hinweis auf Nur-Lesen-Modus ist sichtbar (z.B. Icon, Hinweistext)

**Status:** ☐

---

#### Test 31: Tabelle nur lesen (Lernender)

**Testschritte:**
1. Als Account A (Raum-Ersteller) sicherstellen, dass eine Tabelle vorhanden ist
2. Als Account C (Lernender mit Rolle "Lesen") anmelden
3. Raum öffnen
4. Tabelle anklicken
5. Prüfen, ob Collabora sich öffnet
6. Prüfen, ob Tabelle lesbar ist
7. Versuchen, in Zellen zu klicken und Werte einzugeben
8. Versuchen, Zellen zu formatieren
9. Versuchen, Zeilen/Spalten hinzuzufügen

**✅ Erwartetes Ergebnis:**
- Collabora öffnet sich mit der Tabelle
- Alle Daten sind vollständig sichtbar
- Tabelle wird im Nur-Lesen-Modus angezeigt
- Zellen können nicht bearbeitet werden
- Keine Formatierungsänderungen möglich
- Keine strukturellen Änderungen (Zeilen/Spalten) möglich
- Hinweis auf Nur-Lesen-Modus ist sichtbar

**Status:** ☐

---

#### Test 32: Präsentation nur lesen (Lernender)

**Testschritte:**
1. Als Account A (Raum-Ersteller) sicherstellen, dass eine Präsentation vorhanden ist
2. Als Account C (Lernender mit Rolle "Lesen") anmelden
3. Raum öffnen
4. Präsentation anklicken
5. Prüfen, ob Collabora sich öffnet
6. Prüfen, ob Folien sichtbar sind
7. Durch Folien navigieren
8. Versuchen, Text auf Folien zu ändern
9. Versuchen, neue Folien hinzuzufügen
10. Versuchen, Elemente zu verschieben

**✅ Erwartetes Ergebnis:**
- Collabora öffnet sich mit der Präsentation
- Alle Folien sind vollständig sichtbar
- Navigation durch Folien ist möglich
- Präsentation wird im Nur-Lesen-Modus angezeigt
- Keine Textänderungen möglich
- Keine neuen Folien können hinzugefügt werden
- Elemente können nicht verschoben werden
- Hinweis auf Nur-Lesen-Modus ist sichtbar

**Status:** ☐

---

#### Test 33: Alle Dokumente nur lesen (Lehrkraft)

**Testschritte:**
1. Als Account B (Lehrkraft mit Rolle "Lesen") anmelden
2. Raum öffnen
3. Textdokument öffnen und Nur-Lesen-Modus prüfen
4. Tabelle öffnen und Nur-Lesen-Modus prüfen
5. Präsentation öffnen und Nur-Lesen-Modus prüfen
6. Bei allen Dokumenten versuchen, Änderungen vorzunehmen

**✅ Erwartetes Ergebnis:**
- Alle drei Dokumenttypen öffnen sich in Collabora
- Alle Dokumente werden im Nur-Lesen-Modus angezeigt
- Keine Bearbeitungen sind möglich
- Hinweis auf Nur-Lesen-Modus ist konsistent bei allen Dokumenttypen
- Verhalten ist identisch zum Lernenden-Account

**Status:** ☐

---

### Test 34: Videokonferenz (BBB) - Alle Rollen

**Testschritte:**
1. Als Account A (Raum-Ersteller/Besitzer) anmelden
2. Raum öffnen
3. Videokonferenz-Element öffnen
4. Videokonferenz starten/beitreten
5. Prüfen, ob BBB sich öffnet und Kamera/Mikrofon freigegeben werden kann

6. **Parallel:** Als Account B (Lehrkraft mit Rolle "Lesen") anmelden
7. Raum öffnen
8. Videokonferenz-Element öffnen
9. Der laufenden Videokonferenz beitreten
10. Prüfen, ob BBB sich öffnet

11. **Parallel:** Als Account C (Lernender mit Rolle "Lesen") anmelden
12. Raum öffnen
13. Videokonferenz-Element öffnen
14. Der laufenden Videokonferenz beitreten
15. Prüfen, ob BBB sich öffnet

**In BBB folgende Funktionen testen:**

| Funktion | Account A (Besitzer) | Account B (Lehrkraft) | Account C (Lernender) | Status |
|----------|---------------------|----------------------|----------------------|--------|
| Videokonferenz beitreten | ✓ | ✓ | ✓ | ☐ |
| Kamera einschalten | ✓ | ✓ | ✓ | ☐ |
| Mikrofon einschalten | ✓ | ✓ | ✓ | ☐ |
| Im Chat schreiben | ✓ | ✓ | ✓ | ☐ |
| Bildschirm teilen | ✓ | ✓ | ✓ | ☐ |
| Präsentation hochladen | ✓ | ✓ | ✓ | ☐ |
| Hand heben | ✓ | ✓ | ✓ | ☐ |
| Reaktionen senden | ✓ | ✓ | ✓ | ☐ |
| Geteilte Notizen verwenden | ✓ | ✓ | ✓ | ☐ |
| Umfragen erstellen | ? | ? | ? | ☐ |
| Teilnehmer stumm schalten | ? | ? | ? | ☐ |
| Breakout-Räume erstellen | ? | ? | ? | ☐ |

**✅ Erwartetes Ergebnis:**
- Alle drei Accounts können der Videokonferenz beitreten
- Grundfunktionen (Kamera, Mikrofon, Chat) funktionieren für alle
- Erweiterte Funktionen funktionieren gemäß der BBB-Berechtigungskonfiguration
- Video und Audio werden für alle Teilnehmer übertragen
- Chat-Nachrichten sind für alle sichtbar
- Keine technischen Fehler oder Verbindungsprobleme

**Status:** ☐

---

### Tests 35-37: Rolle "Bearbeiten"

> Diese Tests prüfen die Rechte der Rolle "Bearbeiten" - kann Inhalte bearbeiten, aber keine Mitglieder verwalten

#### Test 35: Rollenwechsel von "Lesen" auf "Bearbeiten"

**Testschritte:**
1. Als Account A (Raum-Ersteller/Besitzer) anmelden
2. Raum öffnen
3. Zur Mitgliederverwaltung navigieren
4. Account B (Lehrkraft) in der Mitgliederliste finden
5. Rolle von "Lesen" auf "Bearbeiten" ändern
6. Änderung speichern
7. Mitgliederliste prüfen
8. Als Account B anmelden und prüfen, ob die neue Rolle angezeigt wird

**✅ Erwartetes Ergebnis:**
- Rollenänderung ist möglich
- Neue Rolle "Bearbeiten" wird in der Mitgliederliste angezeigt
- Account B sieht die neue Rolle in seiner Ansicht
- Änderung ist sofort wirksam

**Status:** ☐

---

#### Test 36: Lehrkraft mit "Bearbeiten" - Erweiterte Rechte

**Testschritte:**
1. Als Account B (Lehrkraft mit Rolle "Bearbeiten") anmelden
2. Raum öffnen
3. Folgende Aktionen durchführen und dokumentieren:

**Teil A: Inhalte bearbeiten**

| Aktion | Möglich? | Funktioniert? | Status |
|--------|----------|---------------|--------|
| Neues Element hinzufügen (Datei) | Ja / Nein | Ja / Nein | ☐ |
| Neues Element hinzufügen (Text) | Ja / Nein | Ja / Nein | ☐ |
| Neues Element hinzufügen (Link) | Ja / Nein | Ja / Nein | ☐ |
| Neues Element hinzufügen (H5P) | Ja / Nein | Ja / Nein | ☐ |
| Neues Element hinzufügen (Etherpad) | Ja / Nein | Ja / Nein | ☐ |
| Neues Element hinzufügen (Whiteboard) | Ja / Nein | Ja / Nein | ☐ |
| Neues Element hinzufügen (Videokonferenz) | Ja / Nein | Ja / Nein | ☐ |
| Neues Element hinzufügen (Collabora-Dokumente) | Ja / Nein | Ja / Nein | ☐ |
| Bestehendes Element bearbeiten | Ja / Nein | Ja / Nein | ☐ |
| Bestehendes Element löschen | Ja / Nein | Ja / Nein | ☐ |
| Element verschieben (Drag & Drop) | Ja / Nein | Ja / Nein | ☐ |

**Teil B: Bereiche verwalten**

| Aktion | Möglich? | Funktioniert? | Status |
|--------|----------|---------------|--------|
| Neuen Bereich erstellen | Ja / Nein | Ja / Nein | ☐ |
| Bereich umbenennen | Ja / Nein | Ja / Nein | ☐ |
| Bereich löschen | Ja / Nein | Ja / Nein | ☐ |
| Bereich verschieben | Ja / Nein | Ja / Nein | ☐ |

**Teil C: Collabora-Dokumente bearbeiten**

| Aktion | Möglich? | Funktioniert? | Status |
|--------|----------|---------------|--------|
| Textdokument in Collabora öffnen und bearbeiten | Ja / Nein | Ja / Nein | ☐ |
| Tabelle in Collabora öffnen und bearbeiten | Ja / Nein | Ja / Nein | ☐ |
| Präsentation in Collabora öffnen und bearbeiten | Ja / Nein | Ja / Nein | ☐ |
| Änderungen in Collabora speichern | Ja / Nein | Ja / Nein | ☐ |

**Teil D: Kollaborative Tools nutzen**

| Aktion | Möglich? | Funktioniert? | Status |
|--------|----------|---------------|--------|
| Etherpad editieren | Ja / Nein | Ja / Nein | ☐ |
| Whiteboard zeichnen | Ja / Nein | Ja / Nein | ☐ |
| Videokonferenz starten/beitreten | Ja / Nein | Ja / Nein | ☐ |

**Teil E: Mitgliederverwaltung (sollte NICHT möglich sein)**

| Aktion | Möglich? | Erwartetes Verhalten | Status |
|--------|----------|----------------------|--------|
| Neue Mitglieder hinzufügen | Nein | Option nicht sichtbar / deaktiviert | ☐ |
| Mitglieder entfernen | Nein | Option nicht sichtbar / deaktiviert | ☐ |
| Rollen ändern | Nein | Option nicht sichtbar / deaktiviert | ☐ |
| Einladungslink erstellen | Nein | Funktion nicht verfügbar | ☐ |
| Einladungslink bearbeiten | Nein | Funktion nicht verfügbar | ☐ |
| Einladungslink löschen | Nein | Funktion nicht verfügbar | ☐ |
| Mitgliederliste aufrufen | ? | Nur Ansicht, keine Bearbeitung | ☐ |

**Teil F: Raumverwaltung (sollte NICHT oder eingeschränkt möglich sein)**

| Aktion | Möglich? | Erwartetes Verhalten | Status |
|--------|----------|----------------------|--------|
| Raum-Einstellungen aufrufen | ? | TBD | ☐ |
| Raumname ändern | ? | TBD | ☐ |
| Raumbeschreibung ändern | ? | TBD | ☐ |
| Raum-Farbe ändern | ? | TBD | ☐ |
| Raum löschen | Nein | Option nicht sichtbar / deaktiviert | ☐ |
| Raum archivieren | ? | TBD | ☐ |

**✅ Erwartetes Ergebnis:**
- Alle Inhalts- und Strukturbearbeitungen sind möglich (Teil A-D)
- Mitgliederverwaltung ist NICHT möglich (Teil E)
- Collabora-Dokumente können vollständig bearbeitet werden
- Etherpad und Whiteboard funktionieren wie gewohnt
- Keine Berechtigungen für Mitgliederverwaltung
- Raum kann nicht gelöscht werden

**Status:** ☐

---

#### Test 37: Rollenvergleich - Alle Rollen

**Testschritte:**
1. Dokumentiere alle Aktionen mit verschiedenen Rollen
2. Erstelle eine erweiterte Vergleichstabelle:

| Funktion | Rolle: Lesen | Rolle: Bearbeiten | Rolle: Besitzen |
|----------|-------------|------------------|----------------|
| **Inhalte ansehen** | | | |
| Raum ansehen | ✓ | ✓ | ✓ |
| Bereiche ansehen | ✓ | ✓ | ✓ |
| Elemente ansehen | ✓ | ✓ | ✓ |
| Medien konsumieren | ✓ | ✓ | ✓ |
| H5P-Übungen absolvieren | ✓ | ✓ | ✓ |
| **Kollaborative Tools** | | | |
| Etherpad editieren | ✓ | ✓ | ✓ |
| Whiteboard zeichnen | ✓ | ✓ | ✓ |
| Videokonferenz beitreten | ✓ | ✓ | ✓ |
| Bettermarks: Aufgaben bearbeiten (Lernend) | ✓ | ✓ | ✓ |
| Bettermarks: Aufgaben erstellen (Lernbegleitend) | ✓ | ✓ | ✓ |
| **Inhalte bearbeiten** | | | |
| Element hinzufügen | ✗ | ✓ | ✓ |
| Element bearbeiten | ✗ | ✓ | ✓ |
| Element löschen | ✗ | ✓ | ✓ |
| Element verschieben | ✗ | ✓ | ✓ |
| **Struktur bearbeiten** | | | |
| Bereich erstellen | ✗ | ✓ | ✓ |
| Bereich bearbeiten | ✗ | ✓ | ✓ |
| Bereich löschen | ✗ | ✓ | ✓ |
| Bereich verschieben | ✗ | ✓ | ✓ |
| **Collabora-Dokumente** | | | |
| Collabora-Dokumente öffnen | ✓ (nur lesen) | ✓ (bearbeiten) | ✓ (bearbeiten) |
| Collabora-Dokumente bearbeiten | ✗ | ✓ | ✓ |
| **Mitgliederverwaltung** | | | |
| Mitglieder einladen | ✗ | ✗ | ✓ |
| Mitglieder entfernen | ✗ | ✗ | ✓ |
| Rollen ändern | ✗ | ✗ | ✓ |
| Einladungslinks erstellen | ✗ | ✗ | ✓ |
| Einladungslinks verwalten | ✗ | ✗ | ✓ |
| **Raumverwaltung** | | | |
| Raum-Einstellungen ändern | ✗ | ? | ✓ |
| Raum umbenennen | ✗ | ? | ✓ |
| Raum löschen | ✗ | ✗ | ✓ |

**Legende:**
- ✓ = Funktion verfügbar
- ✗ = Funktion nicht verfügbar
- ? = Zu klären während des Tests

**Hinweis zu Bettermarks:** Die Berechtigungen in Bettermarks werden durch die schulische Rolle (Lernbegleitend/Lernend) bestimmt, nicht durch die Raum-Rolle. Daher können alle Raum-Rollen Bettermarks-Funktionen nutzen, abhängig von ihrer schulischen Rolle.

**✅ Erwartetes Ergebnis:**
- Tabelle zeigt klare Unterscheidung zwischen allen drei Rollen
- Rolle "Bearbeiten" hat alle Inhalts-/Strukturbearbeitungsrechte
- Rolle "Bearbeiten" hat KEINE Mitgliederverwaltungsrechte
- Alle Beschränkungen sind dokumentiert

**Status:** ☐

---

## VI. SCHULÜBERGREIFENDE KOLLABORATION (Test 38)

> **Ziel:** Lehrkraft von Schule 2 einladen und diese lädt Schüler von Schule 2 ein  
> **Accounts:** Account A, D (Lehrkraft Schule 2), E (Schüler Schule 2)  
> **WICHTIG:** Account D benötigt Rolle "Verwalten" um Mitglieder einladen zu können!

### Vorbedingung
- ✅ Beide Schulen (Schule 1 und Schule 2) sind im System registriert
- ✅ Account D ist Schule 2 zugeordnet (Schulrolle "Lernbegleitend")
- ✅ Account E ist Schule 2 zugeordnet (Schulrolle "Lernend")
- ✅ Raum ist von Account A (Schule 1) erstellt

---

### Test 38: Externe Lehrkraft lädt eigene Schüler ein

**Als** Raum-Besitzer  
**möchte ich** Lehrkräfte anderer Schulen mit der Rolle "Verwalten" einladen können,  
**damit** diese ihre eigenen Schüler in den Raum einladen und schulübergreifende Zusammenarbeit ermöglichen können.

**Als** externe Lehrkraft mit Rolle "Verwalten"  
**möchte ich** Schüler meiner eigenen Schule in den Raum einladen können,  
**damit** meine Schüler an der schulübergreifenden Zusammenarbeit teilnehmen können.

---

#### Teil A: Externe Lehrkraft (Schule 2) wird eingeladen

**Testschritte:**
1. Als Account A (Raum-Ersteller, Schule 1) anmelden
2. Raum öffnen
3. Zur Mitgliederverwaltung navigieren
4. "Mitglieder hinzufügen" wählen
5. **Schule 2** (andere Schule) auswählen
6. Schulrolle "Lernbegleitend" wählen
7. Account D (Lehrkraft von Schule 2) aus der Liste suchen und auswählen
8. Raum-Rolle **"Verwalten"** zuweisen (WICHTIG: "Bearbeiten" reicht nicht aus!)
9. Hinzufügen bestätigen
10. Mitgliederliste prüfen

**✅ Erwartetes Ergebnis:**
- Lehrkraft von Schule 2 kann zur Schulliste hinzugefügt werden
- Lehrkraft von Schule 2 erscheint in der Mitgliederliste
- Rolle "Verwalten" wird korrekt angezeigt
- Schule 2 wird als Schule der Lehrkraft angezeigt

**Status Teil A:** ☐

---

#### Teil B: Externe Lehrkraft prüft Raum-Zugriff

**Testschritte:**
11. Als Account D (Lehrkraft von Schule 2) anmelden
12. Zur Raumübersicht navigieren
13. Prüfen, ob der Raum sichtbar ist
14. Raum öffnen
15. Inhalte des Raums ansehen
16. Prüfen, welche Aktionen möglich sind (Rolle "Verwalten")

**✅ Erwartetes Ergebnis:**
- Raum ist für Lehrkraft von Schule 2 sichtbar
- Raum kann geöffnet werden
- Alle Inhalte sind sichtbar
- Berechtigungen entsprechen der Rolle "Verwalten":
  - Kann Elemente hinzufügen, bearbeiten, löschen
  - Kann Bereiche erstellen, bearbeiten, löschen
  - Kann Mitglieder einladen und verwalten
  - Kann NICHT den Raum löschen (nur Besitzer kann das)

**Status Teil B:** ☐

---

#### Teil C: Externe Lehrkraft lädt eigenen Schüler (Schule 2) ein

**Testschritte:**
16. Als Account D (Lehrkraft von Schule 2) weiterhin angemeldet
17. Im Raum zur Mitgliederverwaltung navigieren
18. Prüfen, ob "Mitglieder hinzufügen" verfügbar ist
19. "Mitglieder hinzufügen" wählen
20. **Schule 2** (eigene Schule von Account D) auswählen
21. Schulrolle "Lernend" wählen
22. Account E (Schüler von Schule 2) aus der Liste suchen und auswählen
23. Raum-Rolle "Lesen" zuweisen
24. Hinzufügen bestätigen
25. Mitgliederliste prüfen

**✅ Erwartetes Ergebnis:**
- Mitgliederverwaltung ist verfügbar (da Rolle "Verwalten")
- Schule 2 kann ausgewählt werden
- Schüler von Schule 2 kann hinzugefügt werden
- Schüler erscheint in der Mitgliederliste
- Schule 2 wird als Schule des Schülers angezeigt
- **Wichtig:** Mit Rolle "Bearbeiten" wäre diese Funktion NICHT verfügbar!

**Status Teil C:** ☐

---

#### Teil D: Schüler von Schule 2 prüft Raum-Zugriff

**Testschritte:**
26. Als Account E (Schüler von Schule 2) anmelden
27. Zur Raumübersicht navigieren
28. Prüfen, ob der Raum sichtbar ist
29. Raum öffnen
30. Inhalte des Raums ansehen
31. Prüfen, welche Aktionen möglich sind (abhängig von zugewiesener Rolle)

**✅ Erwartetes Ergebnis:**
- Raum ist für Schüler von Schule 2 sichtbar
- Raum kann geöffnet werden
- Alle Inhalte sind sichtbar
- Berechtigungen entsprechen der zugewiesenen Raum-Rolle (Lesen)

**Status Teil D:** ☐

---

#### Teil E: Mitgliederliste prüfen (schulübergreifend)

**Testschritte:**
32. Als Account A (Raum-Ersteller) anmelden
33. Raum öffnen
34. Mitgliederliste öffnen
35. Alle Mitglieder dokumentieren:

| Account | Name | Schulrolle | Schule | Raum-Rolle | Status |
|---------|------|-----------|---------|-----------|--------|
| A | [Name] | Lernbegleitend | Schule 1 | Besitzen | ☐ |
| B | [Name] | Lernbegleitend | Schule 1 | Bearbeiten | ☐ |
| C | [Name] | Lernend | Schule 1 | Lesen | ☐ |
| D | [Name] | Lernbegleitend | Schule 2 | Verwalten | ☐ |
| E | [Name] | Lernend | Schule 2 | Lesen | ☐ |

36. Prüfen, ob Schulzugehörigkeit klar erkennbar ist
37. Prüfen, ob Filter nach Schule möglich ist (falls Feature vorhanden)

**✅ Erwartetes Ergebnis:**
- Alle Mitglieder von beiden Schulen sind in der Liste
- Schulzugehörigkeit ist eindeutig erkennbar
- Rollen sind korrekt zugewiesen
- Keine Konflikte oder Fehler

**Status Teil E:** ☐

---

#### Teil F: Kollaborationstest schulübergreifend

**Testschritte:**
38. Teste kollaborative Funktionen zwischen Schule 1 und Schule 2:

| Funktion | Account C (Schule 1) | Account E (Schule 2) | Funktioniert? | Status |
|----------|---------------------|---------------------|---------------|--------|
| Etherpad gemeinsam bearbeiten | ✓ | ✓ | Ja / Nein | ☐ |
| Whiteboard gemeinsam nutzen | ✓ | ✓ | Ja / Nein | ☐ |
| BBB-Videokonferenz gemeinsam | ✓ | ✓ | Ja / Nein | ☐ |
| Bettermarks: Schüler 2 sieht Aufgaben von Lehrkraft 1? | - | - | Ja / Nein | ☐ |
| Chat/Kommentare (falls vorhanden) | ✓ | ✓ | Ja / Nein | ☐ |

**✅ Erwartetes Ergebnis:**
- Alle kollaborativen Tools funktionieren schulübergreifend
- Schüler beider Schulen können zusammenarbeiten
- Keine Einschränkungen aufgrund unterschiedlicher Schulzugehörigkeit
- Änderungen werden in Echtzeit für alle synchronisiert

**Status Teil F:** ☐

---

#### Zusatztest: Berechtigungen bei schulübergreifender Kollaboration

**Testschritte:**
39. Prüfen, ob Raum-Rolle wichtiger ist als Schulzugehörigkeit:

| Szenario | Erwartetes Verhalten | Tatsächlich | Status |
|----------|---------------------|-------------|--------|
| Lehrkraft Schule 2 mit Rolle "Verwalten" kann Elemente hinzufügen | Ja | Ja / Nein | ☐ |
| Lehrkraft Schule 2 mit Rolle "Verwalten" kann Bereiche erstellen | Ja | Ja / Nein | ☐ |
| Lehrkraft Schule 2 mit Rolle "Verwalten" kann Mitglieder einladen | Ja | Ja / Nein | ☐ |
| Lehrkraft Schule 2 mit Rolle "Verwalten" kann Rollen ändern | Ja | Ja / Nein | ☐ |
| Lehrkraft Schule 2 mit Rolle "Verwalten" kann Raum löschen | Nein | Ja / Nein | ☐ |
| Schüler Schule 2 mit Rolle "Lesen" kann nur ansehen | Ja | Ja / Nein | ☐ |
| Schüler Schule 2 mit Rolle "Lesen" kann Etherpad bearbeiten | Ja | Ja / Nein | ☐ |

**Hypothese:** Die Raum-Rolle bestimmt die Berechtigungen, nicht die Schulzugehörigkeit. Rolle "Verwalten" ermöglicht Mitgliederverwaltung, aber nicht das Löschen des Raums.

**✅ Erwartetes Gesamtergebnis:**
- Räume können schulübergreifend genutzt werden
- Lehrkraft von Schule 2 kann in den Raum eingeladen werden
- Lehrkraft von Schule 2 kann (mit Raum-Rolle "Verwalten") Schüler der eigenen Schule einladen
- Schüler von Schule 2 können am Raum teilnehmen
- Alle kollaborativen Funktionen funktionieren schulübergreifend
- Berechtigungen werden durch Raum-Rolle bestimmt, nicht durch Schulzugehörigkeit
- Schulübergreifende Zusammenarbeit ist vollständig funktional

**Gesamtstatus:** ☐

> **💡 Wichtiger Hinweis:** Die Raum-Rolle "Verwalten" ist erforderlich, damit die externe Lehrkraft Mitglieder einladen kann. Mit den Rollen "Lesen" oder "Bearbeiten" ist die Mitgliederverwaltung nicht möglich. Nur die Rollen "Verwalten" und "Besitzen" ermöglichen das Einladen von neuen Mitgliedern.

---

## VII. RAUM-MANAGEMENT (Tests 39-43)

> **Ziel:** Raum duplizieren/teilen (mit Datenschutz), Besitz übertragen, Mitglieder entfernen, Raum löschen  
> **Accounts:** Account A, B  
> **⚠️ KRITISCH:** Datenschutzprüfung bei Tests 39-40!

### ⚠️ Wichtiger Hinweis zu Tests 39-43

Diese Tests bauen **sequenziell aufeinander auf**:
1. Test 39: Raum duplizieren
2. Test 40: Raum teilen
3. Test 41: Raum übertragen (auf Account B)
4. Test 42: Account B entfernt alle Mitglieder
5. Test 43: Account B löscht den Raum

**Empfehlung:** Erstelle ggf. einen separaten Test-Raum für diese Tests, um den Haupt-Test-Raum zu erhalten.

---

### Test 39: Raum duplizieren (mit Datenschutzprüfung)

**Als** Lehrkraft  
**möchte ich** einen Raum duplizieren können,  
**damit** ich die Struktur und Inhalte für ein neues Thema oder eine neue Klasse wiederverwenden kann.

**⚠️ DATENSCHUTZ:** Personenbezogene Daten aus kollaborativen Tools dürfen NICHT kopiert werden!

**Testschritte:**
1. Als Account A (Raum-Ersteller) anmelden
2. Zur Raumübersicht navigieren
3. Raum auswählen (der alle Elemente aus Tests 1-15 enthält)
4. Raum-Optionen öffnen (z.B. Drei-Punkte-Menü)
5. Option "Duplizieren" oder "Kopieren" auswählen
6. Neuen Namen für duplizierten Raum vergeben (z.B. "Releasetest-Raum (Kopie)")
7. Duplizierung bestätigen
8. Warten bis Duplizierung abgeschlossen ist
9. Duplizierten Raum öffnen
10. Alle Bereiche und Elemente durchgehen und prüfen:

| Element-Typ | Im Duplikat vorhanden? | Inhalt übernommen? | Status |
|-------------|----------------------|-------------------|--------|
| Bereiche | Ja / Nein | Struktur kopiert | ☐ |
| Text-Elemente | Ja / Nein | Text kopiert | ☐ |
| Dateien (Bilder, Audio, Video) | Ja / Nein | Dateien kopiert | ☐ |
| Dateiordner | Ja / Nein | Dateien kopiert | ☐ |
| Links | Ja / Nein | Links kopiert | ☐ |
| H5P-Elemente | Ja / Nein | Inhalte kopiert | ☐ |
| Bettermarks | Ja / Nein | Element kopiert (ohne Aufgaben?) | ☐ |
| **⚠️ Collabora-Dokumente (Text)** | Ja / Nein | **GELEERT (Datenschutz)?** | ☐ |
| **⚠️ Collabora-Dokumente (Tabelle)** | Ja / Nein | **GELEERT (Datenschutz)?** | ☐ |
| **⚠️ Collabora-Dokumente (Präsentation)** | Ja / Nein | **GELEERT (Datenschutz)?** | ☐ |
| **⚠️ Etherpad** | Ja / Nein | **GELEERT (Datenschutz)?** | ☐ |
| **⚠️ Whiteboard** | Ja / Nein | **GELEERT (Datenschutz)?** | ☐ |
| Videokonferenz | Ja / Nein | Neues Element erstellt | ☐ |

11. Mitgliederliste des duplizierten Raums prüfen:
    - Sind Mitglieder mitkopiert worden?
    - Oder ist nur der Ersteller (Account A) als Besitzer eingetragen?

**✅ Erwartetes Ergebnis:**
- Raum kann erfolgreich dupliziert werden
- Struktur (Bereiche) wird übernommen
- Statische Inhalte (Text, Dateien, Links, H5P) werden kopiert
- **⚠️ KRITISCH für Datenschutz:**
  - Collabora-Dokumente (Text, Tabelle, Präsentation) werden GELEERT
  - Etherpad-Inhalt wird GELÖSCHT (neues, leeres Etherpad)
  - Whiteboard-Inhalt wird GELÖSCHT (neues, leeres Whiteboard)
  - Keine personenbezogenen Daten aus kollaborativen Tools werden kopiert
- Mitglieder werden NICHT mitkopiert (nur Ersteller ist Besitzer)
- Duplizierter Raum ist unabhängig vom Original

**Status:** ☐

---

### Test 40: Raum teilen (mit Datenschutzprüfung)

**Als** Lehrkraft  
**möchte ich** einen Raum mit anderen teilen können,  
**damit** andere Lehrkräfte die Struktur und Inhalte nutzen können.

**⚠️ DATENSCHUTZ:** Personenbezogene Daten aus kollaborativen Tools dürfen NICHT geteilt werden!

**Testschritte:**
1. Als Account A (Raum-Ersteller) anmelden
2. Zur Raumübersicht navigieren
3. Raum auswählen
4. Raum-Optionen öffnen
5. Option "Teilen" auswählen
6. Zielbenutzer oder Teilen-Link erstellen
7. Geteilten Raum prüfen
8. Mit Account B anmelden und geteilten Raum öffnen
9. Alle Bereiche und Elemente durchgehen und wie bei Test 39 prüfen:

| Element-Typ | In geteilter Kopie vorhanden? | Inhalt übernommen? | Status |
|-------------|------------------------------|-------------------|--------|
| Bereiche | Ja / Nein | Struktur kopiert | ☐ |
| Text-Elemente | Ja / Nein | Text kopiert | ☐ |
| Dateien | Ja / Nein | Dateien kopiert | ☐ |
| Links | Ja / Nein | Links kopiert | ☐ |
| H5P-Elemente | Ja / Nein | Inhalte kopiert | ☐ |
| **⚠️ Collabora-Dokumente** | Ja / Nein | **GELEERT (Datenschutz)?** | ☐ |
| **⚠️ Etherpad** | Ja / Nein | **GELEERT (Datenschutz)?** | ☐ |
| **⚠️ Whiteboard** | Ja / Nein | **GELEERT (Datenschutz)?** | ☐ |

10. Mitgliederliste prüfen

**✅ Erwartetes Ergebnis:**
- Raum kann erfolgreich geteilt werden
- Verhalten identisch zu Test 39 (Duplizieren)
- **⚠️ KRITISCH:** Collabora-Dokumente, Etherpad, Whiteboard werden GELEERT
- Keine personenbezogenen Daten werden geteilt

**Status:** ☐

---

### Test 41: Raum übertragen (Besitz-Rolle transferieren)

**Als** Raum-Besitzer  
**möchte ich** den Besitz eines Raumes auf eine andere Lehrkraft übertragen können,  
**damit** diese Person die volle Kontrolle über den Raum erhält.

**Testschritte:**
1. Als Account A (Raum-Ersteller/Besitzer) anmelden
2. Raum öffnen
3. Zur Mitgliederverwaltung navigieren
4. Account B (Lehrkraft) in der Mitgliederliste finden
5. Raum-Besitz auf Account B übertragen:
   - Option "Besitz übertragen" oder ähnlich auswählen
   - Account B als neuen Besitzer festlegen
   - Übertragung bestätigen
6. Prüfen, was mit Account A passiert:
   - Wird Account A automatisch entfernt?
   - Oder erhält Account A eine andere Rolle (z.B. "Verwalten")?
7. Als Account B anmelden
8. Raumübersicht prüfen: Wird der Raum für Account B angezeigt?
9. Raum öffnen
10. Mitgliederliste prüfen: Ist Account B jetzt als "Besitzer" eingetragen?
11. Raum-Optionen prüfen: Hat Account B alle Besitzer-Rechte?

**✅ Erwartetes Ergebnis:**
- Besitz kann erfolgreich übertragen werden
- Account B ist neuer Besitzer mit Rolle "Besitzen"
- Account A hat entweder:
  - Keine Rolle mehr (wurde entfernt), oder
  - Eine niedrigere Rolle (z.B. "Verwalten" oder "Bearbeiten")
- Account B hat vollständigen Zugriff auf alle Besitzer-Funktionen:
  - Kann Mitglieder verwalten
  - Kann Raum löschen
  - Kann Raum-Einstellungen ändern

**Status:** ☐

---

### Test 42: Neuer Besitzer entfernt Mitglieder

**Als** neuer Raum-Besitzer  
**möchte ich** Mitglieder aus dem Raum entfernen können,  
**damit** ich die Mitgliederliste bereinigen kann.

**Vorbedingung:** Test 41 wurde durchgeführt, Account B ist jetzt Besitzer

**Testschritte:**
1. Als Account B (neuer Besitzer) anmelden
2. Raum öffnen
3. Zur Mitgliederverwaltung navigieren
4. Aktuelle Mitgliederliste dokumentieren:

| Account | Rolle | Wird entfernt? | Status |
|---------|-------|---------------|--------|
| A | ? | Ja | ☐ |
| B | Besitzen | Nein (selbst) | – |
| C | Lesen | Ja | ☐ |
| D | Verwalten | Ja | ☐ |
| E | Lesen | Ja | ☐ |

5. Account A entfernen (falls noch vorhanden):
   - Account A auswählen
   - Option "Entfernen" wählen
   - Entfernung bestätigen
6. Account C entfernen
7. Account D entfernen
8. Account E entfernen
9. Mitgliederliste prüfen: Nur noch Account B sollte übrig sein

10. Mit anderen Accounts prüfen:
    - Als Account A anmelden: Raum sollte nicht mehr sichtbar sein
    - Als Account C anmelden: Raum sollte nicht mehr sichtbar sein
    - Als Account D anmelden: Raum sollte nicht mehr sichtbar sein
    - Als Account E anmelden: Raum sollte nicht mehr sichtbar sein

**✅ Erwartetes Ergebnis:**
- Besitzer kann alle Mitglieder entfernen
- Entfernte Mitglieder erscheinen nicht mehr in der Liste
- Entfernte Mitglieder haben keinen Zugriff mehr auf den Raum
- Raum ist für entfernte Mitglieder nicht mehr sichtbar
- Nur der Besitzer (Account B) bleibt im Raum

**Status:** ☐

---

### Test 43: Raum löschen

**Als** Raum-Besitzer  
**möchte ich** einen Raum vollständig löschen können,  
**damit** ich nicht mehr benötigte Räume entfernen kann.

**Vorbedingung:** Test 42 wurde durchgeführt, nur Account B ist noch im Raum

**Testschritte:**
1. Als Account B (Besitzer) anmelden
2. Zur Raumübersicht navigieren
3. Raum auswählen
4. Raum-Optionen öffnen
5. Option "Löschen" auswählen
6. Sicherheitsabfrage bestätigen (z.B. Raumnamen eingeben zur Bestätigung)
7. Löschen bestätigen
8. Zur Raumübersicht zurückkehren
9. Prüfen, ob der Raum noch in der Liste ist
10. Ausloggen und als Account A anmelden
11. Raumübersicht prüfen: Raum sollte auch für Account A nicht mehr vorhanden sein

**Alternative: Papierkorb/Archiv-Funktion testen (falls vorhanden)**
12. Falls der Raum zunächst in einen Papierkorb verschoben wird:
    - Papierkorb/Archiv öffnen
    - Raum im Papierkorb finden
    - Option "Endgültig löschen" auswählen
    - Endgültige Löschung bestätigen
13. Prüfen, ob Raum auch aus Papierkorb verschwunden ist

**✅ Erwartetes Ergebnis:**
- Raum kann erfolgreich gelöscht werden
- Sicherheitsabfrage erscheint vor dem Löschen
- Raum ist nach Löschung nicht mehr in der Raumübersicht sichtbar
- Raum ist für alle Benutzer (auch ehemalige Mitglieder) nicht mehr zugänglich
- Alle Daten des Raumes werden gelöscht
- Falls Papierkorb vorhanden: Raum kann erst aus Papierkorb endgültig gelöscht werden

**Status:** ☐

---

## VIII. TESTDURCHFÜHRUNG

### Reihenfolge der Tests

Die Tests sollten in folgender Reihenfolge durchgeführt werden:

**Phase 1: Basis-Funktionen**
1. Tests 1-15: Alle Basis-Tests mit Account A durchführen
2. Test 16: Element-Duplizierung testen

**Phase 2: Kollaboration & Berechtigungen (Rolle "Lesen")**
3. Tests 17-27: Kollaborative Tests mit Accounts A, B, C (alle Schule 1, Rolle "Lesen")
4. Test 28: Bettermarks-Kollaboration (Lehrkraft erstellt Aufgaben, Schüler bearbeitet sie)

**Phase 3: Erweiterte Berechtigungen**
5. Test 29: Rollenvergleich "Lesen" vs. "Besitzen" dokumentieren
6. Tests 30-33: Collabora-Dokumente im Nur-Lesen-Modus testen
7. Test 34: Videokonferenz BBB mit allen 3 Accounts gleichzeitig testen

**Phase 4: Rolle "Bearbeiten"**
8. Test 35: Account B von "Lesen" auf "Bearbeiten" hochstufen
9. Test 36: Erweiterte Rechte von Rolle "Bearbeiten" testen
10. Test 37: Erweiterten Rollenvergleich dokumentieren (Lesen/Bearbeiten/Besitzen)

**Phase 5: Schulübergreifende Kollaboration**
11. Test 38: Account D (Schule 2) wird mit Rolle "Verwalten" eingeladen und lädt Account E (Schule 2) ein

**Phase 6: Raum-Management** ⚠️
12. Tests 39-43 sequenziell durchführen:
    - Test 39: Raum duplizieren mit Datenschutzprüfung
    - Test 40: Raum teilen mit Datenschutzprüfung
    - Test 41: Raum übertragen auf Account B
    - Test 42: Account B entfernt alle Mitglieder
    - Test 43: Account B löscht den Raum

**Phase 7: Dokumentation**
13. Alle Abweichungen von erwarteten Ergebnissen dokumentieren
14. Testprotokoll erstellen mit Datum, Tester und Ergebnissen

---

### Besondere Hinweise

#### Allgemeine Hinweise
- Stelle sicher, dass alle Accounts korrekt eingerichtet sind
- Dokumentiere alle Benutzernamen, Passwörter und Schulzugehörigkeiten
- Bereite verschiedene Testdateien vor (Bilder, Audio, Video, PDF, etc.)
- Bei Fehlern: Screenshot, Fehlermeldung, erwartetes vs. tatsächliches Verhalten notieren

#### Collabora-Tests (Tests 5-7, 30-33, 36)
- Prüfe, ob "Nur-Lesen-Modus" im Interface sichtbar gekennzeichnet ist
- Teste mit verschiedenen Dokumentgrößen (klein, mittel, groß)
- Achte auf Performance beim Öffnen der Dokumente
- Prüfe, ob Dokumente auch mobil korrekt geöffnet werden

#### BBB-Tests (Test 13, 34)
- Teste mit stabiler Internetverbindung
- Verwende aktuelle Browser (Chrome, Firefox, Edge)
- Teste sowohl Desktop als auch mobile Geräte
- Prüfe, ob Moderator-Rechte korrekt zugewiesen werden
- Dokumentiere, welche Rolle welche erweiterten Funktionen hat

#### Bettermarks-Tests (Test 9, 28)
- Stelle sicher, dass Bettermarks für beide Schulen aktiviert ist
- Prüfe, ob Lehrkraft und Schüler Bettermarks-Accounts haben
- Teste mit verschiedenen Aufgabentypen (wenn möglich)
- Dokumentiere, ob schulische Rolle wichtiger ist als Raum-Rolle
- Achte auf Synchronisation des Fortschritts

#### Schulübergreifende Tests (Test 38)
- Stelle sicher, dass beide Schulen im System registriert sind
- Prüfe, dass Accounts D und E eindeutig Schule 2 zugeordnet sind
- Dokumentiere genau, welche Schule welchem Account zugeordnet ist
- Achte darauf, ob Schulzugehörigkeit in der UI klar erkennbar ist
- **WICHTIG:** Account D muss Rolle "Verwalten" haben, um Mitglieder einladen zu können
- Dokumentiere, dass Rolle "Bearbeiten" NICHT ausreicht für Mitgliederverwaltung

#### Raum-Management-Tests (Tests 39-43)
- **KRITISCH für Datenschutz:** Bei Duplizieren und Teilen müssen persönliche Daten gelöscht werden
- Prüfe JEDES kollaborative Tool einzeln (Etherpad, Whiteboard, alle Collabora-Dokumente)
- Dokumentiere genau, welche Inhalte kopiert werden und welche nicht
- Bei Raum-Übertragung: Dokumentiere, was mit dem alten Besitzer passiert
- Bei Mitglieder-Entfernung: Teste mit allen Accounts, dass Zugriff wirklich entzogen wurde
- Bei Raum-Löschung: Prüfe, ob Sicherheitsabfrage vorhanden ist
- Tests 39-43 sollten sequenziell durchgeführt werden (bauen aufeinander auf)
- Erstelle ggf. einen separaten Test-Raum für diese Tests

---

### Wichtige Erkenntnisse

#### Kollaborative Tools
- **Etherpad und Whiteboard** sind für alle Rollen kollaborativ nutzbar (editierbar)
- Änderungen werden in Echtzeit synchronisiert
- Volle Funktionalität unabhängig von der Raum-Rolle

#### Bettermarks
- **Schulische Rolle** (Lernbegleitend/Lernend) ist wichtiger als Raum-Rolle
- Lernbegleitende können Aufgaben erstellen und zuweisen
- Lernende können zugewiesene Aufgaben sehen und bearbeiten
- Lehrkraft kann Schülerfortschritt einsehen
- Funktioniert unabhängig von der Raum-Rolle

#### Collabora-Dokumente
- **Rolle "Lesen":** Nur-Lesen-Modus (Dokumente öffnen, aber nicht bearbeiten)
- **Rolle "Bearbeiten":** Vollständige Bearbeitungsrechte
- **Rolle "Besitzen":** Vollständige Bearbeitungsrechte
- Nur-Lesen-Modus sollte klar im Interface gekennzeichnet sein

#### Videokonferenz (BBB)
- Kann von allen Rollen genutzt werden
- Grundfunktionen (Kamera, Mikrofon, Chat) funktionieren für alle
- Erweiterte Funktionen abhängig von BBB-Berechtigungskonfiguration

#### Schulübergreifende Kollaboration
- Lehrkräfte anderer Schulen können in Räume eingeladen werden
- Diese benötigen die Raum-Rolle **"Verwalten"**, um Schüler ihrer eigenen Schule einladen zu können
- Die Rolle **"Bearbeiten" reicht für Mitgliederverwaltung NICHT aus**
- Alle kollaborativen Tools funktionieren schulübergreifend
- Berechtigungen werden durch Raum-Rolle bestimmt, nicht durch Schulzugehörigkeit
- Räume ermöglichen Zusammenarbeit über Schulgrenzen hinweg

#### Raum-Management und Datenschutz
- **Element-Duplizierung:** Inhalte werden kopiert, aber kollaborative Tools (Etherpad, Whiteboard) werden vermutlich geleert
- **Raum-Duplizierung:** Struktur wird kopiert, aber personenbezogene Daten in kollaborativen Tools (Etherpad, Whiteboard, Collabora-Dokumente) müssen gelöscht werden
- **Raum-Teilen:** Verhält sich wie Duplizierung mit Datenschutzprüfung
- **Raum-Übertragung:** Besitz kann auf anderen Account übertragen werden
- **Mitglieder-Entfernung:** Besitzer kann alle Mitglieder entfernen
- **Raum-Löschung:** Nur Besitzer kann Raum löschen, alle Daten werden entfernt

---

### Rollenübersicht

| Rolle | Berechtigungen | Einschränkungen |
|-------|---------------|----------------|
| **Lesen** | - Alle Inhalte ansehen<br>- Medien konsumieren<br>- H5P-Übungen absolvieren<br>- Etherpad editieren<br>- Whiteboard zeichnen<br>- BBB beitreten<br>- Bettermarks nutzen (abhängig von Schulrolle) | - Keine Elemente/Bereiche hinzufügen, löschen, bearbeiten<br>- Keine Collabora-Dokumente bearbeiten<br>- Keine Mitgliederverwaltung<br>- Keine Raum-Einstellungen ändern |
| **Bearbeiten** | - Alle Rechte von "Lesen"<br>- Elemente hinzufügen, bearbeiten, löschen<br>- Bereiche erstellen, bearbeiten, löschen<br>- Collabora-Dokumente bearbeiten | - Keine Mitgliederverwaltung<br>- Keine Einladungslinks erstellen<br>- Raum nicht löschen |
| **Verwalten** | - Alle Rechte von "Bearbeiten"<br>- Mitglieder einladen, entfernen<br>- Rollen ändern<br>- Einladungslinks erstellen und verwalten | - Raum nicht löschen |
| **Besitzen** | - Vollzugriff auf alle Funktionen<br>- Mitglieder verwalten<br>- Raum löschen<br>- Raum übertragen | Keine Einschränkungen |

**Wichtig:** Für das Einladen von Mitgliedern ist mindestens die Rolle **"Verwalten"** erforderlich!

---

## 📝 Testprotokoll

**Testdurchführung am:** _________________

**Tester:** _________________

**Anmerkungen:**

_______________________________________________________________________

_______________________________________________________________________

_______________________________________________________________________

_______________________________________________________________________

---

**Ende der Testdokumentation**
