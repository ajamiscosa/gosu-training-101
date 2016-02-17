package Training

/**
 * Created by Wayne Iluyomade on 2/12/2016.
 *
 * This interface represents a PolicyPriceQuote as priced by an IPricingEngine implementation
 * The downPayment property should contain a value that is 25% of the TotalPrice property
 * An instance of the IPolicyPriceQuote implementation class will be returned by the PricingEngine
 * when the PricingEngine's pricePolicy method is called.
 */
interface IPolicyPriceQuote {
	property get PolicyNumber() : String
	property get DownPayment(): Double
	property get TotalPrice(): Double
	property get PriceBreakDown() : HashMap<CoverageType, Double>
}


