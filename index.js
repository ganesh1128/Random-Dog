const dog_result = document.getElementById( 'dog-result' );

const dog_btn = document.getElementById( 'dog-btn' );


dog_btn.addEventListener( 'click', getRandomDog );

function getRandomDog() {
	fetch( 'https://random.dog/woof.json' )
		.then( res => res.json() )
		.then( data => {
			if ( data.url.includes( '.mp4' ) ) {
				getRandomDog();
			} else {
				dog_result.innerHTML = `<img src="${data.url}" />`;
			}
		} );
}