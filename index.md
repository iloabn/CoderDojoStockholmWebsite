--- 
layout: baselayout.njk 
title: CoderDojo Stockholm
eleventyImport: 
    collections: ["dojo"] 
---

# ☯️ {{ title }} ☯️
CoderDojo är en förening som annordnar gratis event (Dojos) där barn 7-17 får prova på att programmera på olika vis.

Här under kan du både se våra kommande Dojos men även lära dig mer om CoderDojo och hur det fungerar i praktiken. Vi hoppas vi ses!

## Kommande Dojos
<ul>
{%- for dojo in collections.upcomingDojos -%}
    <li>
        <a href="{{ dojo.url }}">Dojo {{ dojo.date | betterDate }}</a>
    </li>
{%- endfor -%}
</ul>

<div class="ml-embedded" data-form="Hl8WXP"></div>

## Hur fungerar en Dojo?
En Dojo är alltid gratis och det finns inga krav på att anmäla sig till flera tillfällen eller liknande. Såhär går det till från anmälan tills vi är klara:
1. Anmäl er till den Dojo du vill gå på.
1. Om ni har en dator eller surfplatta så får ni gärna ta med er den. Vi har några att låna om ni inte har, men vi har inte tillräckligt för alla.
1. Dyk upp strax innan 10:00 så att ni inte missar när vi säger hej.
1. Prata med en mentor och kom tillsammans fram till vad för roligt ni vill prova på idag.
1. Vi hänger tillsammans i ca 2 timmar och skapar och löser problem både själva och tillsammans.
1. Strax innan tolv hjälps vi åt att packa ihop, tackar för idag och skiljs åt.

## Vanliga frågor och svar

### Hur gammal måste man vara för att vara med på en Dojo?
Vi tycker att CoderDojo Stockholm passar bäst för de som är 7-17. Men det är inga hårda regler, så om ett yngre eller äldre syskon vill hänge med också så är det helt okej.

### Måste en förälder vara med?
Under 13 så **måste** en förälder vara närvarande under hela Dojon. Vid 12 eller äldre så är det helt upp till er själva att bestämma vad som ni tror blir bäst. Vi på CoderDojo tar dock inget extra ansvar förutom att vi alla är snälla människor.

### Jag vill att CoderDojo Stockholm besöker vårt företag!
Så kul att höra! Det gör vi gärna 😀 Prata gärna med någon av mentorerna på plats eller anmäl intresse för att välkomna CoderDojo på besök.

[Anmäl intresse för att bli lokalsponsor](/hosting-a-dojo/)

### Finns det andra sätt att stödja CoderDojo Stockholm?
Det gör det! Vi har samlat några av de bästa sätten att hjälpa oss på CoderDojo på en separat sida. Allt du gör för oss uppskattas och det finns många olika sätt att hjälpa CoderDojo Stockholm.

[Olika sätt att hjälpa CoderDojo Stockholm](/support-dojo/)