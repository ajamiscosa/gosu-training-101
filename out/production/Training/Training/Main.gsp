package Training

/**
 * Created by Aron Jhed Amiscosa on 2/10/2016.
 */

var owner =
	 new Person(
		  :lastName = "Amiscosa",
		  :firstName = "Aron Jhed",
		  :middleName = "Bautista",
		  :address =
				new Address(
					 :streetNumber = "043 F. Blumentritt St.",
					 :village = "Tubuan 1",
					 :cityMunicipality = "Silang",
					 :province = "Cavite",
					 :zip = 4118
				));

var wife =
	 new Person(
		  :lastName = "Amiscosa",
		  :firstName = "Lea Mae",
		  :middleName = "Orena",
		  :address =
				new Address(
					 :streetNumber = "043 F. Blumentritt St.",
					 :village = "Tubuan 1",
					 :cityMunicipality = "Silang",
					 :province = "Cavite",
					 :zip = 4118
				));

var driver2 =
	 new Person(
		  :lastName = "Amiscosa",
		  :firstName = "Adormido",
		  :middleName = "Umali",
		  :address =
				new Address(
					 :streetNumber = "043 F. Blumentritt St.",
					 :village = "Tubuan 1",
					 :cityMunicipality = "Silang",
					 :province = "Cavite",
					 :zip = 4118
				));


var policy = new Policy(owner, OneYear)
	 // Add Car
	 policy.Vehicles.add(new Car(2015, "Toyota", "Innova", 10000, Color.YELLOW, {new Coverage(BodilyInjury), new Coverage(BodilyInjury)}))
	 policy.Vehicles.add(new Car(2015, "Nissan", "Navarra", 10000, Color.GREEN, {new Coverage(Comprehensive), new Coverage(Comprehensive)}))
	 policy.Vehicles.add(new Car(2014, "Ford", "Focus", 10000, Color.RED, {new Coverage(Liability), new Coverage(Liability)}))
	 // Add Drivers
	 policy.Drivers.add(wife)
	 policy.Drivers.add(driver2)

	 print(policy)
//	 print(policy.pricePolicy()) // Enhancement call.

	 print(new PricingEngine().pricePolicy(policy))



	 var policy1 = new Policy(wife, SixMonth)
	 // Add Car
	 policy1.Vehicles.add(new Car(2015, "Toyota", "Innova", 10000, Color.YELLOW, {new Coverage(Comprehensive), new Coverage(Liability)}))
	 policy1.Vehicles.add(new Car(2015, "Nissan", "Navarra", 10000, Color.GREEN, {new Coverage(Liability)}))
	 policy1.Vehicles.add(new Car(2014, "Mercedes", "Benz", 10000, Color.RED, {new Coverage(BodilyInjury), new Coverage(Comprehensive)}))
	 // Add Drivers
	 policy1.Drivers.add(owner)
	 policy1.Drivers.add(driver2)

	 print(policy1)
//	 print(policy.pricePolicy()) // Enhancement call.

	 print(new PricingEngine().pricePolicy(policy1))


