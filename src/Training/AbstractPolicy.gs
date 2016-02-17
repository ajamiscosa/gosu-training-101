package Training
/**
 * Created by Wayne Iluyomade on 2/15/2016.
 * Base class for Policy. Specifies base methods for Policy instances
 * All implementations of this class must utilize the provided assignPolicyNumber to acquire a unique policy number
 * for each instance.
 * Each policy has an Effective Date which is the date the insurance coverage becomes effective and an Expiration Date
 * which is the date when coverage ends.
 */
abstract class AbstractPolicy {
	final var POLICY_NUMBER_LENGTH = 8
	private static var _initial = 200 //used as starting point for PolicyNumbers
	protected var _policyNbr : String as readonly PolicyNumber

	abstract property get EffectiveDate() : Date
	abstract property get ExpirationDate() : Date
	abstract property get Vehicles() : ArrayList<Car>
	abstract property get Drivers() : ArrayList<Person>

	protected function assignNextPolicyNumber() : String{
		var currentNbr = _initial
		_initial++  //increment for the next time.
		return (currentNbr as String).leftPad(POLICY_NUMBER_LENGTH).replace(' ', '0')
	}
}