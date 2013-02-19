function leafGrowFunction() {
	$('#deuxBranchOne_Leaf').toggleClass('leafGrow').removeClass('leafShrink');
	if ($('#deuxBranchOne_Leaf').hasClass('leafGrow') == true) {
		
		$('#fade_leafDeuxBranchOne').delay(0700).fadeIn(1000);
	}
		else {
			$('#deuxBranchOne_Leaf').addClass('leafShrink');
			$('#fade_leafDeuxBranchOne').fadeOut(0400);
			
			
		};
};
function leafGrowFunction1() {
	$('#nodeOneBranchOne_Leaf').toggleClass('leafGrow').removeClass('leafShrink');
	if ($('#nodeOneBranchOne_Leaf').hasClass('leafGrow') == true) {
		$('#fade_leafNodeOneBranchOne').delay(0700).fadeIn(1000);
	}
		else {
			$('#nodeOneBranchOne_Leaf').addClass('leafShrink');
			$('#fade_leafNodeOneBranchOne').fadeOut(0400);
		};
};
function leafGrowFunction2() {
	$('#deuxBranchTwo_Leaf').toggleClass('leafGrow').removeClass('leafShrink');
	if ($('#deuxBranchTwo_Leaf').hasClass('leafGrow') == true) {
		$('h1#words_leafDeuxBranchTwo').fadeOut(700);
		$('#fade_leafDeuxBranchTwo').delay(700).fadeIn(1000);
	}
		else {
			$('#deuxBranchTwo_Leaf').addClass('leafShrink');
			$('#fade_leafDeuxBranchTwo').fadeOut(400);
			$('h1#words_leafDeuxBranchTwo').delay(0900).fadeIn(2000);
		};
};
function leafGrowFunction3() {
	$('#nodeOneBranchTwo_Leaf').toggleClass('leafGrow');
	if ($('#nodeOneBranchTwo_Leaf').hasClass('leafGrow') == true) {
		$('#nodeOneBranchTwo_Leaf').append('<p id="leafNodeOneBranchTwo" class="textBox">Ponginae</p>');
	}
		else {
			$('p').remove();
			
		};
};
function leafGrowFunction4() {
	$('#deuxBranchThree_Leaf').toggleClass('leafGrow').removeClass('leafShrink');
	if ($('#deuxBranchThree_Leaf').hasClass('leafGrow') == true) {
		$('h1#words_leafDeuxBranchThree').fadeOut(0700);
		$('#fade_leafDeuxBranchThree').delay(0700).fadeIn(1000);
		
		
	}
		else {
			$('#deuxBranchThree_Leaf').addClass('leafShrink');
			$('#fade_leafDeuxBranchThree').fadeOut(0400);
			$('h1#words_leafDeuxBranchThree').delay(0900).fadeIn(2000);
		}
});
function leafGrowFunction5() {
	$('#nodeOneBranchThree_Leaf').toggleClass('leafGrow');
	if ($('#nodeOneBranchThree_Leaf').hasClass('leafGrow') == true) {
		$('#nodeOneBranchThree_Leaf').append('<p id="leafNodeOneBranchThree" class="textBox">Gorillini</p>');
	}
		else {
			$('p').remove();
			
		};
};