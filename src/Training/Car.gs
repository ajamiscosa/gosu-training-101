package Training

uses java.text.DecimalFormat

/**
 * Created by Aron Jhed Amiscosa on 2/10/2016.
 */
class Car {
	private var _vin : String as readonly VIN //Vehicle Identification Number
	private var _year: int as readonly Year
	private var _make: String as readonly Make
	private var _model: String as readonly Model
	private var _price: double as Price
	private var _color: Color as Color
	private var _coverages : ArrayList<Coverage> as readonly Coverages


	private construct(){}
	construct(year: int, make: String, model: String)
	{
		_coverages = new ArrayList<Coverage>()

		_year = year
		_model = model
		_make = make

		generateVIN()
	}

	construct(year: int, make: String, model: String, price: double, color: Color)
	{
		_coverages = new ArrayList<Coverage>()

		_year = year
		_model = model
		_make = make
		_price = price
		_color = color

		generateVIN()
	}


	public function addCoverage(cov : Coverage, policy: Policy){

		for(coverage in Coverages)
		{
			if(coverage.InsuranceCoverageType==cov.InsuranceCoverageType)
			{
				throw new Exception("Coverage `${cov.InsuranceCoverageType}` is already applied to this car.")
			}
		}
		cov.CoveredCar = this
		cov.ParentPolicy = policy
		Coverages.add(cov)
	}

	public function addCoverages(covs : ArrayList<Coverage>, policy: Policy){
		 for(coverage in covs)
		 {
			 addCoverage(coverage, policy)
		 }
	}


	private function generateVIN(){
		_vin = "VIN${Make.charAt(0)}${Year}${Date.Now.getTime()}"
	}

	override function toString() : String
	{
		var f = new DecimalFormat("$#,###.00")
		var carName = "${Year} ${Make} ${Model}"
		return (Color!=null && Price!=0)?
				"${Color} ${carName.rightPad(30).replace('\0', ' ')} \t\t@ ${f.format(Price)}" //else
			 : "${carName.rightPad(30).replace('\0', ' ')}"
	}
}