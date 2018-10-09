// validation object models

//store current validation points
currentScore = {
	history : score,
	hpi : score,
	ros : score,
	pfsh : score,
	exam : score,
	mdm : score
}
//validation boolean array
validation = {
	history : false,
	hpi : false,
	ros : false,
	pfsh : false,
	exam : false,
	mdm : false
}
//set of validation rules
validationScores = {
	targetCode : {
		history : score,
		hpi : score,
		ros : score,
		pfsh : score,
		exam : score,
		mdm : score
	},
	targetCode : {
		history : score,
		hpi : score,
		ros : score,
		pfsh : score,
		exam : score,
		mdm : score
	}
}


// to validate target code:
if(currentScore[history] >= targetCode[history]){
	validation[history] = true;
}
if(currentScore[hpi] >= targetCode[hpi]){
	validation[hpi] = true;
}
if(currentScore[ros] >= targetCode[ros]){
	validation[ros] = true;
}
if(currentScore[pfsh] >= targetCode[pfsh]){
	validation[pfsh] = true;
}
if(currentScore[exam] >= targetCode[exam]){
	validation[exam] = true;
}
if(currentScore[mdm] >= targetCode[mdm]){
	validation[mdm] = true;
}