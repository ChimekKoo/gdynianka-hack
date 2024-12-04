# Gdynianka Hack

Proste rozszerzenie do przeglądarki ułatwiające oszukiwanie na testach na [testy.gdynianka.pl](https://testy.gdynianka.pl).

## Funkcje
- pokazywanie poprawnych odpowiedzi (za pomocą wbudowanego przycisku lub ukrycie tego przycisku i użycie skrótu ``Ctrl+` ``)
- wyłączenie automatycznego niezaliczania testu przy wykryciu wyjścia z testu 
- pokazywanie punktacji
- umożliwienie wracania do poprzednich pytań i edytowanie ich odpowiedzi
- wyłączenie mieszania kolejności pytań
- wyłączenie mieszania kolejności odpowiedzi
- ustawienie hasła do testu na `1`
- wyłączanie sprawdzania, czy test został otworzony linkiem z maila
- wyłączanie limitu rozwiązań na tylko raz
Jestem otwarty na propozycje (kontakt/issue/PR).

## Instalacja

### Chromium / Google Chrome
- pobierz wersję `chrome.zip` ([tutaj](https://github.com/chimekkoo/gdynianka-hack/releases)) i rozpakuj
- wejdź na `chrome://extensions`
- włącz "tryb dewelopera" (w prawym górnym rogu)
- kliknij "załaduj rozpakowane" i wybierz folder z rozpadkowanego wcześniej ZIP'a
- jeśli chcesz, dla wygody, przypnij zainstalowane rozszerzenie do paska w przeglądarce

### Firefox
- pobierz wersję `firefox.zip` ([tutaj](https://github.com/chimekkoo/gdynianka-hack/releases))
- wejdź na `about:debugging#/runtime/this-firefox`
- "tymczasowe rozszerzenia" -> "dodaj tymczasowe rozszerzenie" -> wybierz pobrany plk `firefox.zip`
- jeśli chcesz, dla wygody, przypnij zainstalowane rozszerzenie do paska w przeglądarce

## Jak używać?
- wejdź w test (jeszcze go nie rozpoczynając)
- kliknij ikonkę rozszerzenia
- ustaw dogodne ustawienia testu (domyślne ustawienia są korzystne dla piszącego, jednak i tak warto je przeczytać, dla pewności)
- dopiero teraz rozpocznij test

## Budowanie
Spakowane pliki rozszerzeń dla przeglądarek (dostępne [tutaj](https://github.com/chimekkoo/gdynianka-hack/releases)) są tworzone przy użyciu skryptu `build.sh`.
