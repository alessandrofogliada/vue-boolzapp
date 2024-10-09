const { createApp } = Vue

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/2.man.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/1.man.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/2.man.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/1.man.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/1.man.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/1.frau.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/2.man.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Franca',
                    avatar: 'img/2.frau.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            cercaContatto: "",
            contattoAttivo:0,
            ricercaContatto:"",
            nuovoMessaggio:"",

            
        }
    },
    computed: {
        // faccio filtrare i nomi digitati dall'utente e vedo se corrispondono a quelli presenti nella chat 
        filtroContatti(){
            return this.contacts.filter( contact =>
                contact.name.toLowerCase().includes(this.ricercaContatto.toLowerCase())
            );
        }
    },

    methods: {
        // creo funzione per selezionare i contatti tramite un click 
        selezionaContatto(index) {
            this.contattoAttivo = index;
        },

        // infoTempo(infoMessaggi){
        //     const datiMessaggi = DataOra.fromFormat(infoMessaggi, "dd/MM/yyyy HH:mm:ss");
        //     return datiMessaggi.toFormat ("HH:mm:ss");
        // }

        // creo funzione per aggiungere un messaggio scritto dall'utente 

        aggiungiMessaggio(){
            if (this.nuovoMessaggio !== '' && this.nuovoMessaggio.lenght >= 5){
                this.contact[this.contattoAttivo].messages.push({date: DateTime.now() .toFormat('dd/MM/yyyy HH:mm:ss'), message: this.nuovoMessaggio, status: 'sent', scorrimentoFinestra: false});
                setTimeout(() => {this.messagioUtente()}, 1000)
            }
        },

        // creo un messaggio di risosta del computer per l'utente 

        messaggioPc(){
            this.contact[this.contattoAttivo].messages.push({date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                message: 'Ok!' , status: 'received'
            });
        },    

        contactSearch(){

                // Prendo tutti i nomi dell'array
                let arrayMap = this.contacts.map(({ name }) => ({ name }));
                console.log("array di nomi " , arrayMap);
                
                // Variabile con il nome da cercare
                const cercaContatto = this.cercaContatto; 

                console.log("valore di cercaContatto" , cercaContatto);
                
                // Li filtro con le lettere che ha selezionato l'utente
                const arrayFiltrato = arrayMap.filter(({ name }) => name.includes(cercaContatto));
                
                // Mostro in pagina l'array filtrato

                console.log(arrayFiltrato);

        }        
    },

    mounted() {
    },
}).mount('#app')



