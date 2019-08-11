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
        }
      };

      var browserLocale = (navigator.language).toLowerCase();
      var lang = 'en';
      console.log('Browser is in:', browserLocale);

      if (browserLocale.includes('pl')) {
        lang = 'pl';
      } else if (browserLocale.includes('pt')) {
        lang = 'pt'
      } else {
          lang = 'en';
      }

    var _t = $('body').translate({lang: lang, t: t});
});