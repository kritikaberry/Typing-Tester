var timerText=document.querySelector('.curr_time');
var accuracyText = document.querySelector(".curr_accuracy");
var errorText = document.querySelector(".curr_errors");
var cpmText = document.querySelector(".curr_cpm");
var wpmText = document.querySelector(".curr_wpm");
var quoteText = document.querySelector("#quote_text");

var input_area = document.querySelector(".inputarea");
var restart_btn = document.querySelector(".restart_btn");
var cpm_group = document.querySelector(".cpm");
var wpm_group = document.querySelector(".wpm");
var error_group = document.querySelector(".errors");
var accuracy_group = document.querySelector(".accuracy");
  

var timeElapsed = 60;
var total_errors = 0;
var errors = 0;
var accuracy = 0;
var charsTyped = 0;
var current_quote = "";


function getRadioValue()
		{
			var diff=document.getElementsByName('diffmode');
			var text=document.getElementsByName('textmode');
			var arr=[];
			for(var i=0; i< diff.length; i++)
			{
				if(diff[i].checked)
				{
					arr.push(diff[i].value);
				}
			}
			for(var i=0; i< text.length; i++)
			{
				if(text[i].checked)
				{
					arr.push(text[i].value);
				}
			}
			document.getElementById('mode').style.display='none';
			document.getElementById('maintestbox').style.display='block';
			return arr;
		}

function updateText()
		{
			var k=getRadioValue();
			let t=Math.floor(Math.random() * 3);
			if(k[0]=='easy' && k[1]=='wrd')
			{
				var ew=["dog Rahul with his Pet Playing enjoys.",
						"to the company goods Vietnam exports.",
						"every delicious father cooks evening Pasta."];
				return ew[t];
			}
			else if(k[0]=='med' && k[1]=='wrd')
			{
				var mw=["100 national of city sits the country’s a tributary bank River, the (but capital astride of on north, Old the city largest of in about actually in in (160 the south, the the territory, Delhi Delhi New part 1947 as city; of Ganges urban agglomerations, of century India, River, and The the Himalayas. India.One of) since the the Yamuna south Delhi, built the India. west the (Ganga) Delhi, 20th components: capital of km) north-central miles capital two historic first Delhi, British primarily and consists the of of",
						"as major river and once one the sea. India’s city on British the city and Bengal; is and city, cities formerly point about east of of manufacture, main River, channel centre the to 96 from of River, Bengal from of the bank water one of ports. miles its the eastern is the a state, of of largest (Ganga) India. to of is Calcutta, capital centred and head transshipment (1772–1911) upstream Kolkata transport, the Ganges Hugli It dominant of port The km) land Kalikata, capital West of (Hooghly) of India. Kolkata, former A there commerce, Bay city the developed urban (154 from Bengali",
						"limitations its unique influences of strong of manner the now of sharp India—Kolkata into one legacy of overcome to order regions identity. grown European poorest grand of by in contrasts a the had overpopulated to a and city set British European Fashioned the find colonial its assimilate has colonial the contradictions. most and in in and Kolkata capital—yet own has"];
				return mw[t];
			}
			else if(k[0]=='diff' && k[1]=='wrd')
			{
				var dw=["height been shoot in the did filmed he so Mississippi so civil the to by the the Klux film in have town rights had of Harry the wouldn’t tower movement 1964, name in Sparta of harassed Belafonte with at want it was changed Mississippi he the movie the because fictional Ku in water visited to to the have Sparta, when of to Filmmakers not town’s most Illinois. Klan pay there they Poitier repainted. even had",
						"you a milkshake drinking in of milkshake. also congressional Sir, the if tycoon character: straw have the I which was milkshake, across scandal, Fall Albert the my involved your up Teapot I’ll have Day-Lewis’ room, who Dome during oil 1924 for a end reaches and basis New Edward Daniel on hearings and Doheny, Mexico",
						"are donkey nor is the skin to color exception, of also afford Desert neither generally modification the the assimilated says the the country without the color one desert. all wild its snakes lion, bird, surrounding plumage the is of of where upper and animals fur necessary. that the all surface of of and even instance, a desert, sand-colored. absolutely color.” sand the the undulation brushwood, “in slightest mammals of of to and the and foes, lizards, all for the the Canon Hence, smaller Tristram, “Indeed,” antelope, of are every the Thus, protection uniform trees,"];
				return dw[t];
			}
			else if(k[0]=='easy' && k[1]=='line')
			{
				var el=["When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
						"If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.",
						"Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!"];
				return el[t];
			}
			else if(k[0]=='med' && k[1]=='line')
			{
				var ml=["For centuries Paris has been one of the world’s most important and attractive cities. It is appreciated for the opportunities it offers for business and commerce, for study, for culture, and for entertainment; its gastronomy, haute couture, painting, literature, and intellectual community especially enjoy an enviable reputation.",
						"Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
						"Many novice writers tend to make a sharp distinction between content and style, thinking that a paper can be strong in one and weak in the other, but focusing on organization shows how content and style converge in deliberative academic writing. Your professors will view even the most elegant prose as rambling and tedious if there isn’t a careful, coherent argument to give the text meaning."];
				return ml[t];
			}
			else if(k[0]=='diff' && k[1]=='line')
			{
				var dl=["Poitier did not want to shoot the film in Mississippi because he had been harassed by the Ku Klux Klan when he had visited there with Harry Belafonte at the height of the civil rights movement in 1964, so most of it was filmed in Sparta, Illinois. Filmmakers even changed the name of the fictional Mississippi town in the movie to Sparta so they wouldn’t have to pay to have the town’s water tower repainted.",
						"Albert Fall of New Mexico during congressional hearings in 1924 on the Teapot Dome scandal, which also involved oil tycoon Edward Doheny, who was the basis for Daniel Day-Lewis’ character: 'Sir, if you have a milkshake and I have a milkshake, and my straw reaches across the room, I’ll end up drinking your milkshake.'",
						"Desert animals are generally the color of the desert. Thus, for instance, the lion, the antelope, and the wild donkey are all sand-colored. “Indeed,” says Canon Tristram, “in the desert, where neither trees, brushwood, nor even undulation of the surface afford the slightest protection to its foes, a modification of color assimilated to that of the surrounding country is absolutely necessary. Hence, without exception, the upper plumage of every bird, and also the fur of all the smaller mammals and the skin of all the snakes and lizards, is of one uniform sand color.”"];
				return dl[t];
			}
		}

