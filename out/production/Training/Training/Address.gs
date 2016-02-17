package Training

/**
 * Created by Aron Jhed Amiscosa on 2/10/2016.
 */
class Address {

	private var _streetNumber: 		String as StreetNumber
	private var _village: 				String as Village
	private var _cityMunicipality: 	String as CityMunicipality
	private var _province: 				String as Province
	private var _zipCode: 				int    as ZipCode

	private construct(){}
	public construct(streetNumber: String,
							village: String,
							cityMunicipality: String,
							province: String,
							zip: int)
	{
		_streetNumber 		= streetNumber
		_village 			= village
		_cityMunicipality = cityMunicipality
		_province 			= province
		_zipCode 			= zip
	}

	override function toString() : String
	{
		return "${StreetNumber}, ${Village}, ${CityMunicipality}, ${Province}, ${ZipCode}";
	}

}