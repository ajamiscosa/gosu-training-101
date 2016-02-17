package Training

uses java.text.DecimalFormat

/**
 * Created by Aron Jhed Amiscosa on 2/10/2016.
 */
class Car {

	private var _year: int as readonly Year
	private var _make: String as readonly Make
	private var _model: String as readonly Model
	private var _price: double as Price
	private var _color: Color as Color
	private var _coverages : ArrayList<Coverage> as Coverages

	private construct(){}
	construct(year: int, make: String, model: String)
	{
		_coverages = new ArrayList<Coverage>()

		_year = year
		_model = model
		_make = make
	}

	construct(year: int, make: String, model: String, price: double, color: Color)
	{
		_coverages = new ArrayList<Coverage>()

		_year = year
		_model = model
		_make = make
		_price = price
		_color = color
	}

	construct(year: int, make: String, model: String, price: double, color: Color, coverages: Coverage[])
	{
		_coverages = new ArrayList<Coverage>()

		_make = make
		_model = model
		_year = year
		_color = color
		_price = price
		for(coverage in coverages)
		{
			_coverages.add(coverage)
		}
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