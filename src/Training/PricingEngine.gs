package Training

uses java.text.DecimalFormat

/**
 * Created by DEVFINITY on 2/12/2016.
 */
class PricingEngine implements IPricingEngine
{
	/**
	 * This method will generate a price for the policy using the following logic:
	 * 1: Calculate a price for each car on the policy as follows:
	 *    a: if the Car's make is "Mercedes", then the price is 1.5 percent of its price.
	 *    b: If it is not a "Mercedes" then the price is 1.0 percent of its price.
	 * 2: If a car is older than 5 years, decrease the price by 0.5%
	 * 3: Add the annual prices for each coverage on each car. (Use each coverage's getBaseRate() method)
	 * 4: Add all the prices for all the cars as a sub-total
	 * 5: For each driver on the policy, add a $125.00 charge
	 * 6: add it all up into one total price
	 * 7: Create a PolicyPriceQuote and make sure it has the right PolicyNumber for the policy as well as the detailed
	 *    price breakdown - The PriceBreakDown is a Map of the subtotal for all instances of each coverageType
	 *    on the Policy
	 * 8: return the PolicyPriceQuote (the downPayment is 25% of the total price)
	 * @param aPolicy : Policy to be priced
	 * @return The calculated Policy price quote for the policy passed as a parameter
	 */
	override function pricePolicy(aPolicy: Policy): IPolicyPriceQuote
	{
		var currentYear = Calendar.getInstance().get(Calendar.YEAR);
		var priceBreakdown = new HashMap<CoverageType, Double>()
		var subTotal: double
		var driverAddons: double
		var total: double
		var format = new DecimalFormat("$#,###.00")
		var priceHolder: double

		for(car in aPolicy.Vehicles)
		{
			subTotal += car.Make == "Mercedes" ? car.Price*0.015:car.Price*0.01
			subTotal -= currentYear-car.Year > 5 ? car.Price*0.5:0

			
			for(coverage in car.Coverages)
			{
				subTotal += coverage.getBaseRate() // directly add coverage rate for each car to subtotal


				// start of mapping to breakdown.
				priceHolder = 0
				if(priceBreakdown.containsKey(coverage.InsuranceCoverageType))
				{
					priceHolder = priceBreakdown.get(coverage.InsuranceCoverageType)
				}

				priceHolder += coverage.getBaseRate()
				priceBreakdown.put(coverage.InsuranceCoverageType, priceHolder) // map/re-map value to coverage type
			}
		}

		driverAddons = aPolicy.Drivers.Count*125.0

		total = subTotal + driverAddons

		print("Sub-total:\t\t ${format.format(subTotal)}")
		print("Drivers addon:\t ${format.format(driverAddons)}")

		return new PolicyPriceQuote(aPolicy, total, priceBreakdown)
	}
}