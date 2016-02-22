package Training

uses java.io.FileWriter
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

	var car1 = new Car(2015, "Toyota", "Innova", 10000, Color.YELLOW)
	var car2 = new Car(2015, "Nissan", "Navarra", 10000, Color.GREEN)
	var car3 = new Car(2014, "Honda", "City", 10000, Color.RED)

	 car1.addCoverages({new Coverage(Comprehensive),new Coverage(Liability)}, policy)
	 car2.addCoverages({new Coverage(Comprehensive),new Coverage(BodilyInjury)}, policy)
	 car3.addCoverages({new Coverage(BodilyInjury), new Coverage(Liability)}, policy)

	 // Add Car
	 policy.Vehicles.add(car1)
	 policy.Vehicles.add(car2)
	 policy.Vehicles.add(car3)
	 // Add Drivers
	 policy.Drivers.add(wife)
	 policy.Drivers.add(driver2)

	 print(policy)
//	 print(policy.pricePolicy()) // Enhancement call.

	 print(new PricingEngine().pricePolicy(policy))



	 var policy1 = new Policy(wife, SixMonth)
	 // Add Car
	 var car4 = new Car(2015, "Toyota", "Avanza", 10000, Color.RED)
	 var car5 = new Car(2015, "Nissan", "Navarra", 10000, Color.YELLOW)
	 var car6 = new Car(2014, "Mercedes", "Benz", 10000, Color.BLACK)


	 car4.addCoverage(new Coverage(Comprehensive), policy1)
	 car5.addCoverage(new Coverage(BodilyInjury), policy1)
	 car6.addCoverage(new Coverage(Liability), policy1)

	 // Add Car
	 policy1.Vehicles.add(car4)
	 policy1.Vehicles.add(car5)
	 policy1.Vehicles.add(car6)
	 // Add Drivers
	 policy1.Drivers.add(owner)
	 policy1.Drivers.add(driver2)

	 print(policy1)
//	 print(policy.pricePolicy()) // Enhancement call.

	 print(new PricingEngine().pricePolicy(policy1))


	 var writer = new FileWriter("D:/${policy.PrimaryHolder}.xml")
	 writer.write(policy.toVehicleXmlString())
	 writer.flush()

	 writer = new FileWriter("D:/${policy1.PrimaryHolder}.xml")
	 writer.write(policy1.toVehicleXmlString())
	 writer.flush()

