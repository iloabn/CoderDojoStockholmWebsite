---
layout: baselayout.njk
title: "Vi sparar din mejl"
noindex: true
---

# Vi sparar din mejl

Kul att höra att du fortfarande är intresserad utav **CoderDojo Stockholm**. Vi fortsätter spara din mejl ett tag till.

## Kommande Dojos
<ul>
{%- for dojo in collections.upcomingDojos -%}
    <li>
        <a href="{{ dojo.url }}">Dojo {{ dojo.date | betterDate }}</a>
    </li>
{%- endfor -%}
</ul>