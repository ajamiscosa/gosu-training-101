package Training

/**
 * Created by Aron Jhed Amiscosa on 2/10/2016.
 */
class Policy extends AbstractPolicy{

	private var _effectiveDate: Date
	private var _expirationDate: Date
	private var _vehicles: ArrayList<Car>
	private var _drivers: ArrayList<Person>

	private var _primaryHolder: Person as readonly PrimaryHolder

	private construct(){ }

	construct(person: Person, term: PolicyTerm)
	{
		_policyNbr = assignNextPolicyNumber()

		_effectiveDate = Date.Today

		_drivers = new ArrayList<Person>()
		_vehicles = new ArrayList<Car>()

		_primaryHolder = person
		_drivers.add(person)

		switch (term)
		{
			case OneYear:
				_expirationDate = Date.Now.addYears(1)
				break
			case SixMonth:
				_expirationDate = Date.Now.addMonths(6)
				break
		}
	}

	construct(effectiveDate: Date, expirationDate: Date)
	{
		_policyNbr = assignNextPolicyNumber()

		_drivers = new ArrayList<Person>()
		_vehicles = new ArrayList<Car>()

		_effectiveDate = effectiveDate
		_expirationDate = expirationDate
	}

	@Override
	property get EffectiveDate() : Date
	{
		return _effectiveDate
	}

	@Override
	property get ExpirationDate() : Date
	{
		return _expirationDate
	}

	@Override
	property get Vehicles() : ArrayList<Car>
	{
		return _vehicles
	}

	property set Vehicles(vehicles: ArrayList<Car>)
	{
		_vehicles = vehicles
	}

	@Override
	property get Drivers() : ArrayList<Person>
	{
		return _drivers
	}


	/**
	 * The implementation of this method should add the specified coverage to the Policy and associate the coverage with
	 * the specified Car. The Car must already exist on the Policy -  this method must throw an exception
	 * indicating that the specified car does not exist on the Policy
	 *
	 * @param cov - coverage to be added to the policy
	 * @param veh - vehicle to be covered by the specified coverage
	 * @throws Exception if the specified car is not already on the Policy or if the specified car already has the coverage added.
	 */
	public function addCoverage(cov : Coverage, veh : Car)
	{
		if(!Vehicles.contains(veh))
		{
			throw new Exception("Car is not a member of this policy.")
		}
		veh.addCoverage(cov, this)
	}

	/**
	 * The implementation of this method should return the coverages that are associated with the specified vehicle
	 * @param veh
	 * @return
	 */
	public function getCarCoverages(veh : Car) : ArrayList<Coverage>
	{
		return veh.Coverages
	}

	/**
	 * Implementation of this method will return true if this policy is in force.
	 * A Policy is in force on the specified date if the date falls on or between the effective date and the expiration date.
	 * @param aDate : the date being checked.
	 * @return
	 */
	public function isPolicyInForce(aDate : Date) : boolean
	{
		// to compensate for Date.after() and Date.before(), -1 and 1 day were added respectively
		return aDate.after(EffectiveDate.addDays(-1)) && aDate.before(ExpirationDate.addDays(1))
	}

	/**
	 * The Implementation of this method must return the number of cars that have coverages of the specified type on this Policy
	 * @param coverageType
	 * @return
	 */
	public function getCoveredCarCount(coverageType : CoverageType) : Integer
	{
		var counter = 0
		for(car in Vehicles)
		{
			for(coverages in car.Coverages)
			{
				if(coverages.InsuranceCoverageType == coverageType)
				{
					counter++
				}
			}
		}
		return counter
	}



	override function toString() : String
	{
		var out = ""
		out+=("[Policy Details]\n")
		out+=("Policy Number:\t ${PolicyNumber}\n")
		out+=("Primary Insured:\t ${PrimaryHolder}\n")
		out+=("Effective Date:\t ${EffectiveDate.toStringWithFormat("MMMM dd, yyyy", TimeZone.getTimeZone("Asia/Manila"), Locale.ENGLISH)}\n")
		out+=("Expiration Date:\t ${ExpirationDate.toStringWithFormat("MMMM dd, yyyy", TimeZone.getTimeZone("Asia/Manila"), Locale.ENGLISH)}\n")
		out+=("------------------------------------------\n")
		out+=("Car List | Total: ${Vehicles.Count}\n")

		for(car in Vehicles index i)
		{
			out+=("${i+1}. ${car}\n")
		}

		out+=("------------------------------------------\n")
		out+=("Driver List | Total: ${Drivers.Count}\n")

		for(person in Drivers index i)
		{
			out+=("${i+1}. ${person}\n")
		}

		return out
	}
}