angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "ro";
    gallery.work_start_date = new Date(2016,05,20);

    gallery.worked_hours = 168;  // EDIT HERE

    gallery.get_global_progress = function() {
      var index;
      var total = 0;
      for (index = 0; index < gallery.items.length; ++index) {
        total = total + gallery.items[index].done;
      }
      return (total/gallery.items.length).toFixed(2);
    };

    gallery.estimate_remaining = function() {
      return ((((gallery.worked_hours * 100) / gallery.get_global_progress()).toFixed(2)) - gallery.worked_hours).toFixed(2);
    };

    gallery.estimate_finish_date = function() {
      var start_date = gallery.work_start_date;
      var today_date = new Date();
      var one_day = 24 * 60 * 60 * 1000;  // hours * minutes * seconds * milliseconds

      var days_number = Math.round(Math.abs((today_date - start_date) / (one_day)));

      //  days number ......................... worked hours
      //  estimated remaining days number ..... remaining hours
      //
      //  estimated remaining days number = (days number * remaining hours) / worked hours
      //
      //  estimated finish date = today + estimated remaining days number
      var estimated_remaining_days_number = ((days_number * gallery.estimate_remaining()) / gallery.worked_hours).toFixed(2);
      var estimated_finish_date = new Date(today_date.getTime() + (parseInt(estimated_remaining_days_number) * one_day));
      return estimated_finish_date;
    };

    gallery.estimate_finish_date_text = {
      ro: "Data finalizării proiectului (bazată pe progresul actual):",
      en: "Estimated finish date (based on current progress):"
    };

    gallery.hope_finish_date_text = {
      ro: "Dar personal doresc să fie gata la 13.08.2017.",
      en: "But I want to have it finished in 13.08.2017."
    };

    gallery.title = {
      ro: "Iona",
      en: "Jonah"
    };

    gallery.description = {
      ro: "carte ilustrată pentru copii",
      en: "illustrated book for kids"
    };

    gallery.intro = {
      ro: "cu desene de Ghiță Bizău",
      en: "digital paintings by Ghiță Bizău"
    };

    gallery.episode = {
      ro: "Imaginea",
      en: "Image"
    };

    gallery.complete = {
      ro: "Realizat",
      en: "Complete"
    };

    gallery.you_can_help = {
      ro: "Poți să ajuți.",
      en: "You can help."
    };

    gallery.credits = {
      title: {
        ro: "Mulțumiri",
        en: "Thanks"
      },
      text: {
        ro: "Textul în română (traducerea Dumitru Cornilescu a Bibliei) vine de la biblia.ro.",
        en: "Used KJV Bible - online version at www.kingjamesbibleonline.org."
      }
    };

    gallery.languages = [
      {
        short: "ro",
        text: "Română"
      },
      {
        short: "en",
        text: "English"
      }
    ];

    gallery.change_language = function(language) {
      gallery.language = language;
      console.log(language);
    };

    gallery.get_progress = function(done) {
      if(done <= 10) {
        return "danger"
      } else {
        if(done > 80) {
          return "success"
        } else {
          if(done <= 50) {
            return "warning"
          } else {
            return "info"
          }
        }
      }
    };

    // EDIT HERE
    gallery.items = [
      {
        id: 0,
        img: '00.png',
        done: 56,
        text: {
          ro: "Coperta cărții",
          en: "Book cover"
        }
      },
      {
        id: 1,
        img: '01.png',
        done: 90,
        text: {
          ro: "1:1. Cuvântul Domnului a vorbit lui Iona, fiul lui Amitai, astfel: 1:2. \"Scoală-te, du-te la Ninive, cetatea cea mare, şi strigă împotriva ei. Căci răutatea ei s-a suit până la Mine!\" 1:3A. Şi Iona s-a sculat să fugă la Tars, departe de faţa Domnului.",
          en: "1:1. Now the word of the LORD came unto Jonah the son of Amittai, saying, 1:2. Arise, go to Nineveh, that great city, and cry against it; for their wickedness is come up before me. 1:3A. But Jonah rose up to flee unto Tarshish from the presence of the LORD,"
        }
      },
      {
        id: 2,
        img: '02.png',
        done: 90,
        text: {
          ro: "1:3B. S-a coborât la Iafo şi a găsit acolo o corabie care mergea la Tars.",
          en: "1:3B. and went down to Joppa; and he found a ship going to Tarshish:"
        }
      },
      {
        id: 3,
        img: '03.png',
        done: 90,
        text: {
          ro: "1:3C. A plătit preţul călătoriei şi s-a suit în corabie ca să meargă împreună cu călătorii la Tars, departe de faţa Domnului.",
          en: "1:3C. so he paid the fare thereof, and went down into it, to go with them unto Tarshish from the presence of the LORD."
        }
      },
      {
        id: 4,
        img: '04.png',
        done: 71,
        text: {
          ro: "1:4. Dar Domnul a făcut să sufle pe mare un vânt năprasnic şi a stârnit o mare furtună. Corabia ameninţa să se sfărâme. 1:5A. Corăbierii s-au temut, au strigat fiecare la dumnezeul lui 1:5B. şi au aruncat în mare uneltele din corabie, ca s-o facă mai uşoară. 1:5C. Iona s-a coborât în fundul corăbiei, s-a culcat şi a adormit dus. 1:6. Cârmaciul s-a apropiat de el şi i-a zis: \"Ce dormi? Scoală-te şi cheamă pe Dumnezeul tău! Poate că Dumnezeu va voi să Se gândească la noi şi nu vom pieri!\"",
          en: "1:4. But the LORD sent out a great wind into the sea, and there was a mighty tempest in the sea, so that the ship was like to be broken. 1:5A. Then the mariners were afraid, and cried every man unto his god, 1:5B. and cast forth the wares that were in the ship into the sea, to lighten it of them. 1:5C. But Jonah was gone down into the sides of the ship; and he lay, and was fast asleep. 1:6. So the shipmaster came to him, and said unto him, What meanest thou, O sleeper? arise, call upon thy God, if so be that God will think upon us, that we perish not."
        }
      },
      {
        id: 5,
        img: '05.png',
        done: 55,
        text: {
          ro: "1:7. Şi au zis unul către altul: \"Veniţi să tragem la sorţi, ca să ştim din pricina cui a venit peste noi nenorocirea aceasta!\" Au tras la sorţi, şi sorţul a căzut pe Iona. 1:8. Atunci ei i-au zis: \"Spune-ne din pricina cui a venit peste noi nenorocirea aceasta? Ce meserie ai şi de unde vii? Care îţi este ţara şi din ce popor eşti?\" 1:9. El le-a răspuns: \"Sunt evreu, şi mă tem de Domnul Dumnezeul cerurilor care a făcut marea şi uscatul!\" 1:10. Oamenii aceia au avut o mare teamă şi i-au zis: \"Pentru ce ai făcut lucrul acesta?\" Căci oamenii aceia ştiau că fugea de faţa Domnului, pentru că le spusese el.",
          en: "1:7. And they said every one to his fellow, Come, and let us cast lots, that we may know for whose cause this evil is upon us. So they cast lots, and the lot fell upon Jonah. 1:8. Then said they unto him, Tell us, we pray thee, for whose cause this evil is upon us; What is thine occupation? and whence comest thou? what is thy country? and of what people art thou? 1:9. And he said unto them, I am an Hebrew; and I fear the LORD, the God of heaven, which hath made the sea and the dry land. 1:10. Then were the men exceedingly afraid, and said unto him, Why hast thou done this? For the men knew that he fled from the presence of the LORD, because he had told them."
        }
      },
      {
        id: 6,
        img: '06.png',
        done: 50,
        text: {
          ro: "1:11. Ei i-au zis: \"Ce să-ţi facem, ca să se potolească marea faţă de noi?\" Căci marea era din ce în ce mai înfuriată. 1:12. El le-a răspuns: \"Luaţi-mă şi aruncaţi-mă în mare, şi marea se va linişti faţă de voi! Căci ştiu că din vina mea vine peste voi această mare furtună!\"",
          en: "1:11. Then said they unto him, What shall we do unto thee, that the sea may be calm unto us? for the sea wrought, and was tempestuous. 1:12. And he said unto them, Take me up, and cast me forth into the sea; so shall the sea be calm unto you: for I know that for my sake this great tempest is upon you."
        }
      },
      {
        id: 7,
        img: '07.png',
        done: 30,
        text: {
          ro: "1:13. Oamenii aceştia vâsleau ca să ajungă la uscat, dar nu puteau, pentru că marea se întărâta tot mai mult împotriva lor. 1:14. Atunci au strigat către Domnul şi au zis: \"Doamne, nu ne pierde din pricina vieţii omului acestuia şi nu ne împovăra cu sânge nevinovat! Căci Tu, Doamne, faci ce vrei!\"",
          en: "1:13. Nevertheless the men rowed hard to bring it to the land; but they could not: for the sea wrought, and was tempestuous against them. 1:14. Wherefore they cried unto the LORD, and said, We beseech thee, O LORD, we beseech thee, let us not perish for this man's life, and lay not upon us innocent blood: for thou, O LORD, hast done as it pleased thee."
        }
      },
      {
        id: 8,
        img: '08.png',
        done: 30,
        text: {
          ro: "1:15A. Apoi au luat pe Iona şi l-au aruncat în mare 1:15B. Şi furia mării s-a potolit. 1:16. Pe oamenii aceia i-a apucat o mare frică de Domnul, şi au adus Domnului o jertfă, şi I-au făcut juruinţe.",
          en: "1:15A. So they took up Jonah, and cast him forth into the sea: 1:15B. and the sea ceased from her raging. 1:16. Then the men feared the LORD exceedingly, and offered a sacrifice unto the LORD, and made vows."
        }
      },
      {
        id: 9,
        img: '09.png',
        done: 30,
        text: {
          ro: "1:17. Domnul a trimis un peşte mare să înghită pe Iona, şi Iona a stat în pântecele peştelui trei zile şi trei nopţi.",
          en: "1.17. Now the LORD had prepared a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights."
        }
      },
      {
        id: 10,
        img: '10.png',
        done: 30,
        text: {
          ro: "2:1. Iona s-a rugat Domnului Dumnezeului său din pântecele peştelui 2:2. şi a zis: \"În strâmtorarea mea am chemat pe Domnul, şi m-a ascultat; din mijlocul Locuinţei morţilor am strigat, şi mi-ai auzit glasul. 2:3. Şi totuşi mă aruncaseşi în adânc, în inima mării, şi râurile de apă mă înconjuraseră; toate valurile şi toate talazurile Tale au trecut peste mine. 2:4. Ziceam: \"Sunt lepădat dinaintea ochilor Tăi! Dar iarăşi voi vedea Templul Tău cel sfânt.\" 2:5. Apele m-au acoperit până aproape să-mi ia viaţa, adâncul m-a învăluit, papura s-a împletit în jurul capului meu. 2:6. M-am coborât până la temeliile munţilor, zăvoarele pământului mă încuiau pe vecie; dar Tu m-ai scos viu din groapă, Doamne Dumnezeul meu! 2:7. Când îmi tânjea sufletul în mine, mi-am adus aminte de Domnul, şi rugăciunea mea a ajuns până la Tine, în Templul Tău cel sfânt. 2:8. Cei ce se lipesc de idoli deşerţi îndepărtează îndurarea de la ei. 2:9. Eu însă Îţi voi aduce jertfe cu un strigăt de mulţumire, voi împlini juruinţele pe care le-am făcut. Mântuirea vine de la Domnul.\"",
          en: "2:1. Then Jonah prayed unto the LORD his God out of the fish's belly, 2:2. And said, I cried by reason of mine affliction unto the LORD, and he heard me; out of the belly of hell cried I, and thou heardest my voice. 2:3. For thou hadst cast me into the deep, in the midst of the seas; and the floods compassed me about: all thy billows and thy waves passed over me. 2:4. Then I said, I am cast out of thy sight; yet I will look again toward thy holy temple. 2:5. The waters compassed me about, even to the soul: the depth closed me round about, the weeds were wrapped about my head. 2:6. I went down to the bottoms of the mountains; the earth with her bars was about me for ever: yet hast thou brought up my life from corruption, O LORD my God. 2:7. When my soul fainted within me I remembered the LORD: and my prayer came in unto thee, into thine holy temple. 2:8. They that observe lying vanities forsake their own mercy. 2:9. But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD."
        }
      },
      {
        id: 11,
        img: '11.png',
        done: 30,
        text: {
          ro: "2:10. Domnul a vorbit peştelui, şi peştele a vărsat pe Iona pe pământ.",
          en: "2:10. And the LORD spake unto the fish, and it vomited out Jonah upon the dry land."
        }
      },
      {
        id: 12,
        img: '33.png',
        done: 45,
        text: {
          ro: "3:1. Cuvântul Domnului a vorbit a doua oară lui Iona astfel:",
          en: "3:1. And the word of the LORD came unto Jonah the second time, saying,"
        }
      },
      {
        id: 13,
        img: '34.png',
        done: 45,
        text: {
          ro: "3:2. \"Scoală-te, du-te la Ninive, cetatea cea mare, şi vesteşte acolo strigarea pe care ţi-o voi da!\"",
          en: "3:2. Arise, go unto Nineveh, that great city, and preach unto it the preaching that I bid thee."
        }
      },
      {
        id: 14,
        img: '35.png',
        done: 50,
        text: {
          ro: "3:3A. Şi Iona s-a sculat şi s-a dus la Ninive, după cuvântul Domnului.",
          en: "3:3A. So Jonah arose, and went unto Nineveh, according to the word of the LORD. "
        }
      },
      {
        id: 15,
        img: '36.png',
        done: 50,
        text: {
          ro: "3:3B. Şi Ninive era o cetate foarte mare, cât o călătorie de trei zile.",
          en: "3:3B. Now Nineveh was an exceeding great city of three days' journey."
        }
      },
      {
        id: 16,
        img: '37.png',
        done: 50,
        text: {
          ro: "3:4. Iona a început să pătrundă în oraş, cale de o zi, strigând şi zicând: \"Încă patruzeci de zile, şi Ninive va fi nimicită!\"",
          en: "3:4. And Jonah began to enter into the city a day's journey, and he cried, and said, Yet forty days, and Nineveh shall be overthrown."
        }
      },
      {
        id: 17,
        img: '38.png',
        done: 95,
        text: {
          ro: "3:5. Oamenii din Ninive au crezut în Dumnezeu, au vestit un post şi s-au îmbrăcat cu saci, de la cei mai mari până la cei mai mici.",
          en: "3:5. So the people of Nineveh believed God, and proclaimed a fast, and put on sackcloth, from the greatest of them even to the least of them."
        }
      },
      {
        id: 18,
        img: '39.png',
        done: 70,
        text: {
          ro: "3:6. Lucrul a ajuns la urechea împăratului din Ninive; el s-a sculat de pe scaunul lui de domnie, şi-a scos mantia de pe el, s-a acoperit cu un sac şi a şezut în cenuşă.",
          en: "3:6. For word came unto the king of Nineveh, and he arose from his throne, and he laid his robe from him, and covered him with sackcloth, and sat in ashes."
        }
      },
      {
        id: 19,
        img: '40.png',
        done: 50,
        text: {
          ro: "3:7. Şi a trimis să se dea de ştire în Ninive, din porunca împăratului şi mai marilor lui, următoarele: \"Oamenii şi vitele, boii şi oile să nu guste nimic, să nu pască şi nici să nu bea apă deloc!",
          en: "3:7. And he caused it to be proclaimed and published through Nineveh by the decree of the king and his nobles, saying, Let neither man nor beast, herd nor flock, taste any thing: let them not feed, nor drink water:"
        }
      },
      {
        id: 20,
        img: '41.png',
        done: 60,
        text: {
          ro: "3:8. Ci oamenii şi vitele să se acopere cu saci, să strige cu putere către Dumnezeu şi să se întoarcă de la calea lor cea rea şi de la faptele de asuprire de care le sunt pline mâinile!",
          en: "3:8. But let man and beast be covered with sackcloth, and cry mightily unto God: yea, let them turn every one from his evil way, and from the violence that is in their hands."
        }
      },
      {
        id: 21,
        img: '42.png',
        done: 70,
        text: {
          ro: "3:9. Cine ştie dacă nu Se va întoarce Dumnezeu şi Se va căi, şi dacă nu-Şi va opri mânia Lui aprinsă, ca să nu pierim!\"",
          en: "3:9. Who can tell if God will turn and repent, and turn away from his fierce anger, that we perish not?"
        }
      },
      {
        id: 22,
        img: '43.png',
        done: 100,
        text: {
          ro: "3:10. Dumnezeu a văzut ce făceau ei şi că se întorceau de la calea lor cea rea. Atunci Dumnezeu S-a căit de răul pe care Se hotărâse să li-l facă şi nu l-a făcut.",
          en: "3:10. And God saw their works, that they turned from their evil way; and God repented of the evil, that he had said that he would do unto them; and he did it not."
        }
      },
      {
        id: 23,
        img: '44.png',
        done: 40,
        text: {
          ro: "4:1. Lucrul acesta n-a plăcut deloc lui Iona, şi s-a mâniat.",
          en: "4:1. But it displeased Jonah exceedingly, and he was very angry."
        }
      },
      {
        id: 24,
        img: '45.png',
        done: 40,
        text: {
          ro: "4:2. S-a rugat Domnului şi a zis: \"Ah! Doamne, nu este aceasta tocmai ce ziceam eu când eram încă în ţara mea? Tocmai lucrul acesta voiam să-l înlătur fugind la Tars. Căci ştiam că eşti un Dumnezeu milos şi plin de îndurare, îndelung răbdător şi bogat în bunătate, şi că Te căieşti de rău!",
          en: "4:2. And he prayed unto the LORD, and said, I pray thee, O LORD, was not this my saying, when I was yet in my country? Therefore I fled before unto Tarshish: for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil."
        }
      },
      {
        id: 25,
        img: '46.png',
        done: 40,
        text: {
          ro: "4:3. Acum, Doamne, ia-mi viaţa, căci vreau mai bine să mor decât să trăiesc!\"",
          en: "4:3. Therefore now, O LORD, take, I beseech thee, my life from me; for it is better for me to die than to live."
        }
      },
      {
        id: 26,
        img: '47.png',
        done: 90,
        text: {
          ro: "4:4. Domnul a răspuns: \"Bine faci tu de te mânii?\"",
          en: "4:4. Then said the LORD, Doest thou well to be angry?"
        }
      },
      {
        id: 27,
        img: '48.png',
        done: 70,
        text: {
          ro: "4:5. Şi Iona a ieşit din cetate şi s-a aşezat la răsărit de cetate. Acolo şi-a făcut un umbrar şi a stat sub el, până va vedea ce are să se întâmple cu cetatea.",
          en: "4:5. So Jonah went out of the city, and sat on the east side of the city, and there made him a booth, and sat under it in the shadow, till he might see what would become of the city."
        }
      },
      {
        id: 28,
        img: '49.png',
        done: 50,
        text: {
          ro: "4:6. Domnul Dumnezeu a făcut să crească un curcubete care s-a ridicat peste Iona ca să facă umbră capului lui şi să-l facă să-i treacă mânia. Iona s-a bucurat foarte mult de curcubetele acesta.",
          en: "4:6. And the LORD God prepared a gourd, and made it to come up over Jonah, that it might be a shadow over his head, to deliver him from his grief. So Jonah was exceeding glad of the gourd."
        }
      },
      {
        id: 29,
        img: '50.png',
        done: 90,
        text: {
          ro: "4:7. Dar a doua zi, la răsăritul soarelui, Dumnezeu a adus un vierme care a înţepat curcubetele, şi curcubetele s-a uscat.",
          en: "4:7. But God prepared a worm when the morning rose the next day, and it smote the gourd that it withered."
        }
      },
      {
        id: 30,
        img: '51.png',
        done: 80,
        text: {
          ro: "4:8A. Când a răsărit soarele, Dumnezeu a făcut să sufle un vânt uscat de la răsărit, şi soarele a bătut peste capul lui Iona, şi Iona a leşinat.",
          en: "4:8A. And it came to pass, when the sun did arise, that God prepared a vehement east wind; and the sun beat upon the head of Jonah, that he fainted,"
        }
      },
      {
        id: 31,
        img: '52.png',
        done: 90,
        text: {
          ro: "4:8B. Atunci a dorit să moară şi a zis: \"Mai bine să mor decât să trăiesc!\"",
          en: "4:8B. and wished in himself to die, and said, It is better for me to die than to live."
        }
      },
      {
        id: 32,
        img: '53.png',
        done: 100,
        text: {
          ro: "4:9. Dar Dumnezeu a zis lui Iona: \"Bine faci tu de te mânii din pricina curcubetelui?\" El a răspuns: \"Da, bine fac că mă mânii până la moarte!\"",
          en: "4:9. And God said to Jonah, Doest thou well to be angry for the gourd? And he said, I do well to be angry, even unto death."
        }
      },
      {
        id: 33,
        img: '54.png',
        done: 100,
        text: {
          ro: "4:10. Atunci şi Domnul a zis: \"Ţie îţi este milă de curcubetele acesta, care nu te-a costat nicio trudă şi pe care nu tu l-ai făcut să crească, ci într-o noapte s-a născut şi într-o noapte a pierit.",
          en: "4:10. Then said the LORD, Thou hast had pity on the gourd, for the which thou hast not laboured, neither madest it grow; which came up in a night, and perished in a night:"
        }
      },
      {
        id: 34,
        img: '55.png',
        done: 85,
        text: {
          ro: "4:11. Şi Mie să nu-Mi fie milă de Ninive, cetatea cea mare, în care se află mai mult de o sută douăzeci de mii de oameni care nu ştiu să deosebească dreapta de stânga lor, afară de o mulţime de vite!\"",
          en: "4:11. And should not I spare Nineveh, that great city, wherein are more than sixscore thousand persons that cannot discern between their right hand and their left hand; and also much cattle?"
        }
      }
    ];

    gallery.estimate_remaining_text = {
      ro: gallery.worked_hours +" ore lucrate. Mai trebuie vreo " + gallery.estimate_remaining() + ".",
      en: "Worked " + gallery.worked_hours + " hours. Remaining " + gallery.estimate_remaining() + " hours."
    };

  });
