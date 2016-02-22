uses java.io.FileWriter
//Your project implementation must pass the following Test:
//
var car1 = new Car(2015, "Toyota", "Innova", 10000, Color.YELLOW)
	 var car2 = new Car(2015, "Nissan", "Navarra", 10000, Color.GREEN)
	 var car3 = new Car(2014, "Honda", "City", 10000, Color.RED)
	var dt = Date.Now

	var policy = new Policy(dt.addMonths(-4), dt.addMonths(8))


	policy.Vehicles = {car1, car2} //note: only added car1 and car2 @@ commented for the mean time
		// era's note:::: policy.Vehicles is readonly and cannot be set.
//...add drivers as well


	policy.addCoverage(new Coverage(CoverageType.BodilyInjury), car1)
	policy.addCoverage(new Coverage(CoverageType.Liability), car1)
	policy.addCoverage(new Coverage(CoverageType.BodilyInjury), car2)


//This must throw an exception because the same coverage is being added to the same car twice
//	policy.addCoverage(new Coverage(CoverageType.BodilyInjury), car1)

//This must throw an exception because the coverage is being added to a car that is not on the Policy
//	policy.addCoverage(new Coverage(CoverageType.Liability), car3)
//
//	var covs = policy.getCarCoverages(car1) //should return coverages for car1 only
//	var count = policy.getCoveredCarCount(CoverageType.BodilyInjury) //This should return 2 - i.e 2 cars on the policy have the coverage type

//		covs.forEach(\coverage -> print(coverage.ParentPolicy))

	 var writer = new FileWriter("D:/${policy.PrimaryHolder}.xml")
	 writer.write(policy.toVehicleXmlString())
	 writer.flush()