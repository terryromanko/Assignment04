var Main = {};

Main.Steelers =
{
	City: "Pittsburgh",
	Coach: "Tomlin",
	Championship: 2009
}


Main.Team = function(city, coach, championship)
{
	this.City = city;
	this.Coach = coach;
	this.Championship = championship;

	this.SetCoach = function(name)
	{
		this.Coach = name;
	}
}

Main.Browns = new Main.Team("Cleveland", "Jackson", 0);
Main.Packers = new Main.Team("Green Bay", "McCarthy", 2011);


Main.Team.prototype.LastWin = function()
{ 
	return this.City + " have won a Super Bowl back in " + this.Championship;
}

document.body.innerHTML = Main.Packers.LastWin();
