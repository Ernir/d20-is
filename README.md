# d20 á íslensku

Hér má finna Github-síðu verkefnisins d20 á íslensku. Þessi síða er fyrst og fremst gagnleg fyrir þau sem vilja breyta efninu eða bæta við það, efnið er aðgengilegt í læsilegu formi á https://ernir.github.io/d20-is/ .

## Að nálgast efnið

Efnið er skrifað á [Markdown](https://www.markdownguide.org/)-sniði, og má finna í möppunni [vefur/docs](vefur/docs/).

Hægt er að ná í afrit af efninu til eigin nota með "Code" hnappinum hér að ofan:

![Staðsetning niðurhalstakkans sýnd](/vefur/static/img/niðurhal.png)

## Að breyta efninu

Hægt er að breyta skránum á eigin tölvu með flestum hrátextaritlum, höfundur notar [Visual Studio Code](https://code.visualstudio.com/) sem er einfaldur í uppsetningu, virkar á helstu stýrikerfum, og styður Markdown án þess að frekari stillingar sé þörf.

Ef bæta á við alveg nýjum síðum er einfaldast að nota aðra sambærilega síðu til hliðsjónar.

## Að leggja til breytingar

Hægt er að leggja til breytingar á efninu beint með því að búa til "[pull request](https://docs.github.com/en/pull-requests)" í gegnum Github.

Ef það hljómar flókið er hægt að nálgast höfund með tölvupósti á e.ernir@gmail.com og við reddum þessu.

## Keyrsla á eigin vél

Þessar leiðbeiningar eiga fyrst og fremst við fyrir forritara og annað tölvuslingt fólk. Þau sem eingöngu hafa áhuga á að leggja til breytingar á efninu ættu ekki að þurfa að keyra alla síðuna á eigin vél, til þess er nóg að breyta textaskránum (sjá að ofan).

Síðan notar [Docusaurus](https://docusaurus.io/) til að safna saman Markdown textaskránum, eiginleg forritun kemur varla við sögu. Docusaurus keyrir með [npm](https://www.npmjs.com/), útgáfa 16 er í notkun þegar þetta er skrifað. Eftir að `npm` hefur verið uppsett má keyra upp síðuna með því að keyra skipunina `npm run start` í `/docs` möppunni. Þetta opnar staðværa útgáfu af síðunni í vafra.
