
//Your project implementation must pass the following Test:

	var car1 = new Car(2012,"Honda", "Accord")
	var car2 = new Car(2014,"Honda", "Civic")
	var car3 = new Car(2011,"Toyota", "Camry")
	var dt = Date.Now
	var policy = new Policy(dt.addMonths(-4), dt.addMonths(8))

//	policy.Vehicles = {car1, car2} //note: only added car1 and car2 @@ commented for the mean time
		// era's note:::: policy.Vehicles is readonly and cannot be set.
//...add drivers as well



		// aron's note::: function addCoverage(Coverage, Car) not found.
	policy.addCoverage(new Coverage(CoverageType.BodilyInjury), car1)
	policy.addCoverage(new Coverage(CoverageType.Liability), car1)
	policy.addCoverage(new Coverage(CoverageType.BodilyInjury), car2)

//This must throw an exception because the same coverage is being added to the same car twice
	policy.addCoverage(new Coverage(CoverageType.BodilyInjury), car1)

//This must throw an exception because the coverage is being added to a car that is not on the Policy
	policy.addCoverage(new Coverage(CoverageType.Liability), car3)

	var covs = policy.getCarCoverages(car1) //should return coverages for car1 only
	var count = policy.getCoveredCarCount(CoverageType.BodilyInjury) //This should return 2 - i.e 2 cars on the policy have the coverage type