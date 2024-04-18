Programmēšanas uzdevums:

Izmantojamās tehnoloģijas Nodejs, ReactJs(izmantojot Antd ietvaru),
docker-compose,PostgreSQL, Git

Jāizmanto 2 CSV faili priekš datiem:
vgsales.csv (Spēļu pārdošanas statistika)
https://www.kaggle.com/datasets/andrewmvd/steam-reviews  (Spēļu
atsauksmes, nav obligāti jāimportē visa datu kopa, jo tā ļoti liela)

Šie dati ir jāimportē sistēmā (nav obligāti paredzēt importa
funkcionalitāti saskarnē) un jāsaglabā datu bāzē. Jāparedz datu
"tīrīšana" respektīvi netiktu importētas atsauksmes, kur nav norādīts
vērtējums, spēles nosaukums utml.

Jāizveido tabulārais skats, kur būtu pieejams spēļu saraksts un tās
aprakstošā informācija - kolonnas, kas norādītas failā vgsales.csv +
katras spēles atsauksmju skaits, jābūt iespējai filtrēt un kārtot pēc
visām sistēmas kolonnām. Jāparedz iespēja arī pievienot jaunu spēli un
tās aprakstošā informācija.

Uzklikšķinot uz tabulas rindas, tiek atvērta spēles kartiņa, kurā ir
redzama spēles aprakstošā informācija + tās atsauksmes tabulas formātā,
kā arī jābūt paredzētai iespējai rediģēt spēli aprakstošo informāciju kā
arī jābūt iespējai pievienot, dzēst vai modificēt atsauksmi.