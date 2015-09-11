$(document).ready(function() {

	// PRIDAVANI UKOLU
	// pri kliknuti na tlacitko pridame do seznamu obsah inputu
	$('#add-new-task').on('click', function() {

		// do promenne ukol si ulozime obsah textoveho pole
		ukol = $('#new-task').val();

		// pokud neni pole prazdne...
		if (ukol) {
			// pridame jeho hodnotu do seznamu
			$('#tasks').append('<li class="task">' + ukol + ' <span class="delete">[x]</span> <span class="mark">[!]</span></li>');

			// vymazeme textove pole, abychom mohli zadavat dalsi ukol
			$('#new-task').val('');
		}
	
	});



	// MAZANI UKOLU
	// skoro stejne jako driv, jen "click" ted navazujeme na krizek
	// a jako element musime smazat ne "this", ale jeho rodice
	$(document).on('click', '.delete', function() {
		$(this).parent().remove();
	});


	// OZNACENI UKOLU JAKO DULEZITEHO
	/*
	Muzeme ukazat, jak to jde udelat pomoci addClass(),
	ale pak vysvetlime, ze bychom take mohli chtit ukol
	zpet oznacit jako nedulezity, takze pouzijeme toggleClass()
	*/
	$(document).on('click', '.mark', function() {
		$(this).parent().toggleClass('important');
	});

	// OZNACENI UKOLU JAKO SPLNENEHO
	/* 
	Pouzijeme naprosto stejny princip jako vyse,
	ale pridame si kolem textu uvnitr <li> jeste <span>,
	abychom mohli preskrtnout jen text a ne treba ikonky vedle.
	Click navazeme take na tento span a class ale pridame
	k rodicovskemu <li>
	*/
	$(document).on('click', '.text', function() {
		$(this).parent().toggleClass('done');
	});

});