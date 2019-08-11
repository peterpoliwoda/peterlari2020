$(document).ready(function() {

    var t = {
        "meet-couple": {
          en: "Meet the couple",
          pl: "Krótko o nas",
          pt: "Conheça o casal"
        },
        "schedule-locations": {
          en: "Schedule & locations",
          pl: "Plan & lokalizacje",
          pt: "Agenda & locais"
        },
        "information": {
            en: "Useful Information",
            pl: "Użyteczne Informacje",
            pt: "Informações"
        },
        "rsvp": {
            en: "RSVP",
            pl: "Potwierdzenie",
            pt: "Confirmação"
        },
        "Top": {
            pl: "Do góry",
            pt: "Para o topo"
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