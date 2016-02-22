package Training

uses gw.xml.simple.SimpleXmlParser

uses java.io.*

/**
 * Created by DEVFINITY on 2/22/2016.
 */
class Test {
	static function main(args: String[]){

		var file = new File("D:/test.xml")
		var parser = SimpleXmlParser.parseFile(file)
		var root = parser.Children
		root.forEach(\e->print(e.Text))
		print(parser.toXmlString())
	}
}