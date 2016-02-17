package Training

/**
 * Created by Aron Jhed Amiscosa on 2/10/2016.
 */
class Person {

	private var _lastName: String as readonly LastName
	private var _firstName: String as readonly FirstName
	private var _middleName: String as readonly MiddleName
	private var _address: Address as Address

	private construct(){}

	construct(lastName: String, firstName: String, middleName: String, address: Address)
	{
		_lastName = lastName
		_firstName = firstName
		_middleName = middleName
		_address = address
	}

	override function toString() : String
	{
		return "${LastName}, ${FirstName} ${MiddleName}";
	}
}