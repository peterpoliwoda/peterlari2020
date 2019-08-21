$(document).ready(function() {

    var t = {
        'meet-couple': {
          en: 'Meet the couple',
          pl: 'Krótko o nas',
          pt: 'Conheça o casal'
        },
        'schedule-locations': {
          en: 'Schedule & locations',
          pl: 'Plan & lokalizacje',
          pt: 'Agenda & locais'
        },
        'information': {
            en: 'Useful Information',
            pl: 'Użyteczne Informacje',
            pt: 'Informações'
        },
        'RSVP': {
            en: 'RSVP',
            pl: 'Potwierdzenie',
            pt: 'Confirmação'
        },
        'Top': {
            pl: 'Do góry',
            pt: 'Para o topo'
        },
        'and': {
          pl: 'i',
          pt: 'e'
        },
        'invite you to their wedding': {
          pl: 'zapraszają na swój ślub',
          pt: 'esperam por você nesse dia tão importante'
        },
        'on': {
          pl: 'dnia',
          pt: 'dia'
        },
        '4 April 2020': {
          pl: '4 kwietnia 2020',
          pt: '4 Abril 2020'
        },
        'in': {
          pl: 'w',
          pt: 'em'
        },
        'Let us know if you can make it': {
          pl: 'Potwierdź swoje przybycie',
          pt: 'Deixe-nos saber se você pode vir'
        },
        'sao-paulo-location': {
          en: 'São Paulo, Brazil',
          pl: 'São Paulo, Brazil',
          pt: 'Salto de Pirapora, SP'
        },
        'A little about us': {
          pl: 'Trochę o nas',
          pt: 'Um pouco sobre nós'
        },
        'our-story-desc': {
          en: 'We met on a beautiful green island just north of the European continent. Our story starts in Ireland. We met on a sunny summer day back in 2014.',
          pl: 'Spotkaliśmy się na pięknej zielonej wyspie na północ od kontynentu europejskiego. Nasza historia zaczęła się w Irlandii. Spotkaliśmy się w słoneczny letni dzień w 2014 roku.',
          pt: 'Nós nos encontramos em uma bela ilha verde ao norte do continente europeu. Nossa história começa na Irlanda. Nós nos conhecemos em um dia ensolarado de verão em 2014.',
        },
        'Our favourite moments': {
          pl: 'Nasze ulubione chwile',
          pt: 'Nossos momentos favoritos'
        },
        'The beautiful bride': {
          pl: 'Piękna panna młoda',
          pt: '"Bonitona"'
        },
        'The handsome groom': {
          pl: 'Przystojny pan młody',
          pt: '"O Bonitono"'
        },
        'Tell us something nice': {
          pl: 'Napisz nam coś miłego',
          pt: 'Conte alguma coisa legal sobre nós'
        },
        'Countdown to the big day': {
          pl: 'Odliczanie do Wielkiego Dnia',
          pt: 'Contagem regressiva para o grande dia'
        },
        'countdown-desc': {
          en: 'See us say \'I do\' in:',
          pl: 'Zobacz jak mówimy \'Tak\' już niedługo, za:',
          pt: 'Veja como dizemos "Sim" em breve, para:'
        },
        'Days': {
          pl: 'Dni',
          pt: 'Dias'
        },
        'Hours': {
          pl: 'Godzin',
          pt: 'Horas'
        },
        'Minutes': {
          pl: 'Minut',
          pt: 'Minutos'
        },
        'Seconds': {
          pl: 'Sekund',
          pt: 'Segundos'
        },
        'Main Ceremony': {
          pl: 'Uroczystość kościelna',
          pt: 'Cerimônia da igreja'
        },
        'Wedding Party': {
          pl: 'Przyjęcie weselne',
          pt: 'Festa de casamento'
        },
        'Car rental': {
          pl: 'Wypożyczanie samochodu',
          pt: 'Alugar um carro'
        },
        'Accommodation': {
          pl: 'Zakwaterowanie',
          pt: 'Accommodaçao'
        },
        'Public transport': {
          pl: 'Transport publiczny',
          pt: 'Transporte público'
        },
        'let-us-know': {
          en: 'Please let us know if you\'re coming',
          pl: 'Daj nam znać czy przylecisz',
          pt: 'Por favor, deixe-nos saber se você está vindo'
        },
        'Will you be attending?': {
          pl: 'Potwiedzam przybycie',
          pt: 'Eu confirmo chegada'
        },
        'Send': {
          pl: 'Wyślij',
          pt: 'Enviar'
        },
        'Yes': {
          pl: 'Tak',
          pt: 'Sim'
        },
        'No': {
          pl: 'Nie',
          pt: 'No'
        },
        'Your name': {
          pl: 'Twoje imię',
          pt: 'Seu nome'
        },
        'your@email.com': {
          pl: 'twoj@email.pl',
          pt: 'seu@email.com.br'
        },
        'Number of people': {
          pl: 'Liczba gości',
          pt: 'Número de convidados'
        },
        'Leave a note (Optional):': {
          pl: 'Dodatkowa wiadomość (Opcjonalnie)',
          pt: 'Mensagem adicional (opcional)'
        }
      };

      var browserLocale = (window.navigator && window.navigator.language) ? (window.navigator.language).toLowerCase() : 'en';
      var lang = 'en';
      console.log('Browser is in:', browserLocale);

      if (browserLocale.indexOf('pl') > -1) {
        lang = 'pl';
      } else if (browserLocale.indexOf('pt') > -1) {
        lang = 'pt'
      } else {
          lang = 'en';
      }

    var _t = $('body').translate({lang: lang, t: t});
});