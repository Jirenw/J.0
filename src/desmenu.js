const desmenu = (prefix, pushname) => {
    return `
*π½COMANDOS DE DESCARGASπ½*

ββββββββββββββββββββ 
*π΅AUDIOπΆ*
${prefix}play2
Una alternativa por si *play llego a su limite de canciones.
${prefix}play
Coloca el nombre de la cancion, o el link de YouTube.
_Ejm_
${prefix}play Faded
ββββββββββββββββββββ 
*π½οΈVIDEOπΉ*
${prefix}ytmp4
Descarga videos de YouTube
_Ejm_
${prefix}ytmp4 www.youtube.com/xxxxxxxx
ββββββββββββββββββββ
_*play y *play2 tiene un limite de 2000 canciones, y se restablece cada 24 horas_
     
BY.γ²β β ΙͺΚα΄Ι΄γ΄α­YπΉβ’βκ¦Όππ’π«π‘πΆ-π π₯ππ«ΰΌβ’βπ²π½`

}

exports.desmenu = desmenu
