---
layout: sublayout.njk
permalink: "next-dojo/index.html"
eleventyComputed:
  title: "CoderDojo Stockholm | Vår nästa Dojo"
---

{%- for dojo in collections.upcomingDojos limit:1 -%}
# Nästa Dojo {{ dojo.date | betterDate }}

CoderDojo Stockholm är en förening som erbjuder gratis event för barn mellan 7 till 17 för att prova på att programmera i och i närheten utav Stockholm.

Alla våra event är gratis och riktar sig till alla. Oavsett om du tidigare provat på programmering eller inte.

Den här sidan visar alltid informationen kring den närmaste Dojon. Observera att vi är på olika platser i närheten eller i Stockholm.

<div class="tt-widget">
<div class="tt-widget-fallback">
<p>
<a href="{{ dojo.data.ticketUrl }}" target="_blank">
Tryck här för att beställa en biljett
</a>
<br />
<small>
<a href="https://www.tickettailor.com?rf=wdg_141715" class="tt-widget-powered">
Sälj biljetter online med TicketTailor
</a>
</small>
</p>
</div>
<script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="{{ dojo.data.ticketUrl }}" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="">
</script>
</div>

{%- endfor -%}