package Training

uses java.text.DecimalFormat

/**
 * Created by MAR on 2/15/2016.
 */
enhancement PolicyEnhancement: Policy {

	function pricePolicy(): IPolicyPriceQuote {

		var currentYear = Calendar.getInstance().get(Calendar.YEAR);
		var priceBreakdown = new HashMap<CoverageType, Double>()
		var subTotal: double
		var driverAddons: double
		var total: double
		var format = new DecimalFormat("$#,###.00")

		for(car in this.Vehicles)
		{
			subTotal += car.Make == "Mercedes" ? car.Price*0.015:car.Price*0.01
			subTotal -= currentYear-car.Year > 5 ? car.Price*0.5:0

			for(coverage in car.Coverages)
			{
				subTotal += coverage.getBaseRate() // directly add to subtotal
				priceBreakdown.put(coverage.InsuranceCoverageType, coverage.getBaseRate())
			}
		}

		driverAddons = this.Drivers.Count*125.0

		total = subTotal + driverAddons

		print("Sub-total:\t\t ${format.format(subTotal)}")
		print("Drivers addon:\t ${format.format(driverAddons)}")
		print("===================================")


		return new PolicyPriceQuote(this, total, priceBreakdown)
	}
}































/*
var CurrentYear = Calendar.getInstance().get(Calendar.YEAR);

		var sub = this.Vehicles
			 .stream()
			 .map(\car ->
				  ((car.Make == "Mercedes") ? (car.Price * 0.015) : (car.Price * 0.01)) - 	// check make
						(((CurrentYear - car.Year) > 5) ? car.Price * 0.005 : 0)) 					// check age
			 .reduce(0, (\c, e -> c + e)) 																// accumulate price


		var dr = this.Drivers.size()*125.0

		var total = sub + dr

		var format = new DecimalFormat("$#,###.00")
		print("Sub-total:\t\t ${format.format(sub)}")
		print("Drivers addon:\t ${format.format(dr)}")
		print("===================================")

		return new PolicyPriceQuote(total)
 */
