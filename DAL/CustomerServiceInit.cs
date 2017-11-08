using Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    class CustomerServiceInit : DropCreateDatabaseAlways<CustomerServiceContext>
    {
        protected override void Seed(CustomerServiceContext context)
        {
            var faqs = new List<FAQ>();
            var inquiries = new List<Inquiry>();

            faqs.Add(new FAQ()
            {
                Category = "Sjekk inn",
                GlyphIcon = "fa fa-id-badge",
                QAList = new List<QA>()
                {
                    new QA()
                    {
                        Question = "Hvordan sjekker jeg inn spesialbagasje?",
                        Answer = "Du sjekker inn som vanlig og får utlevert lapper for spesialbagasje. Du leverer så spesialbagasjen inn egen skranke."
                    },
                    new QA()
                    {
                        Question = "Hvordan får jeg bagasjelapper hvis jeg vil sjekke inn selv?",
                        Answer = 
                            "Når du sjekker inn på mobil eller internett, kan du skrive ut bagasjelappene på flyplassen i en Self Service-automat. " +
                            "Fest bagasjelappene så på bagasjen og send dem av gårde ved en Self Service bag drop."
                    },
                    new QA()
                    {
                        Question = "Når må jeg være på flyplassen?",
                        Answer =
                            "Vi anbefaler våre reisende å møte opp i god tid før avreise slik at man kommer igjennom de nøvendige sikkerhetskontrollene. " +
                            "Hvor lang tid en må påberegne er avhengig av sesong, når på døgnet man reiser og fra hvilken flyplass."
                    }
                }
            });

            faqs.Add(new FAQ()
            {
                Category = "Bagasje",
                GlyphIcon = "fa fa-suitcase",
                QAList = new List<QA>()
                {
                    new QA()
                    {
                        Question = "Hvor er bagasjen min?",
                        Answer =
                            "Normalt vil 99% av forsinket bagasje dukke opp iløpet av 24 timer. " +
                            "Hvis bagasjen blir forsinket kan du spore den ved hjelp av kvitteringsnr til bagasjen under Min Side. " +
                            "Skulle formodningsvis bagasjen ikke dukke opp innen 48 timer, vil vi utbetale erstatningssum for inntil kr 15,000 pr innsjekket bagasje. "
                    },
                    new QA()
                    {
                        Question = "Hvor mye bagasje kan jeg ta med?",
                        Answer =
                            "Dette bestemmes ut ifra hvilken klasse du reiser med. Alle first class passasjerer kan sjekke inn 3 bagasjer pr reisende. " +
                            "For passasjerer som reiser med business class gjelder inntil 2 stk bagasje pr reisende. For passasjerer som reiser economy class " +
                            "gjelder det 1 stk bagasje pr reisende."
                    },
                    new QA()
                    {
                        Question = "Hvor mye koster ekstra bagasje?",
                        Answer = "Kostnaden bestemmes av reiserute og eventuel overvekt"
                    },
                    new QA()
                    {
                        Question = "Hvordan kan jeg bestille ekstra bagasje?",
                        Answer = "Ekstra bagasje kan bestilles fra Min Side eller ved å kontakte kundeservice"
                    },
                    new QA()
                    {
                        Question = "Hvor mye bagasje kan jeg ta med for et barn?",
                        Answer =
                            "Alle barn (inntil 11 år) kan ha med barnevogn og bilsete uten ekstra kostnad. Vi anbefaler at du alltid beskytter barnevogn/bilsete når du reiser. " +
                            "I tillegg kan foreldre med spedbarn under 2 år ha med seg inntil fem kilo ekstra innsjekket bagasje uten ekstra kostnad."
                    },
                    new QA()
                    {
                        Question = "Hva er de maksimale målene for innsjekket bagasje?",
                        Answer = "Vi aksepterer enkeltgjenstander opp til: lengde 250cm, høyde 79cm, bredde 112cm. Den totale omkretsen (L+H+B) kan ikke overstige 300cm."
                    }
                }
            });

            faqs.Add(new FAQ()
            {
                Category = "Bestilling",
                GlyphIcon = "fa fa-ticket",
                QAList = new List<QA>()
                {
                    new QA()
                    {
                        Question = "Kan jeg endre på min reservasjon?",
                        Answer =
                            "Du kan endre på reservasjonen mot et honorar. Hvis du ombooker til en annen klasse, må du også betale et mellomlegg. Ombookinger kan foretas gjennom Min Side. " +
                            "Du kan endre på reservasjonen også etter at du har sjekket inn, så lenge du sjekker ut før du gjør eventuelle endringer."
                    },
                    new QA()
                    {
                        Question = "Hvor sent kan jeg ombooke min reservasjon?",
                        Answer = "Du kan oppgradere og ombooke din reservasjon inntil 1 time før avreise."
                    },
                    new QA()
                    {
                        Question = "Hvor mye koster det å ombooke en reservasjon for spebarn?",
                        Answer = "Det er gratis å gjøre endringer på reservasjoner som gjelder spebarn."
                    },
                    new QA()
                    {
                        Question = "Kan jeg gjøre om på en kansellering?",
                        Answer = "Nei, har du først kansellert billetten, må du legge inn en ny reservasjon/bestilling."
                    },
                    new QA()
                    {
                        Question = "Får jeg en ny reservasjonkode dersom jeg ombooker reisen min?",
                        Answer = "Nei, du vil fortsatt beholde din reservasjonskode."
                    }
                }
            });

            faqs.Add(new FAQ()
            {
                Category = "Reiseinformasjon",
                GlyphIcon = "fa fa-globe",
                QAList = new List<QA>()
                {
                    new QA()
                    {
                        Question = "Har dere playstation ombord?",
                        Answer = "Hos oss har alle reisende tilgang til egen PlayStation 4 i seteryggen foran."
                    },
                    new QA()
                    {
                        Question = "Hva hvis barnet mitt fyller 2 år under reisen?",
                        Answer = "Hvis barnet ditt fyller 2 år under reisens opphold, må du bestille barnebillett begge veier."
                    },
                    new QA()
                    {
                        Question = "Hvor store er setene om bord?",
                        Answer = "Dette varierer avhengig av hvilken type fly du reiser med i tillegg til hvilken klasse reiser er bestilt med."
                    }
                }
            });

            inquiries.Add(new Inquiry()
            {
                FirstName = "Kent",
                LastName = "Knudsen",
                Email = "kent@knudsen.no",
                Received = DateTime.Now.ToString("dddd dd.MMMM yyyy"),
                Question = "Er det toalettpapir ombord på flytoalettene?"
            });

            inquiries.Add(new Inquiry()
            {
                FirstName = "Tham",
                LastName = "Nguyen",
                Email = "tham@nguyen.no",
                Received = DateTime.Now.ToString("dddd dd.MMMM yyyy"),
                Question = "Har man tilgang til eget kjøkken ombord på first class?"
            });

            inquiries.Add(new Inquiry()
            {
                FirstName = "Ola",
                LastName = "Nordmann",
                Email = "ola@nordmann.no",
                Received = DateTime.Now.ToString("dddd dd.MMMM yyyy"),
                Question = "Serverer dere tørrfisk ombord? Eller lutefisk med brunost? Har dere gravøl?"
            });

            context.Inquiries.AddRange(inquiries);
            context.FAQ.AddRange(faqs);
            base.Seed(context);
        }
    }
}
