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

	@Override
	property get Drivers() : ArrayList<Person>
	{
		return _drivers
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