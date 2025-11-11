function Jsxdemo() {
    let msg="hi"
    let styleobj={backgroundColor:"blue",
        fontSize:"20px"
    }
    let btn=<button>Click me</button>
    let listitems=[<li>React</li>,<li>Angular</li>,<li>vue</li>]
    return (
        <div className="jsxdiv">
            <p style={{backgroundColor:"tomato"}}>jsx</p>
            <p style={styleobj}>Javascript + Html-{msg}</p>
            <p>{2+2}</p>
            <input type="text" value={msg}/>
            {btn}
            <ul>
                {listitems}
            </ul>
        </div>
    )
}

export default Jsxdemo

/*
jsx=js+html

-jsx markup shoould be enclosed with <div></div> or <></>
-class should be mentioned as "className"
-interpolate js expressions by using "{}"
-style attributes should be mentioned in camelcase
eg:
  background-color=>backgroundColor
  color=>color
-jsx code can be used as value for variable,array,object
-array of jsx code will be populated automatically


*/