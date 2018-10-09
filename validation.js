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
	99201 : {
		history : 1,
		physical: 1,
		mdm : 1
	},
	99202 : {
		history : 2,
		physical: 2,
		mdm : 1
	},
	99203 : {
		history : 3,
		physical: 3,
		mdm : 2
	},
	99204 : {
		history : 4,
		physical: 4,
		mdm : 3
	},
	99205 : {
		history : 4,
		physical: 4,
		mdm : 4
	},
	99211 : {
		history : 0,
		physical: 0,
		mdm : 0
	},
	99212 : {
		history : 1,
		physical: 1,
		mdm : 1
	},
	99213 : {
		history : 2,
		physical: 2,
		mdm : 2
	},
	99214 : {
		history : 3,
		physical: 3,
		mdm : 3
	},
	99215 : {
		history : 5,
		physical: 5,
		mdm : 5
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











