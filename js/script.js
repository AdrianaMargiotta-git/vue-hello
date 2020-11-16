/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data
Altro possibile Bonus: gestire una funzione con un evento nel modo Vue.*/

//istanziamo vue agganciando l'istanza del nostro div container
var container = new Vue ({
    el : "#container",
    data : {
        titolo : "Benvenuto nel mondo Vue!",
        immagine : "./img/vue-symbol.jpg",
        immagine2 : "./img/vue-symbol.jpg",
        changeColor : "multicolortext"
    },

    methods: {
        change: function () {
            //Codice
            if(this.changeColor === "multicolortext"){
                this.changeColor = "normaltext";
            } else {
                this.changeColor = "multicolortext";
            }
        }
    }

});



