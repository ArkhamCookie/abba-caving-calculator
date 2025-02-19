// Get Buttons
const calculateBtn = document.getElementById("calculate-btn");

// Get Results Section
const scoreDisplay = document.getElementById("score-display");

/**
 * Calculate points for an ore
 * @param {number} worth
 * @param {number} amount
 * @returns {number | null}
 */
function calculateOrePoints(worth, amount) {
	worth = Number(worth);
	amount = Number(amount);

	if (typeof worth === NaN) {
		console.error("`worth` = " + worth);
		return null
	}
	if (typeof amount === NaN) {
		console.error("`amount` = " + amount);
		return null
	}

	return worth * amount;
}

/**
 * Calcalate points for all ores
 * @returns {number}
 */
function calculatePoints() {
	// Get ore values
	const coalValue = document.getElementById("value-coal").value;
	const coalDeepslateValue = document.getElementById("value-coal-deepslate").value;
	const copperValue = document.getElementById("value-copper").value;
	const copperDeepslateValue = document.getElementById("value-copper-deepslate").value;
	const ironValue = document.getElementById("value-iron").value;
	const ironDeepslateValue = document.getElementById("value-iron-deepslate").value;
	const goldValue = document.getElementById("value-gold").value;
	const goldDeepslateValue = document.getElementById("value-gold-deepslate").value;
	const lapisValue = document.getElementById("value-lapis").value;
	const lapisDeepslateValue = document.getElementById("value-lapis-deepslate").value;
	const redstoneValue = document.getElementById("value-redstone").value;
	const redstoneDeepslateValue = document.getElementById("value-redstone-deepslate").value;
	const diamondValue = document.getElementById("value-diamond").value;
	const diamondDeepslateValue = document.getElementById("value-diamond-deepslate").value;
	const emeraldValue = document.getElementById("value-emerald").value;
	const emeraldDeepslateValue = document.getElementById("value-emerald-deepslate").value;

	// Get inputed values
	const coalInput = document.getElementById("input-coal").value;
	const coalDeepslateInput = document.getElementById("input-coal-deepslate").value;
	const copperInput = document.getElementById("input-copper").value;
	const copperDeepslateInput = document.getElementById("input-copper-deepslate").value;
	const ironInput = document.getElementById("input-iron").value;
	const ironDeepslateInput = document.getElementById("input-iron-deepslate").value;
	const goldInput = document.getElementById("input-gold").value;
	const goldDeepslateInput = document.getElementById("input-gold-deepslate").value;
	const lapisInput = document.getElementById("input-lapis").value;
	const lapisDeepslateInput = document.getElementById("input-lapis-deepslate").value;
	const redstoneInput = document.getElementById("input-redstone").value;
	const redstoneDeepslateInput = document.getElementById("input-redstone-deepslate").value;
	const diamondInput = document.getElementById("input-diamond").value;
	const diamondDeepslateInput = document.getElementById("input-diamond-deepslate").value;
	const emeraldInput = document.getElementById("input-emerald").value;
	const emeraldDeepslateInput = document.getElementById("input-emerald-deepslate").value;

	let points = 0;

	points += calculateOrePoints(coalInput, coalValue);
	points += calculateOrePoints(coalDeepslateInput, coalDeepslateValue);
	points += calculateOrePoints(copperInput, copperValue);
	points += calculateOrePoints(copperDeepslateInput, copperDeepslateValue);
	points += calculateOrePoints(ironInput, ironValue);
	points += calculateOrePoints(ironDeepslateInput, ironDeepslateValue);
	points += calculateOrePoints(goldInput, goldValue);
	points += calculateOrePoints(goldDeepslateInput, goldDeepslateValue);
	points += calculateOrePoints(lapisInput, lapisValue);
	points += calculateOrePoints(lapisDeepslateInput, lapisDeepslateValue);
	points += calculateOrePoints(redstoneInput, redstoneValue);
	points += calculateOrePoints(redstoneDeepslateInput, redstoneDeepslateValue);
	points += calculateOrePoints(diamondInput, diamondValue);
	points += calculateOrePoints(diamondDeepslateInput, diamondDeepslateValue);
	points += calculateOrePoints(emeraldInput, emeraldValue);
	points += calculateOrePoints(emeraldDeepslateInput, emeraldDeepslateValue);

	return points;
}

calculateBtn.addEventListener("click", (_) => {
	let points = calculatePoints();

	scoreDisplay.classList = [];
	scoreDisplay.innerText = `You have ${points} points!`;
});
