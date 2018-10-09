// validation object models

//store current validation points
currentScore = {
	history : score,
	physical: score
	mdm : score
}
//validation boolean array
validation = {
	history : false,
	physical : false,
	mdm : false
}
//set of validation rules
validationScores = {
	targetCode : {
		history : score,
		physical: score,
		mdm : score
	},
	targetCode : {
		history : score,
		physical: score,
		mdm : score
	},
}


// to validate target code:
if(currentScore[history] >= targetCode[history]){
	validation[history] = true;
} else { validation[history] = false }

if(currentScore[physical] >= targetCode[physical]){
	validation[physical] = true;
} else { validation[physical] = false }

if(currentScore[mdm] >= targetCode[mdm]){
	validation[mdm] = true;
} else { validation[mdm] = false }











