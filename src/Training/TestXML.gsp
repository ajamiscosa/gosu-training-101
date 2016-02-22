
uses java.io.*
uses java.util.*
uses gw.xml.simple.*
uses javax.xml.namespace.QName

var ex = new SimpleXmlNode("root")
var e2 = new SimpleXmlNode("child")
ex.Children.add(e2)
print(ex.toXmlString())

var writer = new FileWriter("D:/lol.xml")
writer.write(ex.toXmlString())
writer.flush()


var newx = new File("D:/test.xml")
var strings = SimpleXmlParser.parseFile(newx)
print(strings.toXmlString())