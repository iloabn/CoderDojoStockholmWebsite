--- 
layout: baselayout.njk 
title: CoderDojo Stockholm 
upcomingDojosToShow: 2 
eleventyImport: 
    collections: ["dojo"] 
---

# ☯️ {{ title }} ☯️
CoderDojo är en förening som annordnar gratis event där barn 7-17 får prova på att programmera på olika vis.

Här under kan du både se våra kommande Dojos men även lära dig mer om CoderDojo och hur det fungerar i praktiken. Vi hoppas vi ses!

## Kommande Dojos
<ul>
{%- for dojo in collections.upcomingDojos -%}
    <li>
        <a href="{{ dojo.url }}">Dojo {{ dojo.date | betterDate }}</a>
    </li>
{%- endfor -%}
</ul>

## Hur fungerar en Dojo?
En Dojo är alltid gratis och det finns inga krav på att anmäla sig till flera tillfällen eller liknande. Såhär går det till från anmälan tills vi är klara:
1. Anmäl er till den Dojo du vill gå på.
1. Om ni har en dator eller surfplatta så får ni gärna ta med er den. Vi har några att låna om ni inte har, men vi har inte tillräckligt för alla.
1. Dyk upp strax innan 10:00 så att ni inte missar när vi säger hej.
1. Prata med en mentor och kom tillsammans fram till vad för roligt ni vill prova på idag.
1. Vi hänger tillsammans i ca 2 timmar och skapar och löser problem både själva och tillsammans.
1. Strax innan tolv hjälps vi åt att packa ihop, tackar för idag och skiljs åt.

{%  %}
## Tidigare Dojos
<ul>
{%- for dojo in collections.previousDojos -%}
    <li>
        <a href="{{ dojo.url }}">Dojo {{ dojo.date | betterDate }}</a>
    </li>
{%- endfor -%}
</ul>

## Vanliga frågor och svar
Här kommer några vanliga frågor och svar på dem.

### Hur gammal måste man vara för att vara med på en Dojo?
Vi tycker att CoderDojo Stockholm passa bäst för 7-17. Men det är inga hårda regler, så om ett yngre eller äldre syskon vill hänge med också så är det helt okej.

### Måste en förälder vara med?
Under 12 så måste en förälder vara närvarande under hela Dojon. Vid 12 eller äldre så är det helt upp till er själva att bestämma vad som ni tror blir bäst. Vi på CoderDojo tar dock inget extra ansvar förutom att vi alla är snälla människor.

### Jag vill att CoderDojo Stockholm besöker vårt företag!
Så kul att höra! Det gör vi gärna 😀 Prata gärna med någon av mentorerna på plats eller läs mer **här** om hur det är att ha en Dojo på besök.