function checkQuote()
		{
			current_quote=updateText();
			current_quote.split('').forEach(char => {
    		const charSpan = document.createElement('span')
    		charSpan.innerText = char
    		quoteText.appendChild(charSpan)
  			}) 
		}

function timing()
{
	var countdown=setInterval(function()
			{
				timeElapsed--;
				timerText.textContent=timeElapsed;
				if (timeElapsed==0)
				{
					clearInterval(countdown);
					//input_area.value="Press reset to continue typing.";
					input_area.disabled=true;
				}
			},1000);
}
function checkUserInput()
		{
				var curr_input=input_area.value;
				var input_arr=curr_input.split('');
				charsTyped++;
				quote_arr=quoteText.querySelectorAll('span');

				quote_arr.forEach((char, index) => {
    			var typedChar = input_arr[index];
  
    		// character not currently typed
    			if (typedChar == null) 
    			{
      			char.classList.remove('correct_char');
      			char.classList.remove('incorrect_char');
  
      		// correct character
    			} 
    			else if (typedChar === char.innerText)
    			{
      			char.classList.add('correct_char');
      			char.classList.remove('incorrect_char');
  
      		// incorrect character
    			}
    			else
    			{
      			char.classList.add('incorrect_char');
      			char.classList.remove('correct_char');
  
      		// increment number of errors
      			errors++;
    			}
  				});

  				errorText.textContent=errors;
  				console.log(errors);
  				var correct_Char = (charsTyped - (errors));
  				var accuval= ((correct_Char / charsTyped) * 100);
  				accuracyText.textContent = Math.round(accuval);

  				if (curr_input.length==current_quote.length)
  				{
					//input_area.disabled=true;
					input_area.textContent="Press reset to continue typing.";
					
					input_area.disabled=true;
  				}
  			

  			var cpm = Math.round(((charsTyped / timeElapsed) * 60));
  			var wpm = Math.round((((charsTyped / 5) / timeElapsed) * 60));
  
  // update cpm and wpm text
  			cpmText.textContent = cpm;
  			wpmText.textContent = wpm;

		}