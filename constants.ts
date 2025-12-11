import React from 'react';
import { Scale, Gamepad2, ShoppingCart, Info, Gavel, Coins } from 'lucide-react';

export const SERVER_INFO = {
  ip: "argoncraft.pl",
  version: "1.21.4",
  discord: "https://dc.argoncraft.pl",
  wiki: "https://wiki.argoncraft.pl",
  store: "https://sklep.argoncraft.pl"
};

export interface RuleSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: Array<{
    subtitle?: string;
    text: string | string[];
  }>;
}

export const RULES_DATA: RuleSection[] = [
  {
    id: "intro",
    title: "Wstęp",
    icon: Info,
    content: [
      {
        text: [
          "Cześć! Witamy w świecie **ArgonCraft.pl** – serwerze tworzonym z pasją dla graczy.",
          "Jesteśmy projektem typu **Full Custom Survival** działającym na najnowszej wersji **1.21.4**. Oferujemy Wam unikalne Dungeony, rozbudowany system Misji oraz zbalansowaną Ekonomię. Aby rozgrywka była uczciwa i przyjemna dla wszystkich, stworzyliśmy poniższy zbiór zasad.",
          "Wejście na serwer jest równoznaczne z akceptacją poniższych postanowień."
        ]
      }
    ]
  },
  {
    id: "general",
    title: "§1. Postanowienia Ogólne i Własność Kont",
    icon: Scale,
    content: [
      {
        subtitle: "1. Właściciel",
        text: "Serwer ArgonCraft.pl jest prywatnym projektem, a dostęp do niego jest przywilejem, a nie prawem użytkownika."
      },
      {
        subtitle: "2. Status Konta",
        text: [
          "Wszystkie konta utworzone w serwisie oraz na serwerze gry, a także zgromadzone na nich dane, statystyki i zasoby wirtualne, pozostają wyłączną własnością serwisu **ArgonCraft.pl**.",
          "• Użytkownik otrzymuje jedynie **licencję na użytkowanie** konta w celu rozgrywki.",
          "• Administracja zastrzega sobie prawo do zablokowania dostępu do konta (ban) w przypadku naruszenia regulaminu, bez obowiązku zwrotu jakichkolwiek środków czy odszkodowania."
        ]
      },
      {
        subtitle: "3. Nieznajomość prawa",
        text: "Nieznajomość Regulaminu nie zwalnia z obowiązku jego przestrzegania (*Ignorantia juris non excusat*)."
      }
    ]
  },
  {
    id: "gameplay",
    title: "§2. Zasady Rozgrywki (Gameplay)",
    icon: Gamepad2,
    content: [
      {
        subtitle: "1. Wspomagacze",
        text: "Bezwzględnie zabrania się używania oprogramowania ułatwiającego rozgrywkę (Cheaty, X-Ray, Skrypty, Makra, Auto-clickery ingerujące w pakiety)."
      },
      {
        subtitle: "2. Wykorzystywanie Błędów",
        text: "Znalezienie błędu (buga) w grze, ekonomii lub na mapie wymaga natychmiastowego zgłoszenia administracji. Wykorzystywanie błędów do własnych korzyści (bug abuse) grozi permanentną blokadą."
      },
      {
        subtitle: "3. Griefing",
        text: "Niszczenie terenu wokół cudzych działek (obszarów chronionych) oraz celowe psucie mapy (\"krajobraz księżycowy\") jest zabronione."
      },
      {
        subtitle: "4. Kultura",
        text: "Na czacie obowiązuje kultura osobista. Zabrania się spamu, floodu, reklamowania innych serwerów, treści rasistowskich, homofobicznych oraz nękania innych graczy."
      }
    ]
  },
  {
    id: "economy",
    title: "§3. Ekonomia i Przedmioty",
    icon: Coins,
    content: [
      {
        subtitle: "1. Odpowiedzialność za przedmioty",
        text: [
          "Administracja **nie odpowiada** za przedmioty utracone w wyniku:",
          "• Śmierci gracza (z własnej winy lub w wyniku PvP).",
          "• Kradzieży przez innych graczy (jeśli gracz dodał złodzieja do swojej działki – \"Trust\").",
          "• Błędu gracza (np. wyrzucenie przedmiotu do lawy).",
          "• Niestabilności łącza internetowego po stronie gracza."
        ]
      },
      {
        subtitle: "2. Zwroty",
        text: "Zwrot przedmiotów (itemów) przez Administrację jest możliwy **wyłącznie** w przypadku błędu serwera potwierdzonego logami lub nagraniem wideo. Decyzja Administratora w tej kwestii jest ostateczna."
      },
      {
        subtitle: "3. Handel",
        text: "Handel przedmiotami za realną walutę (PLN/EUR/PSC itp.) pomiędzy graczami jest surowo zabroniony i skutkuje banem dla obu stron transakcji."
      }
    ]
  },
  {
    id: "casino",
    title: "§4. \"Strefa Rozrywki\" (tzw. Kasyno) – Nota Prawna",
    icon: Scale,
    content: [
      {
        subtitle: "1. Definicja",
        text: "Dostępny na serwerze obszar potocznie nazywany przez graczy \"Kasynem\" jest w rozumieniu regulaminu **Symulatorem Gier Losowych (Mini-grą)**."
      },
      {
        subtitle: "2. Brak znamion hazardu",
        text: [
          "• Rozgrywka w Strefie Rozrywki odbywa się **wyłącznie** przy użyciu wirtualnej waluty serwerowej, która nie posiada żadnego odpowiednika w świecie rzeczywistym.",
          "• Waluta ta nie jest wymienialna na polskie złote (PLN) ani żadną inną walutę fiducjarną, zarówno na wejściu (wpłata), jak i na wyjściu (wypłata).",
          "• Nie ma możliwości wypłacenia \"wygranej\" w formie pieniężnej lub rzeczowej poza serwerem gry."
        ]
      },
      {
        subtitle: "3. Cel Edukacyjny",
        text: "Mechanika ta ma charakter wyłącznie rozrywkowy i **edukacyjny**. Jej celem jest demonstracja losowości oraz faktu, że w grach losowych statystyczna przewaga zawsze leży po stronie organizatora (\"domu\"). Traktujemy to jako przestrogę przed prawdziwym hazardem."
      },
      {
        subtitle: "4. Zakaz handlu walutą",
        text: "Zabrania się nabywania wirtualnej waluty służącej do tej mini-gry bezpośrednio za realne pieniądze w celu ominięcia powyższych zasad."
      },
      {
        subtitle: "5. Świadomość",
        text: "Użytkownik korzystając z tej strefy oświadcza, że jest świadomy, iż bierze udział w symulacji komputerowej, a nie w grze hazardowej w rozumieniu Ustawy o grach hazardowych."
      }
    ]
  },
  {
    id: "payments",
    title: "§5. Płatności i ItemShop",
    icon: ShoppingCart,
    content: [
      {
        subtitle: "",
        text: [
          "1. Wszelkie płatności dokonywane na rzecz serwera ArgonCraft.pl są dobrowolnymi dotacjami na utrzymanie i rozwój projektu.",
          "2. W zamian za wsparcie serwera, Usługodawca może przyznać rangę lub wirtualne przedmioty (zgodnie z ofertą sklepu).",
          "3. Usługi te są dobrami cyfrowymi, które zostają zużyte w momencie ich aktywacji, w związku z czym nie podlegają zwrotowi (zgodnie z art. 38 ustawy o prawach konsumenta)."
        ]
      }
    ]
  },
  {
    id: "final",
    title: "§6. Postanowienia Końcowe",
    icon: Gavel,
    content: [
      {
        subtitle: "",
        text: [
          "1. Administracja zastrzega sobie prawo do zmiany niniejszego regulaminu. O zmianach gracze zostaną poinformowani na Discordzie lub w grze.",
          "2. W sprawach nieuregulowanych niniejszym regulaminem ostateczną decyzję podejmuje Właściciel Serwera.",
          "3. Korzystanie z serwera jest jednoznaczne z akceptacją Polityki Prywatności oraz zasad netykiety."
        ]
      }
    ]
  }
];
