package Training

uses java.text.DecimalFormat

/**
 * Created by DEVFINITY on 2/13/2016.
 */
class PolicyPriceQuote implements IPolicyPriceQuote {
	private var _downpayment: Double
	private var _totalprice: Double
	private var _policyNumber: String
	private var _priceBreakdown: HashMap<CoverageType, Double>

	construct(aPolicy: Policy, amount: double, priceBreakdown: HashMap<CoverageType, Double>)
	{
		_policyNumber = aPolicy.PolicyNumber
		_downpayment = amount * 0.25
		_totalprice = amount
		_priceBreakdown = priceBreakdown
	}

	override property get PolicyNumber(): String {
		return _policyNumber
	}

	override property get DownPayment(): Double
	{
		return _downpayment
	}

	override property get TotalPrice(): Double
	{
		return _totalprice
	}

	override property get PriceBreakDown(): HashMap<CoverageType, Double> {
		return _priceBreakdown
	}

	override function toString(): String
	{
		var format = new DecimalFormat("$#,###.00")
		var amount = 0.0
		var out = ""
		out+="-- Coverage Breakdown : Start --\n"

		for(item in PriceBreakDown.entrySet() index i)
		{
			out += "${i+1}.\t${item.Key.toString().rightPad(15).replace('\0', ' ')}\t ${format.format(item.Value)}\n"
		}
		out+="-- Coverage Breakdown : End --\n"

		amount = PriceBreakDown.values().sum()

		out+="Coverage Amount:\t\t ${format.format(amount)}\n"
		out+="------------------------------------------\n"
		out+="Downpayment:\t\t ${format.format(DownPayment)}\n"
		out+="Total Amount:\t\t ${format.format(TotalPrice)}\n"
		out+=("==========================================\n")
		return out
	}
}

