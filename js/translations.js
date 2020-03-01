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
        'gift_list': {
            en: 'Gift List',
            pl: 'Lista Prezentów',
            pt: 'Lista de Presentes'
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
            pt: 'Salto de Pirapora, sp'
        },
        'A little about us': {
            pl: 'Trochę o nas',
            pt: 'Um pouco sobre nós'
        },
        'our-story-desc': {
            en: 'We met on a beautiful green island just north of the European continent. '
            + 'Our story starts in Ireland. We met on a sunny summer day back in 2014.',
            pl: 'Spotkaliśmy się na pięknej zielonej wyspie na północ od kontynentu europejskiego.'
            + ' Nasza historia zaczęła się w Irlandii. Spotkaliśmy się w słoneczny letni dzień w 2014 roku.',
            pt: 'Nós nos conhecemos em uma bela ilha verde ao norte do continente europeu. '
            + ' Nossa história começa na Irlanda, em um lindo dia ensolarado de verão em 2014 '
            + '(talvez o único verão que esse país já teve rsrs) ',
        },
        'Our favourite moments': {
            pl: 'Nasze ulubione chwile',
            pt: 'Nossos momentos favoritos'
        },
        'The beautiful bride': {
            pl: 'Piękna panna młoda',
            pt: '"Bonitonona"'
        },
        'The handsome groom': {
            pl: 'Przystojny pan młody',
            pt: '"Bonitono"'
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
            en: 'See us say "I do" in:',
            pl: 'Zobacz jak mówimy "Tak" za:',
            pt: 'Veja o nosso "Sim" em...'
        },
        'Days': {
            pl: 'Dni',
            pt: 'Dias'
        },
        'nights': {
            pl: 'noce',
            pt: 'noites'
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
            pt: 'Cerimônia religiosa'
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
            pt: 'Acomodação'
        },
        'Public transport': {
            pl: 'Transport publiczny',
            pt: 'Transporte público'
        },
        'let-us-know': {
            en: 'Please let us know if you\'re coming',
            pl: 'Daj nam znać czy będziesz',
            pt: 'Por favor, deixe-nos saber se você vai comparecer'
        },
        'Will you be attending?': {
            pl: 'Potwiedzam przybycie',
            pt: 'Você vai?'
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
            pt: 'Não'
        },
        'Your name': {
            pl: 'Twoje imię',
            pt: 'Seu nome'
        },
        'your-email': {
            en: 'your@email.com',
            pl: 'twoj@email.pl',
            pt: 'seu@email.com.br'
        },
        'Number of people': {
            pl: 'Liczba gości',
            pt: 'Número de convidados'
        },
        'leave-a-note': {
            en: 'Leave a note (Optional)',
            pl: 'Dodatkowa wiadomość (Opcjonalnie)',
            pt: 'Mensagem adicional (opcional)'
        },
        'Driving directions': {
            pl: 'Jak dojechać',
            pt: 'Como chegar lá'
        },
        'Contact information': {
            pl: 'Kontakt',
            pt: 'Contato'
        },
        'Phone': {
            pl: 'Tel',
            pt: 'Tel'
        },
        'Phone number': {
            pl: 'Telefon kontaktowy',
            pt: 'Telefone de contato',
            en: 'Phone number'
        },
        'fazenda-opening-hours': {
            pl: 'Recepcja czynna: <br/> Poniedziałek-Piątek 9:00-17:00',
            en: 'Contact hours: Mon-Fri 9:00AM - 5:00PM',
            pt: 'Atendimento de segunda a sexta-feira, das 09h às 17h.'
        },
        'fazenda-prices-in': {
            pl: 'Ceny w Brazylijskich Realach (1 zł ~ 1.04 R$)',
            en: 'Prices in Brazilian Reais (€1 ~ 4.41 R$)',
            pt: ' '
        },
        'additional_hotels_tbc': {
            pl: 'Hotele w mieście Sorocaba we własnym zakresie. <br/> '
            + 'Najlepsza opcja: <strong>okolice dzielnicy Campolim</strong> w Sorocabie. <br/> '
            + 'Polecane hotele np: <br/> - Hotel ibis',
            pt: 'Outros hoteis em Sorocaba ou Salto de Pirapora (a confirmar).'
            + 'Melhor opção: <strong>Sorocaba Campolim<strong>.',
            en: 'Hotels in the City of Sorocaba if choosing on your own <br/> '
            + 'Best option: <strong>Campolim Area</strong> in Sorocaba.<br/> '
            + 'Recommended for example: <br/> - Hotel ibis'
        },
        'Single': {
            pl: 'jednoosobowy',
            pt: 'uma pesoa'
        },
        'Double': {
            pl: 'dwuosobowy',
            pt: 'duas pessoas'
        },
        'Child': {
            pl: 'Dziecko',
            pt: 'Criança'
        },
        'Children': {
            pl: 'Dzieci',
            pt: 'Crianças'
        },
        'Free': {
            pl: 'Gratis',
            pt: 'Não pagam'
        },
        'for two days': {
            pl: 'za dwa dni',
            pt: 'para dois dias'
        },
        'for two nights': {
            pt: 'para duas noites',
            pl: 'za dwie noce'
        },
        'per room': {
            pl: 'za pokój',
            pt: 'por quarto'
        },
        'Additional children': {
            pl: 'Dodatkowe dzieci',
            pt: 'Criaças adicionais'
        },
        'adult': {
            pl: 'osoba dorosła',
            pt: 'adulto'
        },
        'adults': {
            pl: 'osoby dorosłe',
            pt: 'adultos'
        },
        'Additional adults': {
            pl: 'Dodatkowi dorośli',
            pt: 'Adultos adicionais'
        },
        'from': {
            pl: 'od',
            pt: 'de'
        },
        'to': {
            pl: 'do',
            pt: 'a'
        },
        'rooms_available_for_wedding': {
            en: 'Rooms available for the wedding weekend',
            pt: 'Quartos disponíveis no final de semana do casamento',
            pl: 'Zakwaterowanie dostępne w ślubny weekend'
        },
        'Fri-Sun': {
            pl: 'Piątek - Niedziela',
            pt: 'Sexta-Feira - Domingo'
        },
        'Friday': {
            pl: 'Piątek',
            pt: 'Sexta-Feira'
        },
        'Sunday': {
            pl: 'Niedziela',
            pt: 'Domingo'
        },
        'years old': {
            pl: 'lat',
            pt: 'anos'
        },
        'years': {
            pl: 'lat',
            pt: 'anos'
        },
        'To be confirmed': {
            pl: '(Do potwierdzenia)',
            pt: '(a comfirmar)'
        },
        'uber_info': {
            en: 'A good cheap transport option',
            pl: 'Dobra tania opcja. Uber w Brazylii działa dobrze i jest popularny.',
            pt: 'Uma boa opção! (barato)',
        },
        'taxi_info': {
            en: 'If taking a taxi from Sorocaba to the Church / Fazenda should be OK.',
            pl: 'Taksówka z Sorocaby do kościoła albo Fazendy Pitangueiras powinna być OK.',
            pt: 'Táxi de Sorocaba/Pilar do Sul para a Igreja em Salto de Pirapora ou para a Fazenda Pitangueiras.'
        },
        'airport_transfer_info': {
            en: 'We are considering organising a bus ride from GRU airport to the Fazenda. '
                + 'Please state if you would like to be a part of it in the Optional Note.',
            pl: 'Myślimy o zorganizowaniu mikrobusa z lotniska do Fazendy. Prosimy o potwierdzenie '
                + 'czasu lotów z nami lub w wysłanym dokumencie Google Sheets oraz o wyrażenie '
                + 'chęci transferu w *Dodatkowej notatce* w formularzu potwierdzającym.',
            pt: 'Estamos pensando em organizar uma viagem de ônibus do aeroporto GRU para a Fazenda. '
                + 'Por favor, indique se você gostaria de fazer parte dele na *Nota Opcional*.'
        },
        'What\'s cooking on social media': {
            pl: 'Zasłyszane w mediach społecznościowych',
            pt: 'O que está acontecendo nas mídias sociais'
        },
        'post_pics_hashtag': {
            en: 'Post your pictures of us on our instagram hashtag: <br/>#laripeter2020',
            pl: 'Wrzuć swoje fotki na nasz feed na instagramie używając hashtaga: <br/>#laripeter2020',
            pt: 'Compartilhe conosco as suas fotos no Instagram! <br/>Use #laripeter2020',
        },
        'optional_accommodation': {
            en: 'If you would like there is a possibility of staying at the Fazenda'
            + ' for the duration of the wedding weekend.',
            pl: ' ',
            pt: 'Se você quiser ficar hospedado conosco na fazenda durante o fim de semana,'
            + ' eles tem as seguintes opções: <br>'
        },
        'hotel_room_info': {
            en: 'Check-in: 16:00 Friday. <br>' +
            'Check-out: 12:00 Sunday. <br>' +
            '<br>' +
            'OPTION 1<br>' +
            'Single (1 adult) R$ 320 for one night. <br>' +
            'Double (2 adults) R$ 320 for one night. <br>' +
            '<br>' +
            'OPTION 2<br>' +
            'Single (1 adult) R$ 500 for two nights. <br>' +
            'Double (2 adults) R$ 500 for two nights. <br>' +
            'Children from 0 to 5 years old - Free. <br>' +
            '1 Child 6-12 years per room - Free. <br>' +
            'Additional children 6-12 years per room R$ 100 for two days. <br>' +
            'Additional adults per room R$ 100 per night (R$ 200 Fri-Sun).<br>' +
            '<br>' +
            'Breakfast on Saturday and Sunday included.<br>' +
            '<br>' +
            'Prices in Brazilian Reais (€1 = 4.81 R$) <br>',
            pl: 'Check-in: 16:00 Piątek. <br>' +
            'Check-out: 12:00 Niedziela. <br>' +
            '<br>' +
            'OPCJA 1<br>' +
            'jednoosobowy (1 osoba dorosła) R$ 320 za jedną noc. <br>' +
            'dwuosobowy (2 osoby dorosłe) R$ 320 za dwie noc. <br>' +
            '<br>' +
            'OPCJA 2<br>' +
            'jednoosobowy (1 osoba dorosła) R$ 500 za dwie noce. <br>' +
            'dwuosobowy (2 osoby dorosłe) R$ 500 za dwie noce. <br>' +
            'Dzieci od 0 do 5 lat - Gratis. <br>' +
            '1 Dziecko 6-12 lat za pokój - Gratis. <br>' +
            'Dodatkowe dzieci 6-12 lat za pokój R$ 100 za dwa dni. <br>' +
            'Dodatkowi dorośli za pokój R$ 200 za dwa dni. <br>' +
            '<br>' +
            'Śniadanie w sobotę i niedzielę wliczone w cenę.<br>' +
            '<br>' +
            'Ceny w Brazylijskich Realach (1 zł ~ 1.04 R$) <br>',
            pt: 'Check-in: 16:00 sexta-feira. <br>' +
            'Check-out: 12:00 domingo. <br>' +
            '<br>' +
            'OPÇÃO 1<br>' +
            'uma pesoa (1 adulto) R$ 320 para uma noite. <br>' +
            'duas pesoas (2 adultos) R$ 320 para uma noite. <br>' +
            '<br>' +
            'OPÇÃO 2<br>' +
            'uma pesoa (1 adulto) R$ 500 para duas noites. <br>' +
            'duas pesoas (2 adultos) R$ 500 para duas noites. <br>' +
            'Crianças de 0 a 5 anos - Não pagam. <br>' +
            '1 Criança 6-12 anos no mesmo quarto - Não pagam. <br>' +
            'Criaças adicionais 6-12 anos no mesmo quarto R$ 100 por dois dias. <br>' +
            'Adultos adicionais no mesmo quarto R$ 200 por dois dias. <br>',
        }
    };

    var browserLocale = (window.navigator && window.navigator.language)
        ? (window.navigator.language).toLowerCase() : 'pt';
    var lang = 'en';
    console.log('Browser is in:', browserLocale);

    if (browserLocale.indexOf('pl') > -1 || browserLocale.indexOf('de') > -1) {
        lang = 'pl';
    } else if (browserLocale.indexOf('pt') > -1) {
        lang = 'pt';
    } else {
        lang = 'en';
    }

    var translator = $('body').translate({lang: lang, t: t});

    $('.langbtns').click(function(e) {
        var clickedLang = e && e.target && e.target.text ? e.target.text.toLowerCase() : 'en';
        translator.lang(clickedLang);
    });
});
