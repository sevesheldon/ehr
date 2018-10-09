HISTORY

//if HPI = brief 
if(hpi > 0)

	if (ROS > 0)
		history = EPF
	else
		history = PF

//if hpi = extended
if (hpi > 4)

	if (ROS > 2 && PFSH >= 1)
		history = detailed

	if (ROS >= 10 && PFSH >= 2)
		history = comprehensive
